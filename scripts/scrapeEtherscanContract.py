import pymongo
import requests

#Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")

#Check that the database exists
dblist = client.list_database_names()
if not "ethereumAbuses" in dblist:
    print("Error: ethereumAbuses database not found")
    exit()

#Assign database and collection to be used
db = client["ethereumAbuses"]
collection = db["sourcecodeexploits"]

#Inputs
address="0xf91546835f756DA0c10cFa0CDA95b15577b84aA7"
description = "https://medium.com/spankchain/we-got-spanked-what-we-know-so-far-d5ed3a0f38fe"
category = "Reentrancy"

#Get source code
url = "https://api.etherscan.io/api?module=contract&action=getsourcecode&address=" + address + "&apikey=YourApiKeyToken"
response = requests.get(url)
source = response.json().get("result")[0]

print("///")
print("Name: " + source.get("ContractName"))
print("Category: " + category)
print("Description: " + description)
print("contractAddress: " + address)
print("---")
print("SourceCode: ")
print(source.get("SourceCode"))
print("---")
print("ABI: ")
print(source.get("ABI"))
print("---")
print("compilerVersion: " + source.get("CompilerVersion"))
print("constructorArguments: " + source.get("ConstructorArguments"))

#Insert into collection
record = { "name":source.get("ContractName"), "category":category, "description":description, "contractAddress":address, "sourceCode":source.get("SourceCode"), "ABI":source.get("ABI"), "compilerVersion":source.get("CompilerVersion"), "constructorArguments":source.get("ConstructorArguments") }

print()
print(record)
print()

collection.insert_one(record)
