/** Chunk was on 54052 **/
/** chunk id: 60986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => m,
  O: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk622718 = require("./622718.js");

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

function m() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk622718.rowContainer,
    children: [(0, Chunk951288.jsx)("div", {
      children: Chunk388032.intl.string(Chunk388032.t.AKcFUl)
    }), (0, Chunk951288.jsx)(Chunk481060.rgF, {
      size: "xs",
      color: "currentColor",
      className: Chunk622718.linkIcon
    })]
  })
}