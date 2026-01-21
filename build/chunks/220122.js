/** Chunk was on web.js **/
/** chunk id: 220122, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js"),
  Chunk199902 = require("./199902.js"),
  Chunk131951 = require("./131951.js"),
  Chunk474639 = require("./474639.js"),
  Chunk725547 = require("./725547.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk341569 = require("./341569.js"),
  Chunk39604 = require("./39604.js");
require("./600349.js");
var Chunk356659 = require("./356659.js"),
  Chunk388032 = require("./388032.jsx");
let m = "CLIPS_IN_CALL_WARNING";
class g extends Chunk474639.Z {
  showClipsToast() {
    (0, r.showToast)({
      id: m,
      message: h.intl.string(h.t["d+41qJ"]),
      type: r.ToastType.CLIP,
      options: {
        duration: _.G$
      }
    })
  }
  applyNativeClipsSettings(e) {
    if (!(0, d.Z)(s.Z)) return;
    let t = u.Z.getSettings(),
      n = (0, f.LI)(),
      r = s.Z.getMediaEngine();
    if (r.setClipBufferLength(n ? t.clipsLength / 1e3 : 0), r.setClipsMaxPendingTasks(c.Z.getConfig({
        location: "applyNativeClipsSettings"
      }).count), (null == e ? true : e.settings.decoupledClipsEnabled) === true && this.fireClipsInitEvent(), null == e || (null == e ? true : e.settings.clipsQuality) != null) {
      let {
        frameRate: n,
        resolution: i
      } = t.clipsQuality, a = i <= 480 ? i / 3 * 4 : i / 9 * 16, o = i;
      r.setClipsQualitySettings(a, o, n) || null == e || this.fireClipsInitEvent()
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
    if (!(0, f.LI)() || null != o.Z.getCurrentUserActiveStream()) return;
    let e = a.ZP.getVisibleGame();
    if ((null == e ? true : e.pid) == null || (null == e ? true : e.windowHandle) == null || null == e.name || "" === e.name) return;
    let t = u.Z.getSettings();
    i.Z.dispatch({
      type: "CLIPS_INIT",
      sourceId: "window:".concat(null == e ? true : e.windowHandle),
      applicationName: e.name,
      quality: t.clipsQuality
    })
  }
  loadClipsFromStorage() {
    let e = u.Z.getSettings().storageLocation;
    "" !== e && p.jv(e).catch(e => {
      _.jF.error("Failed to load clips directory on connection open", e)
    })
  }
}
let E = new g