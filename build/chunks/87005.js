/** Chunk was on 91396 **/
t.d(n, {
  f: () => C
}), t(388685), t(539854);
var o = t(73800),
  r = t(243814),
  i = t(442837),
  a = t(384275),
  c = t(911969),
  l = t(10718),
  d = t(812236),
  s = t(148958),
  p = t(881998);
t(445392);
var b = t(783097),
  u = t(701488),
  _ = t(689079);
let f = {
    commandTypes: [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]
  },
  m = {
    placeholderCount: 0,
    limit: _.tn,
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
    loading: h
  } = l.wi({
    context: n,
    filters: f,
    options: m,
    allowFetch: c
  });
  return {
    loading: h,
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
      let m = (0, i.Wu)([p.Z], () => l ? p.Z.getNewestTokens().filter(e => e.scopes.includes(r.x.APPLICATIONS_COMMANDS)) : []),
        C = n.filter(e => e.id !== _.bi.FRECENCY && e.id !== _.bi.BUILT_IN),
        y = "contextless" === t.type,
        h = o.useMemo(() => {
          let e = [];
          return y && e.push(u.jT), e
        }, [y]),
        g = (0, s.h)(C, m);
      return o.useMemo(() => c ? g.filter(e => null != e.application && (0, b.ye)(e.application) && null != (0, d.Xu)(t, e.id)).filter(e => !h.includes(e.id)) : g.filter(e => !h.includes(e.id)), [c, g, t, h])
    }({
      sectionDescriptors: y,
      context: n,
      onlyActivityApps: t,
      includeAuthorizedAppsAndFetch: C
    })
  }
}