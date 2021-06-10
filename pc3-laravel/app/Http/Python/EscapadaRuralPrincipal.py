import requests
from bs4 import BeautifulSoups
import re

page = requests.get('https://www.escapadarural.com/')
soup = BeautifulSoup (page.content, 'html.parser')
#print(soup.prettify())
html = list(soup.children)[4]
div = list(soup.findAll("div", class_="c-slideshow--item"))

for i in div:
    titulo3 = list(i.findAll("h3"))
    titulo4 = list(i.findAll("h4"))
    for a in titulo3:
        h3 = a.text
        print("Lugar: ",h3)#TODO GUARDAR TITULO
    for b in titulo4:
        h4 = b.text
        print("Ciudad: ",h4)#TODO GUARDAR TITULO2
    totalImg = (i.findAll('img', attrs={'data-srcset':True}))
    for j in totalImg:
        StringImg = ((j['data-srcset'])+",")
        quitando = StringImg.split(',')

        for c in range(len(quitando)):
            e = c%2
            if(e):
                imgFinal = re.sub(r' 2x', '',quitando[c])#TODO GUARDAR FOTO
                imgFinalSinBarras = re.sub(r' //', '', imgFinal)
                print("URL: ",imgFinalSinBarras,"\n")