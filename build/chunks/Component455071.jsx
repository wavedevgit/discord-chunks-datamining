/** Chunk was on 51997 **/
/** chunk id: 455071, original params: e,t,o (module,exports,require) **/
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
let d = [Chunk670455.P0.BAD, Chunk670455.P0.GOOD],
  u = {
    [Chunk670455.P0.BAD]: Chunk985018.intl.string(Chunk985018.t.zGnUBV),
    [Chunk670455.P0.GOOD]: Chunk985018.intl.string(Chunk985018.t.SqprKf)
  },
  b = ["other"],
  m = [{
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
    transitionState: o,
    analyticsData: p
  } = e;
  return (0, i.jsx)(l.A, {
    modalType: "voice_filter",
    header: s.intl.string(s.t.zZAORN),
    impression: {
      impressionName: n.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
      impressionProperties: {
        rtc_connection_id: p.rtc_connection_id,
        media_session_id: p.media_session_id
      }
    },
    ratingOptions: d,
    ratingTextLabels: u,
    problemTitle: s.intl.string(s.t.FJmoxF),
    problems: m,
    freeformNeededProblems: b,
    onSubmit: function(e) {
      var t, o;
      let {
        rating: i,
        problem: n,
        dontShowAgain: l,
        feedback: s
      } = e;
      l && (0, a.n3)({
        feedbackType: r.MW.VOICE_FILTER,
        location: "VoiceFilterFeedbackModal"
      }), null != i && (0, _.A)(c.HAw.VOICE_FILTER_FEEDBACK, {
        rating: i,
        reasonCode: null != (t = null == n ? true : n.code) ? t : null,
        reasonDescription: null != (o = null == n ? true : n.value) ? o : null,
        feedback: s,
        analyticsData: p
      })
    },
    onClose: t,
    transitionState: o,
    otherKey: "other"
  })
}