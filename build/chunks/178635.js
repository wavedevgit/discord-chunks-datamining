/** Chunk was on web.js **/
"use strict";
n.d(t, {
  R: () => E,
  Z: () => T
}), n(47120);
var r = n(392711),
  i = n.n(r),
  o = n(433517),
  a = n(147913),
  s = n(536442),
  l = n(810788),
  c = n(19780),
  u = n(115470),
  d = n(531578);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = 200,
  g = {
    chance: .2,
    cooldown: 864e5
  },
  E = {
    [d.nw.VOICE]: h(_({}, g), {
      hotspot: s.v6.VOICE_CALL_FEEDBACK,
      storageKey: "lastVoiceFeedback",
      eligibilityChecks: [S]
    }),
    [d.nw.STREAM]: h(_({}, g), {
      hotspot: s.v6.REPORT_PROBLEM_POST_STREAM,
      storageKey: "lastStreamFeedback"
    }),
    [d.nw.VIDEO_BACKGROUND]: h(_({}, g), {
      hotspot: s.v6.VIDEO_BACKGROUND_FEEDBACK,
      storageKey: "lastVideoBackgroundFeedback"
    }),
    [d.nw.ACTIVITY]: {
      cooldown: 0,
      chance: .5,
      hotspot: s.v6.POST_ACTIVITY_FEEDBACK,
      storageKey: "lastActivityFeedback"
    },
    [d.nw.IN_APP_REPORTS]: {
      cooldown: 1728e5,
      chance: .5,
      hotspot: s.v6.IN_APP_REPORTS_FEEDBACK,
      storageKey: "inAppReportsFeedback"
    },
    [d.nw.USER_DM_MUTE]: {
      cooldown: 6048e5,
      chance: 1,
      hotspot: s.v6.USER_DM_MUTE_FEEDBACK,
      storageKey: "userDmMute"
    },
    [d.nw.BLOCK_USER]: {
      cooldown: 0,
      chance: 1,
      hotspot: s.v6.BLOCK_USER_FEEDBACK,
      storageKey: "blockUser"
    }
  };

function v(e) {
  var t, n;
  if (__OVERLAY__) return !1;
  let r = null !== (t = u.Z.getFeedbackConfig(e)) && void 0 !== t ? t : E[e],
    i = [O, y, b],
    o = null !== (n = r.eligibilityChecks) && void 0 !== n ? n : [];
  return i.every(e => e(r)) && o.every(e => e(r))
}

function b(e) {
  return l.Z.hasHotspot(e.hotspot)
}

function y(e) {
  return Math.random() < e.chance
}

function O(e) {
  if (null != e.storageKey) {
    let t = o.K.get(e.storageKey);
    if (null != t && Date.now() - t < e.cooldown) return !1
  }
  return !0
}

function S(e) {
  return !c.Z.getWasEverRtcConnected() || c.Z.getWasEverMultiParticipant()
}

function I(e) {
  let t = E[e];
  null != t.storageKey && o.K.set(t.storageKey, Date.now())
}
class T extends a.Z {
  possiblyShowFeedbackModal(e, t) {
    v(e) && (null == this.feedbackTypeToShow || !(d.b5[this.feedbackTypeToShow] < d.b5[e])) && (this.feedbackTypeToShow = e, this.showFeedbackModalDebounced(t))
  }
  constructor(...e) {
    super(...e), f(this, "feedbackTypeToShow", null), f(this, "showFeedbackModalDebounced", i().debounce(e => {
      null != this.feedbackTypeToShow && (I(this.feedbackTypeToShow), this.feedbackTypeToShow = null, e())
    }, m))
  }
}