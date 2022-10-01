import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import axios from "axios";

// function Reference() {
//   return (
//     <>
//       <Header/>
//       <Contents>
//         <Title title={["Referenc","Api"]}/>
//         <ReferCont/>
//         <Contact />
//       </Contents>
//       <Footer/>
//     </>
//   )
// }

class Reference extends React.Component {
  state = {
    refers: [],
  };

  getRefer = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/react2022/src/assets/json/refer.json"
    );
    // console.log("htmlRefer");
    this.setState({ refers: htmlRefer });
  };

  //생명주기 함수
  componentDidMount() {
    this.getRefer();
  }

  render() {
    const { refers } = this.state;
    return (
      <>
        <Header />
        <Contents>
          <Title title={["Referenc", "Api"]} />
          <ReferCont refers={refers} />
          <Contact />
        </Contents>
        <Footer />
      </>
    );
  }
}

export default Reference;
