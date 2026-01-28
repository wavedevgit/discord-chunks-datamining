/** Chunk was on 78528 **/
/** chunk id: 34247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk696292 = require("./696292.js"),
  Chunk397927 = require("./397927.js"),
  Chunk533129 = require("./533129.js"),
  Chunk726845 = require("./726845.js"),
  Chunk837057 = require("./837057.js"),
  Chunk310419 = require("./310419.js"),
  Chunk606256 = require("./606256.jsx"),
  Chunk488995 = require("./488995.js"),
  Chunk324580 = require("./324580.js"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx");
let m = Chunk64700.forwardRef(function(e, t) {
  let {
    selected: n,
    onClick: m,
    questId: b,
    className: A
  } = e, y = l.useCallback(() => {
    (0, a.WL)({
      source: p.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
    });
    let e = true !== b ? p.GlobalDiscoveryTab.QUESTS : o.A.getField("selectedTab");
    switch (e) {
      case p.GlobalDiscoveryTab.QUESTS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: p.GlobalDiscoveryTab.QUESTS,
          location: f.rE.DISCOVERY_COMPASS,
          questContent: i.u.DISCOVERY_COMPASS,
          questId: b
        });
      case p.GlobalDiscoveryTab.SERVERS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: p.GlobalDiscoveryTab.SERVERS,
          entrypoint: h.J8.GUILDS_BAR
        });
      case p.GlobalDiscoveryTab.APPS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: p.GlobalDiscoveryTab.APPS,
          newSessionState: {
            entrypoint: {
              name: u.sW.GLOBAL_DISCOVERY_BUTTON
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
  return (0, r.jsx)(d.A, {
    id: "guild-discover-button",
    ref: t,
    className: A,
    onClick: () => {
      y(), true !== m && m()
    },
    selected: n,
    tooltip: g.intl.string(g.t["4nEZLk"]),
    icon: s.QGJ
  })
})