/** Chunk was on web.js **/
/** chunk id: 432850, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk591627 = require("./591627.js"),
  Chunk818033 = require("./818033.js");
let u = e => {
  let {
    children: t,
    footer: n,
    className: i
  } = e;
  return (0, r.jsx)("div", {
    className: o()(c.root, c.focusLock, c.small, c.rootWithShadow, l.modal, i),
    "aria-label": s.intl.string(s.t.eQ2bLp),
    children: (0, r.jsxs)("form", {
      className: l.form,
      onSubmit: e => {
        e.preventDefault()
      },
      children: [(0, r.jsx)(a.hzk, {
        className: l.scrollerContent,
        children: t
      }), n]
    })
  })
}