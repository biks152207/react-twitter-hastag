import React, {Component} from 'react';
import 'whatwg-fetch';
import Search from './Search';
import List from './List';
import Loading from './Loading';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tweets: [],
      loading: false
    }
    this.tweetSearch = this.tweetSearch.bind(this);
    this.save = this.save.bind(this);
  }
  tweetSearch(event){
    if (event.key == 'Enter'){
      this.setState({loading: true});
      $.ajax({
        type: 'GET',
        url: '/twitter',
        data: {search: event.target.value},
        success: function(json_results) {
           var tweets = json_results.statuses;
           console.log(tweets);
           this.setState({tweets: tweets});
           this.setState({loading: false});

         }.bind(this),
        error: function(error){
          this.setState({loading: false});
        }.bind(this)
      })

    }
  }
  save(id, text){
    var newChange = this.state.tweets.filter((tweet) =>{
      if (tweet.id == id){
        tweet.text = text;
      }
      return true;
    })
    this.setState({tweets: newChange});
  }
  render() {
    var loading;
    if (this.state.loading){
      loading = <Loading/>;
    }else{
      loading = '';
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-5">
            <h3>Twitter search</h3>
          </div>
        </div>
        <div className="row">
          <Search tweetSearch={this.tweetSearch}/>
        </div>
        <br/>
        {loading}
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <ul className="list-group">
            {
              this.state.tweets.map((tweet, key) =>{
                return <List key={tweet.id} name={tweet.text} id={tweet.id} save={this.save}/>
              })
            }
            </ul>

          </div>
        </div>
      </div>
    );
  }
}
export default App;
