/** Chunk was on 2827 **/
/** chunk id: 475833, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk427262 = require("./427262.js"),
  Chunk585665 = require("./585665.js");
let c = e => {
  let {
    user: t,
    fill: n,
    hideUserTag: i
  } = e, c = "\xa0(@".concat(a.Ay.getUserTag(t, {
    decoration: "never"
  }), ")");
  return (0, r.jsxs)(s.Text, {
    className: l()([{
      [o.GS]: n
    }]),
    variant: "text-md/medium",
    children: [(0, r.jsx)("span", {
      className: o.Xh,
      children: a.Ay.getName(t)
    }), i ? null : (0, r.jsx)("span", {
      className: o.D2,
      children: c
    })]
  })
}