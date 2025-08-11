/** Chunk was on web.js **/
/** chunk id: 691891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk702107 = require("./702107.js");
let c = e => {
  let {
    className: t,
    onDismiss: n,
    "aria-label": i
  } = e;
  return (0, r.jsx)(a.zx, {
    look: a.zx.Looks.BLANK,
    size: a.zx.Sizes.NONE,
    onClick: n,
    className: o()(l.dismissButton, t),
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