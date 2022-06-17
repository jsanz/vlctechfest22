# **Cumbre Vieja**
## Análisis y visualización

VLCTechFest | 2022-06-18 | Valencia

[ela.st/vlctechfest2022](https://ela.st/vlctechfest2022)

note: Diapositiva de espera para arrancar la charla

___

## Jorge Sanz

<div class="nodiscs" style="float:left;max-width:80%;font-size:smaller;">

* 🌐&nbsp; [links.jorgesanz.net](https://links.jorgesanz.net)
* 🐦&nbsp; [@xurxosanz](https://twitter.com/xurxosanz)
* 👨‍🎓&nbsp; Ing. **Cartografía** y Geodesia (UPV)
* 👨‍💻&nbsp; **Elastic** 2019
  * CARTO 2015, Prodevelop 2006, UPV 2004

</div>

<div style="float:right;max-width:20%;">
    <img src="./imgs/futurama.png">
</div>

note: Me presento, qué estudié, dónde trabajé

___

## Agenda

* Sobre la erupción
* Primera iteración
* Elastic Maps
* Segunda iteración
* Procesado de perímetros de lava y edificios
* Resultado final

---

## La Palma

<iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-33.44238281250001%2C18.521283325496288%2C-2.2412109375000004%2C37.82280243352759&amp;layer=mapnik&amp;marker=28.6129%2C-17.8647"></iframe>

<p class="caption">
<a href="https://www.openstreetmap.org/?mlat=28.6129&mlon=-17.8647#map=16/28.6129/-17.8647">Ver mapa</a>
</p>

note: Como imagino casi todos sabréis, en las islas Canarias, La Palma está situada al oeste del archipiélago y como el resto de islas, tiene un origen volcánico.

___
## Erupciones anteriores


<div style="float:left;max-width:40%;margin-top:2em;">

* San Juan, **1949** [![logo wikipedia](./imgs/wikipedia.svg "Logo de wikipedia")<!-- .element: class="icon"-->](https://es.wikipedia.org/wiki/Erupci%C3%B3n_volc%C3%A1nica_de_La_Palma_de_1949)
* Teneguía **1971** [![logo wikipedia](./imgs/wikipedia.svg "Logo de wikipedia")<!-- .element: class="icon"-->](https://es.wikipedia.org/wiki/Erupci%C3%B3n_volc%C3%A1nica_de_La_Palma_de_1971)
* [OSM ![logo OSM](./imgs/openstreetmap.svg "Logo de OSM")<!-- .element: class="icon"-->](https://overpass-turbo.eu/map.html?Q=%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A(%0A%20%20way%5Bgeological%3Dvolcanic_lava_field%5D(28.430052892335723%2C-18.505096435546875%2C28.837455983116197%2C-17.214202880859375)%3B%0A%20%20relation%5Bgeological%3Dvolcanic_lava_field%5D(28.430052892335723%2C-18.505096435546875%2C28.837455983116197%2C-17.214202880859375)%3B%0A)%3B%0Aout%20body%3B%0A%3E%3B%0Aout%20skel%20qt%3B%0A)
* [@picazomario](https://twitter.com/picazomario/status/1449986099992989699/photo/1)

</div>

<div style="float:right;max-width:50%">
  <img src="./imgs/la-palma-lava-fields.png">
</div>

note: si bien la última ha sido la de mayor extensión, en la mitad sur de la isla hay diversos campos de lava fechados desde el siglo XVI, siendo los últimos eventos las erupciones del volcán de San Juan en 1949 y del Teneguía en 1971. 

___

## La erupción del <br/>Cumbre Vieja
<!-- .slide: data-background-image="imgs/erupcion.jpg" data-background-opacity="0.25" -->

* Inicio: **19 de septiembre de 2021**
* Fin: **13 de diciembre de 2021**
* **7.000** personas evacuadas
* **1.000** hectáreas cubiertas por la lava
* **3.000** edificios destruidos
* **834** millones de euros en daños
* **0** víctimas mortales

_fuente: [![Logo de Wikipedia](./imgs/wikipedia.svg "Logo de wikipedia")<!-- .element: class="icon"--> wikipedia](https://en.wikipedia.org/wiki/2021_Cumbre_Vieja_volcanic_eruption)_
<!-- .element class="caption" -->

___

<div class="tweet" data-src="https://twitter.com/Cahora/status/1450042407861604354?s=20&t=XRJtd02xT2FOuaowKzrSrA"></div>

note: algunas imágenes del desastre
___

<div class="tweet" data-src="https://twitter.com/Cahora/status/1449998849519538185?s=20&t=0lD_4Uu8952etY4ti1-aBA"></div>

note: algunas imágenes del desastre
___

<div class="tweet" data-src="https://twitter.com/involcan/status/1450217989224161285"></div>

note: algunas imágenes del desastre
___

<div class="tweet" data-src="https://twitter.com/Divulgameteo/status/1451065572607811584?"></div>

note: algunas imágenes del desastre

---

## Resultado final

* Cuadro de mando
  * [ela.st/cumbre-vieja-eruption](https://ela.st/cumbre-vieja-eruption)
* Mapa animado de perímetros de lava
  * [ela.st/cumbre-vieja-eruption-map](https://ela.st/cumbre-vieja-eruption-map)

note: vamos a ver el resultado final de este proyecto 
___

<!-- .slide: data-background-image="imgs/cumbre-vieja-map.png" data-background-size="contain" -->

note: Pantallazo del mapa

___

<!-- .slide: data-background-image="./imgs/dashboard.gif" data-background-size="contain" -->

note: Pequeño clip del cuadro de mando

---

## Idea inicial

<div class="tweet" data-src="https://twitter.com/InnovaLaPalma/status/1441844516462292999?s=20&t=0lD_4Uu8952etY4ti1-aBA"></div>

note: La idea vino de un tweet de la gente del servicio de innovación del Cabildo de La Palma, en el que comentaban que estaban publicando los perímetros e imágenes capturados por el dron con el que estaban volando en la zona afectada
___

> Cargar los datos de los perímetros y visualizarlos con Elastic Maps junto con la actividad sísmica

note: Asi que la primera idea fue por qué no cargar esos datos en Elastic Maps y probar una nueva funcionalidad que acabábamos de desarrollar.
___

## Datos disponibles

* Portal de Open Data [opendatalapalma.es](https://www.opendatalapalma.es): 
  * Imágenes y perímetros de flujos de lava
* Instituto Geográfico Nacional [ign.es](https://www.ign.es):
  * Información sísmica 

___

<!-- .slide: data-background-video="imgs/descarga-geojson.webm" data-background-size="contain"  data-background-video-loop="true" data-background-video-muted="true" -->

note: el portal de open data permite buscar datos y descargarlos en diferentes formatos. Dispone también de una API sencilla para hacer consultas

___

<!-- .slide: data-background-image="imgs/ign-terremotos.gif" data-background-size="contain" -->

note: Por otro lado el sevicio de información sísmica del IGN dispone de un formulario que por suerte es fácil de scrappear para no tener que introducir a mano esos parámetros una y otra vez.
___

## Exploración

* Pruebas en **Jupyter Notebook**
  * que nunca guardé 😢
* **Descarga** y **procesado** de datos (GeoJSON)
* **Carga** a Elasticsearch
* ***Scrapping*** de los datos de terremotos
* Proceso **iterativo**

note: en esta primera fase fui explorando con Jupyter Notebook la descarga y procesado de los datos ya que no se podían cargar directamente, además del scrapping. Fue un proceso iterativo de ir mejorando tanto el proceso como la forma de los datos en Elasticsearch.

---

## Elastic Maps

* Aplicación **GIS** en **Kibana**
* Visualización de datos almacenados en **Elasticsearch**
* Visualización de **otros orígenes** de datos
* **Estilos** basados en propiedades
* **Animación**

note: descripción de Elastic Maps

___

<!-- .slide: data-background-video="imgs/01-animation-imagery.mp4" data-background-size="contain"  data-background-video-loop="true" data-background-video-muted="true" -->

note: carga de imágenes de satélite

___

<!-- .slide: data-background-video="imgs/02-animation-quakes.mp4" data-background-size="contain"  data-background-video-loop="true" data-background-video-muted="true" -->

note: animación de terremotos (datos puntuales)
___

<!-- .slide: data-background-video="imgs/03-animation-footprints-1.mp4" data-background-size="contain"  data-background-video-loop="true" data-background-video-muted="true" -->

note: animación de polígonos de los perímetros de lava
___


## Pero el desastre se **alarga**...

![Meme de un gato confundido](./imgs/question.gif "Meme de un gato confundido")

note: lo que pensaba que iba a ser cosa de unos pocos días se va alargando y por tanto no tiene sentido estar cacharreando con el notebook y algo más automatizado va a ser mucho mejor.

---

## Segunda iteración

* **Reorganización** del código
* Proceso **semiatendido** 😕
* Automatización con **Github Actions**
* Carga y procesado de **edificios**
* Cuadro de mando en **Kibana**

note: Reorganizo el código para que se pueda ejecutar de manera más desatendida, en Github Actions y añadiendo nuevos datos que dan más interés al mapa y finalmente creo un cuadro de mando que aglutina toda la información recopilada.
___

## Aplicación _python_

* [ ![github logo](./imgs/github.svg "Logo de github") <!-- .element: class="icon" --> github.com/jsanz/cumbre-vieja](https://github.com/jsanz/cumbre-vieja)
* Carga de **credenciales** desde `.env` y variables de entorno
* Crea **índices**
* Utiliza la [**`Bulk API`**](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html) de Elasticsearch
* Utiliza una **caché local** persistente para todas las peticiones de la bibloteca **`requests`**

note: el código de los notebooks se convierte en un script de python que no requiere de ninguna interacción, recibe las credenciales para cargar datos en Elasticsearch y se encarga de crear los índices y cargar los datos de la manera más eficiente. Además para evitar descargas sucesivas, se utiliza una caché para la biblioteca requests.

___

### Ejemplo: carga de **bocas eruptivas**

```python
def upload_pits(client, overwrite=False):
    exists = IndicesClient(client).exists(INDEX_NAME)
    # Creates the pits index or exits
    if exists:
        if overwrite:
            logger.info("Deleting the pits index...")
            client.indices.delete(index=INDEX_NAME)
        else:
            logger.info("Skipping the pits")
            return

    logger.info("Creating the pits index...")
    create_index(client)

    logger.info("Getting the pits data...")
    features = download_geojson(GEOJSON_URL)
    logger.debug(f"{len(features)} pits downloaded")

    # Bulk upload the records
    logger.info(f"Uploading to ES {len(features)} records...")
    bulk(client, get_actions(features))
```

[ ![github logo](./imgs/github.svg "Logo de github") <!-- .element: class="icon" --> `pits.py`](https://github.com/jsanz/cumbre-vieja/blob/main/src/pits.py)
<!-- .element: class="caption" -->

note: este sería el ejemplo más sencillo de carga de las bocas eruptivas, incluyendo la posibilidad de sobreescribir los datos.
___

## Interacción **necesaria**

* Cada perímetro se sube como un<br/> **dataset nuevo** con un único registro
* El Portal de Open Data **no sigue**<br/> un esquema fijo de etiquetas 🤬
* Activar **notificaciones** 🔔 a [@InnovaLaPalma](https://twitter.com/InnovaLaPalma) 
* _Script_ para **explorar** el catálogo

note: pero por desgracia, la forma en la que suben los datos al portal de open data hace imposible automatizar el proceso, ya que cada nuevo perímetro se carga en un datatet nuevo que no hay manera de averiguar automáticamente.
___

<!-- .slide: data-background-video="./imgs/catalog-check.webm" data-background-size="contain" data-background-video-loop="true" data-background-video-muted="true" -->

note: con un sencillo script exploro los datasets que se han añadido recientemente al catálogo y me quedo con el identificador y fecha del dato.

___

```python
IDS = [
    ["b67cf8802dbb416b82db806f51eb2314_0", "2021-12-15", "11:00"],
    ["81554cf16075427fbad99f07167f898a_0", "2021-12-14", "10:30"],
    ["7330afd39f814ef8af9ac84d3756e79f_0", "2021-12-13", "09:40"],
    ["3467d91dd3d0419b98c29aaa4ddab888_0", "2021-12-12", "09:00"],
    ["9e0a4897b28b4e238726e6312f8f67c1_0", "2021-12-07", "10:30"],
    ["e7fcf6d3728c48a699732b91bc19010d_0", "2021-12-03", "10:15"],
    ["ce639aa2b6714b818cec49db80ea9425_1", "2021-12-01", "10:00"],
    ["3c980c4cb77f42b09f3d2f703090eed0_0", "2021-11-30", "10:20"],
    ["f9a683035bd34555b02de67c40c95a78_0", "2021-11-29", "10:00"],
    ...
```

[ ![github logo](./imgs/github.svg "Logo de github") <!-- .element: class="icon" --> `data.py`](https://github.com/jsanz/cumbre-vieja/blob/main/src/data.py)
<!-- .element: class="caption" -->

![Meme de coco confundido](./imgs/shrug.gif "Meme de coco confundido") <!-- .element: class="fragment"-->

note: y los añado a un simple array en un fichero. Esa es la única interacción que tengo que hacer más o menos a diario durante las semanas del evento.

---
## Github Actions

* Motor de ejecución de **procesos**
* **Código** en `.github/workflows`
* Permite almacenar _assets_ en **caché**
* <https://docs.github.com/en/actions>

note: al subir esos datos Github Action se va a encargar de ejecutar el script
___

## Github Actions: _trigger_

```yaml
on:
  push:
    branches: [ main ]
    paths:
      - 'src/data.py'
```

[ ![github logo](./imgs/github.svg "Github logo") <!-- .element: class="icon" --> `.github/workflows/python-app.yml`](https://github.com/jsanz/cumbre-vieja/blob/2497c3745daa3d47da6b19333148e94282387477/.github/workflows/python-app.yml#L6-L10)
<!-- .element: class="caption" -->

note: un detalle interesante es que se puede especificar qué ficheros se deben haber modificado para que la acción se ejecute.
___

## Github Actions: _trigger_

```yaml
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install --upgrade --upgrade-strategy eager -r requirements.txt ; \
    - name: Run the app
      env:
        ES_CLOUD_ID: ${{ secrets.ES_CLOUD_ID }}
        ES_USER: ${{ secrets.ES_USER }}
        ES_PASSWORD: ${{ secrets.ES_PASSWORD }}
      run: |
        python src/app.py
```

[ ![github logo](./imgs/github.svg "Github logo") <!-- .element: class="icon" --> `.github/workflows/python-app.yml`](https://github.com/jsanz/cumbre-vieja/blob/784d439c704c44c18472fb2c8ed7595e534c5c74/.github/workflows/python-app.yml#L32-L42)
<!-- .element: class="caption" -->

note: y por lo demás ejecutar software es bastante sencillo

___

<!-- .slide: data-background-image="./imgs/github-actions.gif" data-background-size="contain" -->

---

## Carga de edificios

* Capa de **polígonos** del portal de Open Data
* **~200.000** registros
* Datos de **área**, **tipo** de recinto y número de **plantas**

![Datos de las edificaciones](./imgs/jq-edificaciones.png "Datos de las edificaciones")<!-- .element: style="width:400px"-->

note: con la automatización terminada me podía centrar en mejorar el análisis añadiendo los edificios. Es un dataset mediano de unos 350MB.

___


> ¿Cómo saber si un edificio **intersecta** con un perímetro de lava?

___

## Procesar los perímetros

* Calcular una nueva geometría con la diferencia con respecto al perímetro anterior

![Diagrama de procesado de los perímetros](./imgs/clipped.png "Diagrama de procesado de los perímetros")<!-- .element: class="img-background" -->

note: para asegurar que un punto en el territorio sólo intersecta con un perímetro o ninguno, hay que "cortarlos"
___

## Procesar los perímetros

<div style="font-size:smaller;">

* Shapely
* Calcular la **diferencia** con la geometría anterior 
* **Simplificar** la geometría
* Borrar polígonos **pequeños**
* Corregir geometrías **inválidas**


```python
# Compute the diff geom
diff_geom = curr_geom
              .difference(shape(prev_feature["geometry"]))
              .simplify( TOLERANCE, preserve_topology=True )
if diff_geom.geom_type == 'MultiPolygon':
    # Remove small polygons
    parts = len(diff_geom.geoms)
    diff_geom = MultiPolygon([poly for poly in diff_geom.geoms if filter_area(poly)])

# Try to fix any invalid geometries
if not diff_geom.is_valid:
    diff_geom = make_valid(diff_geom)
if not diff_geom.is_valid:
    diff_geom = diff_geom.buffer(0.0)
```

</div>

[ ![github logo](./imgs/github.svg "Github logo") <!-- .element: class="icon" --> `footprints.py`](https://github.com/jsanz/cumbre-vieja/blob/784d439c704c44c18472fb2c8ed7595e534c5c74/src/footprints.py#L123-L139)
<!-- .element: class="caption" -->

note: Esto se hace en el proceso de carga usando la blioteca de análisis geoespacial shapely, que permite hacer el recorte, para luego filtrar si han quedado polígonos "espúreos", así como tratar de arreglar las geometrías que se hayan podido romper en el proceso.
___

## Elasticsearch ingest pipelines & enrich policies

* _Elasticsearch ingest pipelines_ 
  * **Lógica** al (re)indexar datos
* _Enrich policy_
  * **Aumentar** un documento con datos de otro
  * Se pueden usar **relaciones espaciales**

> ¡Podemos cruzar los edificios con las nuevas geometrías para darles la fecha en la que fueron cubiertos por la lava!
<!-- .element: class="fragment" -->

note: con los perímetros listos nos queda procesar los edificios. Para eso vamos a usar una característica de Elasticsearch que permite ejecutar lógicas al indexar o reindexar datos, siendo una de las posibilidades la de enriquecer documentos a partir de datos almacenados en un índice de referencia. Una de las posibilidades es aplicar relaciones geográficas, que en este caso es justo lo que necesitamos.

___

## Política de **aumento** de datos

```
PUT /_enrich/policy/lapalma_lookup
{
  "geo_match": {
    "indices": "lapalma",
    "match_field": "diff_geometry",
    "enrich_fields": ["id", "timestamp"],
  }
}
```

note: primero creamos la política que define dónde están los datos de referencia, qué campo tiene la geometría y qué campos queremos transferir.

___

## Pipeline 

```
PUT _ingest/pipeline/buildings_footprints
{
  "description": "Enrich buildings with Cumbre Vieja footprints.",
  "processors": [
    {
      "enrich": {
        "field": "geometry",
        "policy_name": "lapalma_lookup",
        "target_field": "footprints",
        "shape_relation": "INTERSECTS",
        "ignore_missing": True,
        "ignore_failure": True,
      }
    }
    ...
  ],
}
```

note: esa política se incluye en uno de los procesadores de la pipeline, indicando el campo origen en los documentos que se van a insertar, qué relación espacial deberá tener con el índice de referencia, y finalmente qué nombre va a tener el campo que contenga los datos provenientes del índice de referencia. 

___

## Aplicar el proceso

* Tras cargar los nuevos perímetros ejecutamos una **actualización** del índice de edificios
* Sólo se aplica sobre edificios en la **zona** que todavía no han sido **afectados**

```
POST buildings/_update_by_query?pipeline=buildings_footprints
{
  "query": {
    "bool": {
      "must_not": [ { "exists": { "field": "footprints.id" } } ],
      "filter": {
        "geo_bounding_box": {
          "geometry": {
            "top_left": { "lat": 28.647, "lon": -17.95 },
            "bottom_right": { "lat": 28.58, "lon": -17.83 },
          }
        }
      },
    }
  }
}
```

note: esta pipeline la usaremos cada vez que añadamos datos al índice de los perímetros. Tras insertar datos nuevos reindexaremos los edificios, pero sólo buscando en aquellos documentos que se encuentren en la zona de estudio y que no tengan todavía datos de perímetros. De esta forma el procesado sólo se ejecuta sobre los posibles candidatos.

___

<!-- .slide: data-background-video="./imgs/05-animation-buildings.mp4" data-background-size="contain" data-background-video-loop="true" data-background-video-muted="true" -->

---

## Cuadro de mando en **Kibana**

* [ela.st/cumbre-vieja-eruption](https://ela.st/cumbre-vieja-eruption)
* **Mapa** con los perímetros
  * [ela.st/cumbre-vieja-eruption-map](https://ela.st/cumbre-vieja-eruption-map)
* **Mapa** con los terremotos según magnitud
* Grupo de gráficas:
  * sobre los **terremotos**
  * sobre los **edificios**
  * sobre los vuelos de los **drones**

note: finalmente podemos poner toda la información en un único cuadro de mando en Kibana: un par de mapas uno de perímetros y otro con los terremotos y un juego de gráficas de diferente tipo pero que se puede decir que se agrupan entre aquellas que dan métricas sobre los vuelos de los drones, o sobre los terremotos, o sobre los edificios afectados por la erupción.
___

<!-- .slide: data-background-image="./imgs/dashboard-1.png" data-background-size="contain" -->
___

<!-- .slide: data-background-image="./imgs/dashboard-2.png" data-background-size="contain" -->

---

## Para saber más

* [Blog de Elastic](https://www.elastic.co/blog/understanding-evolution-volcano-eruption-elastic-maps): Sobre las animaciones en Elastic Maps en este proyecto
* [Calendario de adviento de 2021](https://discuss.elastic.co/t/dec-23rd-2021-es-aumentando-documentos-con-la-politica-geo-match/292462): Aumentando documentos con la política `geo_match`

note: Y esto es todo, os dejo un par de enlaces con detalles tanto de la parte de Elastic Maps y las animaciones como una entrada en el calendario de adviento que hacemos en Elastic cada año donde conté con detalle el tema del enriquecimiento de los edificios.

___

# **¡Gracias!**

![QR de la charla](./imgs/qr.png "QR de la charla")

[ela.st/vlctechfest2022](https://ela.st/vlctechfest2022)
