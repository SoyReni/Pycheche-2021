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
    boxSizing: "border-box",
    padding: "1em",
    fontFamily: "Baloo 2",
    fontSize: "1.5em",
    fontWeight: "500",
    textTransform: "none",
    borderRadius: "25px",
    minWidth: "300px",
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
      fondo="principal"
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          className="logo-texto"
          style={{ marginBottom: "1em" }}
        >
          <p className="logo-texto">Pycheche</p>
        </Typography>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item md={8} xs={12}>
            <Button
              component={"a"}
              rel="noreferrer noopener"
              href="/explorar"
              className={classes.btn}
            >
              Explorar
            </Button>
          </Grid>
          <Grid item md={8}>
            <Button
              component={"a"}
              rel="noreferrer noopener"
              href="/crearClase"
              className={classes.btn}
            >
              Crear Clase
            </Button>
          </Grid>
          <Grid item md={8}>
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
