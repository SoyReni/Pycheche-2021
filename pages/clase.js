import Layout from "components/layout/Layout";
import { clases } from "data/clase";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

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

const Clase = () => {
  const classes = useStyles();
  return (
    <Layout
      title="Clases"
      description="Clases y Coreos"
    >
      <div className="categorias">
        <div className="row margin-0 clases-container">
          <div className="titulo">Nombre de la clase</div>
        </div>
      </div>
    </Layout>
  );
};

export default Clase;