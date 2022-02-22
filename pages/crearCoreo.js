import Layout from "components/layout/Layout";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import estilos from 'styles/Crear_coreo.module.css';
import ModalPasos from "components/modal_pasos";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

const modalStyles = {
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '88%'
}

const CrearCoreo = () => {

  const [addModal, setAddModal] = useState(false);
  const [botonMusica, cambiarbotonMusica] = useState(false);
  const [botonVestuario, cambiarbotonVestuario] = useState(false);
  const [botonAccesorio, cambiarbotonAccesorio] = useState(false);
  const [botonElemento, cambiarbotonElemento] = useState(false);
  const [abrirModal, setModal] = useState(false);  //modal para mostrar exito de coreo creada
  const classes = useStyles();

  return (
    <Layout
      title="Crear Coreo"
      description="Pagina para crear una clase nueva"
    >
      <Container className="categorias">
      <div className="titulo">Coreo Nueva</div>

        <Grid container direction="column" alignItems="center" spacing={1}>

          <ModalPasos isOpen={addModal} onAddModalChange={handleAddModalChange} />

          <Formik
            initialValues={{  
              name: '',
              projection: '',
              musica: '',
              vestuario: '',
              accesorio: '',
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              console.log('Formulario enviado');
              const coreo = {
                //  id : localStorage.length+1,
                name: valores.nombre,
                projection: valores.proyeccion,
                musica: valores.input_musica,
                vestuario: valores.input_vestuario,
                accesorio: valores.input_accesorio
              }

              /*Guardar clase localstore*/
              // localStorage.setItem(clase.id, JSON.stringify(clase));
              // console.log(localStorage.length);
              /*imprimir*/
              //for (let x = 1; x <= localStorage.length; x++)   console.log(localStorage.getItem(x));
              console.log(coreo);
            }}
          >
            {() => (
  
              <Form className={estilos.formulario}>
                <div >
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre de la coreo"
                    className={estilos.cabecera}
                  />
                </div>

                <div className={estilos.cuadro}>
                  <label htmlFor="proyeccion" className={estilos.subtitulo}>Proyeccion</label>
                  <Field name="proyeccion" as="select" className={estilos.select_proyeccion}>
                    <option value="Proyecccion1"> Proyecccion1</option>
                    <option value="Proyecccion2"> Proyecccion2</option>
                    <option value="Proyecccion3"> Proyecccion3</option>
                  </Field>
                </div>

                <div className={estilos.cuadro}>
                  <label htmlFor="musica" className={estilos.subtitulo}>Musica</label>
                  <button type="button" className={estilos.btn_mas} onClick={precionarBotonMusica}>+</button>
                  {botonMusica && <Field
                    type="text"
                    id="input_musica"
                    name="input_musica"
                    placeholder="..."
                    className={estilos.input_text}
                  />}
                </div>

                <div className={estilos.cuadro}>
                  <label htmlFor="vestuario" className={estilos.subtitulo}>Vestuario</label>
                  <button type="button" className={estilos.btn_mas} onClick={precionarBotonVestuario}>+</button>
                  {botonVestuario && <Field
                    type="text"
                    id="input_vestuario"
                    name="input_vestuario"
                    placeholder="..."
                    className={estilos.input_text}
                  />}
                </div>

                <div className={estilos.cuadro}>
                  <label htmlFor="accesorios" className={estilos.subtitulo}>Accesorios</label>
                  <button type="button" className={estilos.btn_mas} onClick={precionarBotonAccesorio}>+</button>
                  {botonAccesorio && <Field
                    type="text"
                    id="input_accesorio"
                    name="input_accesorio"
                    placeholder="..."
                    className={estilos.input_text}
                  />}
                </div>

                <div className={estilos.cuadro}>
                  <label htmlFor="elemento" className={estilos.subtitulo}>Elemento</label>
                  <button type="button" className={estilos.btn_mas} onClick={precionarBotonElemento}>+</button>
                  {botonElemento && <Field
                    type="text"
                    id="input_elemento"
                    name="input_elemento"
                    placeholder="..."
                    className={estilos.input_text}
                  />}
                </div>

                <a href="/editorDePasos" >  <input type="button" value="Crear Paso" className={estilos.btn_pasos} /></a>
                <button type="button" className={estilos.btn_pasos} onClick={handleAddModalChange}>Subir pasos</button>


                <button type="submit" className={estilos.btn_guardar} onClick={guardadoExitoso}>Guardar Coreo</button>

              </Form>
            )}

          </Formik>

          <Modal isOpen={abrirModal} style={modalStyles} >
            <ModalHeader className={estilos.header_Modal}>
              PYCHECHE
            </ModalHeader>
            <ModalBody>
              <div>
                <h6>Coreo creada con exito!!!</h6>
              </div>
            </ModalBody>
            <ModalFooter>
              <a href="/misClases" >  <input type="button" value="OK!" className={estilos.btn_ok} /></a>
            </ModalFooter>
          </Modal>

        </Grid>
      </Container> 
    </Layout>
  )
  function handleAddModalChange() {
    setAddModal(!addModal);
  }
  function precionarBotonMusica() {
    cambiarbotonMusica(!botonMusica);
  }
  function precionarBotonVestuario() {
    cambiarbotonVestuario(!botonVestuario);
  }
  function precionarBotonAccesorio() {
    cambiarbotonAccesorio(!botonAccesorio);
  }
  function precionarBotonElemento() {
    cambiarbotonElemento(!botonElemento);
  }

  function guardadoExitoso() {
    setModal(!abrirModal);
  }


}; 
  
export default CrearCoreo;