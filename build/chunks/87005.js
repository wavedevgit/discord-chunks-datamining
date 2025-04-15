/** Chunk was on 36526 **/
n.d(t, {
  f: () => b
}), n(388685), n(539854);
var r = n(192379),
  l = n(243814),
  u = n(442837),
  i = n(384275),
  o = n(911969),
  c = n(10718),
  a = n(812236),
  s = n(148958),
  d = n(881998),
  p = n(424602);
n(445392);
var f = n(783097),
  m = n(701488),
  h = n(689079);
let O = {
    commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT]
  },
  v = {
    placeholderCount: 0,
    limit: h.tn,
    includeFrecency: !0
  };

function b(e) {
  let {
    context: t,
    onlyActivityApps: n,
    allowCommandFetch: o,
    includeAuthorizedAppsAndFetch: b
  } = e, {
    sectionDescriptors: y,
    loading: E
  } = c.wi({
    context: t,
    filters: O,
    options: v,
    allowFetch: o
  });
  return {
    loading: E,
    frecentApps: function(e) {
      let {
        sectionDescriptors: t,
        context: n,
        onlyActivityApps: o,
        includeAuthorizedAppsAndFetch: c
      } = e, O = (0, u.e7)([d.Z], () => d.Z.getFetchState());
      r.useEffect(() => {
        c && O === d.M.NOT_FETCHED && i.Z.fetch()
      }, [c, O]);
      let v = (0, u.Wu)([d.Z], () => {
          var e, t;
          return c && null != (t = null == (e = d.Z.getApps()) ? void 0 : e.filter(e => e.scopes.includes(l.x.APPLICATIONS_COMMANDS))) ? t : []
        }),
        b = t.filter(e => e.id !== h.bi.FRECENCY && e.id !== h.bi.BUILT_IN),
        y = "channel" in n && (0, p.aZ)(n.channel, "useAppLauncherFrecents.useFrecentApps()"),
        E = "contextless" === n.type,
        g = r.useMemo(() => {
          let e = [];
          return E && e.push(m.jT), y && e.push(p.gu), e
        }, [y, E]),
        S = (0, s.h)(b, v);
      return r.useMemo(() => o ? S.filter(e => null != e.application && (0, f.ye)(e.application) && null != (0, a.Xu)(n, e.id)).filter(e => !g.includes(e.id)) : S.filter(e => !g.includes(e.id)), [o, S, n, g])
    }({
      sectionDescriptors: y,
      context: t,
      onlyActivityApps: n,
      includeAuthorizedAppsAndFetch: b
    })
  }
}