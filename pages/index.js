import Layout from "components/layout/Layout";

import { Container, Grid, Typography, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    background: theme.palette.button.main,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.button.main}`,
    "&:hover": {
      color: theme.palette.button.main,
    },
  },
  img: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout
      // type your page title and page description.
      title="Pycheche"
      description="Demo para la materia Interaccion Humano Computadora 2021/22"
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          style={{ marginBottom: "1em" }}
        >
          Pycheche
        </Typography>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <Button
              component={"a"}
              rel="noreferrer noopener"
              href="/explorar"
              className={classes.btn}
            >
              Explorar
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={"a"}
              rel="noreferrer noopener"
              href="/crearClase"
              className={classes.btn}
            >
              Crear Clase
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={"a"}
              rel="noreferrer noopener"
              href="/crearCoreo"
              className={classes.btn}
            >
              Crear Coreo
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
