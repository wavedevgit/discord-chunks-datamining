/** Chunk was on 52344 **/
/** chunk id: 967003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk846071 = require("./846071.js"),
  Chunk345655 = require("./345655.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    enabledInputProfiles: t
  } = (0, s.G)({
    location: "useInputProfileItems"
  }), n = {
    [c._.VOICE_ISOLATION]: u.intl.string(u.t.cjPbpT),
    [c._.STUDIO]: u.intl.string(u.t.VZPR0R),
    [c._.CUSTOM]: u.intl.string(u.t["N/PQjv"])
  }, d = (0, i.e7)([a.Z], () => a.Z.getActiveInputProfile()), p = t.map(t => (0, r.jsx)(o.k5B, {
    id: t,
    group: "input-profiles",
    label: n[t],
    checked: t === (null != d ? d : c._.CUSTOM),
    action: () => l.Z.setActiveInputProfile(t, {
      analyticsLocations: e
    })
  }, t));
  return (0, r.jsx)(o.sNh, {
    id: "input-profiles",
    label: u.intl.string(u.t.LM3U3k),
    subtext: n[null != d ? d : c._.CUSTOM],
    children: p
  })
}