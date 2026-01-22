/** Chunk was on 83898 **/
/** chunk id: 24933, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk430452 = require("./430452.js"),
  Chunk77735 = require("./77735.js"),
  Chunk509381 = require("./509381.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    enabledInputProfiles: t
  } = (0, a.d)({
    location: "useInputProfileItems"
  }), r = {
    [c.my.VOICE_ISOLATION]: s.intl.string(s.t.cjPbpT),
    [c.my.STUDIO]: s.intl.string(s.t.VZPR0R),
    [c.my.CUSTOM]: s.intl.string(s.t["N/PQjv"])
  }, b = (0, o.bG)([l.A], () => l.A.getActiveInputProfile()), p = t.map(t => (0, n.jsx)(u.iDA, {
    id: t,
    group: "input-profiles",
    label: r[t],
    checked: t === (null != b ? b : c.my.CUSTOM),
    action: () => i.A.setActiveInputProfile(t, {
      analyticsLocations: e
    })
  }, t));
  return (0, n.jsx)(u.Drp, {
    id: "input-profiles",
    label: s.intl.string(s.t.LM3U3k),
    subtext: r[null != b ? b : c.my.CUSTOM],
    children: p
  })
}