/** Chunk was on web.js **/
/** chunk id: 389996, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk797637 = require("./797637.jsx"),
  Chunk311016 = require("./311016.js"),
  Chunk692051 = require("./692051.js"),
  Chunk915089 = require("./915089.js"),
  Chunk713804 = require("./713804.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk206314 = require("./206314.js");

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
  } = e, y = (0, d.GV)(), O = i.useMemo(() => (0, c.A)(b) ? (0, r.jsx)(l.A, {}) : null == t || "" === t ? null : (0, f.parseBioReact)(t), [b, t]);
  return null == O ? null : (0, r.jsxs)("section", {
    className: s()(n, _.PT),
    "aria-labelledby": y,
    children: [(0, r.jsx)(o.AC4, {
      children: (0, r.jsx)(o.H, {
        id: y,
        children: p.intl.string(p.t.jGoPJT)
      })
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      lineClamp: g ? m : true,
      color: true !== E ? E : true,
      children: (0, r.jsx)(u.Y.Provider, {
        value: {
          disableAnimations: a && !h,
          disableInteractions: false
        },
        children: O
      })
    })]
  })
}