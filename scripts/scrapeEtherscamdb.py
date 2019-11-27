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
collection = db["scammings"]

url = "https://etherscamdb.info/api/scams/"
response = requests.get(url)
source = response.json().get("result")

for scam in source:
    if ("category" not in scam):
        next
    name="N/A"
    category="N/A"
    description="N/A"
    source="N/A"
    url="N/A"
    if ("name" in scam):
        print("Name: " + scam.get("name"))
        name = scam.get("name")
    if ("subcategory" in scam):
        print("Category: " + scam.get("subcategory"))
        category = scam.get("subcategory")
    if ("description" in scam):
        print("Description: " + scam.get("description"))
        description = scam.get("description")
    if ("url" in scam):
        print("URL: " + scam.get("url"))
        url = scam.get("url")
    if (scam.get("category") == "Phishing"):
        print("///Phishing")
        collection = db["phishings"]
        record = { "name":name, "category":category, "description":description, "source":source, "URL":url, "blockChainTech":"Ethereum", "accountAddress":"N/A", "profit":"N/A" }
    elif (scam.get("category") == "Scamming"):
        print("///Scamming")
        collection = db["scammings"]
        record = { "name":name, "category":category, "description":description, "source":source, "URL":url, "blockChainTech":"Ethereum" }
    else:
        continue
    print()
    print()
    print(record)
    print()
    print()
    collection.insert_one(record)
