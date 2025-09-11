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
  Chunk835561 = require("./835561.js");
let u = {
    RED: Chunk835561.backgroundRed,
    BACKGROUND_TERTIARY: Chunk835561.backgroundTertiary,
    BACKGROUND_ACCENT: Chunk835561.backgroundAccent
  },
  d = Chunk647438.forwardRef(function(e, t) {
    let {
      children: n,
      className: i,
      onDismiss: a,
      backgroundColor: d = u.RED,
      icon: f = l.Mgn,
      iconClassName: _
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(c.error, i, d),
      ref: t,
      children: [(0, r.jsx)(f, {
        className: o()(c.icon, _),
        color: "currentColor"
      }), (0, r.jsx)("div", {
        className: c.text,
        children: n
      }), null != a ? (0, r.jsx)(s.P, {
        onClick: a,
        className: c.errorClose,
        children: (0, r.jsx)(l.Dio, {
          size: "md",
          color: "currentColor",
          className: c.errorCloseIcon
        })
      }) : null]
    })
  })