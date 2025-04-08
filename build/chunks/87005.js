/** Chunk was on 93594 **/
n.d(t, {
  f: () => O
}), n(388685), n(539854);
var r = n(192379),
  l = n(243814),
  i = n(442837),
  u = n(384275),
  o = n(911969),
  c = n(10718),
  a = n(812236),
  s = n(148958),
  p = n(881998),
  d = n(424602);
n(445392);
var f = n(783097),
  h = n(701488),
  m = n(689079);
let y = {
    commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT]
  },
  v = {
    placeholderCount: 0,
    limit: m.tn,
    includeFrecency: !0
  };

function O(e) {
  let {
    context: t,
    onlyActivityApps: n,
    allowCommandFetch: o,
    includeAuthorizedAppsAndFetch: O
  } = e, {
    sectionDescriptors: b,
    loading: g
  } = c.wi({
    context: t,
    filters: y,
    options: v,
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
      } = e, y = (0, i.e7)([p.Z], () => p.Z.getFetchState());
      r.useEffect(() => {
        c && y === p.M.NOT_FETCHED && u.Z.fetch()
      }, [c, y]);
      let v = (0, i.Wu)([p.Z], () => {
          var e, t;
          return c && null != (t = null == (e = p.Z.getApps()) ? void 0 : e.filter(e => e.scopes.includes(l.x.APPLICATIONS_COMMANDS))) ? t : []
        }),
        O = t.filter(e => e.id !== m.bi.FRECENCY && e.id !== m.bi.BUILT_IN),
        b = "channel" in n && (0, d.aZ)(n.channel, "useAppLauncherFrecents.useFrecentApps()"),
        g = "contextless" === n.type,
        Z = r.useMemo(() => {
          let e = [];
          return g && e.push(h.jT), b && e.push(d.gu), e
        }, [b, g]),
        E = (0, s.h)(O, v);
      return r.useMemo(() => o ? E.filter(e => null != e.application && (0, f.ye)(e.application) && null != (0, a.Xu)(n, e.id)).filter(e => !Z.includes(e.id)) : E.filter(e => !Z.includes(e.id)), [o, E, n, Z])
    }({
      sectionDescriptors: b,
      context: t,
      onlyActivityApps: n,
      includeAuthorizedAppsAndFetch: O
    })
  }
}