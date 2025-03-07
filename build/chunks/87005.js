/** Chunk was on 40247 **/
n.d(t, {
  f: () => O
}), n(47120);
var r = n(192379),
  i = n(243814),
  l = n(442837),
  o = n(384275),
  a = n(911969),
  s = n(10718),
  c = n(812236),
  u = n(148958),
  E = n(881998);
n(445392);
var d = n(783097),
  _ = n(689079);
let N = {
    commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
  },
  I = {
    placeholderCount: 0,
    limit: _.tn,
    includeFrecency: !0
  };

function O(e) {
  let {
    context: t,
    onlyActivityApps: n,
    allowCommandFetch: a,
    includeAuthorizedAppsAndFetch: O
  } = e, {
    sectionDescriptors: T,
    loading: S
  } = s.wi({
    context: t,
    filters: N,
    options: I,
    allowFetch: a
  });
  return {
    loading: S,
    frecentApps: function(e) {
      let {
        sectionDescriptors: t,
        context: n,
        onlyActivityApps: a,
        includeAuthorizedAppsAndFetch: s
      } = e, N = (0, l.e7)([E.Z], () => E.Z.getFetchState());
      r.useEffect(() => {
        s && N === E.M.NOT_FETCHED && o.Z.fetch()
      }, [s, N]);
      let I = (0, l.Wu)([E.Z], () => {
          var e, t;
          return s && null !== (t = null === (e = E.Z.getApps()) || void 0 === e ? void 0 : e.filter(e => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) && void 0 !== t ? t : []
        }),
        O = t.filter(e => e.id !== _.bi.FRECENCY && e.id !== _.bi.BUILT_IN),
        T = (0, u.h)(O, I);
      return r.useMemo(() => a ? T.filter(e => null != e.application && (0, d.ye)(e.application) && null != (0, c.Xu)(n, e.id)) : T, [T, n, a])
    }({
      sectionDescriptors: T,
      context: t,
      onlyActivityApps: n,
      includeAuthorizedAppsAndFetch: O
    })
  }
}