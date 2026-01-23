/** Chunk was on web.js **/
/** chunk id: 646986, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk901517 = require("./901517.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk146655 = require("./146655.js"),
  Chunk489379 = require("./489379.js"),
  Chunk80330 = require("./80330.jsx"),
  Chunk837924 = require("./837924.jsx"),
  Chunk842241 = require("./842241.jsx"),
  Chunk282797 = require("./282797.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  let {
    user: t,
    currentUser: n,
    guildId: b,
    onOpenUserProfileModal: v,
    onClose: I
  } = e, {
    analyticsLocations: S
  } = (0, o.Ay)(), {
    trackUserProfileAction: T
  } = (0, u.NJ)(), {
    live: C,
    stream: N
  } = (0, d.A)(t.id), {
    voiceChannel: R,
    voiceActivity: w
  } = (0, f.A)({
    userId: t.id,
    guildId: b
  }), P = t.id === n.id, D = (0, a.bG)([c.A, l.A], () => {
    let e = P ? c.A.getStatus() : l.A.getStatus(t.id, b);
    return e === E.cl.OFFLINE || e === E.cl.INVISIBLE
  }), {
    voiceActivityStatusEnabled: x
  } = (0, s.G)({
    location: "UserProfileStackedActivity"
  }), L = x && null == N && null == w && null != R, j = i.useCallback(e => {
    let i = [],
      a = A(O({}, e), {
        user: t,
        currentUser: n,
        onClose: I
      });
    return null != N && i.push((0, r.jsx)(h.A, O({
      stream: N
    }, a), "stream")), C.forEach((e, t) => {
      i.push((0, r.jsx)(_.A, O({
        activity: e
      }, a), "live-".concat(t)))
    }), L && i.push((0, r.jsx)(m.A, O({
      voiceChannel: R
    }, a), "voice")), i
  }, [n, L, C, I, N, t, R]);
  return D ? null : (0, r.jsx)(p.A, {
    renderCards: j,
    heading: y.intl.string(y.t.J6STd9),
    onExpand: () => {
      T({
        action: "PRESS_SHOW_MORE_ACTIVITY",
        analyticsLocations: S
      }), null == v || v({
        tabSection: g.RP.ACTIVITY
      })
    }
  })
}