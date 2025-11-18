/** Chunk was on web.js **/
/** chunk id: 44359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => l,
  t: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
      className: a()(o.key, o.keySpan, n),
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
      className: a()(o.key, o.keyDiv, n),
      children: e
    }, "".concat(e, "-").concat(t)))
  })
}