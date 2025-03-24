/** Chunk was on 48909 **/
n.d(t, {
  f: () => b
}), n(47120);
var r = n(192379),
  i = n(243814),
  o = n(442837),
  l = n(384275),
  a = n(911969),
  s = n(10718),
  c = n(812236),
  u = n(148958),
  d = n(881998),
  p = n(424602);
n(445392);
var f = n(783097),
  h = n(689079);
let _ = {
    commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
  },
  m = {
    placeholderCount: 0,
    limit: h.tn,
    includeFrecency: !0
  };

function b(e) {
  let {
    context: t,
    onlyActivityApps: n,
    allowCommandFetch: a,
    includeAuthorizedAppsAndFetch: b
  } = e, {
    sectionDescriptors: g,
    loading: E
  } = s.wi({
    context: t,
    filters: _,
    options: m,
    allowFetch: a
  });
  return {
    loading: E,
    frecentApps: function(e) {
      let {
        sectionDescriptors: t,
        context: n,
        onlyActivityApps: a,
        includeAuthorizedAppsAndFetch: s
      } = e, _ = (0, o.e7)([d.Z], () => d.Z.getFetchState());
      r.useEffect(() => {
        s && _ === d.M.NOT_FETCHED && l.Z.fetch()
      }, [s, _]);
      let m = (0, o.Wu)([d.Z], () => {
          var e, t;
          return s && null !== (t = null === (e = d.Z.getApps()) || void 0 === e ? void 0 : e.filter(e => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) && void 0 !== t ? t : []
        }),
        b = t.filter(e => e.id !== h.bi.FRECENCY && e.id !== h.bi.BUILT_IN),
        g = "channel" in n && (0, p.aZ)(n.channel, "useAppLauncherFrecents.useFrecentApps()"),
        E = (0, u.h)(b, m);
      return r.useMemo(() => a ? E.filter(e => null != e.application && (0, f.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter(e => !g || e.id !== p.gu) : E.filter(e => !g || e.id !== p.gu), [a, E, g, n])
    }({
      sectionDescriptors: g,
      context: t,
      onlyActivityApps: n,
      includeAuthorizedAppsAndFetch: b
    })
  }
}