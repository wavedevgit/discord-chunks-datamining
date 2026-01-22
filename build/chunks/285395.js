/** Chunk was on 21738 **/
/** chunk id: 285395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => s,
  t: () => a
});
var Chunk403362 = require("./403362.js"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  switch (e) {
    case i.GlobalDiscoveryTab.SERVERS:
      return l.intl.string(l.t["+Anbp9"]);
    case i.GlobalDiscoveryTab.APPS:
      return l.intl.string(l.t.bGwCoR);
    case i.GlobalDiscoveryTab.QUESTS:
      return l.intl.string(l.t.EcaD4e);
    default:
      (0, r.xb)(e)
  }
}

function s(e) {
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