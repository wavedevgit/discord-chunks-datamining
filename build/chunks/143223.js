/** Chunk was on web.js **/
/** chunk id: 143223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk159635 = require("./159635.js"),
  i = require.n(Chunk159635),
  Chunk914216 = require("./914216.js");
let a = RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?\\.com|staging\\.discord\\.co)/shop(?:\\?tab=[a-z]+)?#itemSkuId=(\\d+)"),
  s = {
    shopLink: {
      order: i().defaultRules.url.order - .5,
      requiredFirstCharacters: ["h"],
      match(e) {
        let t = a.exec(e);
        return null == t || (0, o.Z)("MarkupShopLinkRule") ? t : null
      },
      parse(e, t, n) {
        let r = e[0],
          i = e[1];
        return {
          type: "shopLink",
          content: [{
            type: "text",
            content: i
          }],
          shopLink: r,
          skuId: i
        }
      }
    }
  }