/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Content from "./component/Content";
import Header from "./component/Header";
import RoyxatdanOtish from "./component/RoyxatdanOtish";
import mohirdev from "./images/mohir-dev.png";
import mohirdevLogo from "./images/mohidev-logo-removebg-preview.png";
import ContentPraktikum from "./component/ContentPraktikum";
import praktikumImg1 from "./images/content-praktikum/data_science-1.jpg";
import praktikumImg2 from "./images/content-praktikum/full_stack_python-1.jpg";
import praktikumImg3 from "./images/content-praktikum/MERN-1.jpg";
import praktikumImg4 from "./images/content-praktikum/frontend-1.jpg";
import praktikumImg5 from "./images/content-praktikum/java-1.jpg";
import praktikumImg6 from "./images/content-praktikum/smm-1-1.jpg";
import praktikumImg7 from "./images/content-praktikum/webdesign.jpg";
import praktikumImg8 from "./images/content-praktikum/candpython-1.jpg";
import praktikumImg9 from "./images/content-praktikum/digital_marketing-1.jpg";
import HTml_and_css from "./component/Html_and_css";
import htmldaDasturlash from "./images/Html and css/htmlda-dasturlash.jpg";
import cssdaDasturlash from "./images/Html and css/CSS-boyicha-mukammal-kurs.jpg";
import bootstrapdaDasturlash from "./images/Html and css/Bootstrap-boyicha-mukammal-kurs.jpg";
import html45MInute from "./images/Html and css/45-minutda-HTML.jpg";
import BadriddinovKurslar from "./component/BadriddinovKurslar";
import Reactjs from "./images/BadriddinovKurslar/Javascript-toliq-kursi.jpg";
import Javascript from "./images/BadriddinovKurslar/Javascript-toliq-kursi.jpg";
import TelegramBot from "./images/Python kurslari/telegram bot.jpg";
import Algoritmlar from "./images/Python kurslari/Malumotlar-tuzilmasi-va-algoritmlar.jpg";
import PythonAsoslari from "./images/Python kurslari/Pythonda-dasturlash-asoslari.jpg";
import Django from "./images/Python kurslari/Django-3-kursi.jpg";
import PythonKurslari from "./component/PythonKurslari";
import TaklifKurslar from "./component/TaklifKurslar";
import ProfessionalNodeJs from "./images/Taklif kurslar/professional node js.jpg";
import MukammalTelegramBot from "./images/Taklif kurslar/mukammal telegram bot.jpg";
import PhpDasturlash from "./images/Taklif kurslar/PHP-dasturlash-asoslari.jpg";
import loyihalar from "./images/Taklif kurslar/versatka-kursi.jpg";
import C from "./images/Taklif kurslar/C-dasturlash-asoslari.jpg";
import JavascriptToliq from "./images/Taklif kurslar/Javascript-toliq-kursi.jpg";
import TypeScript from "./images/Farhod Dadajonov darslari/Typescript-asoslari.jpg";
import ASP from "./images/Farhod Dadajonov darslari/ASP-net-core-kursi.jpg";
import GO from "./images/Farhod Dadajonov darslari/Go-dasturlash-tili-asoslari.jpg";
import Tensor from "./images/Farhod Dadajonov darslari/TensorflowJS-ga-kirish.jpg";
import Docker from "./images/Farhod Dadajonov darslari/Docker-kursi.jpg";
import Git from "./images/Farhod Dadajonov darslari/Git-boshqaruv-tizimi-kursi.jpg";
import Solid from "./images/Farhod Dadajonov darslari/SOLID-tamoyillari-haqida.jpg";
import FarhodDadajonov from "./component/FarhodDadajonov";
import FullStackReact from "./images/Javascript kurslari/Full-Stack-ReactJS-asoslari.jpg";
import FullStackJavascript from "./images/Javascript kurslari/Full-Stack-Javascript-asoslari.jpg";
import TypeScriptKurslari from "./images/Javascript kurslari/Typescript-asoslari.jpg";
import JavascriptToliq1 from "./images/Javascript kurslari/Javascript-toliq-kursi.jpg";
import JavascriptComponent from "./component/JavascriptComponent";
import AndroidStudio from "./images/Android va flutter/Android-studio-retroit-bilan-ishlash.jpg";
import Xcode from "./images/Android va flutter/xcode-oddiy-test-ilovasini-ishlab-chiqish.jpg";
import Flutter from "./images/Android va flutter/Flutter-asoslari.jpg";
import Kotlin from "./images/Android va flutter/kotlin-asoslari.jpg";
import MobilAndroid from "./component/MobilAndroid";
import KonsultatsiyaOlish from "./component/KonsultatsiyaOlish";
import UzbekistanFlag from "./images/Flag/Flag_of_Uzbekistan.svg";
import bepultKurslar from "./images/Kategoriyalar/bepul kurslar kategoriya.jpg";
import htmlCSsBootstrap from "./images/Kategoriyalar/html-css-bootstrap-kategoriya.png";
import ReactjsKategoriya from "./images/Kategoriyalar/react kategoriya.png";
import JavascriptKategoriya from "./images/Kategoriyalar/Javascript-kategoriya.png";
import PythonKategoriya from "./images/Kategoriyalar/python kategoriya.png";
import MobilDasturlashKategoriya from "./images/Kategoriyalar/mobil dasturlash kategoriya.png";
import WebDasturlash from "./images/Kategoriyalar/webDasturlash.jpg";
import pullikKurslar from "./images/Kategoriyalar/pullik kurslar.jpg";
import Kategoriyalar from "./component/Kategoriyalar";
import Banner from "./component/Banner";
import Hamjamiyat from "./component/Hamjamiyat";
import BarchaMaqolalar from "./component/BarchaMaqolalar";
import PrintHelloWorld from "./images/Barcha maqolalar/print-hello-world.png";
import PythonMaqolalar from "./images/Barcha maqolalar/python.jpg";
import Kompyuter from "./images/Barcha maqolalar/laptop-fotr-developer.jpg";
import zoodPay from "./images/footer/Group-3730.png";
import Payme from "./images/footer/Payme.png";
import Click from "./images/footer/Click.png";
import Visa from "./images/footer/visa.png";
import MasterCard from "./images/footer/mastercard.png";

