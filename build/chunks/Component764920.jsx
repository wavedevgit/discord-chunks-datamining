/** Chunk was on 60137 **/
/** chunk id: 764920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk550851 = require("./550851.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk722771 = require("./722771.js");
let o = {
  [Chunk531578.aZ.BAD]: {
    face: Chunk722771.sadFace,
    "animated-face": "Emoji Neg",
    thumb: Chunk722771.thumbsDown
  },
  [Chunk531578.aZ.NEUTRAL]: {
    face: Chunk722771.neutralFace,
    "animated-face": "Emoji Mid"
  },
  [Chunk531578.aZ.GOOD]: {
    face: Chunk722771.happyFace,
    "animated-face": "Emoji Happy",
    thumb: Chunk722771.thumbsUp
  }
};

function b(e) {
  let {
    ratingOptions: t = u.rN,
    emojiKind: n = "face",
    textLabels: l,
    selectedRating: b,
    onChangeRating: E
  } = e;
  return null != l ? (0, a.jsx)("div", {
    className: c.textLabels,
    children: (0, a.jsx)(d.Z, {
      options: t.map(e => ({
        label: (0, a.jsxs)("div", {
          className: c.textLabel,
          children: [(0, a.jsx)("div", {
            className: o[e][n]
          }), l[e]]
        }),
        value: e,
        className: i()(c.emojiContainer, b === e ? c.selected : null)
      })),
      onClick: e => E(e.value)
    })
  }) : (0, a.jsx)("div", {
    className: i()(c.ratingSelector, c.emojis),
    children: t.map(e => (0, a.jsx)(s.P3F, {
      onClick: () => E(e),
      "aria-label": e,
      className: c.emojiContainer,
      children: "animated-face" === n ? (0, a.jsx)(r.m, {
        className: i()(c.animatedFace, b === e ? c.selected : null),
        artboard: o[e][n]
      }) : (0, a.jsx)("div", {
        className: i()(o[e][n], b === e ? c.selected : null)
      })
    }, e))
  })
}