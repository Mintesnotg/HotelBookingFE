import { Headernav } from "./components/navigation/headernav";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>

        <Toaster position="bottom-center" />

        <Headernav /> 
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        </footer>
   
    </>

  );
}
