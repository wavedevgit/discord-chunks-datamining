/** Chunk was on 20756 **/
n.d(t, {
  Z: () => _
});
var r, i = n(442837),
  o = n(570140);

function l(e, t, n) {
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
      l(e, t, n[t])
    })
  }
  return e
}

function a(e, t) {
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
let c = {
    speechRate: 1,
    currentMessage: null
  },
  d = c;
class u extends(r = i.ZP.DeviceSettingsStore) {
  initialize(e) {
    d = s({}, c, null != e ? e : null)
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
l(u, "displayName", "TTSStore"), l(u, "persistKey", "TTSStore"), l(u, "migrations", []);
let _ = new u(o.Z, __OVERLAY__ ? {} : {
  SPEAKING_MESSAGE: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e;
    d = a(s({}, d), {
      currentMessage: {
        messageId: t,
        channelId: n
      }
    })
  },
  STOP_SPEAKING: function() {
    d = a(s({}, d), {
      currentMessage: null
    })
  },
  SET_TTS_SPEECH_RATE: function(e) {
    d = a(s({}, d), {
      speechRate: e.speechRate
    })
  }
})