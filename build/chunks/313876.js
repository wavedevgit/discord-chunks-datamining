/** Chunk was on 52272 **/
n.d(t, {
  Z: () => c
}), n(266796);
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(955415),
  a = n(314897),
  l = n(782605),
  s = n(388032);

function c(e) {
  var t, n;
  let {
    author: c,
    inviteError: u
  } = e, d = (0, i.e7)([a.default], () => a.default.getId()) === c.id ? s.NW.string(s.t.C89OLC) : s.NW.string(s.t["YVub5+"]), p = (0, l.l)(null == u ? void 0 : u.code);
  return (0, r.jsxs)(o.Z, {
    children: [(0, r.jsx)(o.Z.Header, {
      text: d
    }), (0, r.jsxs)(o.Z.Body, {
      children: [(0, r.jsx)(o.Z.Icon, {
        expired: !0
      }), (0, r.jsx)(o.Z.Info, {
        expired: !0,
        title: null !== (t = null == p ? void 0 : p.title) && void 0 !== t ? t : s.NW.string(s.t["Jhx/ub"]),
        children: null !== (n = null == p ? void 0 : p.description) && void 0 !== n ? n : null == u ? void 0 : u.message
      })]
    })]
  })
}