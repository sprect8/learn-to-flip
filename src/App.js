import React from 'react';
import './App.css';
import Card from './components/Card';

const App = React.createClass({
  getInitialState: function() {
    console.log("Set initial state");
    return {title: "", desc:"", subject: {content:[]}};
  },

  componentDidMount: function () {
    console.log("Component mounted");
    fetch("/subject/scrum.json").then(async r => {
      const response = await r.json();
      // let response = await r.text();
      // response = response.split("\n");
      // response = response.splice(1);
      // console.log(response);
      // const data = [];

      // response.forEach(e=>{
      //   e = e.split("\t");
      //   const id = e[0].replace("\"", "");
      //   const fTitle = e[2].replace("\"", "");
      //   const fContent = e[3].replace("\"", "");
      //   const bTitle = e[4].replace("\"", "");
      //   const bContent = e[5].replace("\"", "");
      //   data.push({
      //     id: id,
      //     front: {
      //       title: fTitle,
      //       content: fContent,
      //     },
      //     back:{
      //       title: bTitle,
      //       content: bContent
      //     }
      //   })
      // });

      // console.log(data);

      this.setState({
        subject: response,
        title: response.courseName,
        desc: response.courseDescription,
      });
    });
  },

  render: function () {
    return (
      <div className="App">
        <header className="branding padbox">
          <h1>{this.state.title}</h1>
          <h2>{this.state.desc}</h2>
        </header>
        {this.state.subject.content.map((e, i)=>{
          return <Card key={"key" + i} {...e} />
        })}
        
      </div>
    );
  },
});

// function App() {
//   return (
//     <div className="App">
//       <header class="branding padbox">
//         <h1>react-flipcard</h1>
//         <h2>React flip card component</h2>
//       </header>
//       <Card />
//     </div>
//   );
// }

export default App;
