/** Chunk was on 51424 **/
n.d(t, {
  f: () => f
}), n(47120);
var r = n(192379),
  i = n(243814),
  l = n(442837),
  o = n(384275),
  a = n(911969),
  s = n(10718),
  c = n(812236),
  u = n(148958),
  d = n(881998);
n(445392);
var _ = n(783097),
  E = n(689079);
let p = {
    commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
  },
  m = {
    placeholderCount: 0,
    limit: E.tn,
    includeFrecency: !0
  };

function f(e) {
  let {
    context: t,
    onlyActivityApps: n,
    allowCommandFetch: a,
    includeAuthorizedAppsAndFetch: f
  } = e, {
    sectionDescriptors: h,
    loading: g
  } = s.wi({
    context: t,
    filters: p,
    options: m,
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
      } = e, p = (0, l.e7)([d.Z], () => d.Z.getFetchState());
      r.useEffect(() => {
        s && p === d.M.NOT_FETCHED && o.Z.fetch()
      }, [s, p]);
      let m = (0, l.Wu)([d.Z], () => {
          var e, t;
          return s && null !== (t = null === (e = d.Z.getApps()) || void 0 === e ? void 0 : e.filter(e => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) && void 0 !== t ? t : []
        }),
        f = t.filter(e => e.id !== E.bi.FRECENCY && e.id !== E.bi.BUILT_IN),
        h = (0, u.h)(f, m);
      return r.useMemo(() => a ? h.filter(e => null != e.application && (0, _.ye)(e.application) && null != (0, c.Xu)(n, e.id)) : h, [h, n, a])
    }({
      sectionDescriptors: h,
      context: t,
      onlyActivityApps: n,
      includeAuthorizedAppsAndFetch: f
    })
  }
}