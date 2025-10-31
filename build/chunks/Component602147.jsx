/** Chunk was on 56710 **/
/** chunk id: 602147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let m = Chunk647438.forwardRef(function(e, t) {
  let {
    selected: n,
    onClick: m,
    questId: b,
    className: _
  } = e, O = i.useCallback(() => {
    (0, a.k5)({
      source: p.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
    });
    let e = true !== b ? p.GlobalDiscoveryTab.QUESTS : s.Z.getField("selectedTab");
    switch (e) {
      case p.GlobalDiscoveryTab.QUESTS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: p.GlobalDiscoveryTab.QUESTS,
          location: f.dr.DISCOVERY_COMPASS,
          questContent: l.j.DISCOVERY_COMPASS,
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
      O(), true !== m && m()
    },
    selected: n,
    tooltip: g.intl.string(g.t["4nEZLk"]),
    icon: o.Jmo
  })
})