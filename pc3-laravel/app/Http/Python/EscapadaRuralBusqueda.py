import requests
from bs4 import BeautifulSoup
import re
import mysql.connector

myconn = mysql.connector.connect(host="127.0.0.1", user="root", passwd="", database="silentlife")
cur = myconn.cursor()


sql = "insert into alquileres (nombre, descripcion, fotos, ubicacion, coste, especificaciones) values (%s, %s, %s, %s, %s, %s)"
ciudad = "cataluña"
page = requests.get('https://www.escapadarural.com/casas-rurales?l=',ciudad)
soup = BeautifulSoup (page.content, 'html.parser')
#print(soup.prettify())
html = list(soup.children)[4]
#print(html)

article = list(html.findAll("article", class_="c-resultSnippet c-resultSnippet__gallery-js"))

for i in article:
    h3 = list(i.findAll("h3"))
    h4 = list(i.findAll("h4"))
    descripcion = list(i.findAll("div", class_="c-result--abstract"))
    totalImg = i.find('img')['data-src']
    precio = (i.findAll('div', class_="c-result--price"))
    especificaciones = (i.findAll('div', class_="c-result--item"))
    print(totalImg) #TODO GUARDAR IMAGEN
    for a in h3:
        quitar = a.text
        sinEspacio = re.sub(r'(\s\s*)', ' ',quitar)
        print("Vivienda:",sinEspacio)#TODO GUARDAR H3

    for b in h4:
        lugar = b.text
        print("Lugar: "+lugar)#TODO GUARDAR LUGAR
    for c in descripcion:
        quitar2 = c.text
        sinEspacio2 = re.sub(r'(\s\s*)', ' ', quitar2)
        print("Descripcion:",sinEspacio2)#TODO GUARDAR H4
    for d in precio:
        precioSinRegEx = d.text
        precioConRegEx = re.sub(r'(\s\s*)',' ', precioSinRegEx)
        print("Precio: "+precioConRegEx)#TODO GUARDAR PRECIO
    print("Especificaciones:")
    for e in especificaciones:
        datosSinRegEx = e.text
        datosConRegEx = re.sub(r'(\s\s*)', ' ', datosSinRegEx)
        print(datosConRegEx+", ")#TODO GUARDAR ESPEXIFICACIONES
    # listaH3 = []
    # listaH3.append(sinEspacio)
    val = (sinEspacio, sinEspacio2, totalImg, lugar, precioConRegEx, datosConRegEx)#TODO SOLO EN UN INSERT
    try:
        # inserting the values into the table
        cur.execute(sql, val)
        # commit the transaction
        myconn.commit()

    except:
        myconn.rollback()

    print(cur.rowcount, "record inserted!")
myconn.close()
