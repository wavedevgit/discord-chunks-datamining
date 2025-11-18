/** Chunk was on web.js **/
/** chunk id: 389975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk823795 = require("./823795.js"),
  Chunk822054 = require("./822054.js");
let u = e => {
  let {
    children: t,
    footer: n,
    className: i
  } = e;
  return (0, r.jsx)("div", {
    className: a()(c.root, c.focusLock, c.small, c.rootWithShadow, l.modal, i),
    "aria-label": s.intl.string(s.t.eQ2bLp),
    children: (0, r.jsxs)("form", {
      className: l.form,
      onSubmit: e => {
        e.preventDefault()
      },
      children: [(0, r.jsx)(o.hzk, {
        className: l.scrollerContent,
        children: t
      }), n]
    })
  })
}