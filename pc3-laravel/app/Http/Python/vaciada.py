import requests
from bs4 import BeautifulSoup
import re
import string
import pickle
import sys
from sklearn.naive_bayes import MultinomialNB
from joblib import dump, load
from nltk.tokenize import word_tokenize
from nltk.stem import SnowballStemmer


def limpiarArchivos(path): 
    limpio = []
    for x in range(len(path)):
        limpieza = re.sub('[%s]' % re.escape(string.punctuation), " ", path[x])
        limpieza = limpieza.lower()
        limpieza = re.sub('\w*\d\w*', ' ', limpieza)
        limpieza = re.sub('\n', '', limpieza)
        limpio.append(limpieza)
    return limpio

def tokenizacion(path): 
    token = []
    stemmer = SnowballStemmer('spanish')
    for x in path:
        tokens = word_tokenize(x)
        for w in range(len(tokens)):
            tokens[w] = format(stemmer.stem(tokens[w]))
        tokens2 = ' '.join(tokens)
        token.append(tokens2)
    return token

def matrizNumericaTest(path, matrix):
    matriz = matrix.transform(path)
    return matriz

def testeo(X_test, modelo):
    testeopredict = modelo.predict(X_test)
    return testeopredict

def cargarModelo(ruta):
    # cargaModelo = load(ruta)
    # return cargaModelo
    with open(ruta, 'rb') as f:
        modelo = pickle.load(f)
    return modelo

def cargarMatriz(ruta):
    # cargaModelo = load(ruta)
    # return cargaModelo
    with open(ruta, 'rb') as f:
        matriz = pickle.load(f)
    return matriz

textos=[]
municipio = sys.argv[1]
municipio2 = municipio.replace(" ","%20")

web = 'https://www.20minutos.es/busqueda/?q='+municipio2+'&sort_field=&category=&publishedAt%5Bfrom%5D=&publishedAt%5Buntil%5D='
page = requests.get(web)


soup = BeautifulSoup(page.content, 'html.parser')
html = list(soup.children)[2]
article = html.find_all("article")

for link in article:
  enlaces = link.find('a')['href']
  contenido = requests.get(enlaces)
  soup2 = BeautifulSoup(contenido.content, 'html.parser')
  html2 = list(soup2.children)[2]
  article2 = html2.find_all(class_='paragraph')
  texto = ''
  for i in article2:
    texto = texto +' ' + i.text
  textos.append(texto)

modelo = cargarModelo('C:/Users/sandr/OneDrive/Escritorio/GitHub/PC3-ANGULAR/pc3-laravel/app/Http/Python/modelo.pkl')
matriz = cargarMatriz('C:/Users/sandr/OneDrive/Escritorio/GitHub/PC3-ANGULAR/pc3-laravel/app/Http/Python/matriz.pkl')
limpito = limpiarArchivos(textos)
corto = tokenizacion(limpito)
matriz_test =  matrizNumericaTest(corto, matriz)
resultado_fin = testeo (matriz_test, modelo)

contador = 0
valor = 'No Despoblacion'
for v in resultado_fin:
    if v != 1:
        contador += contador
        if contador > 1:
            valor = 'Despoblacion'
print(valor)

