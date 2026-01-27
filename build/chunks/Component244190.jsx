/** Chunk was on web.js **/
/** chunk id: 244190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk674658 = require("./674658.js"),
  Chunk751304 = require("./751304.jsx"),
  Chunk561769 = require("./561769.js");
let s = e => {
  let {
    skuId: t
  } = e, {
    product: n
  } = (0, i.q)(t, true);
  return null == n ? null : (0, r.jsx)(o.v3.Provider, {
    value: {
      flattenProductVariants: true
    },
    children: (0, r.jsx)(a.A, {
      skuId: t
    })
  })
}