/** Chunk was on 82220 **/
/** chunk id: 212168, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => s,
  i: () => u
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  d = require.n(Chunk503698),
  Chunk446958 = require("./446958.js"),
  u = ((r = {}).PREMIUM = "premium", r.LIMITED = "limited", r);
let o = {
    premium: {
      border: Chunk446958.wU,
      background: Chunk446958.gI
    },
    limited: {
      border: Chunk446958.rY,
      background: Chunk446958.pm
    }
  },
  s = Chunk64700.forwardRef(function(e, n) {
    let {
      children: t,
      type: r = "premium",
      isShown: l,
      hasBackground: a = false,
      className: u,
      backgroundClassName: s
    } = e;
    if (!l) return t;
    let {
      border: f,
      background: h
    } = o[r];
    return (0, i.jsx)("div", {
      ref: n,
      className: d()(f, u),
      children: (0, i.jsx)("div", {
        className: d()(a ? h : c.Tp, s),
        children: t
      })
    })
  })