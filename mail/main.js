const Router = require('./router');
const Inbox = require('./Inbox');
const Sent = require('./sent');

const routes = {
  inbox: Inbox,
  sent: Sent
};

document.addEventListener("DOMContentLoaded", function(event) {

  document.querySelectorAll('.sidebar-nav li').forEach((el)=>  {
    el.addEventListener('click', function(e)  {
      e.preventDefault();
      window.location.hash = `${el.innerText.toLowerCase()}`;
    });
  });

  const activeRouter = new Router(document.querySelector('.content'), routes);
  activeRouter.start();
});
