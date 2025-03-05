/** Chunk was on 61566 **/
t.d(n, {
  f: () => m
}), t(47120);
var o = t(192379),
  r = t(243814),
  a = t(442837),
  i = t(384275),
  c = t(911969),
  l = t(10718),
  d = t(812236),
  s = t(148958),
  p = t(881998);
t(445392);
var u = t(783097),
  _ = t(689079);
let b = {
    commandTypes: [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]
  },
  f = {
    placeholderCount: 0,
    limit: _.tn,
    includeFrecency: !0
  };

function m(e) {
  let {
    context: n,
    onlyActivityApps: t,
    allowCommandFetch: c,
    includeAuthorizedAppsAndFetch: m
  } = e, {
    sectionDescriptors: C,
    loading: v
  } = l.wi({
    context: n,
    filters: b,
    options: f,
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
      } = e, b = (0, a.e7)([p.Z], () => p.Z.getFetchState());
      o.useEffect(() => {
        l && b === p.M.NOT_FETCHED && i.Z.fetch()
      }, [l, b]);
      let f = (0, a.Wu)([p.Z], () => {
          var e, n;
          return l && null !== (n = null === (e = p.Z.getApps()) || void 0 === e ? void 0 : e.filter(e => e.scopes.includes(r.x.APPLICATIONS_COMMANDS))) && void 0 !== n ? n : []
        }),
        m = n.filter(e => e.id !== _.bi.FRECENCY && e.id !== _.bi.BUILT_IN),
        C = (0, s.h)(m, f);
      return o.useMemo(() => c ? C.filter(e => null != e.application && (0, u.ye)(e.application) && null != (0, d.Xu)(t, e.id)) : C, [C, t, c])
    }({
      sectionDescriptors: C,
      context: n,
      onlyActivityApps: t,
      includeAuthorizedAppsAndFetch: m
    })
  }
}