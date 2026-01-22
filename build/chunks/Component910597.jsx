/** Chunk was on web.js **/
/** chunk id: 910597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function d() {
  let {
    attenuation: e,
    attenuateWhileSpeakingSelf: t,
    attenuateWhileSpeakingOthers: n
  } = (0, i.cf)([l.A], () => ({
    attenuation: l.A.getAttenuation(),
    attenuateWhileSpeakingSelf: l.A.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: l.A.getAttenuateWhileSpeakingOthers()
  }));
  return (0, r.jsxs)(o.x, {
    setting: c.H.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
    children: [(0, r.jsx)(a.Apm, {
      label: u.intl.string(u.t.oSdBvW),
      description: u.intl.string(u.t["0A/8Rt"]),
      initialValue: e,
      onValueChange: e => {
        s.A.setAttenuation(e, t, n)
      }
    }), (0, r.jsx)(a.dOG, {
      label: u.intl.string(u.t["9dHxRY"]),
      checked: t,
      onChange: t => s.A.setAttenuation(e, t, n)
    }), (0, r.jsx)(a.dOG, {
      label: u.intl.string(u.t.SMt0Gr),
      checked: n,
      onChange: n => s.A.setAttenuation(e, t, n)
    })]
  })
}