/** Chunk was on web.js **/
/** chunk id: 37962, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w,
  u: () => b
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  Chunk506774 = require("./506774.js"),
  Chunk439372 = require("./439372.js"),
  Chunk450510 = require("./450510.js"),
  Chunk891540 = require("./891540.js"),
  Chunk868974 = require("./868974.js"),
  Chunk253932 = require("./253932.js"),
  Chunk383501 = require("./383501.js"),
  Chunk881520 = require("./881520.js"),
  Chunk368854 = require("./368854.js"),
  Chunk670455 = require("./670455.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = 200,
  y = {
    chance: .2,
    cooldown: 864e5
  },
  b = {
    [Chunk670455.MW.VOICE]: g(h({}, y), {
      group: Chunk670455.h0.AV,
      hotspot: Chunk450510._2.VOICE_CALL_FEEDBACK,
      storageKey: "lastVoiceFeedback",
      feedbackType: Chunk670455.MW.VOICE,
      eligibilityChecks: [T]
    }),
    [Chunk670455.MW.STREAM]: g(h({}, y), {
      group: Chunk670455.h0.AV,
      hotspot: Chunk450510._2.REPORT_PROBLEM_POST_STREAM,
      storageKey: "lastStreamFeedback",
      feedbackType: Chunk670455.MW.STREAM
    }),
    [Chunk670455.MW.VIDEO_BACKGROUND]: g(h({}, y), {
      group: Chunk670455.h0.AV,
      hotspot: Chunk450510._2.VIDEO_BACKGROUND_FEEDBACK,
      storageKey: "lastVideoBackgroundFeedback",
      feedbackType: Chunk670455.MW.VIDEO_BACKGROUND
    }),
    [Chunk670455.MW.ACTIVITY]: {
      cooldown: 0,
      chance: .5,
      group: Chunk670455.h0.AV,
      hotspot: Chunk450510._2.POST_ACTIVITY_FEEDBACK,
      storageKey: "lastActivityFeedback",
      feedbackType: Chunk670455.MW.ACTIVITY
    },
    [Chunk670455.MW.IN_APP_REPORTS]: {
      cooldown: 1728e5,
      chance: .5,
      group: Chunk670455.h0.SAFETY,
      hotspot: Chunk450510._2.IN_APP_REPORTS_FEEDBACK,
      storageKey: "inAppReportsFeedback",
      feedbackType: Chunk670455.MW.IN_APP_REPORTS
    },
    [Chunk670455.MW.BLOCK_USER]: {
      cooldown: 0,
      chance: 1,
      group: Chunk670455.h0.SAFETY,
      hotspot: Chunk450510._2.BLOCK_USER_FEEDBACK,
      storageKey: "blockUser",
      feedbackType: Chunk670455.MW.BLOCK_USER
    },
    [Chunk670455.MW.VOICE_FILTER]: g(h({}, y), {
      group: Chunk670455.h0.AV,
      hotspot: Chunk450510._2.VOICE_FILTER_FEEDBACK,
      storageKey: "lastVoiceFilterFeedback",
      feedbackType: Chunk670455.MW.VOICE_FILTER,
      eligibilityChecks: [T]
    }),
    [Chunk670455.MW.SEARCH_RESULTS]: g(h({}, y), {
      group: Chunk670455.h0.SEARCH,
      hotspot: Chunk450510._2.SEARCH_RESULTS_FEEDBACK,
      storageKey: "searchResultsFeedback",
      feedbackType: Chunk670455.MW.SEARCH_RESULTS,
      eligibilityChecks: [C]
    }),
    [Chunk670455.MW.AGE_VERIFICATION]: {
      cooldown: 0,
      chance: 1,
      group: Chunk670455.h0.SAFETY,
      hotspot: Chunk450510._2.AGE_VERIFICATION_FEEDBACK,
      storageKey: "ageVerificationFeedback",
      feedbackType: Chunk670455.MW.AGE_VERIFICATION
    }
  };

function O(e) {
  var t, n;
  if (__OVERLAY__) returnfalse;
  let {
    overrideEligibility: r
  } = (0, f.P)({
    location: "FeedbackManager"
  });
  if (r) returntrue;
  let i = null != (t = d.A.getFeedbackConfig(e)) ? t : b[e],
    a = [A, v, S],
    o = null != (n = i.eligibilityChecks) ? n : [];
  return a.every(e => e(i)) && o.every(e => e(i))
}

function v(e) {
  var t;
  let n = null == (t = c.Yt.getSetting()[e.feedbackType]) ? true : t.optOutExpiryTime,
    r = null != n && !Number.isNaN(n) && Date.now() < n,
    i = !s.A.hasHotspot(e.hotspot);
  return i && !r && c.Yt.updateSetting(t => g(h({}, t), {
    [e.feedbackType]: g(h({}, t[e.feedbackType]), {
      optOutExpiryTime: p.fs
    })
  })), !r && !i
}

function A(e) {
  return Math.random() < e.chance
}

function I(e, t) {
  var n, a, o;
  let s, l = null == (a = c.Yt.getSetting()[t.feedbackType]) ? true : a.lastImpressionTime;
  return (null == l || Number.isNaN(l)) && null != t.storageKey && (null == (s = null != (o = i.w.get(t.storageKey)) ? o : true) || Number.isNaN(s) || c.Yt.updateSetting(e => g(h({}, e), {
    [t.feedbackType]: g(h({}, e[t.feedbackType]), {
      lastImpressionTime: s
    })
  }))), (null != (n = (0, r.max)([l, s])) ? n : 0) + e.cooldown < Date.now()
}

function S(e) {
  for (let t of Object.values(b).filter(t => {
      let {
        group: n
      } = t;
      return n === e.group
    }))
    if (!I(e, t)) returnfalse;
  returntrue
}

function T(e) {
  return !u.A.getWasEverRtcConnected() || u.A.getWasEverMultiParticipant()
}

function C(e) {
  return !!(0, l.s)({
    location: "FeedbackManager"
  })
}

function N(e) {
  c.Yt.updateSetting(t => g(h({}, t), {
    [e]: g(h({}, t[e]), {
      lastImpressionTime: Date.now()
    })
  }))
}
class w extends Chunk439372.A {
  possiblyShowFeedbackModal(e, t, n) {
    if (!O(e) || null != this.feedbackTypeToShow && p.uf[this.feedbackTypeToShow] < p.uf[e]) {
      null == n || n();
      return
    }
    this.feedbackTypeToShow = e, this.showFeedbackModalDebounced(t, n)
  }
  constructor(...e) {
    super(...e), _(this, "feedbackTypeToShow", null), _(this, "showFeedbackModalDebounced", (0, r.debounce)((e, t) => {
      null != this.feedbackTypeToShow ? (N(this.feedbackTypeToShow), this.feedbackTypeToShow = null, e()) : null == t || t()
    }, E))
  }
}