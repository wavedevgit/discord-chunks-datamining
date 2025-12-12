/** Chunk was on web.js **/
/** chunk id: 781518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ai: () => v,
  PW: () => S,
  Tu: () => A,
  am: () => O,
  hP: () => y,
  hY: () => I,
  k1: () => C,
  rC: () => b,
  wO: () => T
}), require("./358797.js");
var Chunk544891 = require("./544891.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk877481 = require("./877481.js"),
  Chunk358085 = require("./358085.js"),
  Chunk18323 = require("./18323.js"),
  Chunk616922 = require("./616922.js"),
  Chunk981631 = require("./981631.js");

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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = 5e3,
  g = 5e3;

function E(e, t, n, r) {
  let o = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 1;
  return e(r = m(p({}, r), {
    headers: {
      authorization: "Bearer ".concat(n)
    }
  })).then(e => 202 === e.status ? Promise.reject(e) : e).catch(n => {
    let a = true !== r.onlyRetryOnAuthorizationErrors && 202 === n.status;
    return (401 === n.status || a) && o > 0 ? (202 === n.status ? (0, i.GR)(h) : Promise.resolve()).then(() => y(t)).then(n => {
      let {
        body: {
          access_token: i
        }
      } = n;
      return E(e, t, i, r, o - 1)
    }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(n)
  })
}
let b = {
  get: E.bind(null, Chunk544891.tn.get),
  put: E.bind(null, Chunk544891.tn.put)
};

function y(e) {
  return r.tn.get({
    url: d.ANM.CONNECTION_ACCESS_TOKEN(d.ABu.SPOTIFY, e),
    oldFormErrors: true,
    rejectWithError: false
  }).catch(t => {
    var n;
    if ((null == (n = t.body) ? true : n.code) === d.evJ.CONNECTION_REVOKED) o.Z.dispatch({
      type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
      accountId: e
    });
    else if (429 === t.status) {
      let n = t.headers["retry-after"] * a.Z.Millis.SECOND,
        r = isNaN(n) || 0 === n ? g : n;
      return (0, i.GR)(r).then(() => y(e))
    }
    return Promise.reject(t)
  }).then(t => {
    let {
      access_token: n
    } = t.body;
    return o.Z.dispatch({
      type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
      accountId: e,
      accessToken: n
    }), t
  })
}

function O(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 2;
  return b.put(e, t, {
    url: u.C7.NOTIFICATIONS_PLAYER,
    query: {
      connection_id: n
    }
  }).catch(o => r <= 0 ? Promise.reject(o) : (0, i.GR)(h).then(() => O(e, t, n, r - 1)))
}

function v(e, t) {
  return b.get(e, t, {
    url: u.C7.PROFILE
  }).then(t => (o.Z.dispatch({
    type: "SPOTIFY_PROFILE_UPDATE",
    accountId: e,
    isPremium: "premium" === t.body.product
  }), t))
}

function S(e, t) {
  return b.get(e, t, {
    url: u.C7.PLAYER_DEVICES
  }).then(t => (t.body && o.Z.dispatch({
    type: "SPOTIFY_SET_DEVICES",
    accountId: e,
    devices: t.body.devices
  }), t))
}

function I(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {},
    a = u.C7.PLAYER_OPEN(r, n, false),
    {
      deviceId: s,
      position: l,
      contextUri: c,
      repeat: d
    } = i;
  return b.put(e, t, {
    url: u.C7.PLAYER_PLAY,
    query: {
      device_id: s
    },
    body: {
      context_uri: null != c ? c : true,
      uris: null == c ? [a] : true,
      offset: null != c ? {
        uri: a
      } : true,
      position_ms: null != l ? l : 0
    }
  }).then(n => null == d ? n : b.put(e, t, {
    url: u.C7.PLAYER_REPEAT,
    query: {
      device_id: s,
      state: d ? "context" : "off"
    }
  })).then(e => (o.Z.dispatch({
    type: "SPOTIFY_PLAYER_PLAY",
    id: n,
    position: null != l ? l : 0
  }), e))
}

function T(e, t) {
  return b.put(e, t, {
    url: u.C7.PLAYER_PAUSE
  }).then(e => (o.Z.dispatch({
    type: "SPOTIFY_PLAYER_PAUSE"
  }), e))
}

function C() {
  !Chunk18323.Z.isProtocolRegistered() && (0, Chunk358085.isDesktop)() && Chunk877481.Z.isProtocolRegistered(Chunk616922.M5).then(e => {
    o.Z.dispatch({
      type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
      isRegistered: e
    })
  })
}

function A(e, t) {
  o.Z.dispatch({
    type: "SPOTIFY_SET_ACTIVE_DEVICE",
    accountId: e,
    deviceId: t
  })
}