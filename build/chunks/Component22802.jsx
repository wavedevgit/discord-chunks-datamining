/** Chunk was on web.js **/
/** chunk id: 22802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => l,
  b: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk700744 = require("./700744.js");

function o(e) {
  let {
    keybind: t,
    className: n
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsx)("span", {
      className: a()(s.Eb, s.UT, n),
      children: e
    }, t))
  })
}

function l(e) {
  let {
    keybind: t,
    className: n
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsx)("div", {
      className: a()(s.Eb, s.RJ, n),
      children: e
    }, "".concat(e, "-").concat(t)))
  })
}