/** Chunk was on 24358 **/
r.d(t, {
  Z: () => p
});
var n, l = r(442837),
  i = r(570140);

function a(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      a(e, t, r[t])
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let s = {
    speechRate: 1,
    currentMessage: null
  },
  u = s;
class b extends(n = l.ZP.DeviceSettingsStore) {
  initialize(e) {
    u = o({}, s, null != e ? e : null)
  }
  isSpeakingMessage(e, t) {
    let {
      currentMessage: r
    } = u;
    return null !== r && r.channelId === e && r.messageId === t
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
a(b, "displayName", "TTSStore"), a(b, "persistKey", "TTSStore"), a(b, "migrations", []);
let p = new b(i.Z, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
    let {
      messageId: t,
      channelId: r
    } = e;
    u = c(o({}, u), {
      currentMessage: {
        messageId: t,
        channelId: r
      }
    })
  },
  STOP_SPEAKING: function() {
    u = c(o({}, u), {
      currentMessage: null
    })
  },
  SET_TTS_SPEECH_RATE: function(e) {
    u = c(o({}, u), {
      speechRate: e.speechRate
    })
  }
})