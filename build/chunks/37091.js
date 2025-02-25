/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => b
});
var r, i = n(442837),
  o = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = {
    enabled: !1
  },
  d = {},
  f = {},
  _ = !1;

function p(e) {
  let {
    userId: t,
    channelId: n,
    emoji: r
  } = e;
  d[n] = c(s({}, d[n]), {
    [t]: r
  })
}

function h(e) {
  let {
    userId: t,
    channelId: n
  } = e, r = d[n];
  if (null == r) return !1;
  delete r[t]
}

function g(e) {
  let {
    enabled: t
  } = e;
  _ = t
}

function m(e) {
  var t;
  let {
    completingEmoji: n,
    completingUserId: r,
    waitingUserId: i,
    channelId: o
  } = e, a = null !== (t = d[o]) && void 0 !== t ? t : {}, l = a[i];
  if (delete a[i], null == l) return !1;
  f[o] = c(s({}, f[o]), {
    [i]: [l, n],
    [r]: [n, l]
  })
}

function E(e) {
  var t;
  let {
    firstUserId: n,
    secondUserId: r,
    channelId: i
  } = e, o = null !== (t = f[i]) && void 0 !== t ? t : {};
  delete o[n], delete o[r]
}
class v extends(r = i.ZP.DeviceSettingsStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
    _ = e.enabled
  }
  getWaitingHighFive(e, t) {
    var n;
    return null === (n = d[e]) || void 0 === n ? void 0 : n[t]
  }
  getCompletedHighFive(e, t) {
    var n;
    return null === (n = f[e]) || void 0 === n ? void 0 : n[t]
  }
  getEnabled() {
    return _
  }
  getUserAgnosticState() {
    return {
      enabled: _
    }
  }
}
a(v, "persistKey", "HighFiveStore");
let b = new v(o.Z, {
  HIGH_FIVE_QUEUE: p,
  HIGH_FIVE_REMOVE: h,
  HIGH_FIVE_SET_ENABLED: g,
  HIGH_FIVE_COMPLETE: m,
  HIGH_FIVE_COMPLETE_CLEAR: E
})