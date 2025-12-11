/** Chunk was on 51235 **/
/** chunk id: 602147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
let b = Chunk473749.forwardRef(function(e, t) {
  let {
    selected: n,
    onClick: b,
    questId: m,
    className: y
  } = e, O = i.useCallback(() => {
    (0, o.k5)({
      source: f.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
    });
    let e = true !== m ? f.GlobalDiscoveryTab.QUESTS : s.Z.getField("selectedTab");
    switch (e) {
      case f.GlobalDiscoveryTab.QUESTS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: f.GlobalDiscoveryTab.QUESTS,
          location: p.dr.DISCOVERY_COMPASS,
          questContent: l.j.DISCOVERY_COMPASS,
          questId: m
        });
      case f.GlobalDiscoveryTab.SERVERS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: f.GlobalDiscoveryTab.SERVERS,
          entrypoint: h.Qq.GUILDS_BAR
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
  }, [m]);
  return (0, r.jsx)(d.Z, {
    id: "guild-discover-button",
    ref: t,
    className: y,
    onClick: () => {
      O(), true !== b && b()
    },
    selected: n,
    tooltip: g.intl.string(g.t["4nEZLk"]),
    icon: a.Jmo
  })
})