from PIL import Image

# Change the filename to the name of the gif you want to convert
# The ascii text will be saved in processed_gifs/filename.txt

def generate(filename, filepath):
    frames = []
    with Image.open(filepath) as im:
        for i in range(im.n_frames):
            frame = ""
            im.seek(i)
            rgbim = im.convert('RGBA')
            rgbim = rgbim.transpose(Image.FLIP_LEFT_RIGHT)
            rgbim = rgbim.rotate(90)
            rgbim = rgbim.resize((25, 60))
            for x in range(rgbim.width):
                for y in range(rgbim.height):
                    r,g,b,a = rgbim.getpixel((x,y))
                    brightness = 0.2126*r + 0.7152*g + 0.0722*b
                    scale = " `.-':_,^=;><+!rc*/z?sLTv)J7(|Fi{CfI31tlu[neoZ5Yxjya]2ESwqkP6h9d4VpOGbUAKXHm8RD#$Bg0MNWQ%&@"
                    character = scale[int(brightness/255*len(scale))]
                    asciiPixel = f"\033[38;2;{r};{g};{b}m{character}\033[0m"
                    if a == 0:
                        asciiPixel = " "
                    frame += asciiPixel
                frame += "\n"
            frames.append(frame)

    frame_lines = [frame.split('\n') for frame in frames]
    transposed_lines = list(zip(*frame_lines))
    non_empty_lines = [line for line in transposed_lines if not all(l.strip() == "" for l in line)]
    frames = ['\n'.join(line) for line in zip(*non_empty_lines)]

    with open(f"processed_gifs/{filename}.txt", "w") as f:     
        for frame in frames:
            f.write(frame)
            f.write('=====================\n')       

if __name__ == '__main__':
    generate()
