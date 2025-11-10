/** Chunk was on 45141 **/
/** chunk id: 513102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    enabled: t
  } = a.c.useExperiment({
    location: "useApplicationDirectoryItem"
  }, {
    autoTrackExposure: true
  }), n = t ? r.iWm : r.jje;
  return (0, i.jsx)(r.sNh, {
    id: "application-directory",
    label: (0, i.jsx)(i.Fragment, {
      children: s.intl.string(s.t.AKcFUj)
    }),
    icon: n,
    action: () => {
      (0, l.transitionToGlobalDiscovery)({
        tab: c.GlobalDiscoveryTab.APPS,
        newSessionState: {
          entrypoint: {
            name: o.xF.GUILD_HEADER_POPOUT
          },
          guildId: e.id
        }
      })
    }
  })
}