
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import estilos from 'styles/Crear_clase.module.css';


const ModalPasos = (props) => {

  const [seleccionadoFile, setState] = useState(null);
  const [url, setImageURL] = useState(undefined);

  const modalStyles = {
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '88%'
  }



  return (
    <>

      <Modal isOpen={props.isOpen} style={modalStyles}>
        <ModalHeader className={estilos.header_Modal}>
          PYCHECHE
        </ModalHeader>
        <ModalBody>
          <div>
            <div>
              <input type="file" onChange={event => {
                console.log(event.target.files[0]);
                setState(event.target.files[0]);
              }}></input>
            </div>

            <div>
              <button onClick={cambiar} className={estilos.btn_subirArchivo} >Subir Archivo</button>
            </div>

            <div>
              {<img src={"/images/" + url} alt="uploaded" />}
            </div>

          </div>
        </ModalBody>

        <ModalFooter>
          <button type="submit" className={estilos.btn_guardarPaso} onClick={props.onAddModalChange}>Guardar</button>
          <Button color="secondary" onClick={props.onAddModalChange}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>

  )
  function cambiar() {
    console.log(seleccionadoFile.name);
    setImageURL(seleccionadoFile.name);
    console.log(url);
  }
};
export default ModalPasos;

