(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{276:function(t,e,n){"use strict";e.a={NavBar:function(){return n.e(12).then(n.bind(null,284))},Jumbotron:function(){return n.e(7).then(n.bind(null,285))},DescCard:function(){return Promise.all([n.e(9),n.e(6)]).then(n.bind(null,286))},Header:function(){return Promise.all([n.e(8),n.e(11)]).then(n.bind(null,287))},Container:function(){return n.e(10).then(n.bind(null,288))}}},290:function(t,e,n){"use strict";n.r(e);n(156);var r=n(276),o=n(155),c={components:r.a,mixins:[o.default],computed:{blocks:function(){return this.$store.state.activeStory.content.body},navbar:function(){return this.$store.state.navbar.content}},fetch:function(t){var path;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return path=""==t.params.pathMatch?"home":t.params.pathMatch,e.next=3,regeneratorRuntime.awrap(t.store.dispatch("fetchStory",{context:t,path:path,callback:function(e){t.store.commit("setActiveStory",e.data.story)}}));case 3:return e.next=5,regeneratorRuntime.awrap(t.store.dispatch("fetchStory",{context:t,path:"navbar",callback:function(e){t.store.commit("setNavBar",e.data.story)}}));case 5:case"end":return e.stop()}}))},asyncData:function(t){return{path:t.params.pathMatch}}},l=n(25),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("NavBar",{directives:[{name:"editable",rawName:"v-editable",value:this.navbar,expression:"navbar"}],attrs:{data:this.navbar}})],1),this._v(" "),e("div",this._l(this.blocks,(function(t){return e(t.component,{directives:[{name:"editable",rawName:"v-editable",value:t,expression:"block"}],key:t._uid,tag:"component",attrs:{data:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);