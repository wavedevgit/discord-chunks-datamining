/** Chunk was on 21738 **/
/** chunk id: 752412, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk827343 = require("./827343.js"),
  Chunk272355 = require("./272355.js"),
  Chunk15285 = require("./15285.js"),
  Chunk869146 = require("./869146.js"),
  Chunk430452 = require("./430452.js"),
  Chunk531685 = require("./531685.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = new Set,
  g = new Set,
  m = null;

function f() {
  for (let e of h) i.A.setDisableLocalVideo(e, u.bb8.MANUAL_ENABLED, d.x.DEFAULT, false);
  g.clear(), h.clear()
}
class A extends Chunk272355.A {
  _initialize() {
    r.h.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), r.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), r.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), r.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), s.A.addChangeListener(this.handlePopoutChange)
  }
  _terminate() {
    r.h.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), r.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), r.h.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), r.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), s.A.removeChangeListener(this.handlePopoutChange), f(), m = null
  }
  handleIncomingVideo(e) {
    let {
      userId: t,
      context: n,
      streamId: r
    } = e;
    if (n !== d.x.DEFAULT || null == r) return;
    let l = null != a.Ay.getVisibleGame(),
      p = c.A.isVisible(),
      m = s.A.getWindowVisible(u.MLl.CHANNEL_CALL_POPOUT),
      f = o.A.isLocalVideoDisabled(t, n),
      A = g.has(t);
    !l || p || m || f || A || (h.add(t), i.A.setDisableLocalVideo(t, u.bb8.DISABLED, n, false))
  }
  handleManualLocalVideoToggle(e) {
    let {
      userId: t,
      persist: n
    } = e;
    n && (g.add(t), h.delete(t))
  }
  constructor(...e) {
    super(...e), p(this, "handleWindowVisibilityChange", e => {
      let {
        visible: t
      } = e;
      t && f()
    }), p(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t
      } = e;
      t !== m && (f(), m = t)
    }), p(this, "handlePopoutChange", () => {
      s.A.getWindowVisible(u.MLl.CHANNEL_CALL_POPOUT) && f()
    })
  }
}
let _ = new A