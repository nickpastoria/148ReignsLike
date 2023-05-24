import requests
from bs4 import BeautifulSoup
import pandas as pd
import os
from io import StringIO

print("Starting script...")

# Google Sheets sharing link, converted to export as TSV
google_sheets_link = 'https://docs.google.com/spreadsheets/d/1Sp4vx2EjYd9YSBJiNGYJHDl_E99p3PESNYoytRccPwk/export?format=tsv'

print("Downloading TSV from Google Sheets...")

# download the tsv file
response = requests.get(google_sheets_link)
response.raise_for_status()  # raise an exception if the request failed

print("Download successful. Loading TSV into a DataFrame...")

# load the tsv into a pandas DataFrame
df = pd.read_csv(StringIO(response.text), sep='\t', header=None)

print("DataFrame loaded. Loading HTML file...")

# load the html file
with open('index.html', 'r') as f:
    soup = BeautifulSoup(f, 'html.parser')

print("HTML file loaded. Searching for <pre id='data'> tag...")

# find the pre tag with id="data"
pre_tag = soup.find('pre', {'id': 'data'})

if not pre_tag:
    print("No <pre id='data'> tag found in the HTML file.")
    os.system("pause")
    exit(1)

print("<pre id='data'> tag found. Clearing existing contents...")

# clear existing contents
pre_tag.clear()

print("Existing contents cleared. Appending new contents...")

# append each line from the DataFrame to the pre tag
for index, row in df.iterrows():
    row_str = '\t'.join(row.fillna('').values.astype(str))  # fill NaNs with an empty string
    pre_tag.append(row_str)
    pre_tag.append('\n')

print("New contents appended. Writing modified HTML back to the file...")

# write the modified html back to the file
with open('index.html', 'w') as f:
    f.write(str(soup))

print("Modified HTML written to file. Script finished.")

