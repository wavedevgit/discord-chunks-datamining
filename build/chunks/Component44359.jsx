/** Chunk was on 9646 **/
/** chunk id: 44359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk127252 = require("./127252.js");

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