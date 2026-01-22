/** Chunk was on web.js **/
/** chunk id: 747176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk594808 = require("./594808.jsx"),
  Chunk207963 = require("./207963.jsx"),
  Chunk100558 = require("./100558.js");

function o(e) {
  let {
    components: t,
    renderComponents: n
  } = e, {
    message: o
  } = (0, a.jc)();
  return null == t || 0 === t.length ? null : (0, r.jsxs)("div", {
    className: s.kL,
    children: [(0, r.jsx)("div", {
      className: s.Y_,
      children: n(t)
    }), null != o ? (0, r.jsx)(i.Ay, {
      className: s.z3,
      message: o,
      component: e
    }) : null]
  })
}