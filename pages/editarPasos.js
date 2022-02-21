import Layout from "components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from "components/image";




const editarPasos = () => {
return (
<Router>
<li>
<Link to="/image"> Image </Link> 
</li>    
<Switch>
<Route path="/Image" component={Image} />
</Switch>

</Router>

);

  
};

export default editarPasos;
