import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";

const RootLayout = () => {
  return (
    <div className="">
      <section className="flex flex-col mx-auto min-h-screen  max-w-7xl">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="grow mx-5">
          <section>
            <Outlet></Outlet><ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            />
          </section>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </section>
    </div>
  );
};

export default RootLayout;
