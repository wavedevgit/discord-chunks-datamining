/** Chunk was on 25222 **/
t.d(n, {
  f: () => C
}), t(47120);
var o = t(192379),
  r = t(243814),
  a = t(442837),
  i = t(384275),
  c = t(911969),
  l = t(10718),
  d = t(812236),
  s = t(148958),
  p = t(881998),
  u = t(424602);
t(445392);
var _ = t(783097),
  b = t(689079);
let f = {
    commandTypes: [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]
  },
  m = {
    placeholderCount: 0,
    limit: b.tn,
    includeFrecency: !0
  };

function C(e) {
  let {
    context: n,
    onlyActivityApps: t,
    allowCommandFetch: c,
    includeAuthorizedAppsAndFetch: C
  } = e, {
    sectionDescriptors: g,
    loading: v
  } = l.wi({
    context: n,
    filters: f,
    options: m,
    allowFetch: c
  });
  return {
    loading: v,
    frecentApps: function(e) {
      let {
        sectionDescriptors: n,
        context: t,
        onlyActivityApps: c,
        includeAuthorizedAppsAndFetch: l
      } = e, f = (0, a.e7)([p.Z], () => p.Z.getFetchState());
      o.useEffect(() => {
        l && f === p.M.NOT_FETCHED && i.Z.fetch()
      }, [l, f]);
      let m = (0, a.Wu)([p.Z], () => {
          var e, n;
          return l && null !== (n = null === (e = p.Z.getApps()) || void 0 === e ? void 0 : e.filter(e => e.scopes.includes(r.x.APPLICATIONS_COMMANDS))) && void 0 !== n ? n : []
        }),
        C = n.filter(e => e.id !== b.bi.FRECENCY && e.id !== b.bi.BUILT_IN),
        g = "channel" in t && (0, u.aZ)(t.channel, "useAppLauncherFrecents.useFrecentApps()"),
        v = (0, s.h)(C, m);
      return o.useMemo(() => c ? v.filter(e => null != e.application && (0, _.ye)(e.application) && null != (0, d.Xu)(t, e.id)).filter(e => !g || e.id !== u.gu) : v.filter(e => !g || e.id !== u.gu), [c, v, g, t])
    }({
      sectionDescriptors: g,
      context: n,
      onlyActivityApps: t,
      includeAuthorizedAppsAndFetch: C
    })
  }
}