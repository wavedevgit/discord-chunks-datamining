/** Chunk was on web.js **/
/** chunk id: 192229, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk872810 = require("./872810.js"),
  Chunk147913 = require("./147913.js"),
  Chunk199902 = require("./199902.js"),
  Chunk375954 = require("./375954.js"),
  Chunk709054 = require("./709054.js"),
  Chunk172029 = require("./172029.js"),
  Chunk463421 = require("./463421.js"),
  Chunk915553 = require("./915553.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk147913.Z {
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    for (let e of t) {
      var n, i;
      if (null == e.channelId || true !== e.selfStream) continue;
      let t = l.Z.getPendingRequestForUser(e.userId);
      if (null == t) continue;
      let f = o.Z.getMessage(e.channelId, t);
      if ((null == f || null == (n = f.activity) ? true : n.type) !== d.mFx.STREAM_REQUEST || (null == (i = f.application) ? true : i.id) == null || s.default.extractTimestamp(t) < Date.now() - u.O || null == (0, c._)(e.userId, e.guildId).find(e => {
          var t;
          return (null == (t = f.application) ? true : t.id) != null && e.application_id === f.application.id
        })) continue;
      let p = a.Z.getStreamForUser(e.userId, e.guildId);
      null != p && r.rn(p, {
        forceMultiple: true,
        noFocus: true
      })
    }
  }
  constructor(...e) {
    super(...e), f(this, "actions", {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    })
  }
}
let _ = new p