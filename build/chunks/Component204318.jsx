/** Chunk was on web.js **/
/** chunk id: 204318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  g: () => p
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk593942 = require("./593942.js"),
  Chunk531525 = require("./531525.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t, n) {
  let r = [{
    id: d.rB.STANDARD,
    value: d.rB.STANDARD,
    label: f.intl.string(f.t.dqb2JZ)
  }];
  return e && r.push({
    id: d.rB.LEGACY,
    value: d.rB.LEGACY,
    label: f.intl.string(f.t["TYfH+5"])
  }), t && r.push({
    id: d.rB.EXPERIMENTAL,
    value: d.rB.EXPERIMENTAL,
    label: f.intl.string(f.t.liQmtr)
  }), n && r.push({
    id: d.rB.AUTOMATIC,
    value: d.rB.AUTOMATIC,
    label: f.intl.string(f.t.qNgtO1)
  }), r
}

function _() {
  let {
    audioSubsystem: e,
    legacyAudioSubsystemSupported: t,
    experimentalAudioSubsystemSupported: n,
    automaticAudioSubsystemSupported: _
  } = (0, i.cf)([l.A], () => ({
    audioSubsystem: l.A.getAudioSubsystem(),
    legacyAudioSubsystemSupported: l.A.supports(d.O5.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: l.A.supports(d.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    automaticAudioSubsystemSupported: l.A.supports(d.O5.AUTOMATIC_AUDIO_SUBSYSTEM)
  }));
  return (0, r.jsx)(o.x, {
    setting: u.H.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
    children: (0, r.jsx)(a.l6P, {
      label: f.intl.string(f.t.wVBHr0),
      value: e,
      options: p(t, n, _),
      onSelectionChange: e => {
        let t = () => s.A.setAudioSubsystem(e);
        (0, c.A)(f.intl.string(f.t.uY7AcQ), f.intl.string(f.t.gBqik6), t)
      },
      selectionMode: "single",
      fullWidth: true
    })
  })
}