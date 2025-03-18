/** Chunk was on 35755 **/
n.d(t, {
  Z: () => h
});
var i = n(200651),
  l = n(192379),
  r = n(120356),
  o = n.n(r),
  a = n(481060),
  s = n(895924),
  c = n(827498),
  u = n(106066),
  d = n(98880),
  p = n(772606),
  m = n(388032),
  f = n(86454);

function h(e) {
  let {
    context: t,
    entrypoint: n,
    title: r,
    look: h,
    items: v,
    sectionName: y,
    sectionOverallPosition: b
  } = e, N = (0, u.s)("AppLauncherApplicationListViewScreen"), g = l.useMemo(() => n === c._b.TEXT ? d.kA : d.qR, [n]);
  return (0, i.jsxs)("section", {
    className: f.container,
    "aria-label": m.NW.formatToPlainString(m.t.iobNIC, {
      sectionTitle: r
    }),
    children: [(0, i.jsxs)("div", {
      className: f.header,
      children: [(0, i.jsx)(p.Z, {
        className: f.backButton
      }), (0, i.jsx)(a.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: r
      })]
    }), (0, i.jsx)(a.Ttm, {
      children: (0, i.jsx)("div", {
        className: o()({
          [f.appGrid]: h !== d.U4.ROW,
          [f.rows]: h === d.U4.ROW
        }),
        children: v.map((e, n) => {
          let {
            application: l,
            installOnDemand: r,
            showsPromoted: o
          } = e;
          return (0, i.jsx)(g, {
            context: t,
            application: l,
            look: h,
            sectionName: y,
            resultsPosition: n,
            location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
            installOnDemand: r,
            isOneClickCTA: N,
            sectionOverallPosition: b,
            showsPromoted: o
          }, l.id)
        })
      })
    })]
  })
}