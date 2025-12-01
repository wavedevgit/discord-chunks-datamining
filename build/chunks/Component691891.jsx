/** Chunk was on web.js **/
/** chunk id: 691891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk243964 = require("./243964.js");
let l = e => {
  let {
    className: t,
    onDismiss: n,
    "aria-label": i
  } = e;
  return (0, r.jsx)(o.P3F, {
    role: "button",
    onClick: n,
    className: a()(s.dismissButton, t),
    "aria-label": i,
    children: (0, r.jsx)(o.Dio, {
      size: "xs",
      color: "currentColor",
      colorClass: s.dismissIcon
    })
  })
};
l.displayName = "DismissButton";
let c = l