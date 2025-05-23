/** Chunk was on 22005 **/
n.d(t, {
  f: () => y
}), n(388685), n(539854);
var r = n(73800),
  l = n(243814),
  o = n(442837),
  i = n(384275),
  c = n(911969),
  u = n(10718),
  a = n(812236),
  s = n(148958),
  f = n(881998);
n(445392);
var d = n(783097),
  p = n(701488),
  O = n(689079);
let m = {
    commandTypes: [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]
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
    allowCommandFetch: c,
    includeAuthorizedAppsAndFetch: y
  } = e, {
    sectionDescriptors: g,
    loading: h
  } = u.wi({
    context: t,
    filters: m,
    options: b,
    allowFetch: c
  });
  return {
    loading: h,
    frecentApps: function(e) {
      let {
        sectionDescriptors: t,
        context: n,
        onlyActivityApps: c,
        includeAuthorizedAppsAndFetch: u
      } = e, m = (0, o.e7)([f.Z], () => f.Z.getFetchState());
      r.useEffect(() => {
        u && m === f.M.NOT_FETCHED && i.Z.fetch()
      }, [u, m]);
      let b = (0, o.Wu)([f.Z], () => {
          var e, t;
          return u && null != (t = null == (e = f.Z.getApps()) ? void 0 : e.filter(e => e.scopes.includes(l.x.APPLICATIONS_COMMANDS))) ? t : []
        }),
        y = t.filter(e => e.id !== O.bi.FRECENCY && e.id !== O.bi.BUILT_IN),
        g = "contextless" === n.type,
        h = r.useMemo(() => {
          let e = [];
          return g && e.push(p.jT), e
        }, [g]),
        j = (0, s.h)(y, b);
      return r.useMemo(() => c ? j.filter(e => null != e.application && (0, d.ye)(e.application) && null != (0, a.Xu)(n, e.id)).filter(e => !h.includes(e.id)) : j.filter(e => !h.includes(e.id)), [c, j, n, h])
    }({
      sectionDescriptors: g,
      context: t,
      onlyActivityApps: n,
      includeAuthorizedAppsAndFetch: y
    })
  }
}