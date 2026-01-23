/** Chunk was on web.js **/
/** chunk id: 359701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk675953 = require("./675953.js");
let c = e => {
  let {
    showStatus: t,
    width: n,
    opacity: i,
    size: c = "default"
  } = e, u = "small" === c ? s._3J.SIZE_24 : s._3J.SIZE_32, d = "var(--border-subtle)";
  return (0, r.jsxs)("div", {
    className: a()(l.Os, {
      [l.i]: "small" === c
    }),
    style: {
      opacity: i
    },
    children: [(0, r.jsx)(s.euF, {
      src: null,
      size: u,
      status: t ? o.clD.ONLINE : true,
      statusColor: d,
      "aria-hidden": true,
      imageClassName: l.yf
    }), (0, r.jsx)("div", {
      className: a()(l.aA, {
        [l.vX]: "small" === c
      }),
      style: {
        maxWidth: null != n ? n : "100px"
      }
    })]
  })
}