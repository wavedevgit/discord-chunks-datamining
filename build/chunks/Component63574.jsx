/** Chunk was on 77313 **/
/** chunk id: 63574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk298072 = require("./298072.js"),
  Chunk623373 = require("./623373.js"),
  Chunk561769 = require("./561769.js");
let o = e => {
  let {
    skuId: t,
    overrideVariantIndex: n,
    className: o
  } = e, c = (0, s.Vm)(t), u = (0, i.Q)(c);
  return null != c && (0, a.B1)(c) ? (0, r.jsx)(l.EYj, {
    variant: "text-xs/medium",
    color: "text-subtle",
    className: o,
    lineClamp: 1,
    children: c.variants[null != n ? n : u].variantLabel
  }) : null
}