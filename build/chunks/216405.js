/** Chunk was on web.js **/
/** chunk id: 216405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
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
  Chunk70956 = require("./70956.js"),
  Chunk580991 = require("./580991.js"),
  Chunk569545 = require("./569545.js"),
  Chunk537413 = require("./537413.js"),
  Chunk37113 = require("./37113.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 10,
  O = 20,
  v = 10,
  S = new Chunk579092.Yd("AutoQualityStreamingManager"),
  I = 0;
class T extends Chunk147913.Z {
  handleStats() {
    var e, t, n, r;
    if ((I += 1) % v != 0) return;
    let o = Chunk199902.Z.getCurrentUserActiveStream();
    if (null == Chunk147913) return;
    let m = Chunk959457.Z.getRTCConnection((0, Chunk569545.V9)(Chunk147913)),
      b = Chunk131951.Z.getGoLiveSource();
    if (null == Chunk580991 || null == b || !Chunk580991.hasActiveRemoteWants()) return;
    let T = Chunk361291.Z.getState();
    if (T.preset !== Chunk37113.tI.PRESET_AUTO) return;
    if ((null == (e = Chunk199902.Z.getStreamerActiveStreamMetadata()) ? true : module.id) != null) return void S.info("Skipping auto quality checker for game stream.");
    let C = Chunk450109.Z.getAccumulatedPerformanceStats(Chunk580991.getMediaEngineConnectionId(), Chunk147913.ownerId, "long"),
      A = (null != (t = Chunk580991.analyticsContext.getDuration()) ? exports : 30) >= 30 * Chunk70956.Z.Millis.SECOND ? 30 : 15;
    if (null == C || C.numDatapoints < A) return;
    let N = Chunk594174.default.getCurrentUser(),
      P = Chunk430824.Z.getGuild(Chunk147913.guildId),
      [R, w] = null != (n = (0, Chunk537413.Z)(Chunk37113.tI.PRESET_DOCUMENTS, N, null == P ? true : P.premiumTier)) ? require : [Chunk37113.LY.RESOLUTION_SOURCE, Chunk37113.ws.FPS_5],
      [D, x] = null != (r = (0, Chunk537413.Z)(Chunk37113.tI.PRESET_VIDEO, N, null == P ? true : P.premiumTier)) ? Chunk579092 : [Chunk37113.LY.RESOLUTION_720, Chunk37113.ws.FPS_30],
      L = null;
    if (C.entropy < y && (T.resolution !== R || T.fps !== w) ? (S.info("Low entropy average, switching to screenshare preset."), L = {
        qualityOptions: {
          preset: Chunk37113.tI.PRESET_AUTO,
          resolution: R,
          frameRate: w
        },
        context: Chunk46973.Yn.STREAM
      }) : C.entropy > O && (T.resolution !== D || T.fps !== x) && (S.info("High entropy average, switching to video preset."), L = {
        qualityOptions: {
          preset: Chunk37113.tI.PRESET_AUTO,
          resolution: D,
          frameRate: x
        },
        context: Chunk46973.Yn.STREAM
      }), null != L) {
      if (null != b.desktopSource) L.desktopSettings = {
        sourceId: b.desktopSource.id,
        sound: T.soundshareEnabled
      };
      else {
        if (null == b.cameraSource) return;
        L.cameraSettings = {
          videoDeviceGuid: b.cameraSource.videoDeviceGuid,
          audioDeviceGuid: b.cameraSource.audioDeviceGuid
        }
      }
      Chunk580991.autoQualityChange(), Chunk846027.Z.setGoLiveSource(L)
    }
  }
  handlePostConnectionOpen() {
    (0, Chunk580991.Ym)()
  }
  constructor(...e) {
    super(...e), b(this, "actions", {
      MEDIA_ENGINE_CONNECTION_STATS: this.handleStats,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    })
  }
}
let C = new T