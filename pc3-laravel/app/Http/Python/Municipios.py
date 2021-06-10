import requests
from bs4 import BeautifulSoup
import re
import mysql.connector

myconn = mysql.connector.connect(host="127.0.0.1", user="root", passwd="", database="silentlife")
cur = myconn.cursor()

# direcciones = {['https://15mpedia.org/wiki/Lista_de_municipios_de_Andaluc%C3%ADa', 'Andalucía'], ['https://15mpedia.org/wiki/Lista_de_municipios_de_Arag%C3%B3n', 'Aragón'], 
#                ['https://15mpedia.org/wiki/Lista_de_municipios_del_Principado_de_Asturias', 'Principado de Asturias'], ['https://15mpedia.org/wiki/Lista_de_municipios_de_las_Islas_Baleares', 'Islas Baleares'],
#                ['https://15mpedia.org/wiki/Lista_de_municipios_de_Canarias', 'Canarias'], ['https://15mpedia.org/wiki/Lista_de_municipios_de_Cantabria', 'Cantabria'], 
#                ['https://15mpedia.org/wiki/Lista_de_municipios_de_Castilla-La_Mancha', 'Castilla La Mancha'], ['https://15mpedia.org/wiki/Lista_de_municipios_de_Castilla_y_Le%C3%B3n', 'Castilla y León'],
#                ['https://15mpedia.org/wiki/Lista_de_municipios_de_Catalu%C3%B1a', 'Cataluña'], ['https://15mpedia.org/wiki/Lista_de_municipios_de_la_Comunidad_Valenciana', 'Comunidad Valenciana'],
#                ['https://15mpedia.org/wiki/Lista_de_municipios_de_Extremadura', 'Extremadura'], ['https://15mpedia.org/wiki/Lista_de_municipios_de_Galicia', 'Galicia'],
#                ['https://15mpedia.org/wiki/Lista_de_municipios_de_La_Rioja', 'La Rioja'], ['https://15mpedia.org/wiki/Lista_de_municipios_de_la_Comunidad_de_Madrid', 'Comunidad de Madrid'],
#                ['https://15mpedia.org/wiki/Lista_de_municipios_de_la_Comunidad_Foral_de_Navarra', 'Comunidad Foral de Navarra'], ['https://15mpedia.org/wiki/Lista_de_municipios_del_Pa%C3%ADs_Vasco', 'País Vasco'],
#                ['https://15mpedia.org/wiki/Lista_de_municipios_de_la_Regi%C3%B3n_de_Murcia', 'Región de Murcia']}

direcciones = ['https://15mpedia.org/wiki/Lista_de_municipios_de_Andaluc%C3%ADa', 'https://15mpedia.org/wiki/Lista_de_municipios_de_Arag%C3%B3n', 'https://15mpedia.org/wiki/Lista_de_municipios_del_Principado_de_Asturias',
              'https://15mpedia.org/wiki/Lista_de_municipios_de_las_Islas_Baleares', 'https://15mpedia.org/wiki/Lista_de_municipios_de_Canarias', 'https://15mpedia.org/wiki/Lista_de_municipios_de_Cantabria',
              'https://15mpedia.org/wiki/Lista_de_municipios_de_Castilla-La_Mancha', 'https://15mpedia.org/wiki/Lista_de_municipios_de_Castilla_y_Le%C3%B3n', 'https://15mpedia.org/wiki/Lista_de_municipios_de_Catalu%C3%B1a',
              'https://15mpedia.org/wiki/Lista_de_municipios_de_la_Comunidad_Valenciana', 'https://15mpedia.org/wiki/Lista_de_municipios_de_Extremadura', 'https://15mpedia.org/wiki/Lista_de_municipios_de_Galicia',
              'https://15mpedia.org/wiki/Lista_de_municipios_de_La_Rioja', 'https://15mpedia.org/wiki/Lista_de_municipios_de_la_Comunidad_de_Madrid', 'https://15mpedia.org/wiki/Lista_de_municipios_de_la_Comunidad_Foral_de_Navarra',
              'https://15mpedia.org/wiki/Lista_de_municipios_del_Pa%C3%ADs_Vasco', 'https://15mpedia.org/wiki/Lista_de_municipios_de_la_Regi%C3%B3n_de_Murcia']

CCAA2 = ['Andalucía', 'Aragón', 'Principado de Asturias', 'Islas Baleares', 'Canarias', 'Cantabria', 'Castilla La Mancha', 'Castilla y León', 'Cataluña', 
        'Comunidad Valenciana', 'Extremadura', 'Galicia', 'La Rioja', 'Comunidad de Madrid', 'Comunidad Foral de Navarra', 'País Vasco', 'Región de Murcia']

sql = "insert into localidades (municipio, comarca, provincia, CCAA, poblacion, densidad) values (%s, %s, %s, %s, %s, %s)"

for x in range(0,len(direcciones)):

  URL = direcciones[x]
  page = requests.get(URL)
  CCAA = CCAA2[x]
  soup = BeautifulSoup(page.content, 'html.parser')
  tabla = soup.find("table")
  tabla = tabla.find_all("tr")

  for i in tabla:
    municipio = i.find(class_="Municipio")
    if municipio == None:
      municipio2 = 'Null' 
      print(municipio2)
    else:
      municipio2 = municipio.text
      print(municipio2)

    comarca = i.find(class_="Comarca")
    if comarca == None:
      comarca2 = 'Null' 
      print(comarca2)
    else:
      comarca2 = comarca.text
      print(comarca2)

    provincia = i.find(class_="Provincia")
    if provincia == None:
      provincia2 = 'Null' 
      print(provincia2)
    else:
      provincia2 = provincia.text
      print(provincia2)

    print(CCAA)

    poblacion = i.find(class_="Población-(2019)")
    if poblacion == None:
      poblacion2 = 'Null' 
      print(poblacion2)
    else:
      poblacion2 = poblacion.text
      print(poblacion2)

    densidad = i.find(class_="Densidad-(hab./km²)")
    if densidad == None:
      densidad2 = 'Null' 
      print(densidad2)
    else:
      densidad2 = densidad.text
      print(densidad2)
    val = (municipio2, comarca2, provincia2, CCAA, poblacion2, densidad2)
    try:
      cur.execute(sql, val)
      myconn.commit()

    except:
      myconn.rollback()

    print(cur.rowcount, "record inserted!")


myconn.close()