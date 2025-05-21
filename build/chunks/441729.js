/** Chunk was on 44988 **/
n.d(t, {
  Z: () => d
});
var r, i = n(442837),
  c = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l(e) {
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

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let a = {
    speechRate: 1,
    currentMessage: null
  },
  u = a;
class p extends(r = i.ZP.DeviceSettingsStore) {
  initialize(e) {
    u = l({}, a, null != e ? e : null)
  }
  isSpeakingMessage(e, t) {
    let {
      currentMessage: n
    } = u;
    return null !== n && n.channelId === e && n.messageId === t
  }
  get currentMessage() {
    return u.currentMessage
  }
  get speechRate() {
    return u.speechRate
  }
  getUserAgnosticState() {
    return u
  }
}
o(p, "displayName", "TTSStore"), o(p, "persistKey", "TTSStore"), o(p, "migrations", []);
let d = new p(c.Z, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e;
    u = s(l({}, u), {
      currentMessage: {
        messageId: t,
        channelId: n
      }
    })
  },
  STOP_SPEAKING: function() {
    u = s(l({}, u), {
      currentMessage: null
    })
  },
  SET_TTS_SPEECH_RATE: function(e) {
    u = s(l({}, u), {
      speechRate: e.speechRate
    })
  }
})