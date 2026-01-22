/** Chunk was on web.js **/
/** chunk id: 8880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
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
  d = c(o({}, d), {
    currentMessage: {
      messageId: t,
      channelId: n
    }
  })
}

function p() {
  d = c(o({}, d), {
    currentMessage: null
  })
}

function _(e) {
  d = c(o({}, d), {
    speechRate: e.speechRate
  })
}
class h extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    d = o({}, u, null != e ? e : null)
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
s(h, "displayName", "TTSStore"), s(h, "persistKey", "TTSStore"), s(h, "migrations", []);
let m = new h(Chunk73153.h, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: f,
  STOP_SPEAKING: p,
  SET_TTS_SPEECH_RATE: _
})