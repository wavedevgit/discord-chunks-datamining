/** Chunk was on 84018 **/
/** chunk id: 12641, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk690157 = require("./690157.js");

function a(e) {
  let {
    keybind: t,
    separator: n = "+",
    className: s
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, a) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)("span", {
        className: l()(o.E, s),
        children: e
      }), a === t.length - 1 ? true : n]
    }, a))
  })
}