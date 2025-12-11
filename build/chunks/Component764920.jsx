/** Chunk was on 96888 **/
/** chunk id: 764920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk47985 = require("./47985.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk436969 = require("./436969.js");
let c = {
  [Chunk531578.aZ.BAD]: {
    face: Chunk436969.sadFace,
    "animated-face": "Emoji Neg",
    thumb: Chunk436969.thumbsDown
  },
  [Chunk531578.aZ.NEUTRAL]: {
    face: Chunk436969.neutralFace,
    "animated-face": "Emoji Mid"
  },
  [Chunk531578.aZ.GOOD]: {
    face: Chunk436969.happyFace,
    "animated-face": "Emoji Happy",
    thumb: Chunk436969.thumbsUp
  }
};

function b(e) {
  let {
    ratingOptions: t = s.rN,
    emojiKind: n = "face",
    textLabels: l,
    selectedRating: b,
    onChangeRating: f
  } = e;
  return null != l ? (0, a.jsx)("div", {
    className: u.textLabels,
    children: (0, a.jsx)(d.Z, {
      options: t.map(e => ({
        label: (0, a.jsxs)("div", {
          className: u.textLabel,
          children: [(0, a.jsx)("div", {
            className: c[e][n]
          }), l[e]]
        }),
        value: e,
        className: i()(u.emojiContainer, b === e ? u.selected : null)
      })),
      onClick: e => f(e.value)
    })
  }) : (0, a.jsx)("div", {
    className: i()(u.ratingSelector, u.emojis),
    children: t.map(e => (0, a.jsx)(o.P3F, {
      onClick: () => f(e),
      "aria-label": e,
      className: u.emojiContainer,
      children: "animated-face" === n ? (0, a.jsx)(r.m, {
        className: i()(u.animatedFace, b === e ? u.selected : null),
        artboard: c[e][n]
      }) : (0, a.jsx)("div", {
        className: i()(c[e][n], b === e ? u.selected : null)
      })
    }, e))
  })
}