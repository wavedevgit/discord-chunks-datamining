/** Chunk was on 60449 **/
/** chunk id: 910597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function u() {
  let {
    attenuation: e,
    attenuateWhileSpeakingSelf: t,
    attenuateWhileSpeakingOthers: n
  } = (0, s.cf)([o.A], () => ({
    attenuation: o.A.getAttenuation(),
    attenuateWhileSpeakingSelf: o.A.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: o.A.getAttenuateWhileSpeakingOthers()
  }));
  return (0, i.jsxs)(a.x, {
    setting: c.H.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
    children: [(0, i.jsx)(l.Apm, {
      label: d.intl.string(d.t.oSdBvW),
      description: d.intl.string(d.t["0A/8Rt"]),
      initialValue: e,
      onValueChange: e => {
        r.A.setAttenuation(e, t, n)
      }
    }), (0, i.jsx)(l.dOG, {
      label: d.intl.string(d.t["9dHxRY"]),
      checked: t,
      onChange: t => r.A.setAttenuation(e, t, n)
    }), (0, i.jsx)(l.dOG, {
      label: d.intl.string(d.t.SMt0Gr),
      checked: n,
      onChange: n => r.A.setAttenuation(e, t, n)
    })]
  })
}