webpackJsonp([11],{"9aQe":function(e,s){},RtdA:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("3nlj"),o=a("Hj6f"),r=a("9rMa"),i=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},n={data:function(){return{havePage:!1,mainarea:!1,slidename:"slide-go"}},components:{Headersec:t.a,Nopage:o.a},computed:i({},Object(r.b)(["this.$store.state.address","this.$store.state.chooseaddress","this.$store.state.ischoose","this.$store.state.comname"])),mounted:function(){this.mainarea=!0,0===this.$store.state.address.length?this.havePage=!1:this.havePage=!0,"addressadd"===this.$store.state.comname?this.slidename="slide-back":this.slidename="slide-go",this.setComname("address")},methods:i({onAddAddress:function(){this.$router.push("./addaddress")},onChooseAddress:function(e){1==this.$store.state.ischoose&&(this.setChooseaddress(e),this.$router.push("./orderwait"),this.setIschoose(2))}},Object(r.c)({setChooseaddress:"SET_CHOOSEADDRESS",setIschoose:"SET_ISCHOOSE",setComname:"SET_COMNAME"}))},d={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"page"},[a("headersec",{attrs:{tabname:"我的地址"}}),e._v(" "),a("transition",{attrs:{name:e.slidename}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.mainarea,expression:"mainarea"}],staticClass:"container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.havePage,expression:"!havePage"}]},[a("nopage")],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.havePage,expression:"havePage"}]},e._l(this.$store.state.address,function(s){return a("div",{staticClass:"address-item",on:{click:function(a){e.onChooseAddress(s)}}},[a("p",[e._v(e._s(s))])])}))])]),e._v(" "),a("div",{staticClass:"pageBottom",on:{click:e.onAddAddress}},[a("span",{staticClass:"tabbar-label"},[e._v("新增地址")])])],1)},staticRenderFns:[]};var c=a("8AGX")(n,d,!1,function(e){a("9aQe")},"data-v-175de24c",null);s.default=c.exports}});