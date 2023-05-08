import './App.css';
import SideNav from './components/SideNav'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SideNav></SideNav>
      <Content></Content>
    </div>
  );
}

export default App;
