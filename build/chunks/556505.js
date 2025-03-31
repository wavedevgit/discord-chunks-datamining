/** Chunk was on 35755 **/
n.d(t, {
  Z: () => c
}), n(47120);
var i = n(200651),
  l = n(192379),
  r = n(481060),
  o = n(911969),
  a = n(388032),
  s = n(285617);

function c(e) {
  let {
    labelType: t,
    collapsed: n = !1
  } = e, c = t === o.ww.NEW ? a.NW.string(a.t.y2b7CA) : a.NW.string(a.t["/qdhkp"]), u = t === o.ww.NEW ? s.activityNewBadge : s.activityUpdatedBadge, [d, p] = l.useState(n ? "" : c);
  return (l.useEffect(() => {
    n ? p("") : t === o.ww.NEW ? p(a.NW.string(a.t.y2b7CA)) : t === o.ww.UPDATED && p(a.NW.string(a.t["/qdhkp"]))
  }, [n, t]), t === o.ww.NONE) ? null : (0, i.jsx)(r.IGR, {
    className: u,
    disableColor: !0,
    text: (0, i.jsx)("span", {
      children: d
    })
  })
}