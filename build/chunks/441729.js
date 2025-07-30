/** Chunk was on 50874 **/
r.d(t, {
  Z: () => _
});
var n, i = r(442837),
  a = r(570140);

function s(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      s(e, t, r[t])
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
let o = {
    speechRate: 1,
    currentMessage: null
  },
  u = o;
class d extends(n = i.ZP.DeviceSettingsStore) {
  initialize(e) {
    u = l({}, o, null != e ? e : null)
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
s(d, "displayName", "TTSStore"), s(d, "persistKey", "TTSStore"), s(d, "migrations", []);
let _ = new d(a.Z, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
    let {
      messageId: t,
      channelId: r
    } = e;
    u = c(l({}, u), {
      currentMessage: {
        messageId: t,
        channelId: r
      }
    })
  },
  STOP_SPEAKING: function() {
    u = c(l({}, u), {
      currentMessage: null
    })
  },
  SET_TTS_SPEECH_RATE: function(e) {
    u = c(l({}, u), {
      speechRate: e.speechRate
    })
  }
})