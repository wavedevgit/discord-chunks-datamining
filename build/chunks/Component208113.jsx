/** Chunk was on web.js **/
/** chunk id: 208113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h,
  z: () => p
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk680924 = require("./680924.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function p(e, t, n) {
  let r = [{
    value: d.iA.STANDARD,
    label: f.intl.string(f.t.dqb2JZ)
  }];
  return e && r.push({
    value: d.iA.LEGACY,
    label: f.intl.string(f.t["TYfH+5"])
  }), t && r.push({
    value: d.iA.EXPERIMENTAL,
    label: f.intl.string(f.t.liQmtr)
  }), n && r.push({
    value: d.iA.AUTOMATIC,
    label: f.intl.string(f.t.qNgtO1)
  }), r
}

function h() {
  let {
    audioSubsystem: e,
    legacyAudioSubsystemSupported: t,
    experimentalAudioSubsystemSupported: n,
    automaticAudioSubsystemSupported: h
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    audioSubsystem: Chunk131951.Z.getAudioSubsystem(),
    legacyAudioSubsystemSupported: Chunk131951.Z.supports(Chunk65154.AN.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: Chunk131951.Z.supports(Chunk65154.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    automaticAudioSubsystemSupported: Chunk131951.Z.supports(Chunk65154.AN.AUTOMATIC_AUDIO_SUBSYSTEM)
  }));
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
    children: (0, Chunk54381.jsx)(Chunk481060.q4e, {
      label: Chunk388032.intl.string(Chunk388032.t.wVBHr0),
      className: Chunk197571.marginBottom20,
      value: module,
      options: p(exports, require, h),
      onChange: e => {
        let t = () => o.Z.setAudioSubsystem(e);
        (0, c.Z)(f.intl.string(f.t.uY7AcQ), f.intl.string(f.t.gBqik6), t)
      }
    })
  })
}