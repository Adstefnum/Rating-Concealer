json_txt = open("./quotes.txt",'rt')

with open("./quotes.json") as fh:
    for line in json_txt.readlines():
        print(line)