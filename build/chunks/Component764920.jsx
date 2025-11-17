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
  Chunk790444 = require("./790444.js");
let c = {
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
    className: d.textLabels,
    children: (0, a.jsx)(s.Z, {
      options: t.map(e => ({
        label: (0, a.jsxs)("div", {
          className: d.textLabel,
          children: [(0, a.jsx)("div", {
            className: c[e][n]
          }), l[e]]
        }),
        value: e,
        className: i()(d.emojiContainer, b === e ? d.selected : null)
      })),
      onClick: e => f(e.value)
    })
  }) : (0, a.jsx)("div", {
    className: i()(d.ratingSelector, d.emojis),
    children: t.map(e => (0, a.jsx)(o.P3F, {
      onClick: () => f(e),
      "aria-label": e,
      className: d.emojiContainer,
      children: "animated-face" === n ? (0, a.jsx)(r.m, {
        className: i()(d.animatedFace, b === e ? d.selected : null),
        artboard: c[e][n]
      }) : (0, a.jsx)("div", {
        className: i()(c[e][n], b === e ? d.selected : null)
      })
    }, e))
  })
}