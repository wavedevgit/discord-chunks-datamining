/** Chunk was on 52272 **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(39604),
  a = n(176127),
  l = n(388032),
  s = n(426265);

function c(e) {
  let {
    onOpenClipsGallery: t,
    clipIconRef: n,
    lastClipsSession: c
  } = e;
  return (0, r.jsxs)(i.Cys, {
    tooltipClassName: s.reminderTooltip,
    tooltipContentClassName: s.tooltipContent,
    targetElementRef: {
      current: n
    },
    position: "bottom",
    color: i.FGA.PRIMARY,
    children: [(0, r.jsx)(a.Z, {}), (0, r.jsx)(i.X6q, {
      variant: "heading-md/extrabold",
      children: l.NW.format(l.t["+qxkzM"], {
        count: c.newClipIds.length
      })
    }), (0, r.jsxs)("div", {
      className: s.buttonContainer,
      children: [(0, r.jsx)(i.zxk, {
        color: i.zxk.Colors.TRANSPARENT,
        onClick: o.eL,
        children: l.NW.string(l.t.WAI6xs)
      }), (0, r.jsx)(i.zxk, {
        color: i.zxk.Colors.BRAND,
        onClick: t,
        children: l.NW.string(l.t.tQPBmp)
      })]
    })]
  })
}