/** Chunk was on web.js **/
/** chunk id: 434333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => u,
  m: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk198551 = require("./198551.js");
let c = {
    RED: Chunk198551.backgroundRed,
    BACKGROUND_TERTIARY: Chunk198551.backgroundTertiary,
    BACKGROUND_ACCENT: Chunk198551.backgroundAccent
  },
  u = Chunk647438.forwardRef(function(e, t) {
    let {
      children: n,
      className: i,
      onDismiss: a,
      backgroundColor: u = c.RED,
      icon: d = s.Mgn,
      iconClassName: f
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(l.error, i, u),
      ref: t,
      children: [(0, r.jsx)(d, {
        className: o()(l.icon, f),
        color: "currentColor"
      }), (0, r.jsx)("div", {
        className: l.text,
        children: n
      }), null != a ? (0, r.jsx)(s.P3F, {
        onClick: a,
        className: l.errorClose,
        children: (0, r.jsx)(s.Dio, {
          size: "md",
          color: "currentColor",
          className: l.errorCloseIcon
        })
      }) : null]
    })
  })