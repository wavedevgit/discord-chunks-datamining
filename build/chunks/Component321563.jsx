/** Chunk was on 95095 **/
/** chunk id: 321563, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk388108 = require("./388108.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk124480 = require("./124480.jsx"),
  Chunk670455 = require("./670455.js"),
  Chunk792935 = require("./792935.js");
let o = {
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

function u(a) {
  let {
    ratingOptions: e = d.Rj,
    emojiKind: t = "face",
    textLabels: c,
    selectedRating: u,
    onChangeRating: b
  } = a;
  return null != c ? (0, n.jsx)("div", {
    className: f.xu,
    children: (0, n.jsx)(s.A, {
      options: e.map(a => ({
        label: (0, n.jsxs)("div", {
          className: f.SG,
          children: [(0, n.jsx)("div", {
            className: o[a][t]
          }), c[a]]
        }),
        value: a,
        className: l()(f.qq, u === a ? f.wH : null)
      })),
      onClick: a => b(a.value)
    })
  }) : (0, n.jsx)("div", {
    className: l()(f.Bo, f.gm),
    children: e.map(a => (0, n.jsx)(r.DUT, {
      onClick: () => b(a),
      "aria-label": a,
      className: f.qq,
      children: "animated-face" === t ? (0, n.jsx)(i.i, {
        className: l()(f.Ld, u === a ? f.wH : null),
        artboard: o[a][t]
      }) : (0, n.jsx)("div", {
        className: l()(o[a][t], u === a ? f.wH : null)
      })
    }, a))
  })
}