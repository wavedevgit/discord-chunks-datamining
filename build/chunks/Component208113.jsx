/** Chunk was on web.js **/
/** chunk id: 208113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _,
  z: () => p
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk680924 = require("./680924.js"),
  Chunk726985 = require("./726985.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  let r = [{
    id: d.iA.STANDARD,
    value: d.iA.STANDARD,
    label: f.intl.string(f.t.dqb2JZ)
  }];
  return e && r.push({
    id: d.iA.LEGACY,
    value: d.iA.LEGACY,
    label: f.intl.string(f.t["TYfH+5"])
  }), t && r.push({
    id: d.iA.EXPERIMENTAL,
    value: d.iA.EXPERIMENTAL,
    label: f.intl.string(f.t.liQmtr)
  }), n && r.push({
    id: d.iA.AUTOMATIC,
    value: d.iA.AUTOMATIC,
    label: f.intl.string(f.t.qNgtO1)
  }), r
}

function _() {
  let {
    audioSubsystem: e,
    legacyAudioSubsystemSupported: t,
    experimentalAudioSubsystemSupported: n,
    automaticAudioSubsystemSupported: _
  } = (0, i.cj)([l.Z], () => ({
    audioSubsystem: l.Z.getAudioSubsystem(),
    legacyAudioSubsystemSupported: l.Z.supports(d.AN.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: l.Z.supports(d.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    automaticAudioSubsystemSupported: l.Z.supports(d.AN.AUTOMATIC_AUDIO_SUBSYSTEM)
  }));
  return (0, r.jsx)(s.F, {
    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
    children: (0, r.jsx)(a.PhF, {
      label: f.intl.string(f.t.wVBHr0),
      value: e,
      options: p(t, n, _),
      onSelectionChange: e => {
        let t = () => o.Z.setAudioSubsystem(e);
        (0, c.Z)(f.intl.string(f.t.uY7AcQ), f.intl.string(f.t.gBqik6), t)
      },
      selectionMode: "single",
      fullWidth: true
    })
  })
}