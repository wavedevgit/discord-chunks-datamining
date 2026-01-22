/** Chunk was on web.js **/
/** chunk id: 355938, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk999584 = require("./999584.js");

function c(e) {
  let {
    application: t,
    children: n
  } = e;
  return (0, r.jsx)(i.un, {
    asset: (0, r.jsx)(s.A, {
      size: s.M.MEDIUM_LARGE,
      game: t
    }),
    body: o.intl.format(o.t.J3s8JP, {
      applicationName: t.name
    }),
    position: "top",
    asContainer: true,
    "aria-label": o.intl.string(o.t["5nMcv1"]),
    children: (0, r.jsx)(a.DUT, {
      tag: "span",
      children: n
    })
  })
}

function u(e) {
  let {
    application: t,
    compact: n,
    children: i
  } = e;
  return (0, r.jsxs)(c, {
    application: t,
    children: [n ? null : (0, r.jsx)(a._xR, {
      className: l.Gt,
      size: "custom",
      width: 14,
      height: 14
    }), i]
  })
}