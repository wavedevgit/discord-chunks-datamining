/** Chunk was on web.js **/
/** chunk id: 167132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk451988 = require("./451988.js"),
  Chunk843472 = require("./843472.js"),
  Chunk956793 = require("./956793.js"),
  Chunk439372 = require("./439372.js"),
  Chunk933958 = require("./933958.js"),
  Chunk734057 = require("./734057.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk985018 = require("./985018.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = 3,
  _ = 18e4;

function h() {
  let e = c.A.getCurrentClientVoiceChannelId(null);
  if (null == e) returnfalse;
  let t = l.A.getChannel(e);
  return !(null == t || !t.isPrivate() || t.recipients.length > 1 || u.Ay.countVoiceStatesForChannel(e) > 1) && null == s.Ay.getSelfEmbeddedActivityForChannel(e)
}

function m() {
  if (!h()) return;
  let e = c.A.getCurrentClientVoiceChannelId(null);
  null != e && (i.A.sendBotMessage(e, d.intl.formatToPlainString(d.t.XYof5G, {
    number: p
  })), a.default.selectVoiceChannel(null))
}
class g extends Chunk439372.A {
  constructor(...e) {
    super(...e), f(this, "idleTimeout", new r.Ep), f(this, "handleConnectionClosed", () => {
      this.idleTimeout.stop()
    }), f(this, "handleEmbeddedActivityDisconnect", () => {
      h() && this.idleTimeout.start(_, m, true)
    }), f(this, "handleVoiceStateUpdates", () => {
      h() ? this.idleTimeout.start(_, m, false) : this.idleTimeout.stop()
    }), f(this, "actions", {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      CONNECTION_CLOSED: this.handleConnectionClosed,
      EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect
    })
  }
}
let E = new g