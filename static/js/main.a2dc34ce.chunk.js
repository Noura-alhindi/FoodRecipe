(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){e.exports=a(25)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),o=a.n(r),i=(a(22),a(5)),s=a(6),l=a(9),h=a(7),u=a(10),p=(a(23),a(13),a(29)),m=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={},a.handleChange=function(e){a.setState({value:e.target.value})},a.submit=function(){a.props.search(a.state.value)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"title"}),c.a.createElement("div",{className:"searchingBar"},c.a.createElement("input",{className:"searchBox",placeholder:"   I Want To Make ...",onChange:this.handleChange}),c.a.createElement(p.a,{onClick:this.submit,className:"search newBtn"}," Search")))}}]),t}(n.Component),d=a(27),f=a(26),w=a(28),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(f.a,null,c.a.createElement(d.a,null,c.a.createElement(w.a,{xs:6,md:4},c.a.createElement("div",{className:"card"},c.a.createElement("img",{alt:"",className:"Pic",src:this.props.recipes.image_url,width:"300px",height:"300px"}),c.a.createElement("div",{className:"detail"},c.a.createElement("p",null,this.props.recipes.title.length<20?"".concat(this.props.recipes.title):"".concat(this.props.recipes.title.substring(0,25),"...")),c.a.createElement("h6",null,"Publisher:  ",c.a.createElement("h7",null,this.props.recipes.publisher)),c.a.createElement("a",{href:this.props.recipes.source_url},"View Recipe")))))))}}]),t}(n.Component),v=(a(24),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={recipeShow:[]},a.handleSearch=function(e){var t="https://www.food2fork.com/api/search?key=ae4094d32b86720d5ae572f751c926d0&q=".concat(e,"&count=27 ");fetch(t).then(function(e){e.json().then(function(e){console.log(e),a.setState({recipeShow:e.recipes})})})},a.componentDidMount=function(){fetch("https://www.food2fork.com/api/search?key=ae4094d32b86720d5ae572f751c926d0   ").then(function(e){e.json().then(function(e){console.log(e),a.setState({recipeShow:e.recipes})})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.recipeShow.map(function(e){return c.a.createElement(b,{recipes:e})});return console.log(e),c.a.createElement("div",{className:"App"},c.a.createElement(m,{search:this.handleSearch}),e)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.a2dc34ce.chunk.js.map