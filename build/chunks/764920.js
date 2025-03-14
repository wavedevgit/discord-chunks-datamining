/** Chunk was on 96888 **/
n.d(t, {
  Z: () => d
});
var o = n(200651),
  i = n(120356),
  a = n.n(i),
  s = n(481060),
  l = n(572539),
  r = n(531578),
  c = n(685046);
let u = {
  [r.aZ.BAD]: {
    face: c.sadFace,
    thumb: c.thumbsDown
  },
  [r.aZ.NEUTRAL]: {
    face: c.neutralFace
  },
  [r.aZ.GOOD]: {
    face: c.happyFace,
    thumb: c.thumbsUp
  }
};

function d(e) {
  let {
    ratingOptions: t = r.rN,
    emojiKind: n = "face",
    textLabels: i,
    selectedRating: d,
    onChangeRating: _
  } = e;
  return null != i ? (0, o.jsx)("div", {
    className: c.textLabels,
    children: (0, o.jsx)(l.Z, {
      options: t.map(e => ({
        label: (0, o.jsxs)("div", {
          className: c.textLabel,
          children: [(0, o.jsx)("div", {
            className: u[e][n]
          }), i[e]]
        }),
        value: e,
        className: a()(c.emojiContainer, d === e ? c.selected : null)
      })),
      onClick: e => _(e.value)
    })
  }) : (0, o.jsx)("div", {
    className: a()(c.ratingSelector, c.emojis),
    children: t.map(e => (0, o.jsx)(s.P3F, {
      onClick: () => _(e),
      "aria-label": e,
      className: c.emojiContainer,
      children: (0, o.jsx)("div", {
        className: a()(u[e][n], d === e ? c.selected : null)
      })
    }, e))
  })
}