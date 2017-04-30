
const Route = class Route {
  constructor(req, res) {
    if (req && res) 
    {
       this.url = req;
       if( typeof(res)=== "function")
          this.callback = res;
        else
        this.view = res;
    }   
  }  
};

module.exports = Route;
