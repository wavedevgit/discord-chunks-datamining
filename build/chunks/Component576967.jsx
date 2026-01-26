/** Chunk was on 97887 **/
/** chunk id: 576967, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk376310 = require("./376310.jsx"),
  Chunk601051 = require("./601051.js");

function o(e) {
  let {
    appliedTags: t,
    setAppliedTags: n,
    wrap: l
  } = e, o = null != n ? e => {
    t.has(e) && (t.delete(e), n(new Set(t)))
  } : true;
  return (0, r.jsx)("div", {
    className: i()(a._, {
      [a.L]: l
    }),
    children: Array.from(t).map(e => (0, r.jsx)(s.A, {
      tag: e,
      onRemove: o,
      size: null == o ? s.A.Sizes.SMALL : s.A.Sizes.MEDIUM
    }, e.id))
  })
}