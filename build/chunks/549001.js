/** Chunk was on web.js **/
/** chunk id: 549001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk448761 = require("./448761.js"),
  Chunk843472 = require("./843472.js"),
  Chunk439372 = require("./439372.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk233993 = require("./233993.js"),
  Chunk744216 = require("./744216.js"),
  Chunk652215 = require("./652215.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk439372.A {
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    t.forEach(e => {
      let {
        channelId: t,
        userId: n,
        suppress: a,
        requestToSpeakTimestamp: h
      } = e;
      if (u.A.getVoiceChannelId() === t && a && null != t && n !== o.default.getId() && c.A.can(f.QY, s.A.getChannel(t)))
        if (null != h) {
          let e = d.default.getUser(n);
          null != e && (0, p.p)(t, e, h)
        } else {
          let e = l.A.getMessages(t).findNewest(e => e.type === r.l.STAGE_RAISE_HAND && e.hasFlag(_.pr7.EPHEMERAL) && e.author.id === n);
          null != e && i.A.deleteMessage(t, e.id, true)
        }
    })
  }
  constructor(...e) {
    super(...e), h(this, "actions", {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    })
  }
}
let g = new m