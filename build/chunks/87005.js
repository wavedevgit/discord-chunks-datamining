/** Chunk was on 11252 **/
n.d(t, {
  f: () => y
}), n(388685), n(539854);
var r = n(192379),
  l = n(243814),
  u = n(442837),
  i = n(384275),
  o = n(911969),
  c = n(10718),
  a = n(812236),
  d = n(148958),
  s = n(881998),
  f = n(424602);
n(445392);
var p = n(783097),
  b = n(701488),
  v = n(689079);
let O = {
    commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT]
  },
  m = {
    placeholderCount: 0,
    limit: v.tn,
    includeFrecency: !0
  };

function y(e) {
  let {
    context: t,
    onlyActivityApps: n,
    allowCommandFetch: o,
    includeAuthorizedAppsAndFetch: y
  } = e, {
    sectionDescriptors: h,
    loading: g
  } = c.wi({
    context: t,
    filters: O,
    options: m,
    allowFetch: o
  });
  return {
    loading: g,
    frecentApps: function(e) {
      let {
        sectionDescriptors: t,
        context: n,
        onlyActivityApps: o,
        includeAuthorizedAppsAndFetch: c
      } = e, O = (0, u.e7)([s.Z], () => s.Z.getFetchState());
      r.useEffect(() => {
        c && O === s.M.NOT_FETCHED && i.Z.fetch()
      }, [c, O]);
      let m = (0, u.Wu)([s.Z], () => {
          var e, t;
          return c && null != (t = null == (e = s.Z.getApps()) ? void 0 : e.filter(e => e.scopes.includes(l.x.APPLICATIONS_COMMANDS))) ? t : []
        }),
        y = t.filter(e => e.id !== v.bi.FRECENCY && e.id !== v.bi.BUILT_IN),
        h = "channel" in n && (0, f.aZ)(n.channel, "useAppLauncherFrecents.useFrecentApps()"),
        g = "contextless" === n.type,
        P = r.useMemo(() => {
          let e = [];
          return g && e.push(b.jT), h && e.push(f.gu), e
        }, [h, g]),
        Z = (0, d.h)(y, m);
      return r.useMemo(() => o ? Z.filter(e => null != e.application && (0, p.ye)(e.application) && null != (0, a.Xu)(n, e.id)).filter(e => !P.includes(e.id)) : Z.filter(e => !P.includes(e.id)), [o, Z, n, P])
    }({
      sectionDescriptors: h,
      context: t,
      onlyActivityApps: n,
      includeAuthorizedAppsAndFetch: y
    })
  }
}