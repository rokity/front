
const Route = class Route {
  constructor(req, res, con) {
    if (req && res) {
      this.url = req;
      if (typeof (res) === 'function') { this.callback = res; } else {
        this.view = res;
        if (con) {
          this.context = con;
        }
      }
    }
  }


};

module.exports = Route;
