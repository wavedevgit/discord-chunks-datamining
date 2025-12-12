/** Chunk was on 63141 **/
/** chunk id: 294033, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk50880 = require("./50880.js");

function l(e) {
  let {
    keybind: t,
    separator: n = "+",
    className: a
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, l) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)("span", {
        className: s()(o.key, a),
        children: e
      }), l === t.length - 1 ? true : n]
    }, l))
  })
}