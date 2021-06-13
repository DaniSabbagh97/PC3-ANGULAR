import requests
from bs4 import BeautifulSoup
import re
import mysql.connector
import sys

def normalize(s):
    replacements = (
        ("á", "a"),
        ("é", "e"),
        ("í", "i"),
        ("ó", "o"),
        ("ú", "u"),
    )
    for a, b in replacements:
        s = s.replace(a, b)
    return s

myconn = mysql.connector.connect(host="127.0.0.1", user="root", passwd="", database="silentlife")
cur = myconn.cursor()


sql = "insert into alquileres (nombre, descripcion, fotos, ubicacion, coste, especificaciones) values (%s, %s, %s, %s, %s, %s)"
ciudad = sys.argv[1]


ciudad2 = ciudad.replace(" ","-")
ciudad3 = normalize(ciudad2.lower())
print(ciudad3)
page = requests.get('https://www.escapadarural.com/casas-rurales?l='+ciudad3)

soup = BeautifulSoup (page.content, 'html.parser')
#print(soup.prettify())
html = list(soup.children)[4]
#print(html)

article = list(html.findAll("article", class_="c-resultSnippet c-resultSnippet__gallery-js"))

for i in article:
    h3 = list(i.findAll("h3"))
    h4 = list(i.findAll("h4"))
    descripcion = list(i.findAll("div", class_="c-result--abstract"))
    try:
        totalImg = i.find('img')['data-src']
    except:
        totalImg = "Null"
    precio = (i.findAll('div', class_="c-result--price"))
    especificaciones = (i.findAll('div', class_="c-result--item"))
    print(totalImg)#TODO GUARDAR IMG

    for a in h3:
        if a == None:
            sinEspacio='Null'
        else:
            quitar = a.text
            sinEspacio = re.sub(r'(\s\s*)', ' ',quitar)
            print("Vivienda:",sinEspacio)#TODO GUARDAR H3

    for b in h4:
        if b == None:
            lugar = 'Null'
        else:
            lugar = b.text
            print("Lugar: "+lugar)#TODO GUARDAR LUGAR
    for c in descripcion:
        if c == None:
            sinEspacio2 = 'Null'
        else:
            quitar2 = c.text
            sinEspacio2 = re.sub(r'(\s\s*)', ' ', quitar2)
            print("Descripcion:",sinEspacio2)#TODO GUARDAR H4
    for d in precio:
        if d == None:
            precioConRegEx = 'Null'
        else:
            precioSinRegEx = d.text
            precioConRegEx = re.sub(r'(\s\s*)',' ', precioSinRegEx)
            print("Precio: "+precioConRegEx)#TODO GUARDAR PRECIO
            print("Especificaciones:")
    for e in especificaciones:
        if e == None:
            datosConRegEx='Null'
        else:
            datosSinRegEx = e.text
            datosConRegEx = re.sub(r'(\s\s*)', ' ', datosSinRegEx)
            print(datosConRegEx+", ")#TODO GUARDAR ESPEXIFICACIONES

    val = (sinEspacio, sinEspacio2, totalImg, lugar, precioConRegEx, datosConRegEx)#TODO SOLO EN UN INSERT
    try:
        # ejecutando la query que le hemos dicho a val
        cur.execute(sql, val)
        # commit de la conexion
        myconn.commit()

    except:
        myconn.rollback()

    print(cur.rowcount, "record inserted!")
myconn.close()
