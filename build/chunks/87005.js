/** Chunk was on 68992 **/
t.d(n, {
  f: () => C
}), t(47120);
var o = t(192379),
  r = t(243814),
  i = t(442837),
  a = t(384275),
  c = t(911969),
  l = t(10718),
  d = t(812236),
  s = t(148958),
  p = t(881998),
  _ = t(424602);
t(445392);
var b = t(783097),
  u = t(689079);
let f = {
    commandTypes: [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]
  },
  m = {
    placeholderCount: 0,
    limit: u.tn,
    includeFrecency: !0
  };

function C(e) {
  let {
    context: n,
    onlyActivityApps: t,
    allowCommandFetch: c,
    includeAuthorizedAppsAndFetch: C
  } = e, {
    sectionDescriptors: y,
    loading: g
  } = l.wi({
    context: n,
    filters: f,
    options: m,
    allowFetch: c
  });
  return {
    loading: g,
    frecentApps: function(e) {
      let {
        sectionDescriptors: n,
        context: t,
        onlyActivityApps: c,
        includeAuthorizedAppsAndFetch: l
      } = e, f = (0, i.e7)([p.Z], () => p.Z.getFetchState());
      o.useEffect(() => {
        l && f === p.M.NOT_FETCHED && a.Z.fetch()
      }, [l, f]);
      let m = (0, i.Wu)([p.Z], () => {
          var e, n;
          return l && null !== (n = null === (e = p.Z.getApps()) || void 0 === e ? void 0 : e.filter(e => e.scopes.includes(r.x.APPLICATIONS_COMMANDS))) && void 0 !== n ? n : []
        }),
        C = n.filter(e => e.id !== u.bi.FRECENCY && e.id !== u.bi.BUILT_IN),
        y = "channel" in t && (0, _.aZ)(t.channel, "useAppLauncherFrecents.useFrecentApps()"),
        g = (0, s.h)(C, m);
      return o.useMemo(() => c ? g.filter(e => null != e.application && (0, b.ye)(e.application) && null != (0, d.Xu)(t, e.id)).filter(e => !y || e.id !== _.gu) : g.filter(e => !y || e.id !== _.gu), [c, g, y, t])
    }({
      sectionDescriptors: y,
      context: n,
      onlyActivityApps: t,
      includeAuthorizedAppsAndFetch: C
    })
  }
}