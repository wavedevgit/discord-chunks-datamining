/** Chunk was on web.js **/
/** chunk id: 763685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk812729 = require("./812729.js"),
  i = require.n(Chunk812729),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk73153 = require("./73153.js"),
  Chunk827343 = require("./827343.js"),
  Chunk956793 = require("./956793.js"),
  Chunk272355 = require("./272355.js"),
  Chunk405018 = require("./405018.js"),
  Chunk704877 = require("./704877.js"),
  Chunk675991 = require("./675991.js"),
  Chunk442353 = require("./442353.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class A extends Chunk272355.A {
  _initialize() {
    this.isSupported && (s.h.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), s.h.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), s.h.subscribe("START_SESSION", this.handleViewUpdate), s.h.subscribe("CONNECTION_OPEN", this.handleViewUpdate), s.h.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), s.h.subscribe("CALL_CREATE", this.handleViewUpdate), s.h.subscribe("CALL_UPDATE", this.handleViewUpdate), s.h.subscribe("CALL_DELETE", this.handleViewUpdate), s.h.subscribe("CHANNEL_DELETE", this.handleViewUpdate), s.h.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), s.h.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), s.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), s.h.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), s.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), y.Ay.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)))
  }
  _terminate() {
    this.isSupported && (s.h.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), s.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), s.h.unsubscribe("START_SESSION", this.handleViewUpdate), s.h.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), s.h.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), s.h.unsubscribe("CALL_CREATE", this.handleViewUpdate), s.h.unsubscribe("CALL_UPDATE", this.handleViewUpdate), s.h.unsubscribe("CALL_DELETE", this.handleViewUpdate), s.h.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), s.h.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), s.h.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), s.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), s.h.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), s.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate))
  }
  setThumbarButtons(e) {
    i()(this.prevButtons, e) || (this.prevButtons = e, y.Ay.setThumbarButtons(e))
  }
  constructor(...e) {
    super(...e), v(this, "callbackActions", {
      [y.dv.VIDEO]: () => {
        m.A.isVideoEnabled() ? l.A.setVideoEnabled(false) : (0, _.A)(() => l.A.setVideoEnabled(true), b.BRT.APP)
      },
      [y.dv.MUTE]: () => l.A.toggleSelfMute({
        location: "Thumbar"
      }),
      [y.dv.DEAFEN]: () => l.A.toggleSelfDeaf({
        location: "Thumbar"
      }),
      [y.dv.DISCONNECT]: () => c.default.disconnect()
    }), v(this, "isSupported", (0, E.isMac)() || (0, E.isWindows)()), v(this, "prevButtons", []), v(this, "buttonClicked", e => {
      e.buttonName in this.callbackActions ? this.callbackActions[e.buttonName]() : console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e)
    }), v(this, "handleViewUpdate", o().debounce(() => {
      let e = g.A.getVoiceChannelId();
      if (null == e) return void this.setThumbarButtons([]);
      let t = m.A.isSelfMute(),
        n = m.A.isSelfDeaf(),
        r = m.A.isVideoEnabled(),
        i = m.A.isVideoAvailable(),
        a = h.A.getChannel(e),
        o = null == a || (0, f.r)(a),
        {
          reachedLimit: s,
          limit: l
        } = null != a ? (0, d.M)(a) : {
          reachedLimit: true,
          limit: true
        },
        c = (0, p.Q)({
          enabled: r,
          join: false,
          channel: a,
          cameraUnavailable: !i,
          hasPermission: o,
          channelLimit: l,
          channelLimitReached: s
        });
      this.setThumbarButtons([{
        name: y.dv.VIDEO,
        active: !r,
        tooltip: c,
        flags: i ? [] : ["disabled"]
      }, {
        name: y.dv.MUTE,
        active: t,
        tooltip: t ? O.intl.string(O.t.YqAjXy) : O.intl.string(O.t.w4m945)
      }, {
        name: y.dv.DEAFEN,
        active: n,
        tooltip: n ? O.intl.string(O.t["2US872"]) : O.intl.string(O.t.wjcRFX)
      }, {
        name: y.dv.DISCONNECT,
        active: true,
        tooltip: O.intl.string(O.t["6vrfgt"])
      }])
    }, 100))
  }
}
let I = new A