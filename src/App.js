import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";

//Para las rutas
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*
  Estructuras para redux:
    1. Importar el store creado.
    2. Importar el Provider de react-redux
    3. Si tenemos Rutas dentro de esta se declara el Provider pasando como atributo el store.
*/
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Router>
      <Provider store={store}>
          <Header />
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/contacto" component={Formulario} />
          </Switch>
      </Provider>
    </Router>
  );
}

export default App;
