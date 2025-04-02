/** Chunk was on 35755 **/
n.d(t, {
  Z: () => v
});
var i = n(200651),
  r = n(192379),
  l = n(780384),
  o = n(481060),
  a = n(410030),
  c = n(782568),
  s = n(63063),
  d = n(827498),
  u = n(888617),
  p = n(981631),
  m = n(388032),
  f = n(271275),
  h = n(983008),
  b = n(478408);

function v(e) {
  let {
    showImage: t = !0,
    padding: n = !1
  } = e, v = (0, a.ZP)(), C = (0, l.ap)(v) ? b : h, _ = r.useCallback(() => {
    (0, c.Z)(s.Z.getAppsSupportURL(p.BhN.APPS_LEARN_MORE))
  }, []), {
    trackSectionImpressionRef: x
  } = (0, u.Z)({
    sectionName: d.L3.NEW_TO_APPS,
    numItems: 1,
    numVisibleItems: 1
  });
  return (0, i.jsx)("div", {
    className: n ? f.containerPadding : void 0,
    children: (0, i.jsxs)("div", {
      ref: e => x.current = e,
      className: f.container,
      children: [t && (0, i.jsx)("img", {
        className: f.image,
        src: C,
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
        onClick: _,
        children: m.NW.string(m.t.Ye51oa)
      })]
    })
  })
}