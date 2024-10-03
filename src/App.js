import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';

export class App extends Component{
pageSize=15;
apiKey = process.env.REACT_APP_NEWS_API;
  // const [progress,setProgress]=useState(0);
  render() {
    return (
      <div>
        <Router>
          <Navbar />
         <Routes>
         <Route path="/" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
         <Route path="/business" element={<News apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="us" category="business" />} />
         <Route path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
         <Route path="/general" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
         <Route path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />} />
         <Route path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" />} />
         <Route path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
         <Route path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
           
            </Routes>
        </Router>
      </div>
    );
  }
}
