/** Chunk was on 21376 **/
/** chunk id: 60986, original params: e,t,n (module,exports,require) **/
"use strict";
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
  Chunk386103 = require("./386103.js");

function u(e) {
  let {
    guildId: t,
    section: n
  } = e;
  (0, s.transitionToGlobalDiscovery)({
    tab: o.GlobalDiscoveryTab.APPS,
    newSessionState: {
      guildId: t,
      entrypoint: {
        name: a.xF.GUILD_SETTINGS,
        guildSettingsSection: n
      }
    }
  }), (0, l.xf)()
}

function m() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk386103.rowContainer,
    children: [(0, Chunk951288.jsx)("div", {
      children: Chunk388032.intl.string(Chunk388032.t.AKcFUl)
    }), (0, Chunk951288.jsx)(Chunk481060.rgF, {
      size: "xs",
      color: "currentColor",
      className: Chunk386103.linkIcon
    })]
  })
}