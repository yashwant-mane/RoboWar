(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(1),l=a(2),s=a(4),h=a(3),u=a(5),m=(a(14),a(15),function(e){var t=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-red dib br3 pa3 ma3 grow bw2 shadow-5 tc"},r.a.createElement("img",{alt:"robo",src:"https://robohash.org/".concat(t,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))}),d=function(e){var t=e.robots.map((function(e){return r.a.createElement(m,{name:e.name,email:e.email})}));return r.a.createElement("div",null,t)},b=function(e){var t=e.onChangeSearch;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",placeholder:"Search Player",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"720px"}},e.children)},E=function(e){return r.a.createElement("div",{style:{position:"sticky",top:"0",width:"100%"}},e.children)},f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState.hasError({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went erong our side"):this.props.children}}]),t}(n.Component),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).readSearchContent=function(t){e.setState({searchField:t.target.value})},e.componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({roboData:t})}))},e.state={roboData:[],searchField:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.roboData.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.roboData?r.a.createElement("div",null,r.a.createElement("h1",{className:"tc"},"Fetching data")):r.a.createElement("div",{className:"tc"},r.a.createElement(E,null,r.a.createElement("h1",null,"Robo War Participants"),r.a.createElement(b,{onChangeSearch:this.readSearchContent}),r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(d,{robots:t})))))}}]),t}(n.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.6b4a6504.chunk.js.map