/** Chunk was on 35755 **/
n.d(t, {
  Z: () => h
});
var i = n(200651),
  r = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(481060),
  c = n(895924),
  s = n(827498),
  d = n(106066),
  u = n(98880),
  p = n(772606),
  m = n(388032),
  f = n(310259);

function h(e) {
  let {
    context: t,
    entrypoint: n,
    title: l,
    look: h,
    items: b,
    sectionName: v,
    sectionOverallPosition: C
  } = e, _ = (0, d.s)("AppLauncherApplicationListViewScreen"), x = r.useMemo(() => n === s._b.TEXT ? u.kA : u.qR, [n]);
  return (0, i.jsxs)("section", {
    className: f.container,
    "aria-label": m.NW.formatToPlainString(m.t.iobNIC, {
      sectionTitle: l
    }),
    children: [(0, i.jsxs)("div", {
      className: f.header,
      children: [(0, i.jsx)(p.Z, {
        className: f.backButton
      }), (0, i.jsx)(a.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: l
      })]
    }), (0, i.jsx)(a.Ttm, {
      children: (0, i.jsx)("div", {
        className: o()({
          [f.appGrid]: h !== u.U4.ROW,
          [f.rows]: h === u.U4.ROW
        }),
        children: b.map((e, n) => {
          let {
            application: r,
            installOnDemand: l,
            showsPromoted: o
          } = e;
          return (0, i.jsx)(x, {
            context: t,
            application: r,
            look: h,
            sectionName: v,
            resultsPosition: n,
            location: c.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
            installOnDemand: l,
            isOneClickCTA: _,
            sectionOverallPosition: C,
            showsPromoted: o
          }, r.id)
        })
      })
    })]
  })
}