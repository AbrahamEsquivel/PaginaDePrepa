
const listaDeGuias = [
    {
        id: 1,
        titulo: "Regresar al Índice",
        contenido: "<h1>Volver</h1><p>Haz clic <a href='index.html'>aquí</a> para salir.</p>"
    },
    {
        id: 2,
        titulo: "Guía 0: Introducción",
        contenido: `
            <h2>Introducción al curso</h2>
            <p>Este es el contenido que antes estaba en el archivo GUIA 0.html.</p>
            <ul>
                <li>Concepto A</li>
                <li>Concepto B</li>
            </ul>
        `
    },
    {
        id: 3,
        titulo: "Guía 1: HTML Básico",
        contenido: `
            <html>

        <head>
        <title>TITULO DE LA PAGINA </title>
        </head>
        <body>
        <h1>encabezado de la pagina</h1>
        <h2>encabezado de menor tama�o</h2>
        <p>este es el texto de un parrafo</p>
        <p>este es el texto de otro parrafo.Dentro de este parrafo, pueden ir palabras <b> en negritas</b>,<i>en cursivas</i>o lo que quieras</p>
        <p> tambien podemos poner listas como la siguiente:</p>
        <ul>
        <li>guien numero uno</li>
        <li>guin numero dos</li>
        <li>guion numero tres </li>
        </body>

        </html>
        `
    },
    {
        id: 4,
        titulo: "Orientacion",
        contenido: `<html>
        <hide>
        </hide>
        <body>
            FORMATO 
            <p>crea un nuevo parrafo</p>
            <p><center> ola como estas </p></center>
            <p><blockquote> sangria de texto de ambos lados</span>
        <ul>
            <li>google
            <li>safari
        </ul>
        </body>
        </html>
        `
    },
    {
        id: 5,
        titulo: "Links",
        contenido: `<html>
        <body>

        <head>
        <body>
            <center>

                <body>
                    <h1><p style = "color: yellow";>OLA COMO ESTAS </P></h1>
                </body>
            </center>

        </head>

        <body bgcolor="pink" > 
        </body>

        <p>Crea un enlace a
        <a href="https://www.google.com.mx/?hl=es-419" style="color:white;">link la página de inicio de google</a>.
        </p>


        <p>
            <body >
                Crea un enlace a correo a 
                <a href="mailto:abrahambarrientos846@gmail.com?
                subject=subject text">
                abrahambarrientos846@gmail.com</a>
            </body>
        </p>


        <p>

            crea una ubicacion de destino dentro de un documento 
            <p>Por ejemplo:</p>

            <ul>
                <li><a href="https://www.youtube.com/watch?v=1QhfHskNjc8">Video de youtube </a></li>
                <li><a href="mailto:"abrahambarrientos846@gmail.com">Gmail</a></li>
                <li><a href="tel:+524495800933">Telefono</a></li>
            </ul>
        </body>
        </html>
`
    },
    {
        id: 6,
        titulo: "Negritas y Cursivas",
        contenido: `<html>
            <body>
            <p>
                <pre> texto preformateado es decri con una fuente fija </pre>
            </p>

            <p>
                <h1>TITULO GRANDE </h1>
            </p>

            <p>
                <h6>TITULO PEQUEÑO </h6>
            </p>

            <p>
                <b>crea un texto en negritas </b>
            </p>

            <p>
                <i>crea un texto en cursiva </i>
            </p>

            </body>

            </html>
        `
    },
    {
        id: 7,
        titulo: "Tipo de textos",
        contenido: `<html>
        <body>

            <p><tt> crea o maquina de escribir estilo de texto teletipo</tt></p>
            <p><cite>crea una cita por lo general en crusiva</cite></p>
            <p><em>hace hincapie en la palabra (con cursiva o negritas)</em></p>
            <p><strong> hace incapie en la palabra (con cursiva o negritas)</strong></p>
            <p><font size="7">TEXTO DE MAYOR TAMAÑO</font></p>
            <p><font color ="blue">OLA MI PROGRAMA</font></p>
        </body>
        </html>
        `
    },
    {
        id: 8,
        titulo: "Parrafos y Listas",
        contenido: `<html>
        <body>

            <p>crea un nuevo parrafo</p>
            <p align="right">alineamos el texto a la derecha</p></br>
            <blockquote>aqui se aplica la sangria </span>
            <dl>
        <dt>Firefox</dt>
        <dd>
        Mozilla Firefox es un navegador web libre y de código abierto desarrollado para distintas plataformas, está coordinado por la Corporación Mozilla y la Fundación Mozilla.
        </dd>
        <dd>
            Usa el motor Gecko para renderizar páginas web, el cual implementa actuales y futuros estándares web.
        </dd>

        <!-- Other terms a



        </body>
        </html>
        `
    },
    {
        id: 9,
        titulo: "Colores y Fondos",
        contenido: `<html>
        <body>
            <p><font face ="algerian" size=20</font></p>
            <p><font color ="red" >este es el texto de otro parrafo. dentro de este parrafo , pueden ir palabras <b> en negritas</b><i> en cursiva</i> o lo que quieras</font></p>
        </body>
        </html>
        `
    },
    {
        id: 10,
        titulo: "Lista",
        contenido: `<html>
            <body>


                <dr> procede cada definicion de termino</dr>
                <dd>procede cada definicion</dd>
                <ol>crea una lista enumerada</ol>
                <li>procede a cada elemento de la lista y añade un numero</li>
                <ul>crea una lista con viñetas</ul>
                
            </body>
        </html>
        `
    },
    {
        id: 11,
        titulo: "Imágenes",
        contenido: `<html>
<body>


	<p><img src="img/cona.png"height="400" widht="600"</img src></p>
	<img src="img/cona.png"height="400" widht="600" align= "right"></img src>
	<img src="img/cona.png"height="400" widht="600" border=10</img src></p>
</body>
</html>
        `
    },
    {
        id: 12,
        titulo: "Tablas",
        contenido: `<html>


	<table width="100%" height="200" border="5" cellspacing="3" cellpadding="5">
	<tr>
		<td>primer columna de la fila 1</td>
		<td>segunda columna de la fila 1</td>
		<td>tercera columna de la fila 1</td>
	</tr>
	<tr>
		<td>primer columna de la fila 2</td>
		<td>segunda columna de la fila 2</td>
		<td>tercera columna de la fila 2</td>
	</tr>

</table>

			



<html>
        `
    },
    {
        id: 13,
        titulo: "Menu",
        contenido: `<!DOCTYPE html>
<html>

	<head>
		<meta charset ="utf-8">
		<title>EJEMPLO DEL USO DE MARCADORES - aprendeaprogramar.com</title>
		</head>
<body>

		<a name="arriba"></a>
		<p>En esta pagina puedes ir al <a href="#primer">primer </a>apartado, al <a href="#segundo">segundo</a> o al <a href="#tercero">tercero</a></p></br>

		<a name ="primer"><h1>primer apartado</h1></a>
		aqui tienes el primer apartado.Al pulsar sobre el enlace , el navegador habra saltado a esta partida de la pagina .Quiza si todo entra en la pantalla
		no logres ver el efecto pero prueba a poner mas texto aqui o hacer zoom y conseguiras verlo 



		<a name="segundo"><h1>segundo apartado</h1></a>
		aqui tienes el segundo apartado.Al pulsar sobre el enlace , el navegador habra saltado a esta partida de la pagina .Quiza si todo entra en la pantalla
		no logres ver el efecto pero prueba a poner mas texto aqui o hacer zoom y conseguiras verlo 



		<a name="tercero"><h1>tercer apartado</h1></a>
		aqui tienes el tercer apartado.Al pulsar sobre el enlace , el navegador habra saltado a esta partida de la pagina .Quiza si todo entra en la pantalla
		no logres ver el efecto pero prueba a poner mas texto aqui o hacer zoom y conseguiras verlo 	



		volver<a href="#arriba"> arriba</a>
</body>
</html>
        `
    },
    {
        id: 14,
        titulo: "Acentos",
        contenido: `<html>
	<body>
		&aacute;
		&eacute;
		&iacute;
		&uacute;
		&ntilde;
		&agrave;
		&egrave;
		&ograve;

		
	</body>


</html>
        `
    }
];