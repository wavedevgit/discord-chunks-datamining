/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => y
}), n(47120);
var r = n(147913),
  i = n(751571),
  o = n(88751),
  a = n(590415),
  s = n(189786),
  l = n(314897),
  c = n(592125),
  u = n(131951),
  d = n(19780),
  f = n(876506),
  _ = n(981631),
  p = n(761274);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = null;

function m() {
  i.Z.requestPermission(p.Eu.AUDIO).then(e => {
    e && (0, f.Z)(!0)
  }), u.Z.getMode() === _.pM4.PUSH_TO_TALK && i.Z.requestPermission(p.Eu.INPUT_MONITORING)
}

function E(e, t) {
  var n;
  return null === (n = c.Z.getChannel(t)) || void 0 === n || !n.isListenModeCapable() || o.ZP.isSpeaker(e, t)
}

function v(e) {
  return (0, a.gf)(e) === a.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}
class b extends r.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    null == t && (g = null)
  }
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    t.forEach(e => {
      let {
        userId: t,
        channelId: n
      } = e;
      if (null != n && l.default.getId() === t && null != d.Z.getRTCConnectionId() && g !== n) {
        if (E(t, n)) {
          g = n, m();
          return
        }
        v(new s.Z(e)) && (g = n, m())
      }
    })
  }
  constructor(...e) {
    super(...e), h(this, "actions", {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    })
  }
}
let y = new b