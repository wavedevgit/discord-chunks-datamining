/** Chunk was on 19418 **/
/** chunk id: 82770, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk837057 = require("./837057.js"),
  Chunk310419 = require("./310419.js"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  return (0, i.jsx)(r.Drp, {
    id: "application-directory",
    label: o.intl.string(o.t.AKcFUj),
    icon: r.k9F,
    leadingAccessory: {
      type: "icon",
      icon: r.k9F
    },
    action: () => {
      (0, l.transitionToGlobalDiscovery)({
        tab: c.GlobalDiscoveryTab.APPS,
        newSessionState: {
          entrypoint: {
            name: a.sW.GUILD_HEADER_POPOUT
          },
          guildId: e.id
        }
      })
    }
  })
}