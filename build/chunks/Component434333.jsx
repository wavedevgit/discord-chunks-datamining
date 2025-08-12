/** Chunk was on web.js **/
/** chunk id: 434333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => d,
  m: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk1561 = require("./1561.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk852362 = require("./852362.js");
let u = {
    RED: Chunk852362.backgroundRed,
    BACKGROUND_TERTIARY: Chunk852362.backgroundTertiary,
    BACKGROUND_ACCENT: Chunk852362.backgroundAccent
  },
  d = Chunk73800.forwardRef(function(e, t) {
    let {
      role: n,
      children: i,
      className: o,
      onDismiss: d,
      backgroundColor: f = u.RED,
      icon: _ = l.Mgn,
      iconClassName: p
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(c.error, o, f),
      ref: t,
      children: [(0, r.jsx)(_, {
        className: a()(c.icon, p),
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