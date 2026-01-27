/** Chunk was on 92917 **/
/** chunk id: 622413, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk233645 = require("./233645.js");
let o = e => {
  let {
    renderTitle: t,
    renderTagline: n,
    renderActions: i,
    renderMedia: o,
    className: c,
    isHorizontal: u = false
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(s.Vs, {
      [s.ZQ]: u
    }, c),
    children: [(0, r.jsx)("div", {
      className: l()(s.$_, {
        [s.rO]: u
      }),
      children: null == o ? true : o()
    }), (0, r.jsxs)("div", {
      className: s.h_,
      children: [(0, r.jsx)(a.H, {
        className: s.DD,
        children: null == t ? true : t()
      }), (0, r.jsx)("div", {
        className: s.dS,
        children: null == n ? true : n()
      }), (0, r.jsx)("div", {
        className: s.o1,
        children: null == i ? true : i()
      })]
    })]
  })
}