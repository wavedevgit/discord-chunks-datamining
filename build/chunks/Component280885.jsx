/** Chunk was on web.js **/
/** chunk id: 280885, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk40966 = require("./40966.jsx"),
  Chunk580552 = require("./580552.js"),
  Chunk249458 = require("./249458.js"),
  Chunk313201 = require("./313201.js"),
  Chunk240991 = require("./240991.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602009 = require("./602009.js");

function h(e) {
  let {
    userBio: t,
    className: n,
    animateOnHoverOrFocusOnly: a = false,
    isHoveringOrFocusing: h = false,
    lineClamp: m = 6,
    setLineClamp: g = true,
    textColor: E,
    userId: b
  } = e, y = (0, d.Dt)(), O = i.useMemo(() => (0, c.Z)(b) ? (0, r.jsx)(l.Z, {}) : null == t || "" === t ? null : (0, f.parseBioReact)(t), [b, t]);
  return null == O ? null : (0, r.jsxs)("section", {
    className: o()(n, p.markup),
    "aria-labelledby": y,
    children: [(0, r.jsx)(s.nn4, {
      children: (0, r.jsx)(s.H, {
        id: y,
        children: _.intl.string(_.t.jGoPJT)
      })
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      lineClamp: g ? m : true,
      color: true !== E ? E : true,
      children: (0, r.jsx)(u.G.Provider, {
        value: {
          disableAnimations: a && !h,
          disableInteractions: false
        },
        children: O
      })
    })]
  })
}