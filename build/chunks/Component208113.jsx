/** Chunk was on 30202 **/
/** chunk id: 208113, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    refreshStyles: t = false
  } = e, {
    audioSubsystem: n,
    legacyAudioSubsystemSupported: g,
    experimentalAudioSubsystemSupported: h,
    automaticAudioSubsystemSupported: f
  } = (0, r.cj)([o.Z], () => ({
    audioSubsystem: o.Z.getAudioSubsystem(),
    legacyAudioSubsystemSupported: o.Z.supports(u.AN.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: o.Z.supports(u.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    automaticAudioSubsystemSupported: o.Z.supports(u.AN.AUTOMATIC_AUDIO_SUBSYSTEM)
  })), b = (0, i.jsx)(s.q4e, {
    className: p.marginBottom20,
    value: n,
    options: function(e, t, n) {
      let i = [{
        value: u.iA.STANDARD,
        label: m.intl.string(m.t.dqb2JS)
      }];
      return e && i.push({
        value: u.iA.LEGACY,
        label: m.intl.string(m.t["TYfH+/"])
      }), t && i.push({
        value: u.iA.EXPERIMENTAL,
        label: m.intl.string(m.t.liQmtr)
      }), n && i.push({
        value: u.iA.AUTOMATIC,
        label: m.intl.string(m.t.qNgtOz)
      }), i
    }(g, h, f),
    onChange: e => {
      (0, c.Z)(m.intl.string(m.t.uY7AcX), m.intl.string(m.t.gBqik5), () => a.Z.setAudioSubsystem(e))
    }
  });
  return (0, i.jsx)(l.F, {
    setting: d.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
    children: t ? (0, i.jsx)(s.xJW, {
      title: m.intl.string(m.t.wVBHr6),
      children: b
    }) : (0, i.jsxs)(s.hjN, {
      className: p.marginBottom20,
      title: m.intl.string(m.t.wVBHr6),
      children: [b, (0, i.jsx)(s.$i$, {
        className: p.marginBottom20
      })]
    })
  })
}