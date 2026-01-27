/** Chunk was on web.js **/
/** chunk id: 199773, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk954571 = require("./954571.js"),
  Chunk787925 = require("./787925.js"),
  Chunk256787 = require("./256787.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = "daily_cap",
  h = 3,
  m = {
    numberOfDCsShownToday: 0,
    dailyCapPeriodStart: null,
    dismissibleContentSeenDuringSession: new Set,
    dailyCapOverridden: false,
    newUserMinAgeRequiredOverridden: false,
    renderedAtTimestamps: new Map,
    lastDCDismissed: null,
    seenForGuildId: new Map
  };

function g() {
  m = p(d({}, m), {
    dismissibleContentSeenDuringSession: new Set,
    renderedAtTimestamps: new Map,
    seenForGuildId: new Map
  })
}

function E(e) {
  let {
    value: t
  } = e;
  m.dailyCapOverridden = t
}

function y(e) {
  let {
    value: t
  } = e;
  m.newUserMinAgeRequiredOverridden = t
}

function b(e, t) {
  let n = m.seenForGuildId.get(t);
  return null != n && n.has(e)
}

function O(e) {
  let {
    dismissibleContent: t,
    guildId: n
  } = e, r = new Date;
  if (m.renderedAtTimestamps.set(t, r.getTime()), s.C.has(t) || m.dailyCapOverridden) return;
  let i = (0, l.vf)(t) && null != n;
  if (!(!i && m.dismissibleContentSeenDuringSession.has(t))) {
    if (!(i && b(t, n))) {
      if (i) {
        var a;
        let e = null != (a = m.seenForGuildId.get(n)) ? a : new Set;
        e.add(t), m.seenForGuildId.set(n, e)
      } else m.dismissibleContentSeenDuringSession.add(t);
      if (null == m.dailyCapPeriodStart) {
        let e = new Date;
        e.setHours(0, 0, 0, 0), m.dailyCapPeriodStart = e.getTime()
      }
      m.numberOfDCsShownToday += 1, m.numberOfDCsShownToday > h && o.default.track(c.HAw.DCF_CAP_EXCEEDED, {
        cap_type: _,
        dismissible_content: t,
        shown_dcs: m.numberOfDCsShownToday
      })
    }
  }
}

function v(e) {
  let {
    dismissibleContent: t
  } = e;
  m.lastDCDismissed = t, m.renderedAtTimestamps.delete(t)
}

function A(e) {
  let {
    dismissibleContent: t
  } = e;
  m.lastDCDismissed = null != t ? t : null
}

function I() {
  m.dailyCapPeriodStart = null, m.numberOfDCsShownToday = 0, m.dismissibleContentSeenDuringSession = new Set, m.seenForGuildId = new Map, m.lastDCDismissed = null
}
class S extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n, r;
      m.numberOfDCsShownToday = null != (t = e.numberOfDCsShownToday) ? t : 0, m.dailyCapPeriodStart = e.dailyCapPeriodStart, m.dailyCapOverridden = null != (n = e.dailyCapOverridden) && n, m.newUserMinAgeRequiredOverridden = null != (r = e.newUserMinAgeRequiredOverridden) && r
    }
    m.dismissibleContentSeenDuringSession = new Set, m.seenForGuildId = new Map, m.lastDCDismissed = null
  }
  getState() {
    return m
  }
  get dailyCapOverridden() {
    return m.dailyCapOverridden
  }
  get newUserMinAgeRequiredOverridden() {
    return m.newUserMinAgeRequiredOverridden
  }
  get lastDCDismissed() {
    return m.lastDCDismissed
  }
  getRenderedAtTimestamp(e) {
    return m.renderedAtTimestamps.get(e)
  }
  hasUserHitDCCap(e, t) {
    if (null != e && (s.C.has(e) || m.dailyCapOverridden)) returnfalse;
    if (null != e) {
      let n = null != t && (0, l.vf)(e);
      if (n && null != t && b(e, t) || !n && m.dismissibleContentSeenDuringSession.has(e)) returnfalse
    }
    let n = new Date;
    return n.setHours(0, 0, 0, 0), null != m.dailyCapPeriodStart && m.dailyCapPeriodStart < n.getTime() && (m.numberOfDCsShownToday = 0, m.dailyCapPeriodStart = null), m.numberOfDCsShownToday >= h
  }
}
u(S, "displayName", "DismissibleContentFrameworkStore"), u(S, "persistKey", "DismissibleContentFrameworkStore"), u(S, "migrations", [e => d({}, e)]);
let T = new S(Chunk73153.h, {
  LOGOUT: g,
  DCF_DAILY_CAP_OVERRIDE: E,
  DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: y,
  DCF_HANDLE_DC_SHOWN: O,
  DCF_HANDLE_DC_DISMISSED: v,
  DCF_OVERRIDE_LAST_DC_DISMISSED: A,
  DCF_RESET: I
})