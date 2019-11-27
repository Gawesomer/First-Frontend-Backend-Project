import requests

#Ether supply and value
address = "0x7D8E594Be47AdA29A6c03A206e53452502aB9ef0"
url = "https://api.etherscan.io/api?module=contract&action=getsourcecode&address=" + address + "&apikey=YourApiKeyToken"
response = requests.get(url)
print(response.json())
