import React,{ Component } from 'react';

import logo from '../../assets/img/logo_opflix.png';
import { Link } from "react-router-dom";
import '../../assets/css/home.css'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class localizacao extends Component {
constructor(){
super();
this.state ={
localizacoes:[],
}
}
componentDidMount() {
this.trazerLocalizacao();
}
trazerLocalizacao() {
fetch("http://192.168.3.201:5000/api/localizacoes", {
headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix') },
"Content-Type": "application/json",
"Accept": "application/json"
})
.then(respose => respose.json())
.then(data => this.setState({ localizacoes: data }))
.catch(err => console.log(err));
}
displayMarkers = () => {
return this.state.localizacoes.map((store, index) => {
return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }} onClick={()=> console.log(store)} />
    })
    }





    render(){
    return(
        <div className="App">
    <div className="nav">
        <ul>
            <Link to="/dashboardfilme
          ">
            <li>Lancamentos</li>
            </Link>

            <Link to="/localizacao">
            <li>localizacao</li>
            </Link>
        </ul>


        <img src={logo} width="100px" height="50%" />

        <div className="login">
            <ul>
                <li>Bem vindo ...</li>
                <li>
                    <Link to="/">Deslogar</Link>
                </li>
            </ul>
        </div>

    </div>


    <div>
        <h3
            style={{  color: "black", textAlign: "center",  fontFamily: "Fredoka One, cursive", fontSize: "30px"}}
            Localizações/>
        <Map google={this.props.google} zoom={5}
          center= {(-13.6632305, -69.6410913)}
           style={mapStyles}
            initialCenter={{ lat: -18.512178, lng:-44.5550308 }}
            >
            {this.displayMarkers()}
        </Map>
    </div>
</div>
    );
    }
    }

    export default GoogleApiWrapper({
    })(localizacao);

    const mapStyles = {
    width: '100%',
    height: '100%',
    
    
       };