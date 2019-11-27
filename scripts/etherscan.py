import requests

#Ether supply and value
url = "https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=" + \
        "YourApiKeyToken"
response = requests.get(url)
etherSupply = int(response.json().get("result"))/1000000000000000000
print("Total Ether Supply: " + str(etherSupply))

url = "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=" + \
        "YourApiKeyToken"
response = requests.get(url)
etherPrice = response.json().get("result")
print("$ Price per Ether:")
print("     In USD: " + etherPrice.get("ethusd"))
print("     In BTC: " + etherPrice.get("ethbtc"))

print("\n")

#Latest block mined
url = "https://api.etherscan.io/api?module=proxy&action=eth_blockNumber" + \
        "&apikey=YourApiKeyToken"
response = requests.get(url)
latestBlockNum = response.json().get("result")
print("Latest block number: " + latestBlockNum)

url = "https://api.etherscan.io/api?module=proxy&action=" + \
        "eth_getBlockByNumber&tag=" + latestBlockNum + \
        "&boolean=true&apikey=YourApiKeyToken"
print(url)
response = requests.get(url)
latestBlock = response.json().get("result")

print("     Hash: " + latestBlock.get("hash"))
print("     Miner: " + latestBlock.get("miner"))
print("     Transactions:")
for txn in latestBlock.get("transactions"):
    print("         From: " + txn.get("from"))
    print("         To: " + txn.get("to"))
    print("         Value: " + txn.get("value"))
    print("\n")
