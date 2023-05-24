from bs4 import BeautifulSoup
import pandas as pd
import glob
import os

# find the first tsv file in the current directory
tsv_files = glob.glob(os.path.join(os.path.dirname(os.path.abspath(__file__)), '*.tsv'))
if not tsv_files:
    print("No TSV file found in the current directory.")
    os.system("pause")
    exit(1)

print("Found TSV file:", tsv_files[0])

# load the tsv file
df = pd.read_csv(tsv_files[0], sep='\t', header=None)

print("Loaded TSV file.")

# load the html file
with open('index.html', 'r') as f:
    soup = BeautifulSoup(f, 'html.parser')

print("Loaded HTML file.")

# find the pre tag with id="data"
pre_tag = soup.find('pre', {'id': 'data'})

if not pre_tag:
    print("No <pre id='data'> tag found in the HTML file.")
    os.system("pause")
    exit(1)

# clear existing contents
pre_tag.clear()

print("Cleared existing contents.")

# append each line from the DataFrame to the pre tag
for index, row in df.iterrows():
    pre_tag.append('\t'.join(row.values.astype(str)))
    pre_tag.append('\n')

print("Appended new contents.")

# write the modified html back to the file
with open('index.html', 'w') as f:
    f.write(str(soup))

print("Wrote modified HTML back to the file.")

# pause at the end
os.system("pause")
