/** Chunk was on web.js **/
/** chunk id: 513566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk570140 = require("./570140.js"),
  Chunk846027 = require("./846027.js"),
  Chunk287734 = require("./287734.js"),
  Chunk317770 = require("./317770.js"),
  Chunk829750 = require("./829750.js"),
  Chunk189771 = require("./189771.js"),
  Chunk67844 = require("./67844.js"),
  Chunk173507 = require("./173507.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class S extends Chunk317770.Z {
  _initialize() {
    this.isSupported && (Chunk570140.Z.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), Chunk570140.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), Chunk570140.Z.subscribe("START_SESSION", this.handleViewUpdate), Chunk570140.Z.subscribe("CONNECTION_OPEN", this.handleViewUpdate), Chunk570140.Z.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), Chunk570140.Z.subscribe("CALL_CREATE", this.handleViewUpdate), Chunk570140.Z.subscribe("CALL_UPDATE", this.handleViewUpdate), Chunk570140.Z.subscribe("CALL_DELETE", this.handleViewUpdate), Chunk570140.Z.subscribe("CHANNEL_DELETE", this.handleViewUpdate), Chunk570140.Z.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), Chunk570140.Z.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), Chunk570140.Z.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), Chunk570140.Z.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), Chunk570140.Z.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), Chunk998502.ZP.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)))
  }
  _terminate() {
    this.isSupported && (Chunk570140.Z.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), Chunk570140.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), Chunk570140.Z.unsubscribe("START_SESSION", this.handleViewUpdate), Chunk570140.Z.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), Chunk570140.Z.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), Chunk570140.Z.unsubscribe("CALL_CREATE", this.handleViewUpdate), Chunk570140.Z.unsubscribe("CALL_UPDATE", this.handleViewUpdate), Chunk570140.Z.unsubscribe("CALL_DELETE", this.handleViewUpdate), Chunk570140.Z.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), Chunk570140.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), Chunk570140.Z.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), Chunk570140.Z.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), Chunk570140.Z.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), Chunk570140.Z.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate))
  }
  setThumbarButtons(e) {
    i()(this.prevButtons, e) || (this.prevButtons = e, b.ZP.setThumbarButtons(e))
  }
  constructor(...e) {
    super(...e), v(this, "callbackActions", {
      [b.tS.VIDEO]: () => {
        h.Z.isVideoEnabled() ? l.Z.setVideoEnabled(false) : (0, _.Z)(() => l.Z.setVideoEnabled(true), y.IlC.APP)
      },
      [b.tS.MUTE]: () => l.Z.toggleSelfMute({
        location: "Thumbar"
      }),
      [b.tS.DEAFEN]: () => l.Z.toggleSelfDeaf({
        location: "Thumbar"
      }),
      [b.tS.DISCONNECT]: () => c.default.disconnect()
    }), v(this, "isSupported", (0, E.isMac)() || (0, E.isWindows)()), v(this, "prevButtons", []), v(this, "buttonClicked", e => {
      if (!(e.buttonName in this.callbackActions)) return void console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
      this.callbackActions[e.buttonName]()
    }), v(this, "handleViewUpdate", a().debounce(() => {
      let e = g.Z.getVoiceChannelId();
      if (null == e) return void this.setThumbarButtons([]);
      let t = h.Z.isSelfMute(),
        n = h.Z.isSelfDeaf(),
        r = h.Z.isVideoEnabled(),
        i = h.Z.isVideoAvailable(),
        o = m.Z.getChannel(e),
        a = null == o || (0, f.y)(o),
        {
          reachedLimit: s,
          limit: l
        } = null != o ? (0, d.t)(o) : {
          reachedLimit: true,
          limit: true
        },
        c = (0, p.X)({
          enabled: r,
          join: false,
          channel: o,
          cameraUnavailable: !i,
          hasPermission: a,
          channelLimit: l,
          channelLimitReached: s
        });
      this.setThumbarButtons([{
        name: b.tS.VIDEO,
        active: !r,
        tooltip: c,
        flags: i ? [] : ["disabled"]
      }, {
        name: b.tS.MUTE,
        active: t,
        tooltip: t ? O.intl.string(O.t.YqAjXy) : O.intl.string(O.t.w4m945)
      }, {
        name: b.tS.DEAFEN,
        active: n,
        tooltip: n ? O.intl.string(O.t["2US872"]) : O.intl.string(O.t.wjcRFX)
      }, {
        name: b.tS.DISCONNECT,
        active: true,
        tooltip: O.intl.string(O.t["6vrfgt"])
      }])
    }, 100))
  }
}
let I = new S