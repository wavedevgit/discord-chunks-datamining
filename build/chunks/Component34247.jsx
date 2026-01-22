/** Chunk was on 97492 **/
/** chunk id: 34247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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
let g = Chunk64700.forwardRef(function(e, t) {
  let {
    selected: n,
    onClick: g,
    questId: m,
    className: A
  } = e, y = l.useCallback(() => {
    (0, s.WL)({
      source: f.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
    });
    let e = true !== m ? f.GlobalDiscoveryTab.QUESTS : o.A.getField("selectedTab");
    switch (e) {
      case f.GlobalDiscoveryTab.QUESTS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: f.GlobalDiscoveryTab.QUESTS,
          location: h.rE.DISCOVERY_COMPASS,
          questContent: i.u.DISCOVERY_COMPASS,
          questId: m
        });
      case f.GlobalDiscoveryTab.SERVERS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: f.GlobalDiscoveryTab.SERVERS,
          entrypoint: p.J8.GUILDS_BAR
        });
      case f.GlobalDiscoveryTab.APPS:
        return (0, c.transitionToGlobalDiscovery)({
          tab: f.GlobalDiscoveryTab.APPS,
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
  }, [m]);
  return (0, r.jsx)(d.A, {
    id: "guild-discover-button",
    ref: t,
    className: A,
    onClick: () => {
      y(), true !== g && g()
    },
    selected: n,
    tooltip: b.intl.string(b.t["4nEZLk"]),
    icon: a.QGJ
  })
})