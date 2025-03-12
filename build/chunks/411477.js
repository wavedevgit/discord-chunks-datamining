/** Chunk was on 81288 **/
n.d(t, {
  Z: () => d
});
var i = n(200651);
n(192379);
var o = n(120356),
  r = n.n(o),
  a = n(481060),
  l = n(436774),
  c = n(118012),
  s = n(230587);

function d(e) {
  let {
    text: t,
    textSize: n = c.Z.Sizes.SIZE_12,
    textColor: o = c.Z.Colors.STANDARD,
    className: d,
    button: u,
    reducedRightPadding: _ = !1
  } = e;
  return (0, i.jsxs)("div", {
    className: r()(_ ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, d),
    children: [(0, i.jsxs)("div", {
      className: s.noticeLeft,
      children: [(0, i.jsx)(a.SrA, {
        size: "md",
        className: s.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, i.jsx)(c.Z, {
        className: s.text,
        size: n,
        color: o,
        children: t
      })]
    }), u]
  })
}