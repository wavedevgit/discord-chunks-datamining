/** Chunk was on web.js **/
/** chunk id: 666839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk298072 = require("./298072.js"),
  Chunk561769 = require("./561769.js"),
  Chunk139146 = require("./139146.jsx"),
  Chunk407723 = require("./407723.js");
let l = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: i
    } = e;
    return (0, r.jsx)(o.R, {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: i,
      className: s.i
    })
  },
  c = e => {
    let {
      skuId: t,
      isCardHovered: n
    } = e, o = (0, a.Vm)(t), s = (0, i.Q)(o);
    return null == o ? null : (0, r.jsx)(l, {
      product: o,
      selectedVariantIndex: s,
      isCardHovered: n
    })
  }