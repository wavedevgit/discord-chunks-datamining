/** Chunk was on web.js **/
/** chunk id: 187548, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk367513 = require("./367513.js"),
  Chunk401843 = require("./401843.js"),
  Chunk439372 = require("./439372.js"),
  Chunk313961 = require("./313961.js"),
  Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk309010 = require("./309010.js"),
  Chunk945041 = require("./945041.js"),
  Chunk806931 = require("./806931.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk439372.A {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    u.U.getState().isEnabled && null != t && this.findAndWatchStream()
  }
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    if (!u.U.getState().isEnabled) return;
    let n = c.A.getVoiceChannelId();
    null != n && t.forEach(e => {
      if (e.channelId !== n) return;
      let t = l.A.getStreamForUser(e.userId, e.guildId),
        a = l.A.getActiveStreamForUser(e.userId, e.guildId);
      if (null != t && null == a) return void(0, i.A9)(t, {
        forceMultiple: true,
        forceFocus: true
      });
      if (null == t && null != a) {
        let e = s.A.getSelectedParticipant(n),
          t = (null == e ? true : e.type) === d.lp.STREAM && (null == e ? true : e.id) === (0, o._z)(a);
        if ((0, i.vN)((0, o._z)(a), false, true), !t) return;
        let c = l.A.getAllActiveStreamsForChannel(n).find(e => e.ownerId !== a.ownerId);
        if (null == c) return;
        r.A.selectParticipant(n, (0, o._z)(c))
      }
    })
  }
  findAndWatchStream() {
    let e = c.A.getVoiceChannelId();
    if (null == e) return;
    let t = l.A.getAllApplicationStreamsForChannel(e)[0];
    null != t && (0, i.A9)(t)
  }
  constructor(...e) {
    super(...e), f(this, "actions", {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      VOICE_STATE_UPDATES: e => this.handleVoiceStateUpdates(e)
    })
  }
}
let _ = new p