/** Chunk was on 61526 **/
n.d(t, {
  Z: () => p
}), n(47120);
var a = n(200651),
  r = n(192379),
  l = n(442837),
  i = n(481060),
  o = n(835473),
  s = n(925329),
  u = n(706454),
  c = n(709054),
  d = n(388032),
  m = n(576246);

function p(e) {
  var t, n;
  let {
    clip: p
  } = e, [f] = (0, o.Z)([null !== (t = p.applicationId) && void 0 !== t ? t : ""]), v = (0, l.e7)([u.default], () => u.default.locale), h = r.useMemo(() => new Date(c.default.extractTimestamp(p.id)), [p.id]);
  return (0, a.jsxs)("div", {
    className: m.root,
    children: [(0, a.jsxs)("div", {
      className: m.nameSection,
      children: [(0, a.jsx)(s.Z, {
        game: f
      }), (0, a.jsx)(i.Text, {
        className: m.name,
        variant: "text-md/medium",
        color: "interactive-active",
        children: null !== (n = null == f ? void 0 : f.name) && void 0 !== n ? n : p.applicationName
      })]
    }), (0, a.jsxs)("div", {
      className: m.timeContainer,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.vwX, {
          className: m.timeTitle,
          children: d.NW.string(d.t.g8pDeX)
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: h.toLocaleDateString(v, {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
          })
        })]
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.vwX, {
          className: m.timeTitle,
          children: d.NW.string(d.t.v6XAgo)
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: h.toLocaleTimeString(v, {
            hour: "numeric",
            minute: "numeric"
          })
        })]
      })]
    })]
  })
}