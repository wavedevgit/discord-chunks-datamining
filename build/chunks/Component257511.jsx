/** Chunk was on 13140 **/
/** chunk id: 257511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk479099 = require("./479099.jsx"),
  Chunk118041 = require("./118041.js");

function s(e) {
  let {
    appliedTags: t,
    setAppliedTags: n,
    wrap: i
  } = e, s = null != n ? e => {
    t.has(e) && (t.delete(e), n(new Set(t)))
  } : true;
  return (0, r.jsx)("div", {
    className: l()(o.tags, {
      [o.wrap]: i
    }),
    children: Array.from(t).map(e => (0, r.jsx)(a.Z, {
      tag: e,
      onRemove: s,
      size: null == s ? a.Z.Sizes.SMALL : a.Z.Sizes.MEDIUM
    }, e.id))
  })
}