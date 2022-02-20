import Layout from "components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Swatch from "components/swatch";
import rough from "roughjs/bundled/rough.esm";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from "components/image";




 

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
                    <Router>
                      <li>
                      <Link to="/image"> Ir a la pizzarra </Link> - <code>/components/image.js</code>
                      </li>    
                      <Switch>
                      <Route path="/Image" component={Image} />
                      </Switch>

                     </Router>
                    <capturar/>
                    
                   
                  
                  </div>
            </div>




          </Grid>
          
        </Grid>
      </Container>
    </Layout>
  );

  
  };


export default EditorDePasos;