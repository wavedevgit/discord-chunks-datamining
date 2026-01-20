/** Chunk was on web.js **/
/** chunk id: 178635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => y,
  Z: () => P
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk433517 = require("./433517.js"),
  Chunk147913 = require("./147913.js"),
  Chunk536442 = require("./536442.js"),
  Chunk810788 = require("./810788.js"),
  Chunk759209 = require("./759209.js"),
  Chunk695346 = require("./695346.js"),
  Chunk19780 = require("./19780.js"),
  Chunk115470 = require("./115470.js"),
  Chunk102824 = require("./102824.js"),
  Chunk531578 = require("./531578.js");

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
  b = {
    chance: .2,
    cooldown: 864e5
  },
  y = {
    [Chunk531578.nw.VOICE]: g(h({}, b), {
      group: Chunk531578.FB.AV,
      hotspot: Chunk536442.v6.VOICE_CALL_FEEDBACK,
      storageKey: "lastVoiceFeedback",
      feedbackType: Chunk531578.nw.VOICE,
      eligibilityChecks: [C]
    }),
    [Chunk531578.nw.STREAM]: g(h({}, b), {
      group: Chunk531578.FB.AV,
      hotspot: Chunk536442.v6.REPORT_PROBLEM_POST_STREAM,
      storageKey: "lastStreamFeedback",
      feedbackType: Chunk531578.nw.STREAM
    }),
    [Chunk531578.nw.VIDEO_BACKGROUND]: g(h({}, b), {
      group: Chunk531578.FB.AV,
      hotspot: Chunk536442.v6.VIDEO_BACKGROUND_FEEDBACK,
      storageKey: "lastVideoBackgroundFeedback",
      feedbackType: Chunk531578.nw.VIDEO_BACKGROUND
    }),
    [Chunk531578.nw.ACTIVITY]: {
      cooldown: 0,
      chance: .5,
      group: Chunk531578.FB.AV,
      hotspot: Chunk536442.v6.POST_ACTIVITY_FEEDBACK,
      storageKey: "lastActivityFeedback",
      feedbackType: Chunk531578.nw.ACTIVITY
    },
    [Chunk531578.nw.IN_APP_REPORTS]: {
      cooldown: 1728e5,
      chance: .5,
      group: Chunk531578.FB.SAFETY,
      hotspot: Chunk536442.v6.IN_APP_REPORTS_FEEDBACK,
      storageKey: "inAppReportsFeedback",
      feedbackType: Chunk531578.nw.IN_APP_REPORTS
    },
    [Chunk531578.nw.BLOCK_USER]: {
      cooldown: 0,
      chance: 1,
      group: Chunk531578.FB.SAFETY,
      hotspot: Chunk536442.v6.BLOCK_USER_FEEDBACK,
      storageKey: "blockUser",
      feedbackType: Chunk531578.nw.BLOCK_USER
    },
    [Chunk531578.nw.VOICE_FILTER]: g(h({}, b), {
      group: Chunk531578.FB.AV,
      hotspot: Chunk536442.v6.VOICE_FILTER_FEEDBACK,
      storageKey: "lastVoiceFilterFeedback",
      feedbackType: Chunk531578.nw.VOICE_FILTER,
      eligibilityChecks: [C]
    }),
    [Chunk531578.nw.SEARCH_RESULTS]: g(h({}, b), {
      group: Chunk531578.FB.SEARCH,
      hotspot: Chunk536442.v6.SEARCH_RESULTS_FEEDBACK,
      storageKey: "searchResultsFeedback",
      feedbackType: Chunk531578.nw.SEARCH_RESULTS,
      eligibilityChecks: [A]
    }),
    [Chunk531578.nw.AGE_VERIFICATION]: {
      cooldown: 0,
      chance: 1,
      group: Chunk531578.FB.SAFETY,
      hotspot: Chunk536442.v6.AGE_VERIFICATION_FEEDBACK,
      storageKey: "ageVerificationFeedback",
      feedbackType: Chunk531578.nw.AGE_VERIFICATION
    }
  };

function O(e) {
  var t, n;
  if (__OVERLAY__) returnfalse;
  let {
    overrideEligibility: r
  } = (0, f.j)({
    location: "FeedbackManager"
  });
  if (r) returntrue;
  let i = null != (t = d.Z.getFeedbackConfig(e)) ? t : y[e],
    a = [S, v, T],
    o = null != (n = i.eligibilityChecks) ? n : [];
  return a.every(e => e(i)) && o.every(e => e(i))
}

function v(e) {
  var t;
  let n = null == (t = c.A2.getSetting()[e.feedbackType]) ? true : t.optOutExpiryTime,
    r = null != n && !Number.isNaN(n) && Date.now() < n,
    i = !s.Z.hasHotspot(e.hotspot);
  return i && !r && c.A2.updateSetting(t => g(h({}, t), {
    [e.feedbackType]: g(h({}, t[e.feedbackType]), {
      optOutExpiryTime: p.uf
    })
  })), !r && !i
}

function S(e) {
  return Math.random() < e.chance
}

function I(e, t) {
  var n, a, o;
  let s, l = null == (n = c.A2.getSetting()[t.feedbackType]) ? true : n.lastImpressionTime;
  return (null == l || Number.isNaN(l)) && null != t.storageKey && (null == (s = null != (a = i.K.get(t.storageKey)) ? a : true) || Number.isNaN(s) || c.A2.updateSetting(e => g(h({}, e), {
    [t.feedbackType]: g(h({}, e[t.feedbackType]), {
      lastImpressionTime: s
    })
  }))), (null != (o = (0, r.max)([l, s])) ? o : 0) + e.cooldown < Date.now()
}

function T(e) {
  for (let t of Object.values(y).filter(t => {
      let {
        group: n
      } = t;
      return n === e.group
    }))
    if (!I(e, t)) returnfalse;
  returntrue
}

function C(e) {
  return !u.Z.getWasEverRtcConnected() || u.Z.getWasEverMultiParticipant()
}

function A(e) {
  return !!(0, l.j)({
    location: "FeedbackManager"
  })
}

function N(e) {
  c.A2.updateSetting(t => g(h({}, t), {
    [e]: g(h({}, t[e]), {
      lastImpressionTime: Date.now()
    })
  }))
}
class P extends Chunk147913.Z {
  possiblyShowFeedbackModal(e, t, n) {
    if (!O(e) || null != this.feedbackTypeToShow && p.b5[this.feedbackTypeToShow] < p.b5[e]) {
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