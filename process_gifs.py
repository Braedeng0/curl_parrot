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

rootDirectory = os.fsencode("gifs")
for directory in os.listdir(rootDirectory):
    # If the directory is a .DS_Store, skip
    print(os.path.splitext(directory))
    if os.fsdecode(os.path.splitext(directory)[0]) == ".DS_Store":
            continue
    workingDir = f'{os.fsdecode(rootDirectory)}/{os.fsdecode(directory)}'
    if not os.path.exists(f"processed_gifs/{os.fsdecode(directory)}"):
        os.makedirs(f"processed_gifs/{os.fsdecode(directory)}")
    for file in os.listdir(workingDir):
        # If the file is not a gif, don't attempt to use
        if os.path.splitext(file)[-1] != ".gif":
            continue
        filepath = f'{workingDir}/{os.fsdecode(file)}'
        filename = os.fsdecode(file)[:-4]
        generate_frames.generate(filename, filepath, f"processed_gifs/{os.fsdecode(directory)}")

        with open("jsTemplate.txt", "r") as f:
            newData = f.read()

        with open("app.js", "a") as f:
            f.write(f"\n\napp.get('/{filename}', (req, res) => {{\n\tparrotRequest('{os.fsdecode(directory)}/{filename}', req, res)\n}});")

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