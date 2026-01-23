/** Chunk was on web.js **/
/** chunk id: 559908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => M,
  gN: () => D
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk309010 = require("./309010.js"),
  Chunk203982 = require("./203982.js"),
  Chunk3137 = require("./3137.js"),
  Chunk103640 = require("./103640.js"),
  Chunk31408 = require("./31408.js"),
  Chunk652215 = require("./652215.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
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

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let O = 7,
  v = 1e3,
  A = new Set,
  I = new Chunk713402.J(function(e) {
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

function S(e) {
  return null != e && (e.value > 0 || (null == e ? true : e.multiplier) > 1)
}
let T = new Chunk713402.J(function(e) {
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
  C = e => {
    let {
      userId: t,
      channelId: n
    } = e;
    return "".concat(t, "-").concat(n)
  };

function N(e) {
  var t, n, r, i, a, o;
  let l = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    c = I.get(C(e)),
    u = E(m({}, c, e), {
      value: null != (t = null != (n = e.value) ? n : null == c ? true : c.value) ? t : 0,
      multiplier: Math.min(null != (r = null != (i = e.multiplier) ? i : null == c ? true : c.multiplier) ? r : 1, O),
      decayInterval: null != (a = null == c ? true : c.decayInterval) ? a : new s.IX
    });
  I.set(C(e), u), l && (null == (o = u.decayInterval) || o.start(v, () => {
    let e = I.get(C(u));
    if (null != e) {
      let n = u.multiplier !== e.multiplier && u.value !== e.value;
      if (e.value <= 0 || n) {
        var t;
        null == (t = e.decayInterval) || t.stop(), e.value <= 0 && (N(E(m({}, e), {
          value: 0,
          multiplier: 1
        })), j.emitChange())
      } else N(E(m({}, e), {
        value: e.value - 1
      })), j.emitChange()
    }
  }))
}

function w(e) {
  T.set(e.messageId, e)
}

function R(e) {
  let {
    type: t
  } = e, n = y(e, ["type"]);
  if (!d.A.isEnabled()) returnfalse;
  N(n)
}

function P(e) {
  let {
    comboMessage: t
  } = e;
  if (!d.A.isEnabled()) returnfalse;
  w(t)
}

function D(e, t, n, r) {
  return !(e !== t || null == n || r.has(n)) && (r.add(n), true)
}

function x(e) {
  var t, n;
  let {
    channelId: r,
    message: {
      mentions: i,
      author: a,
      nonce: s
    }
  } = e;
  if (!d.A.isEnabled()) returnfalse;
  let o = l.default.getId();
  if (!D(null == a ? true : a.id, o, s, A)) returnfalse;
  let c = I.get(C({
    userId: null != (t = null == a ? true : a.id) ? t : "???",
    channelId: r
  }));
  if (d.A.screenshakeEnabled && d.A.screenshakeEnabledLocations[p.uD.MENTION] && null != i && null != i.find(e => e.id === o)) {
    let e = null != c ? null != (n = (0, f.U$)(c, p.fZ.LEVEL_4)) ? n : .001 : 4 * Math.random();
    return u._.dispatch(_.jej.SHAKE_APP, {
      duration: 1e3,
      intensity: e
    }), true
  }
  returnfalse
}
class L extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.default, d.A, c.A)
  }
  getComboScore(e, t) {
    let n = I.get(C({
      userId: e,
      channelId: t
    }));
    return null == n ? 0 : (0, f.RL)(n)
  }
  getUserCombo(e, t) {
    return I.get(C({
      userId: e,
      channelId: t
    }))
  }
  isComboing(e, t) {
    let n = this.getUserCombo(e, t);
    return null != n && n.value >= d.A.combosRequiredCount && S(n)
  }
  getMessageCombo(e) {
    var t;
    let n = T.get(e);
    return null != (t = null == n ? true : n.combo) ? t : true
  }
  getMostRecentMessageCombo(e) {
    let t = T.values(e);
    return t[t.length - 1]
  }
  getUserComboShakeIntensity(e, t, n, r) {
    let i = this.getUserCombo(e, t);
    return null != i ? (0, f.U$)(i, r) * n : 0
  }
}
h(L, "displayName", "PoggermodeStore");
let j = new L(Chunk73153.h, {
    POGGERMODE_UPDATE_COMBO: R,
    POGGERMODE_UPDATE_MESSAGE_COMBO: P,
    MESSAGE_CREATE: x
  }),
  M = j