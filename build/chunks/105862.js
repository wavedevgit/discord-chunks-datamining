/** Chunk was on 35755 **/
n.d(t, {
  Z: () => y
});
var i = n(200651),
  l = n(192379),
  r = n(780384),
  o = n(481060),
  a = n(410030),
  s = n(782568),
  c = n(63063),
  u = n(827498),
  d = n(888617),
  p = n(981631),
  m = n(388032),
  f = n(286623),
  h = n(983008),
  v = n(478408);

function y(e) {
  let {
    showImage: t = !0,
    padding: n = !1
  } = e, y = (0, a.ZP)(), b = (0, r.ap)(y) ? v : h, N = l.useCallback(() => {
    (0, s.Z)(c.Z.getAppsSupportURL(p.BhN.APPS_LEARN_MORE))
  }, []), {
    trackSectionImpressionRef: g
  } = (0, d.Z)({
    sectionName: u.L3.NEW_TO_APPS,
    numItems: 1,
    numVisibleItems: 1
  });
  return (0, i.jsx)("div", {
    className: n ? f.containerPadding : void 0,
    children: (0, i.jsxs)("div", {
      ref: e => g.current = e,
      className: f.container,
      children: [t && (0, i.jsx)("img", {
        className: f.image,
        src: b,
        alt: "",
        "aria-hidden": !0
      }), (0, i.jsxs)("div", {
        className: f.body,
        children: [(0, i.jsx)(o.X6q, {
          variant: "heading-lg/bold",
          color: "header-primary",
          children: m.NW.string(m.t["kw8/ER"])
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: m.NW.string(m.t.GZoV1N)
        })]
      }), (0, i.jsx)(o.zxk, {
        size: o.zxk.Sizes.MEDIUM,
        "aria-label": m.NW.formatToPlainString(m.t.xx5Sur, {
          sectionTitle: m.NW.string(m.t["kw8/ER"]),
          sectionBody: m.NW.string(m.t.GZoV1N)
        }),
        onClick: N,
        children: m.NW.string(m.t.Ye51oa)
      })]
    })
  })
}