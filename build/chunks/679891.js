/** Chunk was on 1272 **/
/** chunk id: 679891, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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
  g = new Set,
  h = null;

function m() {
  for (let e of f) i.Z.setDisableLocalVideo(e, u.ZUi.MANUAL_ENABLED, d.Yn.DEFAULT, false);
  g.clear(), f.clear()
}
class b extends Chunk317770.Z {
  _initialize() {
    r.Z.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), r.Z.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), r.Z.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), r.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), o.Z.addChangeListener(this.handlePopoutChange)
  }
  _terminate() {
    r.Z.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), r.Z.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), r.Z.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), r.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), o.Z.removeChangeListener(this.handlePopoutChange), m(), h = null
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
      h = o.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT),
      m = s.Z.isLocalVideoDisabled(t, n),
      b = g.has(t);
    !l || p || h || m || b || (f.add(t), i.Z.setDisableLocalVideo(t, u.ZUi.DISABLED, n, false))
  }
  handleManualLocalVideoToggle(e) {
    let {
      userId: t,
      persist: n
    } = e;
    n && (g.add(t), f.delete(t))
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
      t !== h && (m(), h = t)
    }), p(this, "handlePopoutChange", () => {
      o.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT) && m()
    })
  }
}
let E = new b