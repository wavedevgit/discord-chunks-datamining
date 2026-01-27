/** Chunk was on 60667 **/
/** chunk id: 204318, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m,
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
    id: u.rB.STANDARD,
    value: u.rB.STANDARD,
    label: _.intl.string(_.t.dqb2JZ)
  }];
  return e && r.push({
    id: u.rB.LEGACY,
    value: u.rB.LEGACY,
    label: _.intl.string(_.t["TYfH+5"])
  }), t && r.push({
    id: u.rB.EXPERIMENTAL,
    value: u.rB.EXPERIMENTAL,
    label: _.intl.string(_.t.liQmtr)
  }), n && r.push({
    id: u.rB.AUTOMATIC,
    value: u.rB.AUTOMATIC,
    label: _.intl.string(_.t.qNgtO1)
  }), r
}

function m() {
  let {
    audioSubsystem: e,
    legacyAudioSubsystemSupported: t,
    experimentalAudioSubsystemSupported: n,
    automaticAudioSubsystemSupported: m
  } = (0, i.cf)([o.A], () => ({
    audioSubsystem: o.A.getAudioSubsystem(),
    legacyAudioSubsystemSupported: o.A.supports(u.O5.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: o.A.supports(u.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    automaticAudioSubsystemSupported: o.A.supports(u.O5.AUTOMATIC_AUDIO_SUBSYSTEM)
  }));
  return (0, r.jsx)(a.x, {
    setting: d.H.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
    children: (0, r.jsx)(l.l6P, {
      label: _.intl.string(_.t.wVBHr0),
      value: e,
      options: p(t, n, m),
      onSelectionChange: e => {
        (0, c.A)(_.intl.string(_.t.uY7AcQ), _.intl.string(_.t.gBqik6), () => s.A.setAudioSubsystem(e))
      },
      selectionMode: "single",
      fullWidth: true
    })
  })
}