/** Chunk was on 30819 **/
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
  } = (0, u.d)({
    location: "useInputProfileItems"
  }), r = {
    [c.my.VOICE_ISOLATION]: s.intl.string(s.t.cjPbpT),
    [c.my.STUDIO]: s.intl.string(s.t.VZPR0R),
    [c.my.CUSTOM]: s.intl.string(s.t["N/PQjv"])
  }, b = (0, o.bG)([a.A], () => a.A.getActiveInputProfile()), d = t.map(t => (0, n.jsx)(i.iDA, {
    id: t,
    group: "input-profiles",
    label: r[t],
    checked: t === (null != b ? b : c.my.CUSTOM),
    action: () => l.A.setActiveInputProfile(t, {
      analyticsLocations: e
    })
  }, t));
  return (0, n.jsx)(i.Drp, {
    id: "input-profiles",
    label: s.intl.string(s.t.LM3U3k),
    subtext: r[null != b ? b : c.my.CUSTOM],
    children: d
  })
}