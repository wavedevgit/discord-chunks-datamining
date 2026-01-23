/** Chunk was on web.js **/
/** chunk id: 107750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E$: () => v,
  VR: () => C,
  ZH: () => I,
  f0: () => T,
  iD: () => b,
  oG: () => A,
  tB: () => y,
  tO: () => O,
  v7: () => S
}), require("./142703.js");
var Chunk562465 = require("./562465.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk25171 = require("./25171.js"),
  Chunk723702 = require("./723702.js"),
  Chunk210528 = require("./210528.js"),
  Chunk272984 = require("./272984.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = 5e3,
  g = 5e3;

function E(e, t, n, r) {
  let a = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 1;
  return e(r = h(p({}, r), {
    headers: {
      authorization: "Bearer ".concat(n)
    }
  })).then(e => 202 === e.status ? Promise.reject(e) : e).catch(n => {
    let s = true !== r.onlyRetryOnAuthorizationErrors && 202 === n.status;
    return (401 === n.status || s) && a > 0 ? (202 === n.status ? (0, i.BK)(m) : Promise.resolve()).then(() => b(t)).then(n => {
      let {
        body: {
          access_token: i
        }
      } = n;
      return E(e, t, i, r, a - 1)
    }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(n)
  })
}
let y = {
  get: E.bind(null, Chunk562465.Bo.get),
  put: E.bind(null, Chunk562465.Bo.put)
};

function b(e) {
  return r.Bo.get({
    url: d.Rsh.CONNECTION_ACCESS_TOKEN(d.fg2.SPOTIFY, e),
    oldFormErrors: true,
    rejectWithError: false
  }).catch(t => {
    var n;
    if ((null == (n = t.body) ? true : n.code) === d.t02.CONNECTION_REVOKED) a.h.dispatch({
      type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
      accountId: e
    });
    else if (429 === t.status) {
      let n = t.headers["retry-after"] * s.A.Millis.SECOND,
        r = isNaN(n) || 0 === n ? g : n;
      return (0, i.BK)(r).then(() => b(e))
    }
    return Promise.reject(t)
  }).then(t => {
    let {
      access_token: n
    } = t.body;
    return a.h.dispatch({
      type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
      accountId: e,
      accessToken: n
    }), t
  })
}

function O(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 2;
  return y.put(e, t, {
    url: u.RQ.NOTIFICATIONS_PLAYER,
    query: {
      connection_id: n
    }
  }).catch(a => r <= 0 ? Promise.reject(a) : (0, i.BK)(m).then(() => O(e, t, n, r - 1)))
}

function v(e, t) {
  return y.get(e, t, {
    url: u.RQ.PROFILE
  }).then(t => (a.h.dispatch({
    type: "SPOTIFY_PROFILE_UPDATE",
    accountId: e,
    isPremium: "premium" === t.body.product
  }), t))
}

function A(e, t) {
  return y.get(e, t, {
    url: u.RQ.PLAYER_DEVICES
  }).then(t => (t.body && a.h.dispatch({
    type: "SPOTIFY_SET_DEVICES",
    accountId: e,
    devices: t.body.devices
  }), t))
}

function I(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {},
    s = u.RQ.PLAYER_OPEN(r, n, false),
    {
      deviceId: o,
      position: l,
      contextUri: c,
      repeat: d
    } = i;
  return y.put(e, t, {
    url: u.RQ.PLAYER_PLAY,
    query: {
      device_id: o
    },
    body: {
      context_uri: null != c ? c : true,
      uris: null == c ? [s] : true,
      offset: null != c ? {
        uri: s
      } : true,
      position_ms: null != l ? l : 0
    }
  }).then(n => null == d ? n : y.put(e, t, {
    url: u.RQ.PLAYER_REPEAT,
    query: {
      device_id: o,
      state: d ? "context" : "off"
    }
  })).then(e => (a.h.dispatch({
    type: "SPOTIFY_PLAYER_PLAY",
    id: n,
    position: null != l ? l : 0
  }), e))
}

function S(e, t) {
  return y.put(e, t, {
    url: u.RQ.PLAYER_PAUSE
  }).then(e => (a.h.dispatch({
    type: "SPOTIFY_PLAYER_PAUSE"
  }), e))
}

function T() {
  !c.A.isProtocolRegistered() && (0, l.isDesktop)() && o.A.isProtocolRegistered(u.gY).then(e => {
    a.h.dispatch({
      type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
      isRegistered: e
    })
  })
}

function C(e, t) {
  a.h.dispatch({
    type: "SPOTIFY_SET_ACTIVE_DEVICE",
    accountId: e,
    deviceId: t
  })
}