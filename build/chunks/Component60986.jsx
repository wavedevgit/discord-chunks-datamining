/** Chunk was on 5533 **/
/** chunk id: 60986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780154 = require("./780154.js");

function m(e) {
  let t = i.useCallback(() => {
    (0, s.transitionToGlobalDiscovery)({
      tab: c.GlobalDiscoveryTab.APPS,
      newSessionState: {
        guildId: e.guildId,
        entrypoint: {
          name: o.xF.GUILD_SETTINGS,
          guildSettingsSection: e.section
        }
      }
    }), (0, a.xf)()
  }, [e.guildId, e.section]);
  return (0, r.jsxs)(l.P3F, {
    onClick: t,
    className: u.rowContainer,
    children: [(0, r.jsx)("div", {
      children: d.intl.string(d.t.AKcFUl)
    }), (0, r.jsx)(l.rgF, {
      size: "xs",
      color: "currentColor",
      className: u.linkIcon
    })]
  })
}