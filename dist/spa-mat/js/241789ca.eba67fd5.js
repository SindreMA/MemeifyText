(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["241789ca"],{"3e63":function(t,n,e){"use strict";var a=e("a2b1"),s=e.n(a);s.a},8041:function(t,n,e){"use strict";var a=e("cddb"),s=e.n(a);s.a},"8b24":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"MainWindow"},[e("q-input",{attrs:{"stack-label":"Text input"},model:{value:t.text,callback:function(n){t.text=n},expression:"text"}}),e("h5",[t._v(t._s(t.ToCoolText(t.text)))]),e("img",{attrs:{src:"https://cdn.discordapp.com/attachments/293322254727512065/547001780483915786/unknown.png",alt:"",srcset:""}})],1)},s=[];a._withStripped=!0;e("aef6"),e("f559"),e("28a5");var i={name:"PageIndex",data:function(){return{text:""}},methods:{ToCoolText:function(t){for(var n="",e=t.split(" "),a=0;a<e.length;a++){for(var s=e[a],i="",o=0;o<s.length;o++){var r=s[o];this.isOdd(o)&&(r=r.toUpperCase()),i+=r}s.startsWith(":")&&s.endsWith(":")&&(i=s),n+=i+" "}return n},isOdd:function(t){return 1==Math.abs(t%2)}}},o=i,r=(e("8041"),e("3e63"),e("2877")),c=Object(r["a"])(o,a,s,!1,null,null,null);c.options.__file="Index.vue";n["default"]=c.exports},a2b1:function(t,n,e){},cddb:function(t,n,e){}}]);