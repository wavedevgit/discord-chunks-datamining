/** Chunk was on 63141 **/
/** chunk id: 294033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk593346 = require("./593346.js");

function a(e) {
  let {
    keybind: t,
    separator: n = "+",
    className: o
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, a) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)("span", {
        className: l()(s.key, o),
        children: e
      }), a === t.length - 1 ? true : n]
    }, a))
  })
}