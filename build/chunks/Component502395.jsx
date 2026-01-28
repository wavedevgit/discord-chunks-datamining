/** Chunk was on 60449 **/
/** chunk id: 502395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function g() {
  let {
    sidechainEnabled: e,
    sidechainStrength: t
  } = (0, s.cf)([c.A], () => ({
    sidechainEnabled: c.A.getSidechainCompression(),
    sidechainStrength: c.A.getSidechainCompressionStrength()
  })), {
    analyticsLocations: n
  } = (0, a.Ay)();
  return (0, i.jsxs)(o.x, {
    setting: d.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
    children: [(0, i.jsx)(l.dOG, {
      label: u.intl.string(u.t["/jwMtn"]),
      description: u.intl.string(u.t.zlA23F),
      checked: e,
      onChange: e => r.A.setSidechainCompression(e, {
        analyticsLocations: n
      })
    }), (0, i.jsx)(l.Apm, {
      label: u.intl.string(u.t.fhEzfj),
      initialValue: t,
      minValue: 1,
      onValueChange: e => r.A.setSidechainCompressionStrength(e, {
        analyticsLocations: n
      })
    })]
  })
}