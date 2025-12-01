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

function m() {
  let e = Chunk979651.Z.getCurrentClientVoiceChannelId(null);
  if (null == module) returnfalse;
  let t = Chunk592125.Z.getChannel(module);
  return !(null == exports || !exports.isPrivate() || exports.recipients.length > 1 || Chunk938475.ZP.countVoiceStatesForChannel(module) > 1) && null == Chunk317381.ZP.getSelfEmbeddedActivityForChannel(module)
}

function h() {
  if (!m()) return;
  let e = Chunk979651.Z.getCurrentClientVoiceChannelId(null);
  null != module && (Chunk904245.Z.sendBotMessage(module, Chunk388032.intl.formatToPlainString(Chunk388032.t.XYof5G, {
    number: p
  })), Chunk287734.default.selectVoiceChannel(null))
}
class g extends Chunk147913.Z {
  constructor(...e) {
    super(...e), f(this, "idleTimeout", new r.V7), f(this, "handleConnectionClosed", () => {
      this.idleTimeout.stop()
    }), f(this, "handleEmbeddedActivityDisconnect", () => {
      m() && this.idleTimeout.start(_, h, true)
    }), f(this, "handleVoiceStateUpdates", () => {
      if (!m()) return void this.idleTimeout.stop();
      this.idleTimeout.start(_, h, false)
    }), f(this, "actions", {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      CONNECTION_CLOSED: this.handleConnectionClosed,
      EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect
    })
  }
}
let E = new g