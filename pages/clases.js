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

const Clases = () => {
  const classes = useStyles();
  return (
    <Layout
      title="Clases"
      description="Clases y Coreos"
    >
      <div className="">
        <div className="row margin-0 clases-container">
            <div className="col-12 titulo-clases text-center">Seleccion de pycheche</div>
            {clases.map((data,key) => { return (
            <div><Button key={key} href="/clases" className="col-12 margin-0 padding-0 clases-card">
                <div className="row categoria">
                  <div className="col-7 titulo-clase">
                      {data.nombre}
                  </div>
                  <div className="col-5 datos-clase">
                    <p>fecha: {data.fecha}</p>
                    <p>Autor: {data.Autor}</p>
                  </div>
                  <div className="col-12 descripcion-clase">
                      <div className="row">
                        <p className="col-11">{data.Descripcion}</p>
                      </div>
                  </div>
              </div>
            </Button>
            <div className="fav text-center">
                <Button href="/clase" className="text-left paddign-0 margin-0">
                    <svg className="text-left" xmlns="http://www.w3.org/2000/svg" width="40" height="50" 
                        fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </Button>
            </div>
          </div>
          )})}
        </div>
      </div>
    </Layout>
  );
};

export default Clases;