import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddressManagement from './Components/Addressmanagement/Addressmanagement'
import { AddressProvider } from './Context/AddressContext/AddressContext';

function App() {
  return (
    <div>
      <AddressProvider>
        <AddressManagement />
      </AddressProvider>
     
      <ToastContainer />
    </div>
  );
}

export default App;
