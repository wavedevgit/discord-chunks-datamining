/** Chunk was on web.js **/
/** chunk id: 216126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk885621 = require("./885621.js"),
  Chunk658122 = require("./658122.js");

function l(e) {
  let {
    contents: t,
    label: n,
    className: i,
    color: l = "default"
  } = e;
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    "aria-label": n,
    role: "group",
    className: i,
    children: [null != n ? (0, r.jsx)("div", {
      className: a()(s.groupLabel, s.hideInteraction, o.jV[l]),
      children: n
    }) : null, t]
  })
}