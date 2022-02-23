
import Layout from "components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid,Button } from "@material-ui/core";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from "components/image";
import Download from "components/Download";

const EditorDePasos = () => {
  

  
  return (
    <Layout
      title="Crear Clase"
      description="Pagina para crear una clase nueva"
    >
            <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item>

            
            <div class= "DescripcionPaso">
              <h3>Agregue una descripcion</h3>
                 <div class="form-group purple-border">
                    
                    <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                   
                    
                    <Button
                      component={Image}
              href="/Image"
             >IR A LA PIZARRA
              
            </Button>
                    
                      <image/>


                     

                   
                  
                  </div>
            </div>




          </Grid>
          
        </Grid>
      </Container>
    </Layout>
  );

  
  };


export default EditorDePasos;