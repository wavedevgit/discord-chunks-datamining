/** Chunk was on 95095 **/
/** chunk id: 321563, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk388108 = require("./388108.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk124480 = require("./124480.jsx"),
  Chunk670455 = require("./670455.js"),
  Chunk792935 = require("./792935.js");
let m = {
  [Chunk670455.P0.BAD]: {
    face: Chunk792935.qx,
    "animated-face": "Emoji Neg",
    thumb: Chunk792935.Se
  },
  [Chunk670455.P0.NEUTRAL]: {
    face: Chunk792935.ZK,
    "animated-face": "Emoji Mid"
  },
  [Chunk670455.P0.GOOD]: {
    face: Chunk792935.kf,
    "animated-face": "Emoji Happy",
    thumb: Chunk792935.dE
  }
};

function u(e) {
  let {
    ratingOptions: t = o.Rj,
    emojiKind: a = "face",
    textLabels: c,
    selectedRating: u,
    onChangeRating: d
  } = e;
  return null != c ? (0, n.jsx)("div", {
    className: _.xu,
    children: (0, n.jsx)(s.A, {
      options: t.map(e => ({
        label: (0, n.jsxs)("div", {
          className: _.SG,
          children: [(0, n.jsx)("div", {
            className: m[e][a]
          }), c[e]]
        }),
        value: e,
        className: i()(_.qq, u === e ? _.wH : null)
      })),
      onClick: e => d(e.value)
    })
  }) : (0, n.jsx)("div", {
    className: i()(_.Bo, _.gm),
    children: t.map(e => (0, n.jsx)(r.DUT, {
      onClick: () => d(e),
      "aria-label": e,
      className: _.qq,
      children: "animated-face" === a ? (0, n.jsx)(l.i, {
        className: i()(_.Ld, u === e ? _.wH : null),
        artboard: m[e][a]
      }) : (0, n.jsx)("div", {
        className: i()(m[e][a], u === e ? _.wH : null)
      })
    }, e))
  })
}