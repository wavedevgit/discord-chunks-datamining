/** Chunk was on 41753 **/
/** chunk id: 602147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk636977 = require("./636977.js"),
  Chunk481060 = require("./481060.js"),
  Chunk571457 = require("./571457.js"),
  Chunk836768 = require("./836768.js"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk603592 = require("./603592.jsx"),
  Chunk49898 = require("./49898.js"),
  Chunk128449 = require("./128449.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");
let m = Chunk73800.forwardRef(function(e, t) {
  let {
    selected: n,
    onClick: m,
    questId: b,
    className: O
  } = e, _ = i.useCallback(() => {
    (0, s.k5)({
      source: h.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
    });
    let e = true !== b ? h.GlobalDiscoveryTab.QUESTS : a.Z.getField("selectedTab");
    switch (e) {
      case h.GlobalDiscoveryTab.QUESTS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: h.GlobalDiscoveryTab.QUESTS,
          location: f.dr.DISCOVERY_COMPASS,
          questContent: l.j.DISCOVERY_COMPASS,
          questId: b
        });
      case h.GlobalDiscoveryTab.SERVERS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: h.GlobalDiscoveryTab.SERVERS,
          entrypoint: p.Qq.GUILDS_BAR
        });
      case h.GlobalDiscoveryTab.APPS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: h.GlobalDiscoveryTab.APPS,
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
    className: O,
    onClick: () => {
      _(), true !== m && m()
    },
    selected: n,
    tooltip: g.intl.string(g.t["4nEZLi"]),
    icon: o.Jmo
  })
})