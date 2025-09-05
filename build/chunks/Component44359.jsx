/** Chunk was on 46290 **/
/** chunk id: 44359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk356780 = require("./356780.js");

function a(e) {
  let {
    keybind: t,
    className: n
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, t) => (0, i.jsx)("span", {
      className: o()(l.key, n),
      children: e
    }, t))
  })
}