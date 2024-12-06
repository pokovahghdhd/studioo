import Icon from "../src/img/11.svg"
import arrowleftIcon from "../src/img/ArrowLeft.svg"
import arrowrightIcon from "../src/img/ArrowRight.svg"
import diIcon from "../src/img/BI.svg"
import button1Icon from "../src/img/Button1.svg"
import buttonIcon from "../src/img/Button.svg"
import dotsIcon from "../src/img/Dots.svg"
import fbIcon from "../src/img/FB.svg"
import frame48Icon from "../src/img/Frame48.svg"
import frame49Icon from "../src/img/Frame49.svg"
import frame50Icon from "../src/img/Frame50.svg"
import frame51Icon from "../src/img/Frame51.svg"
import frame72Icon from "../src/img/Frame72.svg"
import hbIcon from "../src/img/HB.svg"
import frame35Icon from "../src/img/Frame35.svg"
import image1Icon from "../src/img/image1.svg"
import image2Icon from "../src/img/image2.svg"
import image3Icon from "../src/img/image3.svg"
import kfIcon from "../src/img/KF.svg"
import model111Icon from "../src/img/model111.svg"
import model11Icon from "../src/img/model11.svg"
import numeroIcon from "../src/img/Numero.svg"
import screenshotIcon from "../src/img/Screenshot.svg"
import shirt1Icon from "../src/img/shirt1.svg"
import subtractIcon from "../src/img/Subtract.svg"
import untitled21 from "../src/img/Untitled21.svg"
import untitled41 from "../src/img/Untitled41.svg"
import dots1Icon from "../src/img/Dots1.svg"
import vector1Icon from "../src/img/Vector1.svg"
import frame36Icon from "../src/img/Frame36.svg"
import frame37Icon from "../src/img/Frame37.svg"
import productIcon from "../src/img/Product.svg"
import frame38Icon from "../src/img/Frame38.svg"
import frame39Icon from "../src/img/Frame39.svg"
import groupIcon from "../src/img/Group.svg"
import frame71Icon from "../src/img/Frame71.svg"

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={dotsIcon}></img>
        <strong>SUMMER SALE UP TO 50% OFF</strong>
        <img src={dots1Icon}></img>
      </header>
      <div className="h1">
          <strong style={{ fontSize: '150px' }}>FIRST</strong>
          <img src={subtractIcon}></img>
          <strong style={{ fontSize: '150px' }}>LIHGT</strong>
      </div>
      <div>
        <img src={screenshotIcon} style={{ width: '100%' }}></img>
      </div>
      <div className="h2">
        <p>VIEW COLLECTION</p>
      </div>
      <div className="h3">
        <img src={vector1Icon}></img>
      </div>
      <div className="h4">
        <strong style={{ fontSize: '40px' }}>Spring Season</strong>
      </div>
      <div className="h5">
        <img src={numeroIcon}></img>
        <img src={diIcon}></img>
        <img src={kfIcon}></img>
        <img src={fbIcon}></img>
        <img src={hbIcon}></img>
      </div>
      <div className="h6">
        <img src={frame35Icon} style={{ width: '50%' }}></img>
        <button className="h7" style={{ width: '10%' }}>Shop Shirts</button>
        <img src={image1Icon} style={{ width: '50%'}}></img>
      </div>
      <div className="h8">
        <img src={Icon}></img>
        <button className="h9" style={{ width: '30%' }}>Shop Shirts</button>
      </div>
      <div className="h10">
        <img src={frame36Icon}></img>
      </div>
      <div className="h11">
        <img src={frame37Icon}></img>
      </div>
      <div className="h12">
        <img src={frame38Icon}></img>
      </div>
      <div className="h13">
        <img src={productIcon}></img>
      </div>
      <div className="h14">
        <strong className="h15" style={{ fontSize: '40px' }}>We always have your back</strong>
        <img src={frame39Icon}></img>
      </div>
      <div className="h16">
        <img src={groupIcon}></img>
      </div>
      <div className="h17">
        <img src={frame71Icon}></img>
      </div>
    </div>
  );
}

export default App;