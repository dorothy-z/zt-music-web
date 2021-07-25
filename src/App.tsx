import { memo, Suspense } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import routes from "./router";
import store from "./store";

import { HashRouter } from "react-router-dom";
import ZTAppHeader from "./components/AppHeader";
import ZTAppFooter from "./components/AppFooter";
import ZTAppPlayerBar from "./pages/Player/AppPlayerBar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ZTAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <ZTAppFooter />
        <ZTAppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
