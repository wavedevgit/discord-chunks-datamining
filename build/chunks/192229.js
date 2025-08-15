/** Chunk was on web.js **/
/** chunk id: 192229, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk872810 = require("./872810.js"),
  Chunk147913 = require("./147913.js"),
  Chunk994339 = require("./994339.js"),
  Chunk199902 = require("./199902.js"),
  Chunk375954 = require("./375954.js"),
  Chunk158776 = require("./158776.js"),
  Chunk172029 = require("./172029.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk147913.Z {
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    for (let e of t) {
      var n, i;
      if (null == e.channelId || true !== e.selfStream) continue;
      let t = c.Z.getPendingRequestForUser(e.userId);
      if (null == t) continue;
      let d = s.Z.getMessage(e.channelId, t);
      if ((null == d || null == (n = d.activity) ? true : n.type) !== u.mFx.STREAM_REQUEST || (null == (i = d.application) ? true : i.id) == null) continue;
      let f = l.Z.getApplicationActivity(e.userId, d.application.id, e.guildId);
      if (!(0, a.Z)(f, d, d.application.id)) continue;
      let _ = o.Z.getStreamForUser(e.userId, e.guildId);
      null != _ && r.rn(_, {
        forceMultiple: true,
        noFocus: true
      })
    }
  }
  constructor(...e) {
    super(...e), d(this, "actions", {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    })
  }
}
let _ = new f