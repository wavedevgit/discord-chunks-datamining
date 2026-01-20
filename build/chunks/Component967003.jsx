/** Chunk was on 6164 **/
/** chunk id: 967003, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk846071 = require("./846071.js"),
  Chunk345655 = require("./345655.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    enabledInputProfiles: t
  } = (0, c.G)({
    location: "useInputProfileItems"
  }), r = {
    [a._.VOICE_ISOLATION]: s.intl.string(s.t.cjPbpT),
    [a._.STUDIO]: s.intl.string(s.t.VZPR0R),
    [a._.CUSTOM]: s.intl.string(s.t["N/PQjv"])
  }, b = (0, o.e7)([l.Z], () => l.Z.getActiveInputProfile()), p = t.map(t => (0, n.jsx)(u.k5B, {
    id: t,
    group: "input-profiles",
    label: r[t],
    checked: t === (null != b ? b : a._.CUSTOM),
    action: () => i.Z.setActiveInputProfile(t, {
      analyticsLocations: e
    })
  }, t));
  return (0, n.jsx)(u.sNh, {
    id: "input-profiles",
    label: s.intl.string(s.t.LM3U3k),
    subtext: r[null != b ? b : a._.CUSTOM],
    children: p
  })
}