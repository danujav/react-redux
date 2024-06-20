import { Outlet } from "react-router";
import Header from "../components/page/Header";
import { Provider } from "react-redux";
import store from "../data/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <Header />
      <section id="content">
        <Outlet />
      </section>
    </Provider>
  );
}
