import Layout from "components/layout/Layout";
import { categorias } from "data/categoria";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import {Link} from "react-router-dom"
import { TextField } from "@material-ui/core";

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

const saveCat = (v) =>{
  console.log(v);
}

const guardarDatos = (v) => {
  localStorage.setItem("cat", v.nombre);
  localStorage.setItem("catid", v.id);
}

const Explorar = () => {
  const classes = useStyles();
  return (
    <Layout
      title="Explorar"
      description="Explorar categorias"
    >
      <div className="categorias">
        <div className="titulo">Explorar categorias</div>
        <div className="buscar-cont row text-center">
            <div className="col-md-4 sm-hidden"></div>
            <TextField className="buscar col-md-8 col-sm-12" variant="outlined" label="Buscar"/>
        </div>
        <div className="row">
          {categorias.map((data,key) => { return (           
            <Button href="/clases" key={key} onClick={(v) => guardarDatos(data)} className="col-lg-3 col-md-4 col-sm-6 margin-0 padding-0 cat-cont">
                <div className="categoria">
                  <div className="titulo-categoria">
                      {data.nombre}
                  </div>
                  <div className="cat-img-cont">
                    <img className="cat-img" src={data.img}/>
                  </div>
              </div>
            </Button>
          )})}
        </div>
      </div>
    </Layout>
  );
};

export default Explorar;