/** Chunk was on web.js **/
/** chunk id: 169223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk16609 = require("./16609.js"),
  Chunk812206 = require("./812206.js"),
  Chunk569545 = require("./569545.js"),
  Chunk687516 = require("./687516.js"),
  Chunk928518 = require("./928518.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk158776 = require("./158776.js"),
  Chunk19780 = require("./19780.js"),
  Chunk959457 = require("./959457.js"),
  Chunk178635 = require("./178635.js"),
  Chunk531578 = require("./531578.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class S extends Chunk178635.Z {
  constructor(...e) {
    super(...e), b(this, "actions", {
      VOICE_CHANNEL_SHOW_FEEDBACK: e => this.handleVoiceChannelFeedback(e),
      STREAM_CLOSE: e => this.handleStreamClose(e),
      VIDEO_BACKGROUND_SHOW_FEEDBACK: e => this.handleVideoBackgroundShowFeedback(e),
      EMBEDDED_ACTIVITY_CLOSE: e => this.handleActivityClose(e),
      IN_APP_REPORTS_SHOW_FEEDBACK: e => this.handleInAppReportsFeedback(e),
      BLOCK_USER_SHOW_FEEDBACK: () => this.handleBlockUserFeedback(),
      AGE_VERIFICATION_SHOW_FEEDBACK: e => this.handleAgeVerificationFeedback(e)
    }), b(this, "handleVoiceChannelFeedback", e => {
      let {
        analyticsData: t
      } = e;
      (0, i.sum)(t.duration_speaking_voice_filter_ms) >= 5e3 && this.possiblyShowFeedbackModal(g.nw.VOICE_FILTER, () => {
        (0, a.ZDy)(async () => {
          let {
            VoiceFilterFeedbackModal: e
          } = await Promise.all([n.e("26860"), n.e("47672"), n.e("69134")]).then(n.bind(n, 193543));
          return n => (0, r.jsx)(e, v(y({}, n), {
            analyticsData: t
          }))
        })
      }), this.possiblyShowFeedbackModal(g.nw.VOICE, () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("26860"), n.e("96888")]).then(n.bind(n, 988645));
          return n => (0, r.jsx)(e, v(y({}, n), {
            analyticsData: t
          }))
        })
      })
    }), b(this, "handleStreamClose", e => {
      var t, i;
      let {
        streamKey: o,
        canShowFeedback: s
      } = e, u = (0, l.my)(o), f = (0, c.L2)(u, p.Z), _ = null != (i = m.Z.getVideoStats(o)) ? i : {}, h = y({
        media_session_id: m.Z.getMediaSessionId(o),
        rtc_connection_id: m.Z.getRtcConnectionId(o),
        stream_region: m.Z.getRegion(o),
        max_viewers: m.Z.getMaxViewers(o),
        parent_media_session_id: null == (t = m.Z.getRTCConnection(o)) ? true : t.parentMediaSessionId
      }, _);
      s && this.possiblyShowFeedbackModal(g.nw.STREAM, () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("26860"), n.e("47672"), n.e("74732")]).then(n.bind(n, 142402));
          return t => (0, r.jsx)(e, v(y({
            stream: u,
            streamApplication: f,
            isStreamer: u.ownerId === d.default.getId()
          }, t), {
            analyticsData: h
          }))
        })
      })
    }), b(this, "handleVideoBackgroundShowFeedback", e => {
      let {
        analyticsData: t
      } = e;
      this.possiblyShowFeedbackModal(g.nw.VIDEO_BACKGROUND, () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("26860"), n.e("47672"), n.e("73040")]).then(n.bind(n, 801320));
          return n => (0, r.jsx)(e, v(y({}, n), {
            analyticsData: t
          }))
        })
      })
    }), b(this, "handleActivityClose", e => {
      let {
        applicationId: t,
        location: i,
        showFeedback: l
      } = e, c = s.Z.getApplication(t), d = (0, o.p)(i), p = f.Z.getChannel(d), m = {
        rtc_connection_id: _.Z.getRTCConnectionId(),
        media_session_id: _.Z.getMediaSessionId()
      }, h = u.Z.getWindowOpen(E.KJ3.CHANNEL_CALL_POPOUT) ? a.u1M : a.z1l;
      null != c && l && this.possiblyShowFeedbackModal(g.nw.ACTIVITY, () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("26860"), n.e("47672"), n.e("31216")]).then(n.bind(n, 450634));
          return t => (0, r.jsx)(e, v(y({}, t), {
            activityApplication: c,
            channel: p,
            embeddedActivityLocation: i,
            analyticsData: m
          }))
        }, {
          contextKey: h
        })
      })
    }), b(this, "handleInAppReportsFeedback", e => {
      let {
        reportId: t,
        reportType: i
      } = e;
      this.possiblyShowFeedbackModal(g.nw.IN_APP_REPORTS, () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("26860"), n.e("47672"), n.e("94723")]).then(n.bind(n, 442173));
          return n => (0, r.jsx)(e, v(y({}, n), {
            reportId: t,
            reportType: i
          }))
        })
      })
    }), b(this, "handleBlockUserFeedback", () => {
      this.possiblyShowFeedbackModal(g.nw.BLOCK_USER, () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("26860"), n.e("47672"), n.e("66672")]).then(n.bind(n, 180970));
          return t => (0, r.jsx)(e, y({}, t))
        })
      })
    }), b(this, "handleAgeVerificationFeedback", e => {
      let {
        dismissibleContent: t
      } = e;
      this.possiblyShowFeedbackModal(g.nw.AGE_VERIFICATION, () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("26860"), n.e("47672"), n.e("63834")]).then(n.bind(n, 110927));
          return n => (0, r.jsx)(e, y({
            dismissibleContent: t
          }, n))
        })
      })
    })
  }
}
let I = new S