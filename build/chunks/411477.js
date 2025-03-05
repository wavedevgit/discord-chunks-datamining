/** Chunk was on 81288 **/
n.d(t, {
  Z: () => d
});
var o = n(200651);
n(192379);
var i = n(120356),
  r = n.n(i),
  a = n(481060),
  l = n(436774),
  c = n(118012),
  s = n(230587);

function d(e) {
  let {
    text: t,
    textSize: n = c.Z.Sizes.SIZE_12,
    textColor: i = c.Z.Colors.STANDARD,
    className: d,
    button: u,
    reducedRightPadding: _ = !1
  } = e;
  return (0, o.jsxs)("div", {
    className: r()(_ ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, d),
    children: [(0, o.jsxs)("div", {
      className: s.noticeLeft,
      children: [(0, o.jsx)(a.SrA, {
        size: "md",
        className: s.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, o.jsx)(c.Z, {
        className: s.text,
        size: n,
        color: i,
        children: t
      })]
    }), u]
  })
}