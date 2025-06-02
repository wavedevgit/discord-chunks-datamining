/** Chunk was on 56535 **/
r.d(t, {
  EmojiStudioModal: () => u
}), r(388685);
var n = r(255367),
  a = r(73800),
  l = r(481060),
  i = r(598117),
  s = r(375727),
  o = r(903759),
  c = r(205721);
let u = e => {
  let {
    transitionState: t,
    userImage: r,
    guildId: u
  } = e, [d, p] = a.useState(r), h = a.useCallback(() => p(null), [p]), g = null == d ? l.CgR.MEDIUM : l.CgR.LARGE;
  return (0, n.jsx)(l.Y0X, {
    transitionState: t,
    size: g,
    children: (0, n.jsxs)(l.hzk, {
      scrollbarType: "none",
      className: c.modalContent,
      children: [null == d ? (0, n.jsx)(o.u, {
        setUserImage: p
      }) : (0, n.jsx)(s.I, {
        userImage: d,
        guildId: u,
        back: h
      }), (0, n.jsx)(l.olH, {
        onClick: () => (0, l.Mr3)(i.Hj),
        className: c.closeButton
      })]
    })
  })
}