/** Chunk was on web.js **/
/** chunk id: 216405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk579092 = require("./579092.js"),
  Chunk46973 = require("./46973.js"),
  Chunk846027 = require("./846027.js"),
  Chunk147913 = require("./147913.js"),
  Chunk450109 = require("./450109.js"),
  Chunk361291 = require("./361291.js"),
  Chunk199902 = require("./199902.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk959457 = require("./959457.js"),
  Chunk594174 = require("./594174.js"),
  Chunk569545 = require("./569545.js"),
  Chunk537413 = require("./537413.js"),
  Chunk37113 = require("./37113.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = 10,
  b = 20,
  y = 10,
  O = new Chunk579092.Yd("AutoQualityStreamingManager"),
  v = 0;
class I extends Chunk147913.Z {
  handleStats() {
    var e, t, n;
    if ((v += 1) % y != 0) return;
    let r = Chunk199902.Z.getCurrentUserActiveStream();
    if (null == Chunk579092) return;
    let o = Chunk959457.Z.getRTCConnection((0, Chunk569545.V9)(Chunk579092)),
      g = Chunk131951.Z.getGoLiveSource();
    if (null == Chunk147913 || null == g) return;
    let I = Chunk361291.Z.getState();
    if (I.preset !== Chunk37113.ApplicationStreamPresets.PRESET_AUTO) return;
    if ((null == (e = Chunk199902.Z.getStreamerActiveStreamMetadata()) ? true : module.id) != null) return void O.info("Skipping auto quality checker for game stream.");
    let T = Chunk450109.Z.getAccumulatedPerformanceStats(Chunk147913.getMediaEngineConnectionId(), Chunk579092.ownerId, "long");
    if (null == T || T.numDatapoints < 30) return;
    let S = Chunk594174.default.getCurrentUser(),
      A = Chunk430824.Z.getGuild(Chunk579092.guildId),
      [C, N] = null != (t = (0, Chunk537413.Z)(Chunk37113.ApplicationStreamPresets.PRESET_DOCUMENTS, S, null == A ? true : A.premiumTier)) ? exports : [Chunk37113.ApplicationStreamResolutions.RESOLUTION_SOURCE, Chunk37113.ApplicationStreamFPS.FPS_5],
      [R, P] = null != (n = (0, Chunk537413.Z)(Chunk37113.ApplicationStreamPresets.PRESET_VIDEO, S, null == A ? true : A.premiumTier)) ? require : [Chunk37113.ApplicationStreamResolutions.RESOLUTION_720, Chunk37113.ApplicationStreamFPS.FPS_30],
      w = null;
    if (T.entropy < E && (I.resolution !== C || I.fps !== N) ? (O.info("Low entropy average, switching to screenshare preset."), w = {
        qualityOptions: {
          preset: Chunk37113.ApplicationStreamPresets.PRESET_AUTO,
          resolution: C,
          frameRate: N
        },
        context: Chunk46973.Yn.STREAM
      }) : T.entropy > b && (I.resolution !== R || I.fps !== P) && (O.info("High entropy average, switching to video preset."), w = {
        qualityOptions: {
          preset: Chunk37113.ApplicationStreamPresets.PRESET_AUTO,
          resolution: R,
          frameRate: P
        },
        context: Chunk46973.Yn.STREAM
      }), null != w) {
      if (null != g.desktopSource) w.desktopSettings = {
        sourceId: g.desktopSource.id,
        sound: I.soundshareEnabled
      };
      else {
        if (null == g.cameraSource) return;
        w.cameraSettings = {
          videoDeviceGuid: g.cameraSource.videoDeviceGuid,
          audioDeviceGuid: g.cameraSource.audioDeviceGuid
        }
      }
      Chunk846027.Z.setGoLiveSource(w)
    }
  }
  constructor(...e) {
    super(...e), g(this, "actions", {
      MEDIA_ENGINE_CONNECTION_STATS: this.handleStats
    })
  }
}
let T = new I