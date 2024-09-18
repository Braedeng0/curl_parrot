import generate_frames
import os

with open("jsTemplate.txt", "r") as f:
        mainFunc = f.read()

# Overwrite current files and add headers
with open("app.js", "w") as f:
    f.write("const express = require('express');\nconst fs = require('fs');\nconst app = express();\nconst port = 80;")
    f.write("\n\napp.get('/', (req, res) => {\n\tres.redirect('https://github.com/Braedeng0/curl_parrot');\n});")
    f.write("\n\napp.get('/help', (req, res) => {\n\tres.sendFile(__dirname + '/README.md');\n});")
    f.write(f"\n\n{mainFunc}")

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
        f.write(f"\n\napp.get('/{filename}', (req, res) => {{\n\tparrotRequest('{filename}', req, res)\n}});")

    parrots.append(filename)

with open("app.js", "a") as f:
    f.write("\napp.listen(port, () => {\n\tconsole.log(`Server started at http://localhost:${port}`);\n});")

parrots = sorted(parrots)
with open("README.md", "a") as f:
    for index, parrot in enumerate(parrots):
        if index % 5 == 0:
            f.write(f'\n-{parrot}')
        else:
            f.write(f', {parrot}')