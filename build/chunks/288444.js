/** Chunk was on web.js **/
/** chunk id: 288444, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk846519 = require("./846519.js"),
  Chunk904245 = require("./904245.js"),
  Chunk287734 = require("./287734.js"),
  Chunk147913 = require("./147913.js"),
  Chunk317381 = require("./317381.js"),
  Chunk592125 = require("./592125.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk388032 = require("./388032.jsx");

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
  let e = c.Z.getCurrentClientVoiceChannelId(null);
  if (null == e) returnfalse;
  let t = l.Z.getChannel(e);
  return !(null == t || !t.isPrivate() || t.recipients.length > 1 || u.ZP.countVoiceStatesForChannel(e) > 1) && null == s.ZP.getSelfEmbeddedActivityForChannel(e)
}

function m() {
  if (!h()) return;
  let e = c.Z.getCurrentClientVoiceChannelId(null);
  null != e && (i.Z.sendBotMessage(e, d.intl.formatToPlainString(d.t.XYof5G, {
    number: p
  })), a.default.selectVoiceChannel(null))
}
class g extends Chunk147913.Z {
  constructor(...e) {
    super(...e), f(this, "idleTimeout", new r.V7), f(this, "handleConnectionClosed", () => {
      this.idleTimeout.stop()
    }), f(this, "handleEmbeddedActivityDisconnect", () => {
      h() && this.idleTimeout.start(_, m, true)
    }), f(this, "handleVoiceStateUpdates", () => {
      if (!h()) return void this.idleTimeout.stop();
      this.idleTimeout.start(_, m, false)
    }), f(this, "actions", {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      CONNECTION_CLOSED: this.handleConnectionClosed,
      EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect
    })
  }
}
let E = new g