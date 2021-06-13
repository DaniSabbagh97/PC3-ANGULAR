import requests
from bs4 import BeautifulSoup
import re
import mysql.connector

myconn = mysql.connector.connect(host="127.0.0.1", user="root", passwd="", database="silentlife")
cur = myconn.cursor()


sql = "insert into alquileres (nombre, descripcion, fotos, ubicacion, coste, especificaciones) values (%s, %s, %s, %s, %s, %s)"

#provincia = "valladolid"
ciudad = sys.argv[1] #TODO SEÑALAR CIUDAD
page = requests.get('https://www.spainhouses.net/es/'+ciudad)#+'/'+provincia)
soup = BeautifulSoup(page.content, 'html.parser')
#print(soup.prettify())
html = list(soup.children)[1]
contenido = (soup.find("div", class_="browser main_content"))
article = list(contenido.findAll('article', attrs={'data-href':True}))
for i in article:
    upper = (list(i.findAll("div", class_="upper")))
    for s in upper:
        div = list(s.findAll("div", class_="title_1"))
        for a in div:
            lugarCiudad = a.text
            print("Lugar: "+lugarCiudad)#TODO GUARDAR LUGAR Y CIUDAD
        div2 = list(s.findAll("div", class_="title_2"))
        for b in div2:
            lugarConcreto = b.text
            print("Lugar Concreto: "+lugarConcreto)#TODO GUARDAR LUGAR CONCRETO
        div3 = list(s.findAll("div", class_="features"))
        for c in div3:
            metrosCuadrados = c.text
            print("Datos Especificos: "+metrosCuadrados)#TODO GUARDAR METROS CUADRADOS
        div4 = list(s.findAll("div", class_="descTxt"))
        for d in div4:
            conSaltosdeLinea = d.text
            descripcion = re.sub(r'(\s\s)','',conSaltosdeLinea)
            print("Descripcion: "+descripcion)#TODO GUARDAR DESCRIPCION
        div5 = list(s.findAll("span", class_="price"))
        for f in div5:
            precio=f.text
            print("Precio: "+precio+" €/mes")#TODO GUARDA LOS €/MES
        div6 = list(s.findAll("div", class_="second_price"))
        for g in div6:
            precioPorm2 = g.text
            print("€/m2: "+precioPorm2)#TODO GUARDA €/M2
    phone = list(i.findAll('a', attrs={'phone'}))
    for h in phone:
        SinRegExTelefono = h.text
        telefono = re.sub(r'(\s)','',SinRegExTelefono)#TODO GUARDA EL TELF DE CONTACTO
        print("Telefono: "+telefono)
    links = list(i.findAll('link', attrs={'href':True}))
    for e in links:#TODO GUARDARLISTA DE IMAGENES
        try:
            listaImagenes = (e['href']+",")
            listaImagenesComa = listaImagenes.replace(",","")
        except:
            listaImagenes = 'Null'
        print(listaImagenes)
    val = (lugarCiudad, descripcion, listaImagenesComa, lugarCiudad, precio, telefono+","+metrosCuadrados+","+precioPorm2)  # TODO SOLO EN UN INSERT
    try:

        cur.execute(sql, val)

        myconn.commit()

    except:
        myconn.rollback()

    print(cur.rowcount, "record inserted!")
myconn.close()

print("\n\n")
