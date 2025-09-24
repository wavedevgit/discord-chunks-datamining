/** Chunk was on 96888 **/
/** chunk id: 764920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk47985 = require("./47985.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk790444 = require("./790444.js");
let d = {
  [Chunk531578.aZ.BAD]: {
    face: Chunk790444.sadFace,
    "animated-face": "Emoji Neg",
    thumb: Chunk790444.thumbsDown
  },
  [Chunk531578.aZ.NEUTRAL]: {
    face: Chunk790444.neutralFace,
    "animated-face": "Emoji Mid"
  },
  [Chunk531578.aZ.GOOD]: {
    face: Chunk790444.happyFace,
    "animated-face": "Emoji Happy",
    thumb: Chunk790444.thumbsUp
  }
};

function b(e) {
  let {
    ratingOptions: t = u.rN,
    emojiKind: n = "face",
    textLabels: l,
    selectedRating: b,
    onChangeRating: f
  } = e;
  return null != l ? (0, a.jsx)("div", {
    className: c.textLabels,
    children: (0, a.jsx)(s.Z, {
      options: t.map(e => ({
        label: (0, a.jsxs)("div", {
          className: c.textLabel,
          children: [(0, a.jsx)("div", {
            className: d[e][n]
          }), l[e]]
        }),
        value: e,
        className: i()(c.emojiContainer, b === e ? c.selected : null)
      })),
      onClick: e => f(e.value)
    })
  }) : (0, a.jsx)("div", {
    className: i()(c.ratingSelector, c.emojis),
    children: t.map(e => (0, a.jsx)(o.P3F, {
      onClick: () => f(e),
      "aria-label": e,
      className: c.emojiContainer,
      children: "animated-face" === n ? (0, a.jsx)(r.m, {
        className: i()(c.animatedFace, b === e ? c.selected : null),
        artboard: d[e][n]
      }) : (0, a.jsx)("div", {
        className: i()(d[e][n], b === e ? c.selected : null)
      })
    }, e))
  })
}