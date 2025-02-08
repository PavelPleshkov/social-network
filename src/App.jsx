import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Profile from './Components/Profile';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
