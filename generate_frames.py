from PIL import Image

# Change the filename to the name of the gif you want to convert
# The ascii text will be saved in processed_gifs/filename.txt

def toAnsi256(r, g, b, text):
    # Convert rgb from 0-255 to 0-5
    r = int(r / 255 * 5)
    g = int(g / 255 * 5)
    b = int(b / 255 * 5)
    # Convert rgb to ansi256 color code
    color_code =  16 + 36 * r + 6 * g + b
    # Return the text with the color code
    return f"\033[38;5;{color_code}m{text}\033[0m"

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
                    asciiPixel = toAnsi256(r, g, b, character)
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
    import os

    for filename in os.listdir('gifs/hd'):
        if filename.endswith('.gif'):
            generate(filename[:-4], f'gifs/hd/{filename}')