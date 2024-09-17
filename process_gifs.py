import generate_frames
import os

with open("app.js", "w") as f:
    f.write("const express = require('express');\nconst fs = require('fs');\nconst app = express();\nconst port = 80;")
    f.write("app.get('/', (req, res) => {\n\tres.redirect('https://github.com/Braedeng0/curl_parrot');\n});")
    f.write("\n")

directory = os.fsencode("gifs/hd")
for file in os.listdir(directory):
    filepath = f'{os.fsdecode(directory)}/{os.fsdecode(file)}'
    filename = os.fsdecode(file)[:-4]
    generate_frames.generate(filename, filepath)

    with open("app.js", "r") as f:
        current_file = f.read()
    with open("jsTemplate.txt", "r") as f:
        newData = f.read()

    with open("app.js", "w") as f:
        f.write(current_file)
        f.write("\n")
        f.write(newData[:10] + filename + newData[10:49] + filename + newData[49:])
        f.write("\n")