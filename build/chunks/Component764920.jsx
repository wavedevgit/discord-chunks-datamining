/** Chunk was on 52432 **/
/** chunk id: 764920, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk550851 = require("./550851.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk790444 = require("./790444.js");
let m = {
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

function _(e) {
  let {
    ratingOptions: t = s.rN,
    emojiKind: a = "face",
    textLabels: i,
    selectedRating: _,
    onChangeRating: u
  } = e;
  return null != i ? (0, n.jsx)("div", {
    className: d.textLabels,
    children: (0, n.jsx)(l.Z, {
      options: t.map(e => ({
        label: (0, n.jsxs)("div", {
          className: d.textLabel,
          children: [(0, n.jsx)("div", {
            className: m[e][a]
          }), i[e]]
        }),
        value: e,
        className: o()(d.emojiContainer, _ === e ? d.selected : null)
      })),
      onClick: e => u(e.value)
    })
  }) : (0, n.jsx)("div", {
    className: o()(d.ratingSelector, d.emojis),
    children: t.map(e => (0, n.jsx)(c.P3F, {
      onClick: () => u(e),
      "aria-label": e,
      className: d.emojiContainer,
      children: "animated-face" === a ? (0, n.jsx)(r.m, {
        className: o()(d.animatedFace, _ === e ? d.selected : null),
        artboard: m[e][a]
      }) : (0, n.jsx)("div", {
        className: o()(m[e][a], _ === e ? d.selected : null)
      })
    }, e))
  })
}