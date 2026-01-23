/** Chunk was on web.js **/
/** chunk id: 512835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk674966 = require("./674966.js"),
  Chunk312006 = require("./312006.js"),
  Chunk105530 = require("./105530.js"),
  Chunk288737 = require("./288737.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk202232 = require("./202232.js"),
  Chunk652215 = require("./652215.js"),
  Chunk765682 = require("./765682.js");

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
  i.A.requestPermission(_.iL.AUDIO).then(e => {
    e && (0, f.A)(true)
  }), u.A.getMode() === p.TBI.PUSH_TO_TALK && i.A.requestPermission(_.iL.INPUT_MONITORING)
}

function E(e, t) {
  var n;
  return null == (n = c.A.getChannel(t)) || !n.isListenModeCapable() || a.Ay.isSpeaker(e, t)
}

function y(e) {
  return (0, s.eY)(e) === s.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}
class b extends Chunk439372.A {
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
      if (null != n && l.default.getId() === t && null != d.A.getRTCConnectionId() && m !== n) {
        if (E(t, n)) {
          m = n, g();
          return
        }
        y(new o.A(e)) && (m = n, g())
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
let O = new b