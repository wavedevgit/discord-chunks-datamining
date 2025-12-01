/** Chunk was on web.js **/
/** chunk id: 441729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
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
      o(e, t, n[t])
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
    speechRate: 1,
    currentMessage: null
  },
  d = u;

function f(e) {
  let {
    messageId: t,
    channelId: n
  } = e;
  d = c(s({}, d), {
    currentMessage: {
      messageId: t,
      channelId: n
    }
  })
}

function p() {
  d = c(s({}, d), {
    currentMessage: null
  })
}

function _(e) {
  d = c(s({}, d), {
    speechRate: e.speechRate
  })
}
class m extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    d = s({}, u, null != e ? e : null)
  }
  isSpeakingMessage(e, t) {
    let {
      currentMessage: n
    } = d;
    return null !== n && n.channelId === e && n.messageId === t
  }
  get currentMessage() {
    return d.currentMessage
  }
  get speechRate() {
    return d.speechRate
  }
  getUserAgnosticState() {
    return d
  }
}
o(m, "displayName", "TTSStore"), o(m, "persistKey", "TTSStore"), o(m, "migrations", []);
let h = new m(Chunk570140.Z, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: f,
  STOP_SPEAKING: p,
  SET_TTS_SPEECH_RATE: _
})