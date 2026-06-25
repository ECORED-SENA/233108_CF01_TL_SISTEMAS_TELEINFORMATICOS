<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Comprendiendo los sistemas informáticos   ',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> reforzar los elementos conceptuales respecto a los sistemas informáticos tomando como base las necesidades y los requerimientos del entorno.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Seleccione las funciones que pueden realizar los sistemas operativos',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Administrar los recursos de hardware de la computadora y proporcionar los componentes de la interfaz de usuario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ofrecer Velocidad de procesamiento a las aplicaciones y garantizar la eficacia de los programas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrar energía eléctrica a los computadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilitar la usabilidad del computador por medio de manuales técnicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto: 'Algunos software de productividad son ',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Procesamiento de texto, hojas de cálculo, presentaciones. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Procesamiento solamente de graficas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procesamiento de <em>software</em>  y <em>hardware</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procesamiento de hojas de texto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Dentro de la Organización los ERP son muy utilizados debido a que:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permiten organizar los procesos de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Permiten el desarrollo de presentaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite el bloque de ataques cibernéticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No permiten consolidar y gestionar datos de diferentes departamentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'La computación en la nube es muy importante en las organizaciones porque permite:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Guardar información en repositorios remotos y protegerla ante incidentes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permite acceder a la información sin conexión a internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite garantizar que cualquier persona pueda acceder a los datos sin necesidad de contraseñas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cumplimiento regulatorio y de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Los Lenguajes de programación permiten la creación de otros programas utilitarios que solucionan problemas específicos, entre estos lenguajes se encuentran:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lenguajes de máquina.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Lenguajes de Word.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lenguajes integrales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lenguajes de sistemas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Las fuentes de información para análisis de datos en la organización pueden ser:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fuente internas y externas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fuentes de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fuentes tangibles e intangibles .',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Campo para editar máximo 20 palabras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
