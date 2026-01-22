/** Chunk was on 47841 **/
/** chunk id: 723278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  L: () => f,
  N: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk837057 = require("./837057.js"),
  Chunk310419 = require("./310419.js"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk885680 = require("./885680.js");

function u(e) {
  let {
    guildId: t,
    section: n
  } = e;
  (0, s.transitionToGlobalDiscovery)({
    tab: c.GlobalDiscoveryTab.APPS,
    newSessionState: {
      guildId: t,
      entrypoint: {
        name: a.sW.GUILD_SETTINGS,
        guildSettingsSection: n
      }
    }
  }), (0, l.jH)()
}

function f() {
  return (0, r.jsxs)("div", {
    className: d.q,
    children: [(0, r.jsx)("div", {
      children: o.intl.string(o.t.AKcFUj)
    }), (0, r.jsx)(i.tfB, {
      size: "xs",
      color: "currentColor",
      className: d.w
    })]
  })
}