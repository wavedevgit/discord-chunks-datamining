/** Chunk was on 1272 **/
/** chunk id: 444961, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk287734 = require("./287734.js"),
  Chunk317770 = require("./317770.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk517100 = require("./517100.js"),
  Chunk19780 = require("./19780.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");
let m = new Chunk846519.V7,
  h = new Chunk846519.V7;
class b extends Chunk317770.Z {
  _initialize() {
    i.Z.subscribe("IDLE", this.handleIdleUpdate)
  }
  _terminate() {
    m.stop(), h.stop(), i.Z.unsubscribe("IDLE", this.handleIdleUpdate)
  }
  handleIdleUpdate() {
    let e = u.Z.getIdleSince();
    if (!f.isPlatformEmbedded) return;
    for (let e of (m.stop(), h.stop(), o.Z.getAllActiveStreams()))
      if (e.state !== g.jm8.ENDED) return;
    if (null == e) return;
    let t = d.Z.getChannelId();
    if (null == t) return;
    h.start(18e6, () => {
      l.default.selectVoiceChannel(null)
    });
    let n = c.Z.getGuild(d.Z.getGuildId());
    if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
    let r = s.Z.getChannel(t);
    null != r && (r.isGuildStageVoice() || m.start(e + n.afkTimeout * p.Z.Millis.SECOND - Date.now(), () => {
      null != (n = c.Z.getGuild(d.Z.getGuildId())) && null != n.afkChannelId && l.default.selectVoiceChannel(n.afkChannelId)
    }))
  }
}
let _ = new b