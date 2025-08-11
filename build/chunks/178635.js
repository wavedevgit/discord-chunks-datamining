/** Chunk was on web.js **/
/** chunk id: 178635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => v,
  Z: () => w
}), require("./539854.js"), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk433517 = require("./433517.js"),
  Chunk147913 = require("./147913.js"),
  Chunk536442 = require("./536442.js"),
  Chunk810788 = require("./810788.js"),
  Chunk759209 = require("./759209.js"),
  Chunk695346 = require("./695346.js"),
  Chunk19780 = require("./19780.js"),
  Chunk115470 = require("./115470.js"),
  Chunk250454 = require("./250454.js"),
  Chunk102824 = require("./102824.js"),
  Chunk681926 = require("./681926.js"),
  Chunk531578 = require("./531578.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = 200,
  O = {
    chance: .2,
    cooldown: 864e5
  },
  v = {
    [Chunk531578.nw.VOICE]: b(g({}, O), {
      group: Chunk531578.FB.AV,
      hotspot: Chunk536442.v6.VOICE_CALL_FEEDBACK,
      storageKey: "lastVoiceFeedback",
      feedbackType: Chunk531578.nw.VOICE,
      eligibilityChecks: [C]
    }),
    [Chunk531578.nw.STREAM]: b(g({}, O), {
      group: Chunk531578.FB.AV,
      hotspot: Chunk536442.v6.REPORT_PROBLEM_POST_STREAM,
      storageKey: "lastStreamFeedback",
      feedbackType: Chunk531578.nw.STREAM
    }),
    [Chunk531578.nw.VIDEO_BACKGROUND]: b(g({}, O), {
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
    [Chunk531578.nw.USER_DM_MUTE]: {
      cooldown: 6048e5,
      chance: 1,
      group: Chunk531578.FB.SAFETY,
      hotspot: Chunk536442.v6.USER_DM_MUTE_FEEDBACK,
      storageKey: "userDmMute",
      feedbackType: Chunk531578.nw.USER_DM_MUTE
    },
    [Chunk531578.nw.BLOCK_USER]: {
      cooldown: 0,
      chance: 1,
      group: Chunk531578.FB.SAFETY,
      hotspot: Chunk536442.v6.BLOCK_USER_FEEDBACK,
      storageKey: "blockUser",
      feedbackType: Chunk531578.nw.BLOCK_USER
    },
    [Chunk531578.nw.VOICE_FILTER]: b(g({}, O), {
      group: Chunk531578.FB.AV,
      hotspot: Chunk536442.v6.VOICE_FILTER_FEEDBACK,
      storageKey: "lastVoiceFilterFeedback",
      feedbackType: Chunk531578.nw.VOICE_FILTER,
      eligibilityChecks: [C]
    }),
    [Chunk531578.nw.SEARCH_RESULTS]: b(g({}, O), {
      group: Chunk531578.FB.SEARCH,
      hotspot: Chunk536442.v6.SEARCH_RESULTS_FEEDBACK,
      storageKey: "searchResultsFeedback",
      feedbackType: Chunk531578.nw.SEARCH_RESULTS,
      eligibilityChecks: [R]
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

function I(e) {
  var t, n;
  if (__OVERLAY__) returnfalse;
  let {
    overrideEligibility: r
  } = (0, _.j)({
    location: "FeedbackManager"
  });
  if (r) returntrue;
  let i = null != (t = d.Z.getFeedbackConfig(e)) ? t : v[e],
    o = [S, T],
    {
      doGroupEligibilityCheck: a
    } = (0, p.T)({
      location: "FeedbackManager"
    });
  a ? o.push(N) : o.push(e => A(e, e));
  let s = null != (n = i.eligibilityChecks) ? n : [];
  return o.every(e => e(i)) && s.every(e => e(i))
}

function T(e) {
  let {
    persistToBackend: t
  } = (0, f.O)({
    location: "FeedbackManager/".concat(e.feedbackType)
  });
  if (!t) return s.Z.hasHotspot(e.hotspot);
  {
    var n;
    let t = null == (n = c.A2.getSetting()[e.feedbackType]) ? true : n.optOutExpiryTime,
      r = null != t && !Number.isNaN(t) && Date.now() < t,
      i = !s.Z.hasHotspot(e.hotspot);
    return i && !r && c.A2.updateSetting(t => b(g({}, t), {
      [e.feedbackType]: b(g({}, t[e.feedbackType]), {
        optOutExpiryTime: h.uf
      })
    })), !r && !i
  }
}

function S(e) {
  return Math.random() < e.chance
}

function A(e, t) {
  let {
    persistToBackend: n
  } = (0, f.O)({
    location: "FeedbackManager/".concat(e.feedbackType)
  });
  if (n) {
    var o, a, s;
    let n, l = null == (o = c.A2.getSetting()[t.feedbackType]) ? true : o.lastImpressionTime;
    return (null == l || Number.isNaN(l)) && null != t.storageKey && (null == (n = null != (a = i.K.get(t.storageKey)) ? a : true) || Number.isNaN(n) || c.A2.updateSetting(e => b(g({}, e), {
      [t.feedbackType]: b(g({}, e[t.feedbackType]), {
        lastImpressionTime: n
      })
    }))), (null != (s = (0, r.max)([l, n])) ? s : 0) + e.cooldown < Date.now()
  }
  if (null != t.storageKey) {
    let n = i.K.get(t.storageKey);
    if (null != n) return n + e.cooldown < Date.now()
  }
  returntrue
}

function N(e) {
  for (let t of Object.values(v).filter(t => {
      let {
        group: n
      } = t;
      return n === e.group
    }))
    if (!A(e, t)) returnfalse;
  returntrue
}

function C(e) {
  return !u.Z.getWasEverRtcConnected() || u.Z.getWasEverMultiParticipant()
}

function R(e) {
  return (0, l.j)({
    location: "FeedbackManager"
  })
}

function P(e) {
  let {
    persistToBackend: t
  } = (0, f.O)({
    location: "FeedbackManager/".concat(e)
  });
  if (t) c.A2.updateSetting(t => b(g({}, t), {
    [e]: b(g({}, t[e]), {
      lastImpressionTime: Date.now()
    })
  }));
  else {
    let {
      storageKey: t
    } = v[e];
    null != t && i.K.set(t, Date.now())
  }
}
class w extends Chunk147913.Z {
  possiblyShowFeedbackModal(e, t, n) {
    if (!I(e) || null != this.feedbackTypeToShow && h.b5[this.feedbackTypeToShow] < h.b5[e]) {
      null == n || n();
      return
    }
    this.feedbackTypeToShow = e, this.showFeedbackModalDebounced(t, n)
  }
  constructor(...e) {
    super(...e), m(this, "feedbackTypeToShow", null), m(this, "showFeedbackModalDebounced", (0, r.debounce)((e, t) => {
      null != this.feedbackTypeToShow ? (P(this.feedbackTypeToShow), this.feedbackTypeToShow = null, e()) : null == t || t()
    }, y))
  }
}