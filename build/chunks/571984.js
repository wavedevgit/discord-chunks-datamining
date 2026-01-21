/** Chunk was on web.js **/
/** chunk id: 571984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk475179 = require("./475179.js"),
  Chunk872810 = require("./872810.js"),
  Chunk147913 = require("./147913.js"),
  Chunk358221 = require("./358221.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk944486 = require("./944486.js"),
  Chunk45652 = require("./45652.js"),
  Chunk354459 = require("./354459.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk147913.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    u.d.getState().isEnabled && null != t && this.findAndWatchStream()
  }
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    if (!u.d.getState().isEnabled) return;
    let n = c.Z.getVoiceChannelId();
    null != n && t.forEach(e => {
      if (e.channelId !== n) return;
      let t = l.Z.getStreamForUser(e.userId, e.guildId),
        a = l.Z.getActiveStreamForUser(e.userId, e.guildId);
      if (null != t && null == a) return void(0, i.rn)(t, {
        forceMultiple: true,
        forceFocus: true
      });
      if (null == t && null != a) {
        let e = o.Z.getSelectedParticipant(n),
          t = (null == e ? true : e.type) === d.fO.STREAM && (null == e ? true : e.id) === (0, s.V9)(a);
        if ((0, i.g)((0, s.V9)(a), false, true), !t) return;
        let c = l.Z.getAllActiveStreamsForChannel(n).find(e => e.ownerId !== a.ownerId);
        if (null == c) return;
        r.Z.selectParticipant(n, (0, s.V9)(c))
      }
    })
  }
  findAndWatchStream() {
    let e = c.Z.getVoiceChannelId();
    if (null == e) return;
    let t = l.Z.getAllApplicationStreamsForChannel(e)[0];
    null != t && (0, i.rn)(t)
  }
  constructor(...e) {
    super(...e), f(this, "actions", {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      VOICE_STATE_UPDATES: e => this.handleVoiceStateUpdates(e)
    })
  }
}
let _ = new p