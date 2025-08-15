/** Chunk was on web.js **/
/** chunk id: 434333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => d,
  m: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk1561 = require("./1561.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk198551 = require("./198551.js");
let u = {
    RED: Chunk198551.backgroundRed,
    BACKGROUND_TERTIARY: Chunk198551.backgroundTertiary,
    BACKGROUND_ACCENT: Chunk198551.backgroundAccent
  },
  d = Chunk647438.forwardRef(function(e, t) {
    let {
      role: n,
      children: i,
      className: a,
      onDismiss: d,
      backgroundColor: f = u.RED,
      icon: _ = l.Mgn,
      iconClassName: p
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(c.error, a, f),
      ref: t,
      children: [(0, r.jsx)(_, {
        className: o()(c.icon, p),
        color: "currentColor"
      }), (0, r.jsx)("div", {
        role: n,
        className: c.text,
        children: i
      }), null != d ? (0, r.jsx)(s.P, {
        onClick: d,
        className: c.errorClose,
        children: (0, r.jsx)(l.Dio, {
          size: "md",
          color: "currentColor",
          className: c.errorCloseIcon
        })
      }) : null]
    })
  })