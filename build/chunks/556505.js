/** Chunk was on 30088 **/
n.d(t, {
  Z: () => o
}), n(47120);
var a = n(200651),
  i = n(192379),
  l = n(481060),
  s = n(911969),
  r = n(388032),
  c = n(711642);

function o(e) {
  let {
    name: t,
    labelType: n,
    collapsed: o = !1,
    showTooltip: d = !1
  } = e, u = n === s.ww.NEW ? r.NW.string(r.t.y2b7CA) : r.NW.string(r.t["/qdhkp"]), p = n === s.ww.NEW ? c.activityNewBadge : c.activityUpdatedBadge, [f, g] = i.useState(o ? "" : u);
  if (i.useEffect(() => {
      o ? g("") : n === s.ww.NEW ? g(r.NW.string(r.t.y2b7CA)) : n === s.ww.UPDATED && g(r.NW.string(r.t["/qdhkp"]))
    }, [o, n]), n === s.ww.NONE) return null;
  let m = (0, a.jsx)(l.IGR, {
    className: p,
    disableColor: !0,
    text: (0, a.jsx)("span", {
      children: f
    })
  });
  if (!d) return m;
  let v = r.NW.formatToPlainString(r.t.Vs2EeX, {
    activity: t
  });
  return (0, a.jsx)(l.DY3, {
    text: v,
    tooltipContentClassName: c.tooltip,
    children: m
  })
}