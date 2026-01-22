/** Chunk was on web.js **/
/** chunk id: 569626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk511612 = require("./511612.js");
let l = e => {
  let {
    className: t,
    onDismiss: n,
    "aria-label": i
  } = e;
  return (0, r.jsx)(s.DUT, {
    role: "button",
    onClick: n,
    className: a()(o.r, t),
    "aria-label": i,
    children: (0, r.jsx)(s.PGe, {
      size: "xs",
      color: "currentColor",
      colorClass: o.M
    })
  })
};
l.displayName = "DismissButton";
let c = l