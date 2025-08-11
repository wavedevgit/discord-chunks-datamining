/** Chunk was on 1272 **/
/** chunk id: 719256, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./539854.js");
var Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk220082 = require("./220082.js"),
  Chunk594174 = require("./594174.js"),
  Chunk125268 = require("./125268.js"),
  Chunk813900 = require("./813900.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk317770.Z {
  _initialize() {
    __OVERLAY__ || (Chunk570140.Z.subscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint), Chunk570140.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived))
  }
  _terminate() {
    __OVERLAY__ || (Chunk570140.Z.unsubscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint), Chunk570140.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived), this.lineBatchTimer.stop())
  }
  _handleVoiceChannelEffectReceived(e) {
    var t;
    let {
      lineId: n,
      points: r,
      userId: i,
      streamerId: l,
      emojiHose: u
    } = e;
    if (null != l && i !== (null == (t = o.default.getCurrentUser()) ? true : t.id))
      if (null != r && null != n) {
        let e = o.default.getUser(i);
        null != e && (0, a.vM)(e.getAvatarURL(null, c.Ks)), (0, s.cV)(n, i, l, r)
      } else null != u && (u.lastUpdatedAt = Date.now(), (0, s.gr)(u, i, l))
  }
  constructor(...e) {
    super(...e), u(this, "linesToUpdate", {}), u(this, "lineBatchTimer", new r.Xp), u(this, "_handleDrawLinePoint", e => {
      let {
        channelId: t,
        lineId: n,
        streamerId: r,
        point: i
      } = e;
      null == this.linesToUpdate[n] ? this.linesToUpdate[n] = {
        channelId: t,
        streamerId: r,
        points: [i]
      } : this.linesToUpdate[n].points.push(i), null == this.lineBatchTimer._ref && this.lineBatchTimer.start(c.Fq, this.sendLineBatch)
    }), u(this, "sendLineBatch", () => {
      for (let e in this.linesToUpdate) {
        let {
          channelId: t,
          points: n,
          streamerId: r
        } = this.linesToUpdate[e];
        (0, s.AX)(t, e, r, n)
      }
      this.linesToUpdate = {}, this.lineBatchTimer.stop()
    })
  }
}
let p = new d