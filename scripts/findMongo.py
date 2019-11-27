import pymongo

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

#List all documents in collection
for doc in collection.find():
    for field in doc:
        print("\n///" + field + ":\n")
        print(doc[field])
    print("\n===============================================================\n")
