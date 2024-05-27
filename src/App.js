import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random color';
import StarRating from "./components/star rating"
import ImageSlider from './components/image slider';
import LoadMoreData from './components/load more';
import TreeVeiw from './components/tree veiw';
import menus from './components/tree veiw/data';
import QrCodeGenerator from './components/QR code';
import DarkTheme from './components/dark theme';
import ScrollIndicator from './components/scroll indicator';

function App() {
  return (
    <div className="App">
      <Accordian></Accordian>
      <RandomColor></RandomColor>
      <StarRating></StarRating>
      <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}></ImageSlider>
      <LoadMoreData></LoadMoreData>
      <TreeVeiw menus={menus}></TreeVeiw>
      <QrCodeGenerator></QrCodeGenerator>
      <DarkTheme></DarkTheme>
      <ScrollIndicator url={'https://dummyjson.com/products?limit=30'}></ScrollIndicator>

    </div >
  );
}

export default App;
