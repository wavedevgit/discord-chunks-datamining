/** Chunk was on 72323 **/
/** chunk id: 940165, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk759198 = require("./759198.jsx"),
  Chunk552958 = require("./552958.js"),
  Chunk767157 = require("./767157.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932787 = require("./932787.js");

function b(t) {
  let {
    label: e,
    className: n,
    description: o,
    soundpack: b,
    location: f
  } = t, {
    playSound: d,
    isPlaying: y
  } = (0, l.Z)();
  return (0, r.jsxs)(c.P3F, {
    "aria-label": u.intl.string(u.t.RscU7O),
    className: i()(O.container, n, {
      [O.containerActive]: y
    }),
    onClick: () => {
      (0, p.Z)(b, f), d(b)
    },
    children: [(0, r.jsx)(c.g8d, {
      className: O.playButton,
      color: y ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.INTERACTIVE_NORMAL
    }), (0, r.jsxs)("div", {
      className: O.textContainer,
      children: [(0, r.jsx)(s.Z, {
        variant: "text-md/medium",
        children: e
      }), (0, r.jsx)(a.xv, {
        variant: "text-sm/normal",
        children: o
      })]
    })]
  })
}