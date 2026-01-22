/** Chunk was on web.js **/
/** chunk id: 213530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk515648 = require("./515648.js");
let d = e => {
  let {
    className: t,
    options: n
  } = e, i = (0, s.bG)([c.A], () => (0, o.Mw)(c.A.theme));
  return null == n ? null : null != n ? n.animated ? (0, r.jsx)(l.A, {
    src: n.getSrc(i),
    className: a()(u.O, t),
    style: n.style,
    loop: false,
    muted: true,
    autoPlay: true
  }) : (0, r.jsx)("img", {
    src: n.getSrc(i),
    className: a()(u.O, t),
    style: n.style,
    alt: "",
    "aria-hidden": "true"
  }) : null
}