/** Chunk was on 57230 **/
/** chunk id: 193543, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  VoiceFilterFeedbackModal: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk957115 = require("./957115.js"),
  Chunk332664 = require("./332664.jsx"),
  Chunk445102 = require("./445102.js"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");
let u = [Chunk531578.aZ.BAD, Chunk531578.aZ.GOOD],
  _ = {
    [Chunk531578.aZ.BAD]: Chunk388032.intl.string(Chunk388032.t.zGnUBV),
    [Chunk531578.aZ.GOOD]: Chunk388032.intl.string(Chunk388032.t.SqprKf)
  },
  b = ["other"],
  m = [{
    label: Chunk388032.intl.string(Chunk388032.t.DVEGuL),
    code: 1001,
    value: "nobody_could_hear_me"
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.Q3e5wF),
    code: 1002,
    value: "audio_not_understood"
  }, {
    label: Chunk388032.intl.string(Chunk388032.t["D98z+y"]),
    code: 1003,
    value: "audio_cut"
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.lWtGvX),
    code: 1004,
    value: "audio_robotic"
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.FARCFA),
    code: 1005,
    value: "audio_delay"
  }, {
    label: Chunk388032.intl.string(Chunk388032.t["4nEvAa"]),
    code: 1006,
    value: "bad_volume"
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.xVRTjP),
    code: 1007,
    value: "audio_echo"
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.qvP5vz),
    code: 1008,
    value: "audio_unchanged"
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.fpevoR),
    code: 1099,
    value: "other"
  }];

function p(e) {
  let {
    onClose: t,
    transitionState: a,
    analyticsData: p
  } = e;
  return (0, o.jsx)(c.Z, {
    modalType: "voice_filter",
    header: s.intl.string(s.t.zZAORN),
    impression: {
      impressionName: i.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
      impressionProperties: {
        rtc_connection_id: p.rtc_connection_id,
        media_session_id: p.media_session_id
      }
    },
    ratingOptions: u,
    ratingTextLabels: _,
    problemTitle: s.intl.string(s.t.FJmoxF),
    problems: m,
    freeformNeededProblems: b,
    onSubmit: function(e) {
      var t, a;
      let {
        rating: o,
        problem: i,
        dontShowAgain: c,
        feedback: s
      } = e;
      c && (0, n.Uv)({
        feedbackType: r.nw.VOICE_FILTER,
        location: "VoiceFilterFeedbackModal"
      }), null != o && (0, d.Z)(l.rMx.VOICE_FILTER_FEEDBACK, {
        rating: o,
        reasonCode: null != (t = null == i ? true : i.code) ? t : null,
        reasonDescription: null != (a = null == i ? true : i.value) ? a : null,
        feedback: s,
        analyticsData: p
      })
    },
    onClose: t,
    transitionState: a,
    otherKey: "other"
  })
}