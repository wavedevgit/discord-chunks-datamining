/** Chunk was on web.js **/
/** chunk id: 691891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243964 = require("./243964.js");
let c = e => {
  let {
    className: t,
    onDismiss: n,
    "aria-label": i
  } = e;
  return (0, r.jsx)(o.zx, {
    look: o.zx.Looks.BLANK,
    size: o.zx.Sizes.NONE,
    onClick: n,
    className: a()(l.dismissButton, t),
    "aria-label": i,
    children: (0, r.jsx)(s.Dio, {
      size: "xs",
      color: "currentColor",
      colorClass: l.dismissIcon
    })
  })
};
c.displayName = "DismissButton";
let u = c