/** Chunk was on 35755 **/
n.d(t, {
  P: () => f,
  Z: () => h
}), n(47120);
var i = n(200651),
  r = n(481060),
  l = n(239091),
  o = n(299206),
  a = n(276022),
  c = n(695346),
  s = n(914010),
  d = n(499254),
  u = n(827498),
  p = n(314734),
  m = n(388032);

function f(e) {
  var t;
  let {
    application: n
  } = e, i = null !== (t = s.Z.getGuildId()) && void 0 !== t ? t : void 0;
  return (0, a.Z)({
    application: n,
    guildId: i,
    onItemClick: () => {
      (0, r.Mr3)(p.e9), (0, d.yT)(u.ti.DISMISSED)
    }
  })
}

function h(e) {
  let {
    application: t,
    onSelect: n
  } = e, a = c.Sb.useSetting(), s = (0, o.Z)({
    id: t.id,
    label: m.NW.string(m.t["+NP/b2"])
  }), d = f({
    application: t
  });
  return (0, i.jsxs)(r.v2r, {
    navId: "activity-shelf-item-context",
    onClose: l.Zy,
    "aria-label": m.NW.string(m.t.WkcHT0),
    onSelect: n,
    children: [null != d && (0, i.jsxs)(r.kSQ, {
      children: [...d]
    }, "manage-app-actions"), a && (0, i.jsx)(r.kSQ, {
      children: s
    }, "developer-actions")]
  })
}