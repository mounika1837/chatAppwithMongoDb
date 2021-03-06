import alt from "../alt.js"
import http from "superagent"

class chatActions {

  updateMessages(payload) {
    return (dispatch) => {
      http
        .post('/api/chats/sendMessage')
        .set('Content-Type', 'application/json')
        .query(payload)
        .send(payload)
        .end((err, res) => this.handleResponse(err, res, dispatch));
      };
  }

  handleResponse(error, result, dispatch) {
    if (error) {
      console.log('An error occurred:', error);
      alert('An error occurred: ', error);
      return;
    }

    dispatch({
      data: result.body
    });
  }
}

export default alt.createActions(chatActions);
