import Layout from "components/layout/Layout";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { clases } from "data/clase";
import { useState } from "react";
import { Divider } from "@material-ui/core";

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
  const [actual, setactual] = useState(clases.find(v=>v.id===1));
  const classes = useStyles();
  return (
    <Layout
      title="Clases"
      description="Clases y Coreos"
    >
      <div className="categorias">
        <div className="margin-0 clases-container">
          <div className="titulo">{actual.titulo}</div>
          <div className="cabecera row">
            <div className="soparar dato col-3 col-xs-6">Fecha:</div>
            <div className="info col-3 col-xs-6">{actual.fecha}</div>
            <div className="dato col-3 col-xs-6">Autor:</div>
            <div className="info col-3 col-xs-6">{actual.autor}</div>
            <div className="dato desc-titulo col-md-2 col-xs-12">Descricpion: </div>
            <div className="info desc col-md-10 col-xs-12">{actual.descripcion}</div>
          </div>
          <Divider/>
          <div className="row">
            <div className="pasos col-12">Pasos de centro</div>
            {actual["pasos de centro"].pasos.map((data,key) => { return (           
             <div className="tarjeta-clase col-md-4 col-sm-12">
                <img className="paso-img" src={data.paso} />
                <div>Observacion: {data.obs}</div>
             </div>
          )})}
          </div>
          <div className="row">
            <div className="pasos dato col-12">Pasos de equilibrio</div>
            {actual["pasos de equilibrio"].pasos.map((data,key) => { return (           
             <div className="tarjeta-clase col-md-4 col-sm-12">
                <img className="paso-img" src={data.paso} />
                <div>Observacion: {data.obs}</div>
             </div>
          )})}
          </div>
          <div className="row margin-bottom">
            <div className="pasos col-12">Danzas tradicionales</div>
            {actual["danzas tradicionales"].danzas.map((data,key) => { return (           
             <div>
                <div>{data.Danza}</div>
             </div>)})}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clase;