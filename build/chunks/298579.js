/** Chunk was on web.js **/
/** chunk id: 298579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk592125 = require("./592125.js"),
  Chunk851268 = require("./851268.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk147913.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (null == t || null == n) return;
    let r = i.Z.getChannel(t);
    null != r && r.isGuildVoice() && o.y(t)
  }
  constructor(...e) {
    super(...e), a(this, "actions", {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    })
  }
}
let l = new s