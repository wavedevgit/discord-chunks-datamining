/** Chunk was on 1272 **/
/** chunk id: 444961, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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
let h = new Chunk846519.V7,
  m = new Chunk846519.V7;
class b extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("IDLE", this.handleIdleUpdate)
  }
  _terminate() {
    h.stop(), m.stop(), Chunk570140.Z.unsubscribe("IDLE", this.handleIdleUpdate)
  }
  handleIdleUpdate() {
    let e = Chunk517100.Z.getIdleSince();
    if (!Chunk358085.isPlatformEmbedded) return;
    for (let e of (h.stop(), m.stop(), Chunk199902.Z.getAllActiveStreams()))
      if (module.state !== Chunk981631.jm8.ENDED) return;
    if (null == module) return;
    let t = Chunk19780.Z.getChannelId();
    if (null == exports) return;
    m.start(18e6, () => {
      Chunk287734.default.selectVoiceChannel(null)
    });
    let n = Chunk430824.Z.getGuild(Chunk19780.Z.getGuildId());
    if (null == require || null == require.afkChannelId || require.afkChannelId === exports || null == require.afkTimeout) return;
    let r = Chunk592125.Z.getChannel(exports);
    null != Chunk846519 && (Chunk846519.isGuildStageVoice() || h.start(module + require.afkTimeout * Chunk70956.Z.Millis.SECOND - Date.now(), () => {
      null != (n = Chunk430824.Z.getGuild(Chunk19780.Z.getGuildId())) && null != require.afkChannelId && Chunk287734.default.selectVoiceChannel(require.afkChannelId)
    }))
  }
}
let E = new b