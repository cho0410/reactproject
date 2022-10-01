import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import PortCont from "../includes/PortCont";
import axios from "axios";

// function Portfolio() {
//   return (
//     <>
//       <Header/>
//       <Contents>
//         <Title  title={["Portfolio","Api"]}/>
//         <PortCont />
//         <Contact />
//       </Contents>
//       <Footer/>
//     </>
//   )
// }

//함수형 클래스
class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [],
  };

  mainAnimation = () => {};

  //데이터 불러오기,객체구조분해할당
  getPorts = async () => {
    const {
      data: {
        data: { ports },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/dothome1/portfolio.json"
    );
    //console.log(ports);
    this.setState({ ports: ports });
  };

  //생명주기 함수
  componentDidMount() {
    console.log("시작");
    this.getPorts();
  }

  render() {
    const { ports } = this.state;

    return (
      <>
        <Header />
        <Contents>
          <Title title={["Portfolio", "Api"]} />
          <PortCont ports={ports} />
          <Contact />
        </Contents>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
