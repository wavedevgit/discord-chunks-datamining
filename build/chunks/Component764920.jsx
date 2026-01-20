/** Chunk was on 97116 **/
/** chunk id: 764920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk47985 = require("./47985.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk436969 = require("./436969.js");
let b = {
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

function c(e) {
  let {
    ratingOptions: t = d.rN,
    emojiKind: n = "face",
    textLabels: a,
    selectedRating: c,
    onChangeRating: O
  } = e;
  return null != a ? (0, l.jsx)("div", {
    className: o.textLabels,
    children: (0, l.jsx)(u.Z, {
      options: t.map(e => ({
        label: (0, l.jsxs)("div", {
          className: o.textLabel,
          children: [(0, l.jsx)("div", {
            className: b[e][n]
          }), a[e]]
        }),
        value: e,
        className: i()(o.emojiContainer, c === e ? o.selected : null)
      })),
      onClick: e => O(e.value)
    })
  }) : (0, l.jsx)("div", {
    className: i()(o.ratingSelector, o.emojis),
    children: t.map(e => (0, l.jsx)(s.P3F, {
      onClick: () => O(e),
      "aria-label": e,
      className: o.emojiContainer,
      children: "animated-face" === n ? (0, l.jsx)(r.m, {
        className: i()(o.animatedFace, c === e ? o.selected : null),
        artboard: b[e][n]
      }) : (0, l.jsx)("div", {
        className: i()(b[e][n], c === e ? o.selected : null)
      })
    }, e))
  })
}