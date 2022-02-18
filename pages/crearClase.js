import Layout from "components/layout/Layout";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import document from "next/document";
import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import estilos from 'styles/Crear_clase.module.css';
import ModalPasos from "components/modal_pasos";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  avator: {
    width: "8em",
    height: "8em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
}));



const CrearClase = () => {
 
  const [addModal, setAddModal] = useState(false); 
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [botonMas, cambiarbotonMas] = useState(false);

  const classes = useStyles();

  return (
    <Layout
      title="Crear Clase"
      description="Pagina para crear una clase nueva"
    >
      <Container maxWidth="md" >
        <Grid container direction="column" alignItems="center" spacing={1}>
   
     <ModalPasos isOpen={addModal}  onAddModalChange={handleAddModalChange}/>

          <Formik
            initialValues={{
              titulo: '',
              obersavacion_pasos_centro: '',
              obersavacion_pasos_equilibrio: '',
              danza_tradicional: ''
            }}
            onSubmit={(valores, { resetForm }) => {
             
              resetForm();
              console.log('Formulario enviado');
           
              const clase = {
                id : localStorage.length+1,
                title: valores.titulo,
                obsCentro: valores.obersavacion_pasos_centro,
                obsEquilibrio: valores.obersavacion_pasos_equilibrio,     
                danzaTradicional: valores.input_danza_tradicional
            } 

            /*Guardar clase localstore*/
             localStorage.setItem(clase.id, JSON.stringify(clase));
            //localStorage.clear();
            console.log(localStorage.length);
            /*imprimir*/
            for (let x = 1; x <= localStorage.length; x++)   console.log(localStorage.getItem(x));
              
      
              cambiarFormularioEnviado(true);
              setTimeout(() => cambiarFormularioEnviado(false), 5000);
            }}

          >
            {() => (
              <Form className={estilos.formulario}>
                <div >
                  <Field
                    type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Titulo de la Clase"
                    className={estilos.cabecera}
                  />
                </div>

                <div className={estilos.cuadro}>
                  <label htmlFor="pasos_centro" className={estilos.subtitulo}>Pasos de Centro</label>
                  <Field
                    type="text"
                    id="obersavacion_pasos_centro"
                    name="obersavacion_pasos_centro"
                    placeholder="Observaciones.."
                    className={estilos.observacion}

                  />
                    <a href="/editorDePasos" >  <input type="button" value="Crear Paso" className={estilos.btn_pasos}/></a>
                    <button type="button" className={estilos.btn_pasos}> Agregar Pasos</button>
                </div>

                <div className={estilos.cuadro}>
                  <label htmlFor="pasos_equilibrio" className={estilos.subtitulo} > Pasos de Equilibrio</label>
                  <Field
                    type="text"
                    id="obersavacion_pasos_equilibrio"
                    name="obersavacion_pasos_equilibrio"
                    placeholder="Observaciones.."
                    className={estilos.observacion}
                  />
                    <a href="/editorDePasos" >  <input type="button" value="Crear Paso" className={estilos.btn_pasos}/></a>
                    <button type="button" className={estilos.btn_pasos} onClick={handleAddModalChange}>Agregar Pasos</button>
                </div>


                <div className={estilos.cuadro}>
                  <label htmlFor="danza_tradicional" className={estilos.subtitulo}>Danzas Tradicionales</label>
                    <div>
                    <button type="button" className={estilos.btn_mas} onClick={precionarBotonMas}>+</button>
                    {botonMas && <Field
                    type="text"
                    id="input_danza_tradicional"
                    name="input_danza_tradicional"     
                    placeholder="..."      
                    className= {estilos.input_text}
                  />}
                    </div>
                </div>

                <button type="submit" className={estilos.btn_guardar}>Guardar Clase</button>
                {formularioEnviado && <p className="exito">Clase creada con exito!</p>}
              </Form>
            )}

          </Formik>


        </Grid>
      </Container>
    </Layout>
  )

  function handleAddModalChange() {
    setAddModal(!addModal);
  }

  function precionarBotonMas() {
    cambiarbotonMas(!botonMas);
  }

};

export default CrearClase;
