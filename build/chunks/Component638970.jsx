/** Chunk was on web.js **/
/** chunk id: 638970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk468363 = require("./468363.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk369566 = require("./369566.js"),
  Chunk29899 = require("./29899.js"),
  Chunk278857 = require("./278857.jsx"),
  Chunk151545 = require("./151545.jsx"),
  Chunk769140 = require("./769140.jsx"),
  Chunk864141 = require("./864141.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function y(e, t, n) {
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
      y(e, t, n[t])
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

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  let {
    user: t,
    currentUser: n,
    guildId: y,
    onOpenUserProfileModal: v,
    onClose: I
  } = e, {
    analyticsLocations: T
  } = (0, s.ZP)(), {
    trackUserProfileAction: C
  } = (0, u.KZ)(), {
    live: A,
    stream: N
  } = (0, d.Z)(t.id), {
    voiceChannel: P,
    voiceActivity: R
  } = (0, f.Z)({
    userId: t.id,
    guildId: y
  }), w = t.id === n.id, D = (0, o.e7)([c.Z, l.Z], () => {
    let e = w ? c.Z.getStatus() : l.Z.getStatus(t.id, y);
    return e === E.Sk.OFFLINE || e === E.Sk.INVISIBLE
  }), {
    voiceActivityStatusEnabled: x
  } = (0, a.U)({
    location: "UserProfileStackedActivity"
  }), L = x && null == N && null == R && null != P, j = i.useCallback(e => {
    let i = [],
      o = S(O({}, e), {
        user: t,
        currentUser: n,
        onClose: I
      });
    return null != N && i.push((0, r.jsx)(m.Z, O({
      stream: N
    }, o), "stream")), A.forEach((e, t) => {
      i.push((0, r.jsx)(_.Z, O({
        activity: e
      }, o), "live-".concat(t)))
    }), L && i.push((0, r.jsx)(h.Z, O({
      voiceChannel: P
    }, o), "voice")), i
  }, [n, L, A, I, N, t, P]);
  return D ? null : (0, r.jsx)(p.Z, {
    renderCards: j,
    heading: b.intl.string(b.t.J6STd9),
    onExpand: () => {
      C({
        action: "PRESS_SHOW_MORE_ACTIVITY",
        analyticsLocations: T
      }), null == v || v({
        section: g.oh.ACTIVITY
      })
    }
  })
}