/** Chunk was on 21738 **/
/** chunk id: 874959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./321073.js");
var Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk654107 = require("./654107.js"),
  Chunk287809 = require("./287809.js"),
  Chunk318937 = require("./318937.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./824217.js");
class u extends Chunk272355.A {
  _initialize() {
    __OVERLAY__ || (i.h.subscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint), i.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived))
  }
  _terminate() {
    __OVERLAY__ || (i.h.unsubscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint), i.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived), this.lineBatchTimer.stop())
  }
  _handleVoiceChannelEffectReceived(e) {
    var t;
    let {
      lineId: n,
      points: r,
      userId: i,
      streamerId: l,
      emojiHose: c
    } = e;
    if (null != l && i !== (null == (t = s.default.getCurrentUser()) ? true : t.id))
      if (null != r && null != n) {
        let e = s.default.getUser(i);
        null != e && (0, a.l0)(e.getAvatarURL(null, 80)), (0, o.d4)(n, i, l, r)
      } else null != c && (c.lastUpdatedAt = Date.now(), (0, o.Rl)(c, i, l))
  }
  constructor(...e) {
    super(...e), c(this, "linesToUpdate", {}), c(this, "lineBatchTimer", new r.IX), c(this, "_handleDrawLinePoint", e => {
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
      } : this.linesToUpdate[n].points.push(i), null == this.lineBatchTimer._ref && this.lineBatchTimer.start(500, this.sendLineBatch)
    }), c(this, "sendLineBatch", () => {
      for (let e in this.linesToUpdate) {
        let {
          channelId: t,
          points: n,
          streamerId: r
        } = this.linesToUpdate[e];
        (0, o.ZW)(t, e, r, n)
      }
      this.linesToUpdate = {}, this.lineBatchTimer.stop()
    })
  }
}
let d = new u