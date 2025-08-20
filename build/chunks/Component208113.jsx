/** Chunk was on web.js **/
/** chunk id: 208113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
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
    label: f.intl.string(f.t.dqb2JS)
  }];
  return e && r.push({
    value: d.iA.LEGACY,
    label: f.intl.string(f.t["TYfH+/"])
  }), t && r.push({
    value: d.iA.EXPERIMENTAL,
    label: f.intl.string(f.t.liQmtr)
  }), n && r.push({
    value: d.iA.AUTOMATIC,
    label: f.intl.string(f.t.qNgtOz)
  }), r
}

function h(e) {
  let {
    refreshStyles: t = false
  } = e, {
    audioSubsystem: n,
    legacyAudioSubsystemSupported: h,
    experimentalAudioSubsystemSupported: m,
    automaticAudioSubsystemSupported: g
  } = (0, i.cj)([l.Z], () => ({
    audioSubsystem: l.Z.getAudioSubsystem(),
    legacyAudioSubsystemSupported: l.Z.supports(d.AN.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: l.Z.supports(d.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    automaticAudioSubsystemSupported: l.Z.supports(d.AN.AUTOMATIC_AUDIO_SUBSYSTEM)
  })), E = (0, r.jsx)(a.q4e, {
    className: _.marginBottom20,
    value: n,
    options: p(h, m, g),
    onChange: e => {
      let t = () => o.Z.setAudioSubsystem(e);
      (0, c.Z)(f.intl.string(f.t.uY7AcX), f.intl.string(f.t.gBqik5), t)
    }
  });
  return (0, r.jsx)(s.F, {
    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
    children: t ? (0, r.jsx)(a.xJW, {
      title: f.intl.string(f.t.wVBHr6),
      children: E
    }) : (0, r.jsxs)(a.hjN, {
      className: _.marginBottom20,
      title: f.intl.string(f.t.wVBHr6),
      children: [E, (0, r.jsx)(a.$i$, {
        className: _.marginBottom20
      })]
    })
  })
}