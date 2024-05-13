import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import NavBar from "./store/NavBar";
import Welcome from "./store/Welcome";

function App() {

  const isLogin = useSelector(state=> state.auth.isLogin);

  return (
    <>
      <NavBar/>
      {
      !isLogin && <Welcome />
      }

      {
      isLogin && <Counter />
      }
    </>
  );
}

export default App;
