/** Chunk was on web.js **/
/** chunk id: 220516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk244190 = require("./244190.jsx");
let a = {
  title: "Shop Product Card",
  stories: [{
    name: "ShopProductCard",
    id: "shopProduct-card",
    component: e => {
      let {
        skuId: t
      } = e;
      return (0, r.jsx)("div", {
        children: (0, r.jsx)(i.A, {
          skuId: t
        })
      })
    },
    controls: {
      skuId: {
        label: "SKU Id",
        type: "text",
        defaultValue: "1458472704192811088"
      }
    }
  }]
}