webpackJsonp([1],[,,,,,,,,function(t,s,e){function i(t){e(217)}var a=e(2)(e(182),e(239),i,"data-v-4dcdada8",null);t.exports=a.exports},function(t,s,e){function i(t){e(216)}var a=e(2)(e(183),e(238),i,null,null);t.exports=a.exports},,,function(t,s,e){"use strict";e.d(s,"e",function(){return i}),e.d(s,"d",function(){return a}),e.d(s,"a",function(){return n}),e.d(s,"b",function(){return r}),e.d(s,"c",function(){return l});var i="SET_SELLER",a="SET_GOODS",n="ADD_TO_CART",r="REMOVE_FROM_CART",l="CLEAR_CART"},,,,,,function(t,s,e){function i(t){e(220)}var a=e(2)(e(173),e(242),i,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s,e){function i(t){e(222)}var a=e(2)(e(174),e(244),i,null,null);t.exports=a.exports},function(t,s,e){"use strict";var i=e(6),a=e.n(i),n=e(0),r=e.n(n);a.a.filter("time",function(t,s){return s=s||"YYYY-MM-DD HH:mm",r()(t).format(s)})},function(t,s,e){"use strict";var i=e(6),a=e.n(i),n=e(247),r=e(229),l=e.n(r),o=e(230),c=e.n(o),v=e(231),u=e.n(v);a.a.use(n.a);var d=new n.a({routes:[{path:"/",redirect:"/goods"},{path:"/goods",name:"Goods",component:l.a},{path:"/ratings",name:"Ratings",component:c.a},{path:"/seller",name:"Seller",component:u.a}],linkActiveClass:"active"});s.a=d},function(t,s,e){"use strict";var i=e(6),a=e.n(i),n=e(3),r=e(249),l=(e.n(r),e(171)),o=e(170),c=e(169);a.a.use(n.b);var v={};s.a=new n.b.Store({actions:v,modules:{seller:l.a,goods:o.a,cart:c.a},strict:!1,plugins:[]})},,function(t,s,e){function i(t){e(214)}var a=e(2)(e(172),e(236),i,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(6),a=e.n(i),n=e(150),r=e.n(n),l=e(147),o=e(149),c=e.n(o),v=e(148);e(146);a.a.use(c.a),new a.a({el:"#app",router:l.a,store:v.a,template:"<App/>",components:{App:r.a}})},function(t,s,e){"use strict";var i,a=e(13),n=e.n(a),r=e(12),l={added:[]},o={cartItems:function(t){return t.added},cartTotal:function(t){return t.added.reduce(function(t,s){return t+s.price*s.quantity},0)}},c={addToCart:function(t,s){(0,t.commit)(r.a,{food:s})},removeFromCart:function(t,s){(0,t.commit)(r.b,{food:s})},clearCart:function(t){(0,t.commit)(r.c)},checkout:function(t){(0,t.commit)(r.c)}},v=(i={},n()(i,r.a,function(t,s){var e=s.food,i=t.added.find(function(t){return t.name===e.name});i?i.quantity++:t.added.push({name:e.name,quantity:1,price:e.price})}),n()(i,r.b,function(t,s){var e=s.food,i=t.added.findIndex(function(t){return t.name===e.name});--t.added[i].quantity||t.added.splice(i,1)}),n()(i,r.c,function(t){t.added=[]}),i);s.a={state:l,getters:o,actions:c,mutations:v}},function(t,s,e){"use strict";var i=e(13),a=e.n(i),n=e(12),r=e(10),l=e.n(r),o={goods:[]},c={goods:function(t){return t.goods}},v={loadGoods:function(t){var s=t.commit;return l.a.get("static/data.json").then(function(t){s(n.d,{goods:t.data.goods})}).catch(function(t){console.log(t)})}},u=a()({},n.d,function(t,s){var e=s.goods;t.goods=e});s.a={state:o,getters:c,actions:v,mutations:u}},function(t,s,e){"use strict";var i=e(13),a=e.n(i),n=e(12),r=e(10),l=e.n(r),o={seller:{}},c={seller:function(t){return t.seller},minPrice:function(t){return t.seller.minPrice},deliveryPrice:function(t){return t.seller.deliveryPrice}},v={loadSeller:function(t){var s=t.commit;return l.a.get("static/data.json").then(function(t){s(n.e,{seller:t.data.seller})}).catch(function(t){console.log(t)})}},u=a()({},n.e,function(t,s){var e=s.seller;t.seller=e});s.a={state:o,getters:c,actions:v,mutations:u}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(234),a=e.n(i);s.default={components:{"v-header":a.a},created:function(){this.$store.dispatch("loadSeller")}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(5),a=e.n(i),n=e(3);s.default={props:{food:Object},computed:a()({},e.i(n.a)(["cartItems"]),{isFoodInCart:function(){var t=this;return this.cartItems.some(function(s){return s.name===t.food.name})}}),methods:a()({},e.i(n.d)(["removeFromCart","addToCart"]))}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{ratings:Array},data:function(){return{classifyTags:[{name:"全部",count:this.ratings.length,active:!0},{name:"推荐",count:this.ratings.filter(function(t){return 0===t.rateType}).length,active:!1},{name:"吐槽",count:this.ratings.filter(function(t){return t.rateType}).length,active:!1}],evalflag:!0}},computed:{evalArr:function(){var t=this,s=0;return this.classifyTags.forEach(function(t,e){t.active&&(s=e)}),this.$emit("refreshEval"),s?this.ratings.filter(function(e){return t.evalflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.ratings.filter(function(s){return!t.evalflag||s.text})}},watch:{ratings:function(){this._updateClassifyTags()}},methods:{_updateClassifyTags:function(){var t=this;this.classifyTags.forEach(function(s,e){s.count=e?t.ratings.filter(function(t){return t.rateType===e-1}).length:t.ratings.length})},toggleEvalFlag:function(){this.evalflag=!this.evalflag},filterEval:function(t){this.classifyTags.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(5),a=e.n(i),n=e(4),r=e.n(n),l=e(3),o=e(18),c=e.n(o),v=e(145),u=e.n(v);s.default={components:{CartControl:c.a,Evaluation:u.a},props:{food:Object},data:function(){return{showDetails:!1}},computed:a()({},e.i(l.a)(["cartItems"]),{isFoodInCart:function(){var t=this;return this.cartItems.some(function(s){return s.name===t.food.name})}}),methods:a()({},e.i(l.c)({addToCart:"ADD_TO_CART"}),{showToggle:function(){var t=this;this.showDetails=!this.showDetails,this.showDetails&&this.$nextTick(function(){t._initScroll()})},_initScroll:function(){this.detailsScroll?this.detailsScroll.refresh():this.detailsScroll=new r.a(this.$refs.detailsWrapper,{click:!0})},refreshScroll:function(){var t=this;this.detailsScroll&&this.$nextTick(function(){t.detailsScroll.refresh()})}})}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(5),a=e.n(i),n=e(4),r=e.n(n),l=e(3),o=e(8),c=e.n(o),v=e(233),u=e.n(v),d=e(18),f=e.n(d),p=e(228),_=e.n(p);s.default={components:{SupportIcon:c.a,ShopCart:u.a,CartControl:f.a,FoodDetails:_.a},data:function(){return{listHeight:[],foodsScrollY:0,selectedFood:""}},computed:a()({},e.i(l.a)(["seller","goods"]),{menuCurrentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.foodsScrollY>=s&&this.foodsScrollY<e)return t}return 0}}),created:function(){var t=this;this.$store.dispatch("loadGoods").then(function(){t.$nextTick(function(){t._initScroll(),t._calHeight()})})},methods:{_initScroll:function(){var t=this;this.menuScroll=new r.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new r.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("ratingsScroll",function(s){t.foodsScrollY=Math.abs(Math.round(s.y))})},_calHeight:function(){var t=this.$refs.foodsWrapper.querySelectorAll(".food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},menuClick:function(t){this.foodsScroll.scrollTo(0,-this.listHeight[t],300)},showFoodDetails:function(t){var s=this;this.selectedFood=t,this.$nextTick(function(){s.$refs.foodDetails.showToggle()})}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(5),a=e.n(i),n=e(10),r=e.n(n),l=e(4),o=e.n(l),c=e(3),v=e(9),u=e.n(v),d=e(145),f=e.n(d);s.default={components:{Star:u.a,Evaluation:f.a},data:function(){return{ratings:[]}},computed:a()({},e.i(c.a)(["seller"])),created:function(){this._init()},methods:{_init:function(){var t=this;r.a.get("static/data.json").then(function(s){t.ratings=s.data.ratings,t.$nextTick(function(){t._initScroller()})})},_initScroller:function(){this.ratingsScroll=new o.a(this.$refs.ratingsWrapper,{click:!0})},refreshScroll:function(){var t=this;this.ratingsScroll&&this.$nextTick(function(){t.ratingsScroll.refresh()})}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(4),a=e.n(i),n=e(9),r=e.n(n),l=e(8),o=e.n(l),c=e(3);s.default={data:function(){return{collectFlag:!1}},computed:e.i(c.a)(["seller"]),created:function(){var t=this;this.$nextTick(function(){t._initSellerScroll(),t._initPicsScroll()})},watch:{seller:function(){var t=this;this.$nextTick(function(){t.sellerScroll?t.sellerScroll.refresh():t._initSellerScroll(),t.picsScroll?t.picsScroll.refresh():t._initPicsScroll()})}},components:{Star:r.a,SupportIcon:o.a},methods:{_initSellerScroll:function(){this.sellerScroll=new a.a(this.$refs.sellerWrapper,{click:!0})},_initPicsScroll:function(){if(this.seller.pics){var t=this.seller.pics.length;this.$refs.picsList.style.width=120*t+6*(t-1)+"px",this.picsScroll=new a.a(this.$refs.picsWrapper,{scrollX:!0})}}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(9),a=e.n(i),n=e(8),r=e.n(n),l=e(4),o=e.n(l);s.default={components:{Star:a.a,SupportIcon:r.a},props:{seller:Object},data:function(){return{detailsShow:!1}},methods:{_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new o.a(this.$refs.sellerDetailsWrapper,{click:!0})},toggleShow:function(){var t=this;this.detailsShow=!this.detailsShow,this.detailsShow&&this.$nextTick(function(){t._initScroll()})}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(5),a=e.n(i),n=e(4),r=e.n(n),l=e(3),o=e(18),c=e.n(o);s.default={components:{CartControl:c.a},data:function(){return{balls:[].fill({show:!1},0,5),dropBalls:[],listShow:!1}},computed:a()({},e.i(l.a)(["cartItems","cartTotal","minPrice","deliveryPrice"]),{payDesc:function(){if(!this.cartTotal)return"￥"+this.minPrice+"起送";var t=this.minPrice-this.cartTotal;return t>0?"还差￥"+t+"元":"去结算"},checkoutEnabled:function(){return this.cartTotal>=this.minPrice}}),watch:{cartTotal:function(t){t||(this.listShow=!1)}},methods:a()({},e.i(l.d)(["clearCart","checkout"]),{toggleList:function(){var t=this;this.cartItems.length&&(this.listShow=!this.listShow,this.listShow&&this.$nextTick(function(){t.foodlistScroll?t.foodlistScroll.refresh():t._initScroll()}))},_initScroll:function(){this.foodlistScroll=new r.a(this.$refs.foodlist,{click:!0})}})}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(3),a=e(9),n=e.n(a),r=e(8),l=e.n(r),o=e(232),c=e.n(o);s.default={computed:e.i(i.a)(["seller"]),components:{Star:n.a,SupportIcon:l.a,SellerDetails:c.a},methods:{toggleSellerDetails:function(){this.$refs.sellerDetails.toggleShow()}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{supportType:Number,iconType:Number},computed:{iconMapType:function(){return"iconType-"+this.iconType}},data:function(){return{supportTypes:["decrease","discount","special","invoice","guarantee"]}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){function i(t){return e(a(t))}function a(t){var s=n[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}var n={"./af":30,"./af.js":30,"./ar":37,"./ar-dz":31,"./ar-dz.js":31,"./ar-kw":32,"./ar-kw.js":32,"./ar-ly":33,"./ar-ly.js":33,"./ar-ma":34,"./ar-ma.js":34,"./ar-sa":35,"./ar-sa.js":35,"./ar-tn":36,"./ar-tn.js":36,"./ar.js":37,"./az":38,"./az.js":38,"./be":39,"./be.js":39,"./bg":40,"./bg.js":40,"./bn":41,"./bn.js":41,"./bo":42,"./bo.js":42,"./br":43,"./br.js":43,"./bs":44,"./bs.js":44,"./ca":45,"./ca.js":45,"./cs":46,"./cs.js":46,"./cv":47,"./cv.js":47,"./cy":48,"./cy.js":48,"./da":49,"./da.js":49,"./de":52,"./de-at":50,"./de-at.js":50,"./de-ch":51,"./de-ch.js":51,"./de.js":52,"./dv":53,"./dv.js":53,"./el":54,"./el.js":54,"./en-au":55,"./en-au.js":55,"./en-ca":56,"./en-ca.js":56,"./en-gb":57,"./en-gb.js":57,"./en-ie":58,"./en-ie.js":58,"./en-nz":59,"./en-nz.js":59,"./eo":60,"./eo.js":60,"./es":62,"./es-do":61,"./es-do.js":61,"./es.js":62,"./et":63,"./et.js":63,"./eu":64,"./eu.js":64,"./fa":65,"./fa.js":65,"./fi":66,"./fi.js":66,"./fo":67,"./fo.js":67,"./fr":70,"./fr-ca":68,"./fr-ca.js":68,"./fr-ch":69,"./fr-ch.js":69,"./fr.js":70,"./fy":71,"./fy.js":71,"./gd":72,"./gd.js":72,"./gl":73,"./gl.js":73,"./gom-latn":74,"./gom-latn.js":74,"./he":75,"./he.js":75,"./hi":76,"./hi.js":76,"./hr":77,"./hr.js":77,"./hu":78,"./hu.js":78,"./hy-am":79,"./hy-am.js":79,"./id":80,"./id.js":80,"./is":81,"./is.js":81,"./it":82,"./it.js":82,"./ja":83,"./ja.js":83,"./jv":84,"./jv.js":84,"./ka":85,"./ka.js":85,"./kk":86,"./kk.js":86,"./km":87,"./km.js":87,"./kn":88,"./kn.js":88,"./ko":89,"./ko.js":89,"./ky":90,"./ky.js":90,"./lb":91,"./lb.js":91,"./lo":92,"./lo.js":92,"./lt":93,"./lt.js":93,"./lv":94,"./lv.js":94,"./me":95,"./me.js":95,"./mi":96,"./mi.js":96,"./mk":97,"./mk.js":97,"./ml":98,"./ml.js":98,"./mr":99,"./mr.js":99,"./ms":101,"./ms-my":100,"./ms-my.js":100,"./ms.js":101,"./my":102,"./my.js":102,"./nb":103,"./nb.js":103,"./ne":104,"./ne.js":104,"./nl":106,"./nl-be":105,"./nl-be.js":105,"./nl.js":106,"./nn":107,"./nn.js":107,"./pa-in":108,"./pa-in.js":108,"./pl":109,"./pl.js":109,"./pt":111,"./pt-br":110,"./pt-br.js":110,"./pt.js":111,"./ro":112,"./ro.js":112,"./ru":113,"./ru.js":113,"./sd":114,"./sd.js":114,"./se":115,"./se.js":115,"./si":116,"./si.js":116,"./sk":117,"./sk.js":117,"./sl":118,"./sl.js":118,"./sq":119,"./sq.js":119,"./sr":121,"./sr-cyrl":120,"./sr-cyrl.js":120,"./sr.js":121,"./ss":122,"./ss.js":122,"./sv":123,"./sv.js":123,"./sw":124,"./sw.js":124,"./ta":125,"./ta.js":125,"./te":126,"./te.js":126,"./tet":127,"./tet.js":127,"./th":128,"./th.js":128,"./tl-ph":129,"./tl-ph.js":129,"./tlh":130,"./tlh.js":130,"./tr":131,"./tr.js":131,"./tzl":132,"./tzl.js":132,"./tzm":134,"./tzm-latn":133,"./tzm-latn.js":133,"./tzm.js":134,"./uk":135,"./uk.js":135,"./ur":136,"./ur.js":136,"./uz":138,"./uz-latn":137,"./uz-latn.js":137,"./uz.js":138,"./vi":139,"./vi.js":139,"./x-pseudo":140,"./x-pseudo.js":140,"./yo":141,"./yo.js":141,"./zh-cn":142,"./zh-cn.js":142,"./zh-hk":143,"./zh-hk.js":143,"./zh-tw":144,"./zh-tw.js":144};i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id=226},,function(t,s,e){function i(t){e(224)}var a=e(2)(e(175),e(246),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(215)}var a=e(2)(e(176),e(237),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(219)}var a=e(2)(e(177),e(241),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(223)}var a=e(2)(e(178),e(245),i,"data-v-8a853c02",null);t.exports=a.exports},function(t,s,e){function i(t){e(221)}var a=e(2)(e(179),e(243),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(213)}var a=e(2)(e(180),e(235),i,"data-v-12248436",null);t.exports=a.exports},function(t,s,e){function i(t){e(218)}var a=e(2)(e(181),e(240),i,null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopCart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left",on:{click:t.toggleList}},[e("div",{staticClass:"logo-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.cartTotal,expression:"cartTotal"}],staticClass:"badge"},[t._v(t._s(t.cartTotal))]),t._v(" "),e("div",{staticClass:"logo",class:{active:t.cartTotal}},[e("i",{staticClass:"icon-shopping_cart"})])]),t._v(" "),e("div",{staticClass:"price",class:{active:t.cartTotal}},[t._v("￥"+t._s(t.cartTotal))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",class:{enough:t.cartTotal>=t.minPrice},attrs:{enabled:t.checkoutEnabled},on:{click:t.checkout}},[t._v(t._s(t.payDesc))])]),t._v(" "),e("transition",{attrs:{name:"transHeight"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.clearCart}},[t._v("清空")])]),t._v(" "),e("div",{ref:"foodlist",staticClass:"list-content"},[e("ul",t._l(t.cartItems,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.quantity))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cart-control",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"backdrop",on:{click:function(s){t.listShow=!1}}})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header"),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评价")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{class:i===t.menuCurrentIndex?"menu-item-selected":"menu-item",on:{click:function(s){t.menuClick(i)}}},[e("span",{staticClass:"text"},[e("support-icon",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],attrs:{supportType:s.type,iconType:4}}),t._v("\n          "+t._s(s.name)+"\n        ")],1)])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper",attrs:{id:"wrapper"}},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item",on:{click:function(e){t.showFoodDetails(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",[t._v(t._s(s.name))]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:s.description,expression:"food.description"}],staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"sell-info"},[e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"newPrice"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥{food.oldPrice}}")])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cart-control",{attrs:{food:s}})],1)])])}))])}))]),t._v(" "),e("shop-cart"),t._v(" "),t.selectedFood?e("food-details",{ref:"foodDetails",attrs:{food:t.selectedFood}}):t._e()],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"iconMap",class:[t.supportTypes[t.supportType],t.iconMapType]})},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description+" / "+t.seller.deliveryTime+"分钟送达")+"\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("div",{staticClass:"supports_desc"},[e("support-icon",{staticClass:"icon",attrs:{supportType:t.seller.supports[0].type,iconType:1}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])],1)]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.toggleSellerDetails}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length+"个"))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.toggleSellerDetails}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("seller-details",{ref:"sellerDetails",attrs:{seller:t.seller}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratingsWrapper",staticClass:"ratingsWrapper"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"mark"},[e("div",{staticClass:"num"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"text"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"contrast"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"stars"},[e("div",{staticClass:"serviceScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"foodScore"},[e("span",{staticClass:"text"},[t._v("餐品口味")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"deliveryTime"},[e("span",{staticClass:"text"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("evaluation",{attrs:{ratings:t.ratings},on:{refreshEval:t.refreshScroll},scopedSlots:t._u([{key:"evalDetails",fn:function(s){return[e("li",{staticClass:"eval"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.eval.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.eval.username))]),t._v(" "),e("span",{staticClass:"rateTime"},[t._v(t._s(t._f("time")(s.eval.rateTime)))])]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.eval.score}}),t._v(" "),e("span",{staticClass:"deliveryTime"},[t._v(t._s(s.eval.deliveryTime)+"分钟送达")])],1),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(s.eval.text))]),t._v(" "),e("div",{staticClass:"recommend"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.eval.recommend.length,expression:"props.eval.recommend.length"}],staticClass:"icon icon-thumb_up"}),t._v(" "),t._l(s.eval.recommend,function(s){return e("span",{staticClass:"dish"},[t._v(t._s(s))])})],2)])])]}}])})],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cart-control"},[e("transition",{attrs:{name:"fadeRotate"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isFoodInCart,expression:"isFoodInCart"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.removeFromCart(t.food)}}},[e("span",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isFoodInCart,expression:"isFoodInCart"}],staticClass:"cart-count"}),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addToCart(t.food)}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{ref:"sellerDetailsWrapper"},[t.detailsShow?e("div",{staticClass:"details"},[e("div",{staticClass:"details-content"},[e("div",{staticClass:"details-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item"},[e("support-icon",{staticClass:"icon",attrs:{supportType:s.type,iconType:2}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"details-close"},[e("i",{staticClass:"icon-close",on:{click:t.toggleShow}})])]):t._e()])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"evaluation"},[t._t("evalName"),t._v(" "),e("div",{staticClass:"classify"},t._l(t.classifyTags,function(s,i){return e("span",{staticClass:"item",class:{active:s.active,bad:2==i,badActive:s.active&&2==i},on:{click:function(e){t.filterEval(s)}}},[t._v("\n        "+t._s(s.name)+"\n        "),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),e("div",{staticClass:"switch",on:{click:t.toggleEvalFlag}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evalflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"eval-list"},[e("ul",[t._l(t.evalArr,function(s){return t._t("evalDetails",null,{eval:s})})],2)])],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sellerWrapper",staticClass:"seller-wrapper"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"rate-count"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("div",{staticClass:"collect",on:{click:function(s){t.collectFlag=!t.collectFlag}}},[e("span",{staticClass:"icon-favorite",class:{active:t.collectFlag}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.collectFlag?"已收藏":"收藏"))])])]),t._v(" "),e("div",{staticClass:"remark"},[e("div",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.minPrice))]),t._v("元\r\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\r\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\r\n          ")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"activities"},[e("div",{staticClass:"bulletin"},[e("h1",[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"supports"},[e("ul",t._l(t.seller.supports,function(s){return e("li",{staticClass:"item"},[e("support-icon",{attrs:{supportType:s.type,iconType:4}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}))]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-pics"},[e("h1",[t._v("商家实景")]),t._v(" "),e("div",{ref:"picsWrapper",staticClass:"pics-wrapper"},[e("div",{ref:"picsList"},t._l(t.seller.pics,function(t){return e("img",{attrs:{src:t,width:"120",height:"90"}})}))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-info"},[e("h1",[t._v("商家信息")]),t._v(" "),e("ul",{staticClass:"info-list"},t._l(t.seller.infos,function(s){return e("li",{staticClass:"info"},[t._v(t._s(s))])}))])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}],ref:"detailsWrapper",staticClass:"detailsWrapper"},[e("div",{staticClass:"foodDetails"},[e("div",{staticClass:"back",on:{click:t.showToggle}},[e("i",{staticClass:"icon-arrow_lift"})]),t._v(" "),e("img",{attrs:{src:t.food.image,height:"425",width:"100%"}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("span",[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(t.food.price)+"\n          "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"shopCart"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFoodInCart,expression:"!isFoodInCart"}],staticClass:"text",on:{click:function(s){t.addToCart({food:t.food})}}},[t._v("加入购物车")])])],1),t._v(" "),e("cart-control",{attrs:{food:t.food}})],1),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"desc"},[e("div",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(t.food.info))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("evaluation",{attrs:{ratings:t.food.ratings},on:{refreshEval:t.refreshScroll},scopedSlots:t._u([{key:"evalDetails",fn:function(s){return[e("li",{staticClass:"eval"},[e("div",{staticClass:"userInfo"},[e("div",{staticClass:"time"},[t._v(t._s(t._f("time")(s.eval.ratingTime)))]),t._v(" "),e("div",{staticClass:"user"},[e("span",[t._v(t._s(s.eval.username))]),t._v(" "),e("span",{staticClass:"avatar"},[e("img",{attrs:{src:s.eval.avatar,width:"12",height:"12"}})])])]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"icon",class:s.eval.rateType?"icon-thumb_down":"icon-thumb_up"}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.eval.text))])])])]}}])},[e("template",{slot:"evalName"},[e("div",{staticClass:"title"},[t._v("商品评价")])])],2)],1)])])},staticRenderFns:[]}}],[168]);
//# sourceMappingURL=app.2766fdf65c7d4756fce9.js.map