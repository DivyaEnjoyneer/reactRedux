import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY='AIzaSyAjHlX5a6w5N4QcglGdFw5ahtVaDCQrDFY';

//create a component which produce some HTML
class App extends Component{
  constructor(props){
    super(props);

    this.state={ videos: [] };
    YTSearch({key: API_KEY,term: 'surfboards'}, (videos) => {
      this.setState({videos});
  });

  }
  render(){
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


//place the component's HTMl on the page (in DOM)
ReactDOM.render(<App />,document.querySelector('.container'));
