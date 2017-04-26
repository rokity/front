
const Route = class Route {
  constructor(req, res) {
    if (req && res) {
      this.url = req;
      this.view = res;
    }
  }
};

module.exports = Route;
