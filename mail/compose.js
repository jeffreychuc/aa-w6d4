const MessageStore = require('./message_store');

class Compose {
  constructor() {

  }

  render() {
    const div = document.createElement('div');
    div.className = 'new-message';
    div.innerHTML = this.renderForm();
  }

  renderForm() {
    const draft = MessageStore.getMessageDraft();
    const formString =
    `<p class='new-message-header'>New Message</p>
     <form class='compose-form'>`;
    return formString;
  }
}

module.exports = Compose;
