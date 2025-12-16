/** Chunk was on 1272 **/
/** chunk id: 766219, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o,
  s: () => a
});
var Chunk823379 = require("./823379.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  switch (e) {
    case i.GlobalDiscoveryTab.SERVERS:
      return l.intl.string(l.t["+Anbp9"]);
    case i.GlobalDiscoveryTab.APPS:
      return l.intl.string(l.t.bGwCoR);
    case i.GlobalDiscoveryTab.QUESTS:
      return l.intl.string(l.t.EcaD4e);
    default:
      (0, r.vE)(e)
  }
}

function o(e) {
  if (e.startsWith("/discovery/applications")) return i.GlobalDiscoveryTab.APPS;
  switch (e) {
    case "/discovery/quests":
      return i.GlobalDiscoveryTab.QUESTS;
    case "/discovery/servers":
      return i.GlobalDiscoveryTab.SERVERS;
    default:
      return i.GLOBAL_DISCOVERY_DEFAULT_TAB
  }
}