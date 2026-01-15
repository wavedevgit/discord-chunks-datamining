/** Chunk was on web.js **/
/** chunk id: 39846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk751571 = require("./751571.js"),
  Chunk88751 = require("./88751.js"),
  Chunk590415 = require("./590415.js"),
  Chunk189786 = require("./189786.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk876506 = require("./876506.js"),
  Chunk981631 = require("./981631.js"),
  Chunk761274 = require("./761274.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = null;

function g() {
  i.Z.requestPermission(_.Eu.AUDIO).then(e => {
    e && (0, f.Z)(true)
  }), u.Z.getMode() === p.pM4.PUSH_TO_TALK && i.Z.requestPermission(_.Eu.INPUT_MONITORING)
}

function E(e, t) {
  var n;
  return null == (n = c.Z.getChannel(t)) || !n.isListenModeCapable() || a.ZP.isSpeaker(e, t)
}

function b(e) {
  return (0, o.gf)(e) === o.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}
class y extends Chunk147913.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    null == t && (m = null)
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
      if (null != n && l.default.getId() === t && null != d.Z.getRTCConnectionId() && m !== n) {
        if (E(t, n)) {
          m = n, g();
          return
        }
        b(new s.Z(e)) && (m = n, g())
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
let O = new y