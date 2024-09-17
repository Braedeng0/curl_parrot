import generate_frames
import os

directory = os.fsencode("gifs/hd")
for file in os.listdir(directory):
    filepath = f'{os.fsdecode(directory)}/{os.fsdecode(file)}'
    generate_frames.generate(filepath)