function App() {
  const [class1, setClass1] = useState("hidden1");
  const [class2, setClass2] = useState("");
  const [allPraktikumImg, setAllpraktikumimg] = useState({
    praktikumImg1: praktikumImg1,
    praktikumImg2: praktikumImg2,
    praktikumImg3: praktikumImg3,
    praktikumImg4: praktikumImg4,
    praktikumImg5: praktikumImg5,
    praktikumImg6: praktikumImg6,
    praktikumImg7: praktikumImg7,
    praktikumImg8: praktikumImg8,
    praktikumImg9: praktikumImg9,
  });

  const [allHtmlAndCssImage, setAllHtmlAndCssImage] = useState({
    htmldaDasturlash: htmldaDasturlash,
    cssdaDasturlash: cssdaDasturlash,
    bootstrapdaDasturlash: bootstrapdaDasturlash,
    html45MInute: html45MInute,
  });

  const [badriddinovKurs, setBadriddinovKurs] = useState({
    Reactjs: Reactjs,
    Javascript: Javascript,
  });

  const [allPythonKurslariImg, setAllPythonKurslariImg] = useState({
    TelegramBot: TelegramBot,
    Algoritmlar: Algoritmlar,
    PythonAsoslari: PythonAsoslari,
    Django: Django,
  });

  const [allTaklifKurslar, setAllTaklifKurslar] = useState({
    ProfessionalNodeJs: ProfessionalNodeJs,
    MukammalTelegramBot: MukammalTelegramBot,
    PhpDasturlash: PhpDasturlash,
    loyihalar: loyihalar,
    C: C,
    JavascriptToliq: JavascriptToliq,
  });

  const [allFarhodDadajonovKurslar, setAllFarhodDadajonovKurslar] = useState({
    TypeScript: TypeScript,
    ASP: ASP,
    GO: GO,
    Tensor: Tensor,
    Docker: Docker,
    Git: Git,
    Solid: Solid,
  });

  const [JavascriptKurslari, setJavascriptKurslari] = useState({
    FullStackReact: FullStackReact,
    FullStackJavascript: FullStackJavascript,
    TypeScriptKurslari: TypeScriptKurslari,
    JavascriptToliq1: JavascriptToliq1,
  });

  const [mobilFlutter, setMobilFlutter] = useState({
    AndroidStudio: AndroidStudio,
    Xcode: Xcode,
    Flutter: Flutter,
    Kotlin: Kotlin,
  });

  const [kategoriya, setKategoriya] = useState({
    bepultKurslar: bepultKurslar,
    htmlCSsBootstrap: htmlCSsBootstrap,
    ReactjsKategoriya: ReactjsKategoriya,
    JavascriptKategoriya: JavascriptKategoriya,
    PythonKategoriya: PythonKategoriya,
    MobilDasturlashKategoriya: MobilDasturlashKategoriya,
    WebDasturlash: WebDasturlash,
    pullikKurslar: pullikKurslar,
  });

  const [maqolalar, setMaqolalar] = useState({
    PrintHelloWorld: PrintHelloWorld,
    PythonMaqolalar: PythonMaqolalar,
    Kompyuter: Kompyuter,
  });

  const [footer, setFooter] = useState({
    zoodPay: zoodPay,
    Payme: Payme,
    Click: Click,
    Visa: Visa,
    MasterCard: MasterCard,
  });

  function addClass1() {
    setClass1("royxatdan-otish");
    setClass2("background2");
  }

  function removeClass1() {
    setClass1("royxatdan-otish hidden");
    setClass2("");

    setTimeout(() => {
      setClass1("hidden1");
    }, 900);
  }

  return (
    <>
      <div className="content-banner">
        <div className="background"></div>
        <div onClick={removeClass1} className={class2}></div>
        <Header image={mohirdevLogo} addClass1={addClass1} />
        <Content img={mohirdev} />
        <RoyxatdanOtish class1={class1} removeClass1={removeClass1} />
      </div>
      <ContentPraktikum allPraktikumImg={allPraktikumImg} />
      <HTml_and_css allHtmlAndCssImage={allHtmlAndCssImage} />
      <BadriddinovKurslar badriddinovKurs={badriddinovKurs} />
      <PythonKurslari allPythonKurslariImg={allPythonKurslariImg} />
      <TaklifKurslar allTaklifKurslar={allTaklifKurslar} />
      <FarhodDadajonov allFarhodDadajonovKurslar={allFarhodDadajonovKurslar} />
      <JavascriptComponent JavascriptKurslari={JavascriptKurslari} />
      <MobilAndroid mobilFlutter={mobilFlutter} />
      <KonsultatsiyaOlish UzbekistanFlag={UzbekistanFlag} />
      <Kategoriyalar kategoriya={kategoriya} />
      <Banner />
      <Hamjamiyat />
      <BarchaMaqolalar maqolalar={maqolalar} footer={footer} />
    </>
  );
}

export default App;
