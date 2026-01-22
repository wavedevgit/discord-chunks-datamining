/** Chunk was on web.js **/
/** chunk id: 502395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
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

function f() {
  let {
    sidechainEnabled: e,
    sidechainStrength: t
  } = (0, i.cf)([c.A], () => ({
    sidechainEnabled: c.A.getSidechainCompression(),
    sidechainStrength: c.A.getSidechainCompressionStrength()
  })), {
    analyticsLocations: n
  } = (0, o.Ay)();
  return (0, r.jsxs)(l.x, {
    setting: u.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
    children: [(0, r.jsx)(a.dOG, {
      label: d.intl.string(d.t["/jwMtn"]),
      description: d.intl.string(d.t.zlA23F),
      checked: e,
      onChange: e => s.A.setSidechainCompression(e, {
        analyticsLocations: n
      })
    }), (0, r.jsx)(a.Apm, {
      label: d.intl.string(d.t.fhEzfj),
      initialValue: t,
      minValue: 1,
      onValueChange: e => s.A.setSidechainCompressionStrength(e, {
        analyticsLocations: n
      })
    })]
  })
}