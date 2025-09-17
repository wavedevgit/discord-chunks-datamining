/** Chunk was on web.js **/
/** chunk id: 844709, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk856935 = require("./856935.js");

function l(e) {
  let {
    graphic: t,
    layout: n
  } = e;
  if ("type" in t) switch (t.type) {
    case "role":
      let {
        color: i
      } = t;
      return (0, r.jsx)(o.FhE, {
        className: a()(s.roleDot, {
          [s.roleDotInline]: "inline" === n
        }),
        background: false,
        color: i
      });
    case "avatar":
      let {
        src: l
      } = t;
      return (0, r.jsx)(o.qEK, {
        size: o.EFr.SIZE_16,
        src: l,
        "aria-hidden": true
      });
    default:
      return null
  }
  let c = "inline" === n ? "xs" : "sm",
    u = t;
  return (0, r.jsx)(u, {
    size: c
  })
}