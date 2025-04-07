/** Chunk was on 74371 **/
n.d(t, {
  f: () => y
}), n(388685);
var r = n(192379),
  l = n(243814),
  o = n(442837),
  i = n(384275),
  a = n(911969),
  c = n(10718),
  u = n(812236),
  s = n(148958),
  p = n(881998),
  f = n(424602);
n(445392);
var d = n(783097),
  O = n(689079);
let m = {
    commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
  },
  b = {
    placeholderCount: 0,
    limit: O.tn,
    includeFrecency: !0
  };

function y(e) {
  let {
    context: t,
    onlyActivityApps: n,
    allowCommandFetch: a,
    includeAuthorizedAppsAndFetch: y
  } = e, {
    sectionDescriptors: g,
    loading: h
  } = c.wi({
    context: t,
    filters: m,
    options: b,
    allowFetch: a
  });
  return {
    loading: h,
    frecentApps: function(e) {
      let {
        sectionDescriptors: t,
        context: n,
        onlyActivityApps: a,
        includeAuthorizedAppsAndFetch: c
      } = e, m = (0, o.e7)([p.Z], () => p.Z.getFetchState());
      r.useEffect(() => {
        c && m === p.M.NOT_FETCHED && i.Z.fetch()
      }, [c, m]);
      let b = (0, o.Wu)([p.Z], () => {
          var e, t;
          return c && null != (t = null == (e = p.Z.getApps()) ? void 0 : e.filter(e => e.scopes.includes(l.x.APPLICATIONS_COMMANDS))) ? t : []
        }),
        y = t.filter(e => e.id !== O.bi.FRECENCY && e.id !== O.bi.BUILT_IN),
        g = "channel" in n && (0, f.aZ)(n.channel, "useAppLauncherFrecents.useFrecentApps()"),
        h = (0, s.h)(y, b);
      return r.useMemo(() => a ? h.filter(e => null != e.application && (0, d.ye)(e.application) && null != (0, u.Xu)(n, e.id)).filter(e => !g || e.id !== f.gu) : h.filter(e => !g || e.id !== f.gu), [a, h, g, n])
    }({
      sectionDescriptors: g,
      context: t,
      onlyActivityApps: n,
      includeAuthorizedAppsAndFetch: y
    })
  }
}