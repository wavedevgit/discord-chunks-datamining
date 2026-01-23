/** Chunk was on 65599 **/
/** chunk id: 666839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk298072 = require("./298072.js"),
  Chunk561769 = require("./561769.js"),
  Chunk139146 = require("./139146.jsx"),
  Chunk407723 = require("./407723.js");
let o = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: l
    } = e;
    return (0, a.jsx)(i.R, {
      product: t,
      selectedVariantIndex: n,
      isCardHovered: l,
      className: s.i
    })
  },
  c = e => {
    let {
      skuId: t,
      isCardHovered: n
    } = e, i = (0, r.Vm)(t), s = (0, l.Q)(i);
    return null == i ? null : (0, a.jsx)(o, {
      product: i,
      selectedVariantIndex: s,
      isCardHovered: n
    })
  }