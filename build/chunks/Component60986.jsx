/** Chunk was on 88479 **/
/** chunk id: 60986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk386103 = require("./386103.js");

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