/** Chunk was on 53494 **/
n.d(t, {
  Z: () => m
});
var r = n(200651),
  i = n(192379),
  o = n(636977),
  l = n(481060),
  a = n(571457),
  s = n(836768),
  c = n(749681),
  u = n(258971),
  d = n(603592),
  p = n(49898),
  h = n(128449),
  f = n(46140),
  g = n(388032);
let m = i.forwardRef(function(e, t) {
  let {
    selected: n,
    onClick: m,
    questId: b,
    className: v
  } = e, y = i.useCallback(() => {
    (0, a.k5)({
      source: p.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
    });
    let e = void 0 !== b ? p.GlobalDiscoveryTab.QUESTS : s.Z.getField("selectedTab");
    switch (e) {
      case p.GlobalDiscoveryTab.QUESTS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: p.GlobalDiscoveryTab.QUESTS,
          location: f.dr.DISCOVERY_COMPASS,
          questContent: o.j.DISCOVERY_COMPASS,
          questId: b
        });
      case p.GlobalDiscoveryTab.SERVERS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: p.GlobalDiscoveryTab.SERVERS,
          entrypoint: h.Qq.GUILDS_BAR
        });
      case p.GlobalDiscoveryTab.APPS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: p.GlobalDiscoveryTab.APPS,
          newSessionState: {
            entrypoint: {
              name: u.xF.GLOBAL_DISCOVERY_BUTTON
            },
            restorePreviousView: !0
          }
        });
      default:
        return (0, c.transitionToGlobalDiscovery)({
          tab: e
        })
    }
  }, [b]);
  return (0, r.jsx)(d.Z, {
    id: "guild-discover-button",
    ref: t,
    className: v,
    onClick: () => {
      y(), void 0 !== m && m()
    },
    selected: n,
    tooltip: g.NW.string(g.t["4nEZLi"]),
    icon: l.Jmo
  })
})