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
    let o = c.Z.getCurrentUserActiveStream();
    if (null == o) return;
    let m = f.Z.getRTCConnection((0, h.V9)(o)),
      b = d.Z.getGoLiveSource();
    if (null == m || null == b || !m.hasActiveRemoteWants()) return;
    let T = l.Z.getState();
    if (T.preset !== E.tI.PRESET_AUTO) return;
    if ((null == (e = c.Z.getStreamerActiveStreamMetadata()) ? true : e.id) != null) return void S.info("Skipping auto quality checker for game stream.");
    let C = s.Z.getAccumulatedPerformanceStats(m.getMediaEngineConnectionId(), o.ownerId, "long"),
      A = (null != (t = m.analyticsContext.getDuration()) ? t : 30) >= 30 * _.Z.Millis.SECOND ? 30 : 15;
    if (null == C || C.numDatapoints < A) return;
    let N = p.default.getCurrentUser(),
      P = u.Z.getGuild(o.guildId),
      [R, w] = null != (n = (0, g.Z)(E.tI.PRESET_DOCUMENTS, N, null == P ? true : P.premiumTier)) ? n : [E.LY.RESOLUTION_SOURCE, E.ws.FPS_5],
      [D, x] = null != (r = (0, g.Z)(E.tI.PRESET_VIDEO, N, null == P ? true : P.premiumTier)) ? r : [E.LY.RESOLUTION_720, E.ws.FPS_30],
      L = null;
    if (C.entropy < y && (T.resolution !== R || T.fps !== w) ? (S.info("Low entropy average, switching to screenshare preset."), L = {
        qualityOptions: {
          preset: E.tI.PRESET_AUTO,
          resolution: R,
          frameRate: w
        },
        context: i.Yn.STREAM
      }) : C.entropy > O && (T.resolution !== D || T.fps !== x) && (S.info("High entropy average, switching to video preset."), L = {
        qualityOptions: {
          preset: E.tI.PRESET_AUTO,
          resolution: D,
          frameRate: x
        },
        context: i.Yn.STREAM
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
      m.autoQualityChange(), a.Z.setGoLiveSource(L)
    }
  }
  handlePostConnectionOpen() {
    (0, m.Ym)()
  }
  constructor(...e) {
    super(...e), b(this, "actions", {
      MEDIA_ENGINE_CONNECTION_STATS: this.handleStats,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    })
  }
}
let C = new T