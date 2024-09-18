import generate_frames
import os

# Overwrite current files and add headers
with open("app.js", "w") as f:
    f.write("const express = require('express');\nconst fs = require('fs');\nconst app = express();\nconst port = 80;")
    f.write("app.get('/', (req, res) => {\n\tres.redirect('https://github.com/Braedeng0/curl_parrot');\n});")
    f.write("\n")
    f.write("app.get('/help', (req, res) => {\n\tres.sendFile(__dirname + '/README.md');\n});")

with open("README.md", "w") as f:
    f.write("## Curl Party Parrot\nPARTY OR DIE\n\n### Usage\ncurl https://curl-parrot.onrender.com/{endpoint}\n\nEndpoints:")

parrots = []

directory = os.fsencode("gifs/hd")
for file in os.listdir(directory):
    filepath = f'{os.fsdecode(directory)}/{os.fsdecode(file)}'
    filename = os.fsdecode(file)[:-4]
    generate_frames.generate(filename, filepath)

    with open("jsTemplate.txt", "r") as f:
        newData = f.read()

    with open("app.js", "a") as f:
        f.write("\n")
        f.write(newData[:10] + filename + newData[10:49] + filename + newData[49:])

    parrots.append(filename)

with open("app.js", "a") as f:
    f.write("app.listen(port, () => {\n\tconsole.log(`Server started at http://localhost:${port}`);\n});")

parrots = sorted(parrots)
with open("README.md", "a") as f:
    for parrot in parrots:
        f.write(f'\n-{parrot}')