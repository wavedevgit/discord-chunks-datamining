/** Chunk was on 66866 **/
/** chunk id: 345898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk569943 = require("./569943.js");
let s = e => {
  let {
    renderTitle: t,
    renderTagline: n,
    renderActions: i,
    renderMedia: s,
    className: c,
    isHorizontal: u = false
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(o.tile, {
      [o.tileHorizontal]: u
    }, c),
    children: [(0, r.jsx)("div", {
      className: l()(o.media, {
        [o.mediaHorizontal]: u
      }),
      children: null == s ? true : s()
    }), (0, r.jsxs)("div", {
      className: o.description,
      children: [(0, r.jsx)(a.H, {
        className: o.title,
        children: null == t ? true : t()
      }), (0, r.jsx)("div", {
        className: o.tagline,
        children: null == n ? true : n()
      }), (0, r.jsx)("div", {
        className: o.actions,
        children: null == i ? true : i()
      })]
    })]
  })
}