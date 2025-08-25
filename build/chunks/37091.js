/** Chunk was on web.js **/
/** chunk id: 37091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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
    enabled: false
  },
  d = {},
  f = {},
  _ = false;

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
  if (null == r) returnfalse;
  delete r[t]
}

function m(e) {
  let {
    enabled: t
  } = e;
  _ = t
}

function g(e) {
  var t;
  let {
    completingEmoji: n,
    completingUserId: r,
    waitingUserId: i,
    channelId: o
  } = e, a = null != (t = d[o]) ? t : {}, l = a[i];
  if (delete a[i], null == l) returnfalse;
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
  } = e, o = null != (t = f[i]) ? t : {};
  delete o[n], delete o[r]
}
class b extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : u;
    _ = module.enabled
  }
  getWaitingHighFive(e, t) {
    var n;
    return null == (n = d[e]) ? true : n[t]
  }
  getCompletedHighFive(e, t) {
    var n;
    return null == (n = f[e]) ? true : n[t]
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
a(b, "persistKey", "HighFiveStore");
let y = new b(Chunk570140.Z, {
  HIGH_FIVE_QUEUE: p,
  HIGH_FIVE_REMOVE: h,
  HIGH_FIVE_SET_ENABLED: m,
  HIGH_FIVE_COMPLETE: g,
  HIGH_FIVE_COMPLETE_CLEAR: E
})