import React, { Component } from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import reducer from "./reducers";
import { muiTheme } from "./theme";
import MovieCatalog from "./MovieCatalog";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={muiTheme}>
            <MovieCatalog />
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
