/** Chunk was on 32923 **/
/** chunk id: 931805, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => g,
  O: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk794628 = require("./794628.js");

function u(e) {
  let {
    guildId: t,
    section: n
  } = e;
  (0, a.transitionToGlobalDiscovery)({
    tab: o.GlobalDiscoveryTab.APPS,
    newSessionState: {
      guildId: t,
      entrypoint: {
        name: s.xF.GUILD_SETTINGS,
        guildSettingsSection: n
      }
    }
  }), (0, l.xf)()
}

function g() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk794628.rowContainer,
    children: [(0, Chunk54381.jsx)("div", {
      children: Chunk388032.intl.string(Chunk388032.t.AKcFUj)
    }), (0, Chunk54381.jsx)(Chunk481060.rgF, {
      size: "xs",
      color: "currentColor",
      className: Chunk794628.linkIcon
    })]
  })
}