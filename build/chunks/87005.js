/** Chunk was on 76282 **/
n.d(t, {
  f: () => m
}), n(47120);
var r = n(192379),
  i = n(243814),
  o = n(442837),
  l = n(384275),
  a = n(911969),
  s = n(10718),
  c = n(812236),
  u = n(148958),
  d = n(881998);
n(445392);
var _ = n(783097),
  p = n(689079);
let E = {
    commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
  },
  f = {
    placeholderCount: 0,
    limit: p.tn,
    includeFrecency: !0
  };

function m(e) {
  let {
    context: t,
    onlyActivityApps: n,
    allowCommandFetch: a,
    includeAuthorizedAppsAndFetch: m
  } = e, {
    sectionDescriptors: h,
    loading: g
  } = s.wi({
    context: t,
    filters: E,
    options: f,
    allowFetch: a
  });
  return {
    loading: g,
    frecentApps: function(e) {
      let {
        sectionDescriptors: t,
        context: n,
        onlyActivityApps: a,
        includeAuthorizedAppsAndFetch: s
      } = e, E = (0, o.e7)([d.Z], () => d.Z.getFetchState());
      r.useEffect(() => {
        s && E === d.M.NOT_FETCHED && l.Z.fetch()
      }, [s, E]);
      let f = (0, o.Wu)([d.Z], () => {
          var e, t;
          return s && null !== (t = null === (e = d.Z.getApps()) || void 0 === e ? void 0 : e.filter(e => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) && void 0 !== t ? t : []
        }),
        m = t.filter(e => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN),
        h = (0, u.h)(m, f);
      return r.useMemo(() => a ? h.filter(e => null != e.application && (0, _.ye)(e.application) && null != (0, c.Xu)(n, e.id)) : h, [h, n, a])
    }({
      sectionDescriptors: h,
      context: t,
      onlyActivityApps: n,
      includeAuthorizedAppsAndFetch: m
    })
  }
}