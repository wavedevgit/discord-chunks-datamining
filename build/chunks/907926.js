/** Chunk was on web.js **/
/** chunk id: 907926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk118356 = require("./118356.js"),
  Chunk205693 = require("./205693.js"),
  Chunk827343 = require("./827343.js"),
  Chunk439372 = require("./439372.js"),
  Chunk624694 = require("./624694.js"),
  Chunk929921 = require("./929921.js"),
  Chunk616356 = require("./616356.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk162605 = require("./162605.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk258585 = require("./258585.js"),
  Chunk652896 = require("./652896.js"),
  Chunk476697 = require("./476697.js"),
  Chunk753070 = require("./753070.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = 10,
  O = 20,
  v = 10,
  A = new Chunk118356.Vy("AutoQualityStreamingManager"),
  I = 0;
class S extends Chunk439372.A {
  handleStats() {
    var e, t, n, r;
    if ((I += 1) % v != 0) return;
    let s = c.A.getCurrentUserActiveStream();
    if (null == s) return;
    let h = f.A.getRTCConnection((0, m._z)(s)),
      y = d.A.getGoLiveSource();
    if (null == h || null == y || !h.hasActiveRemoteWants()) return;
    let S = l.A.getState();
    if (S.preset !== E.jQ.PRESET_AUTO) return;
    if ((null == (r = c.A.getStreamerActiveStreamMetadata()) ? true : r.id) != null) return void A.info("Skipping auto quality checker for game stream.");
    let T = o.A.getAccumulatedPerformanceStats(h.getMediaEngineConnectionId(), s.ownerId, "long"),
      C = (null != (e = h.analyticsContext.getDuration()) ? e : 30) >= 30 * _.A.Millis.SECOND ? 30 : 15;
    if (null == T || T.numDatapoints < C) return;
    let N = p.default.getCurrentUser(),
      w = u.A.getGuild(s.guildId),
      [R, P] = null != (t = (0, g.A)(E.jQ.PRESET_DOCUMENTS, N, null == w ? true : w.premiumTier)) ? t : [E.on.RESOLUTION_SOURCE, E.kn.FPS_5],
      [D, x] = null != (n = (0, g.A)(E.jQ.PRESET_VIDEO, N, null == w ? true : w.premiumTier)) ? n : [E.on.RESOLUTION_720, E.kn.FPS_30],
      L = null;
    if (T.entropy < b && (S.resolution !== R || S.fps !== P) ? (A.info("Low entropy average, switching to screenshare preset."), L = {
        qualityOptions: {
          preset: E.jQ.PRESET_AUTO,
          resolution: R,
          frameRate: P
        },
        context: i.x.STREAM
      }) : T.entropy > O && (S.resolution !== D || S.fps !== x) && (A.info("High entropy average, switching to video preset."), L = {
        qualityOptions: {
          preset: E.jQ.PRESET_AUTO,
          resolution: D,
          frameRate: x
        },
        context: i.x.STREAM
      }), null != L) {
      if (null != y.desktopSource) L.desktopSettings = {
        sourceId: y.desktopSource.id,
        sound: S.soundshareEnabled
      };
      else {
        if (null == y.cameraSource) return;
        L.cameraSettings = {
          videoDeviceGuid: y.cameraSource.videoDeviceGuid,
          audioDeviceGuid: y.cameraSource.audioDeviceGuid
        }
      }
      h.autoQualityChange(), a.A.setGoLiveSource(L)
    }
  }
  handlePostConnectionOpen() {
    (0, h.pn)()
  }
  constructor(...e) {
    super(...e), y(this, "actions", {
      MEDIA_ENGINE_CONNECTION_STATS: this.handleStats,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    })
  }
}
let T = new S