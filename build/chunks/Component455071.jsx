/** Chunk was on 51997 **/
/** chunk id: 455071, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  VoiceFilterFeedbackModal: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk930932 = require("./930932.js"),
  Chunk612479 = require("./612479.jsx"),
  Chunk131935 = require("./131935.js"),
  Chunk652215 = require("./652215.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx");
let u = [Chunk670455.P0.BAD, Chunk670455.P0.GOOD],
  _ = {
    [Chunk670455.P0.BAD]: Chunk985018.intl.string(Chunk985018.t.zGnUBV),
    [Chunk670455.P0.GOOD]: Chunk985018.intl.string(Chunk985018.t.SqprKf)
  },
  b = ["other"],
  f = [{
    label: Chunk985018.intl.string(Chunk985018.t.DVEGuL),
    code: 1001,
    value: "nobody_could_hear_me"
  }, {
    label: Chunk985018.intl.string(Chunk985018.t.Q3e5wF),
    code: 1002,
    value: "audio_not_understood"
  }, {
    label: Chunk985018.intl.string(Chunk985018.t["D98z+y"]),
    code: 1003,
    value: "audio_cut"
  }, {
    label: Chunk985018.intl.string(Chunk985018.t.lWtGvX),
    code: 1004,
    value: "audio_robotic"
  }, {
    label: Chunk985018.intl.string(Chunk985018.t.FARCFA),
    code: 1005,
    value: "audio_delay"
  }, {
    label: Chunk985018.intl.string(Chunk985018.t["4nEvAa"]),
    code: 1006,
    value: "bad_volume"
  }, {
    label: Chunk985018.intl.string(Chunk985018.t.xVRTjP),
    code: 1007,
    value: "audio_echo"
  }, {
    label: Chunk985018.intl.string(Chunk985018.t.qvP5vz),
    code: 1008,
    value: "audio_unchanged"
  }, {
    label: Chunk985018.intl.string(Chunk985018.t.fpevoR),
    code: 1099,
    value: "other"
  }];

function p(e) {
  let {
    onClose: t,
    transitionState: a,
    analyticsData: p
  } = e;
  return (0, i.jsx)(d.A, {
    modalType: "voice_filter",
    header: s.intl.string(s.t.zZAORN),
    impression: {
      impressionName: o.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
      impressionProperties: {
        rtc_connection_id: p.rtc_connection_id,
        media_session_id: p.media_session_id
      }
    },
    ratingOptions: u,
    ratingTextLabels: _,
    problemTitle: s.intl.string(s.t.FJmoxF),
    problems: f,
    freeformNeededProblems: b,
    onSubmit: function(e) {
      var t, a;
      let {
        rating: i,
        problem: o,
        dontShowAgain: d,
        feedback: s
      } = e;
      d && (0, n.n3)({
        feedbackType: r.MW.VOICE_FILTER,
        location: "VoiceFilterFeedbackModal"
      }), null != i && (0, l.A)(c.HAw.VOICE_FILTER_FEEDBACK, {
        rating: i,
        reasonCode: null != (t = null == o ? true : o.code) ? t : null,
        reasonDescription: null != (a = null == o ? true : o.value) ? a : null,
        feedback: s,
        analyticsData: p
      })
    },
    onClose: t,
    transitionState: a,
    otherKey: "other"
  })
}