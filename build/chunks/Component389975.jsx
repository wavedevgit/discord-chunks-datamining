/** Chunk was on web.js **/
/** chunk id: 389975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk328310 = require("./328310.js"),
  Chunk818033 = require("./818033.js");
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