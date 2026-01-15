/** Chunk was on web.js **/
/** chunk id: 834332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk275726 = require("./275726.js"),
  Chunk904245 = require("./904245.js"),
  Chunk147913 = require("./147913.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk146085 = require("./146085.js"),
  Chunk96052 = require("./96052.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk147913.Z {
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
      if (u.Z.getVoiceChannelId() === t && a && null != t && n !== o.default.getId() && c.Z.can(f.yP, s.Z.getChannel(t)))
        if (null != h) {
          let e = d.default.getUser(n);
          null != e && (0, p.U)(t, e, h)
        } else {
          let e = l.Z.getMessages(t).findNewest(e => e.type === r.u.STAGE_RAISE_HAND && e.hasFlag(_.iLy.EPHEMERAL) && e.author.id === n);
          null != e && i.Z.deleteMessage(t, e.id, true)
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