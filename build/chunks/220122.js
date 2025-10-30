/** Chunk was on web.js **/
/** chunk id: 220122, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js"),
  Chunk199902 = require("./199902.js"),
  Chunk131951 = require("./131951.js"),
  Chunk924557 = require("./924557.js"),
  Chunk474639 = require("./474639.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk39604 = require("./39604.js");
require("./460779.js");
var Chunk356659 = require("./356659.js"),
  Chunk388032 = require("./388032.jsx");
let h = "CLIPS_IN_CALL_WARNING";
class m extends Chunk474639.Z {
  showClipsToast() {
    (0, Chunk481060.showToast)({
      id: h,
      message: Chunk388032.intl.string(Chunk388032.t["d+41qJ"]),
      type: Chunk481060.ToastType.CLIP,
      options: {
        duration: Chunk356659.G$
      }
    })
  }
  applyNativeClipsSettings(e) {
    if (!(0, d.Z)(s.Z)) return;
    let t = (0, l.ln)(),
      n = u.Z.getSettings(),
      r = (n.clipsEnabled || n.decoupledClipsEnabled) && t,
      i = s.Z.getMediaEngine();
    if (i.setClipBufferLength(r ? n.clipsLength / 1e3 : 0), (null == e ? true : e.settings.decoupledClipsEnabled) === true && this.fireClipsInitEvent(), null == e || (null == e ? true : e.settings.clipsQuality) != null) {
      let {
        frameRate: t,
        resolution: r
      } = n.clipsQuality, a = r <= 480 ? r / 3 * 4 : r / 9 * 16, o = r;
      i.setClipsQualitySettings(a, o, t) || null == e || this.fireClipsInitEvent()
    }
  }
  handleClipsInitOnToggleDetection(e) {
    let t = a.ZP.getVisibleGame();
    null != t && t.id === e.game.id && this.fireClipsInitEvent()
  }
  handleClipsInitOnGamesChange(e) {
    let t = a.ZP.getVisibleGame();
    null != t && (e.added.find(e => e.pid === t.pid) ? setTimeout(() => this.fireClipsInitEvent(), _.jp) : this.fireClipsInitEvent())
  }
  fireClipsInitEvent() {
    if (!(0, Chunk779618.Z)(Chunk131951.Z)) return;
    let e = (0, Chunk924557.ln)(),
      t = Chunk435064.Z.getSettings();
    if (!(exports.clipsEnabled && module) || null != Chunk199902.Z.getCurrentUserActiveStream()) return;
    let n = Chunk594190.ZP.getVisibleGame();
    (null == require ? true : require.pid) != null && (null == require ? true : require.windowHandle) != null && null != require.name && "" !== require.name && Chunk570140.Z.dispatch({
      type: "CLIPS_INIT",
      sourceId: "window:".concat(null == require ? true : require.windowHandle),
      applicationName: require.name,
      quality: exports.clipsQuality
    })
  }
  disableClips() {
    Chunk39604.em({
      clipsEnabled: false,
      trackAnalytics: false
    })
  }
  loadClipsFromStorage() {
    let e = Chunk435064.Z.getSettings().storageLocation;
    "" !== module && Chunk39604.jv(module).catch(e => {
      _.jF.error("Failed to load clips directory on connection open", e)
    })
  }
}
let g = new m