import Layout from "components/layout/Layout";

import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from 'react';
import { map } from 'lodash'
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

const MisClases = () => {
  let list = [];
  const classes = useStyles();

  useEffect(() => {
    let i = 0;
    let divsito = document.getElementById("t")
    for (let x = 1; x < localStorage.length; x++) {
      list[i] = JSON.parse((localStorage.getItem(x)));
      i++;

    }

    { map(list, comp => divsito.innerHTML = comp.title)}

  }, " ");


  return (
    <Layout
      title="Crear Clase"
      description="Pagina para crear una clase nueva"
    >
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item>
          <div id = "t"></div>
          </Grid>

        </Grid>
      </Container>
    </Layout>
  );
};

export default MisClases;