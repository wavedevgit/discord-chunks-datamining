/** Chunk was on 45141 **/
/** chunk id: 513102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  return (0, i.jsx)(r.sNh, {
    id: "application-directory",
    label: (0, i.jsx)(i.Fragment, {
      children: c.intl.string(c.t.AKcFUj)
    }),
    icon: r.jje,
    action: () => {
      (0, a.transitionToGlobalDiscovery)({
        tab: o.GlobalDiscoveryTab.APPS,
        newSessionState: {
          entrypoint: {
            name: l.xF.GUILD_HEADER_POPOUT
          },
          guildId: e.id
        }
      })
    }
  })
}