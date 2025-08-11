/** Chunk was on web.js **/
/** chunk id: 257511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk479099 = require("./479099.jsx"),
  Chunk33976 = require("./33976.js");

function l(e) {
  let {
    appliedTags: t,
    setAppliedTags: n,
    wrap: i
  } = e, l = null != n ? e => {
    t.has(e) && (t.delete(e), n(new Set(t)))
  } : true;
  return (0, r.jsx)("div", {
    className: o()(s.tags, {
      [s.wrap]: i
    }),
    children: Array.from(t).map(e => (0, r.jsx)(a.Z, {
      tag: e,
      onRemove: l,
      size: null == l ? a.Z.Sizes.SMALL : a.Z.Sizes.MEDIUM
    }, e.id))
  })
}