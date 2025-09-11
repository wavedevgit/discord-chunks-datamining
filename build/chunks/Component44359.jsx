/** Chunk was on web.js **/
/** chunk id: 44359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk244545 = require("./244545.js");

function s(e) {
  let {
    keybind: t,
    className: n
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsx)("span", {
      className: a()(o.key, n),
      children: e
    }, t))
  })
}