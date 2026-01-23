/** Chunk was on 21738 **/
/** chunk id: 639823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk956793 = require("./956793.js"),
  Chunk272355 = require("./272355.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk885576 = require("./885576.js"),
  Chunk383501 = require("./383501.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js");
let f = new Chunk451988.Ep,
  m = new Chunk451988.Ep;
class A extends Chunk272355.A {
  _initialize() {
    i.h.subscribe("IDLE", this.handleIdleUpdate)
  }
  _terminate() {
    f.stop(), m.stop(), i.h.unsubscribe("IDLE", this.handleIdleUpdate)
  }
  handleIdleUpdate() {
    let e = u.A.getIdleSince();
    if (!h.isPlatformEmbedded) return;
    for (let e of (f.stop(), m.stop(), s.A.getAllActiveStreams()))
      if (e.state !== g.XYD.ENDED) return;
    if (null == e) return;
    let t = d.A.getChannelId();
    if (null == t) return;
    m.start(18e6, () => {
      l.default.selectVoiceChannel(null)
    });
    let n = c.A.getGuild(d.A.getGuildId());
    if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
    let r = o.A.getChannel(t);
    null == r || r.isGuildStageVoice() || f.start(e + n.afkTimeout * p.A.Millis.SECOND - Date.now(), () => {
      null != (n = c.A.getGuild(d.A.getGuildId())) && null != n.afkChannelId && l.default.selectVoiceChannel(n.afkChannelId)
    })
  }
}
let _ = new A