/** Chunk was on web.js **/
/** chunk id: 543388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk386312 = require("./386312.js");

function c(e) {
  let {
    application: t,
    children: n
  } = e;
  return (0, r.jsx)(i.i_, {
    asset: (0, r.jsx)(o.Z, {
      size: o.A.MEDIUM_LARGE,
      game: t
    }),
    body: s.intl.format(s.t.J3s8JP, {
      applicationName: t.name
    }),
    position: "top",
    asContainer: true,
    "aria-label": s.intl.string(s.t["5nMcv1"]),
    children: (0, r.jsx)(a.P3F, {
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
    children: [n ? null : (0, r.jsx)(a.iWm, {
      className: l.gameIcon,
      size: "custom",
      width: 14,
      height: 14
    }), i]
  })
}