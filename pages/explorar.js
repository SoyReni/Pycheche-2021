import Layout from "components/layout/Layout";
import { categorias } from "data/categoria";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom"

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

const Explorar = () => {
  const classes = useStyles();
  return (
    <Layout
      title="Explorar"
      description="Explorar categorias"
    >
      <div className="">
        <div className="row margin-0">
          {categorias.map((data,key) => { return (           
            <Button href="/clases" key={key}  className="col-md-3 col-sm-6 margin-0 padding-0">
                <div className="categoria">
                  <div className="titulo-categoria">
                      {data.nombre}
                  </div>
                  <div>
                    <img src=""/>
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