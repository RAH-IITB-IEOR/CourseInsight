import requests

url = "http://10.119.2.17:8000/generate"
data = {"text": "Once upon a time"}

response = requests.post(url, json=data)
print(response.json())
