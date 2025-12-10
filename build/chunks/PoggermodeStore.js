/** Chunk was on web.js **/
/** chunk id: 843693, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => M,
  wU: () => w
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk759174 = require("./759174.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk351780 = require("./351780.js"),
  Chunk641033 = require("./641033.js"),
  Chunk524484 = require("./524484.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
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
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = 7,
  v = 1e3,
  S = new Set,
  I = new Chunk759174.h(function(e) {
    let {
      userId: t,
      channelId: n
    } = e;
    return [t, n]
  }, function(e) {
    let {
      userId: t,
      channelId: n
    } = e;
    return "".concat(n, "-").concat(t)
  });

function T(e) {
  return null != e && (e.value > 0 || (null == e ? true : e.multiplier) > 1)
}
let C = new Chunk759174.h(function(e) {
    let {
      messageId: t,
      channelId: n,
      combo: {
        userId: r
      }
    } = e;
    return [t, n, r]
  }, function(e) {
    let {
      messageId: t,
      channelId: n,
      combo: {
        userId: r
      }
    } = e;
    return "".concat(n, "-").concat(r, "-").concat(t)
  }),
  A = e => {
    let {
      userId: t,
      channelId: n
    } = e;
    return "".concat(t, "-").concat(n)
  };

function N(e) {
  var t, n, r, i, a, s;
  let l = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    c = I.get(A(e)),
    u = E(h({}, c, e), {
      value: null != (n = null != (t = e.value) ? t : null == c ? true : c.value) ? n : 0,
      multiplier: Math.min(null != (i = null != (r = e.multiplier) ? r : null == c ? true : c.multiplier) ? i : 1, O),
      decayInterval: null != (a = null == c ? true : c.decayInterval) ? a : new o.Xp
    });
  I.set(A(e), u), l && (null == (s = u.decayInterval) || s.start(v, () => {
    let e = I.get(A(u));
    if (null != e) {
      let n = u.multiplier !== e.multiplier && u.value !== e.value;
      if (e.value <= 0 || n) {
        var t;
        null == (t = e.decayInterval) || t.stop(), e.value <= 0 && (N(E(h({}, e), {
          value: 0,
          multiplier: 1
        })), j.emitChange())
      } else N(E(h({}, e), {
        value: e.value - 1
      })), j.emitChange()
    }
  }))
}

function P(e) {
  C.set(e.messageId, e)
}

function R(e) {
  var {
    type: t
  } = e, n = b(e, ["type"]);
  if (!d.Z.isEnabled()) returnfalse;
  N(n)
}

function D(e) {
  let {
    comboMessage: t
  } = e;
  if (!d.Z.isEnabled()) returnfalse;
  P(t)
}

function w(e, t, n, r) {
  return !(e !== t || null == n || r.has(n)) && (r.add(n), true)
}

function x(e) {
  var t, n;
  let {
    channelId: r,
    message: {
      mentions: i,
      author: a,
      nonce: o
    }
  } = e;
  if (!d.Z.isEnabled()) returnfalse;
  let s = l.default.getId();
  if (!w(null == a ? true : a.id, s, o, S)) returnfalse;
  let c = I.get(A({
    userId: null != (t = null == a ? true : a.id) ? t : "???",
    channelId: r
  }));
  if (d.Z.screenshakeEnabled && d.Z.screenshakeEnabledLocations[p.oZ.MENTION] && null != i && null != i.find(e => e.id === s)) {
    let e = null != c ? null != (n = (0, f.KH)(c, p.qi.LEVEL_4)) ? n : .001 : 4 * Math.random();
    return u.S.dispatch(_.CkL.SHAKE_APP, {
      duration: 1e3,
      intensity: e
    }), true
  }
  returnfalse
}
class L extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk351780.Z, Chunk944486.Z)
  }
  getComboScore(e, t) {
    let n = I.get(A({
      userId: e,
      channelId: t
    }));
    return null == n ? 0 : (0, f.Eo)(n)
  }
  getUserCombo(e, t) {
    return I.get(A({
      userId: e,
      channelId: t
    }))
  }
  isComboing(e, t) {
    let n = this.getUserCombo(e, t);
    return null != n && n.value >= d.Z.combosRequiredCount && T(n)
  }
  getMessageCombo(e) {
    var t;
    let n = C.get(e);
    return null != (t = null == n ? true : n.combo) ? t : true
  }
  getMostRecentMessageCombo(e) {
    let t = C.values(e);
    return t[t.length - 1]
  }
  getUserComboShakeIntensity(e, t, n, r) {
    let i = this.getUserCombo(e, t);
    return null != i ? (0, f.KH)(i, r) * n : 0
  }
}
m(L, "displayName", "PoggermodeStore");
let j = new L(Chunk570140.Z, {
    POGGERMODE_UPDATE_COMBO: R,
    POGGERMODE_UPDATE_MESSAGE_COMBO: D,
    MESSAGE_CREATE: x
  }),
  M = j