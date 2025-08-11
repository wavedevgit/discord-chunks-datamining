/** Chunk was on 63141 **/
/** chunk id: 294033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk728557 = require("./728557.js");

function a(e) {
  let {
    keybind: t,
    separator: n = "+",
    className: o
  } = e;
  return <i.Fragment>{t.map((e, a) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)("span", {
        className: l()(s.key, o),
        children: e
      }), a === t.length - 1 ? true : n]
    }, a))}</i.Fragment>
}