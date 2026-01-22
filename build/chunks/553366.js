/** Chunk was on web.js **/
/** chunk id: 553366, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk401843 = require("./401843.js"),
  Chunk439372 = require("./439372.js"),
  Chunk616356 = require("./616356.js"),
  Chunk320501 = require("./320501.js"),
  Chunk661191 = require("./661191.js"),
  Chunk680724 = require("./680724.js"),
  Chunk25528 = require("./25528.js"),
  Chunk820672 = require("./820672.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk439372.A {
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: t
    } = e;
    for (let e of t) {
      var n, i;
      if (null == e.channelId || true !== e.selfStream) continue;
      let t = l.A.getPendingRequestForUser(e.userId);
      if (null == t) continue;
      let f = s.A.getMessage(e.channelId, t);
      if ((null == f || null == (n = f.activity) ? true : n.type) !== d.xL.STREAM_REQUEST || (null == (i = f.application) ? true : i.id) == null || o.default.extractTimestamp(t) < Date.now() - u.M || null == (0, c.n)(e.userId, e.guildId).find(e => {
          var t;
          return (null == (t = f.application) ? true : t.id) != null && e.application_id === f.application.id
        })) continue;
      let p = a.A.getStreamForUser(e.userId, e.guildId);
      null != p && r.A9(p, {
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