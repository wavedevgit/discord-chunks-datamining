/** Chunk was on 1272 **/
/** chunk id: 679891, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk846027 = require("./846027.js"),
  Chunk317770 = require("./317770.js"),
  Chunk594190 = require("./594190.js"),
  Chunk928518 = require("./928518.js"),
  Chunk131951 = require("./131951.js"),
  Chunk451478 = require("./451478.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Set,
  h = new Set,
  g = null;

function m() {
  for (let e of f) Chunk846027.Z.setDisableLocalVideo(module, Chunk981631.ZUi.MANUAL_ENABLED, Chunk65154.Yn.DEFAULT, false);
  h.clear(), f.clear()
}
class _ extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), Chunk570140.Z.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), Chunk570140.Z.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), Chunk570140.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), Chunk928518.Z.addChangeListener(this.handlePopoutChange)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), Chunk570140.Z.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), Chunk570140.Z.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), Chunk570140.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), Chunk928518.Z.removeChangeListener(this.handlePopoutChange), m(), g = null
  }
  handleIncomingVideo(e) {
    let {
      userId: t,
      context: n,
      streamId: r
    } = e;
    if (n !== d.Yn.DEFAULT || null == r) return;
    let l = null != a.ZP.getVisibleGame(),
      p = c.Z.isVisible(),
      g = s.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT),
      m = o.Z.isLocalVideoDisabled(t, n),
      _ = h.has(t);
    !l || p || g || m || _ || (f.add(t), i.Z.setDisableLocalVideo(t, u.ZUi.DISABLED, n, false))
  }
  handleManualLocalVideoToggle(e) {
    let {
      userId: t,
      persist: n
    } = e;
    n && (h.add(t), f.delete(t))
  }
  constructor(...e) {
    super(...e), p(this, "handleWindowVisibilityChange", e => {
      let {
        visible: t
      } = e;
      t && m()
    }), p(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t
      } = e;
      t !== g && (m(), g = t)
    }), p(this, "handlePopoutChange", () => {
      s.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT) && m()
    })
  }
}
let b = new _