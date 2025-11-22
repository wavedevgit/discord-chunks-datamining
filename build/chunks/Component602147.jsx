/** Chunk was on 65354 **/
/** chunk id: 602147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk636977 = require("./636977.js"),
  Chunk481060 = require("./481060.js"),
  Chunk571457 = require("./571457.js"),
  Chunk836768 = require("./836768.js"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk603592 = require("./603592.jsx"),
  Chunk49898 = require("./49898.js"),
  Chunk128449 = require("./128449.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx");
let m = Chunk473749.forwardRef(function(e, t) {
  let {
    selected: n,
    onClick: m,
    questId: b,
    className: _
  } = e, y = i.useCallback(() => {
    (0, a.k5)({
      source: f.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
    });
    let e = true !== b ? f.GlobalDiscoveryTab.QUESTS : s.Z.getField("selectedTab");
    switch (e) {
      case f.GlobalDiscoveryTab.QUESTS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: f.GlobalDiscoveryTab.QUESTS,
          location: h.dr.DISCOVERY_COMPASS,
          questContent: l.j.DISCOVERY_COMPASS,
          questId: b
        });
      case f.GlobalDiscoveryTab.SERVERS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: f.GlobalDiscoveryTab.SERVERS,
          entrypoint: p.Qq.GUILDS_BAR
        });
      case f.GlobalDiscoveryTab.APPS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: f.GlobalDiscoveryTab.APPS,
          newSessionState: {
            entrypoint: {
              name: u.xF.GLOBAL_DISCOVERY_BUTTON
            },
            restorePreviousView: true
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
    className: _,
    onClick: () => {
      y(), true !== m && m()
    },
    selected: n,
    tooltip: g.intl.string(g.t["4nEZLk"]),
    icon: o.Jmo
  })
})