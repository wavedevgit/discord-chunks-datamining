/** Chunk was on 75101 **/
n.d(t, {
  Z: () => u
}), n(47120);
var i = n(200651),
  r = n(192379),
  l = n(481060),
  o = n(911969),
  a = n(388032),
  c = n(711642);

function u(e) {
  let {
    name: t,
    labelType: n,
    collapsed: u = !1,
    showTooltip: d = !1
  } = e, s = n === o.ww.NEW ? a.NW.string(a.t.y2b7CA) : a.NW.string(a.t["/qdhkp"]), p = n === o.ww.NEW ? c.activityNewBadge : c.activityUpdatedBadge, [f, v] = r.useState(u ? "" : s);
  if (r.useEffect(() => {
      u ? v("") : n === o.ww.NEW ? v(a.NW.string(a.t.y2b7CA)) : n === o.ww.UPDATED && v(a.NW.string(a.t["/qdhkp"]))
    }, [u, n]), n === o.ww.NONE) return null;
  let y = (0, i.jsx)(l.IGR, {
    className: p,
    disableColor: !0,
    text: (0, i.jsx)("span", {
      children: f
    })
  });
  if (!d) return y;
  let b = a.NW.formatToPlainString(a.t.Vs2EeX, {
    activity: t
  });
  return (0, i.jsx)(l.DY3, {
    text: b,
    tooltipContentClassName: c.tooltip,
    children: y
  })
}