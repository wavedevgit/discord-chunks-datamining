/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => g
}), n(653041);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  s = n(139387),
  l = n(230711),
  c = n(213459),
  u = n(434404),
  d = n(795594),
  f = n(430824),
  _ = n(496675),
  p = n(981631),
  h = n(388032);

function g(e) {
  var t;
  let {
    user: g,
    application: m,
    guildId: E,
    context: v,
    onItemClick: b
  } = e, y = null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : null == g ? void 0 : g.id, O = f.Z.getGuild(E), S = (0, o.e7)([_.Z], () => null != O ? _.Z.can(p.Plq.MANAGE_GUILD, O) : null), I = !0, T = !0, N = (0, c.LD)(E, T), A = (0, c.PL)(I, T), {
    isUserApp: C,
    isGuildApp: R
  } = i.useMemo(() => {
    var e, t, n, r;
    if (null == y) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let i = Object.values(null !== (n = null === (e = N.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {}),
      o = Object.values(null !== (r = null === (t = A.result) || void 0 === t ? void 0 : t.sections) && void 0 !== r ? r : {});
    return {
      isGuildApp: i.some(e => {
        var t;
        return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === y
      }),
      isUserApp: o.some(e => {
        var t;
        return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === y
      })
    }
  }, [N, A, y]);
  i.useEffect(() => {
    n(360606)
  }, []);
  let P = i.useCallback(() => {
      (null == O ? void 0 : O.id) != null && (u.Z.open(O.id, p.pNK.INTEGRATIONS), s.Z.setSection(p.b4C.APPLICATION, y), null == b || b())
    }, [y, null == O ? void 0 : O.id, b]),
    D = i.useCallback(() => {
      l.Z.open(p.oAB.AUTHORIZED_APPS);
      let e = "";
      null != m ? e = m.name : null != g && (e = g.username), "" !== e && d.J.setState({
        searchQuery: e
      }), null == b || b()
    }, [m, b, g]);
  if (v === p.IlC.POPOUT) return null;
  let w = [];
  return R && S && w.push((0, r.jsx)(a.sNh, {
    id: "manage-server-integration",
    label: h.NW.string(h.t.IuSJT0),
    action: P
  }, "manage-server-integration")), C && w.push((0, r.jsx)(a.sNh, {
    id: "manage-authorized-app",
    label: h.NW.string(h.t.V8ruv7),
    action: D
  }, "manage-authorized-app")), w
}