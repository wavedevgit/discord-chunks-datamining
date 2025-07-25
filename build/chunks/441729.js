/** Chunk was on 88448 **/
r.d(t, {
  Z: () => f
});
var n, l = r(442837),
  a = r(570140);

function i(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      i(e, t, r[t])
    })
  }
  return e
}

function o(e, t) {
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
    u = c({}, s, null != e ? e : null)
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
i(b, "displayName", "TTSStore"), i(b, "persistKey", "TTSStore"), i(b, "migrations", []);
let f = new b(a.Z, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
    let {
      messageId: t,
      channelId: r
    } = e;
    u = o(c({}, u), {
      currentMessage: {
        messageId: t,
        channelId: r
      }
    })
  },
  STOP_SPEAKING: function() {
    u = o(c({}, u), {
      currentMessage: null
    })
  },
  SET_TTS_SPEECH_RATE: function(e) {
    u = o(c({}, u), {
      speechRate: e.speechRate
    })
  }
})