/** Chunk was on web.js **/
/** chunk id: 13139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk15285 = require("./15285.js"),
  Chunk616356 = require("./616356.js"),
  Chunk430452 = require("./430452.js"),
  Chunk431767 = require("./431767.js"),
  Chunk366598 = require("./366598.js"),
  Chunk647785 = require("./647785.js"),
  Chunk274372 = require("./274372.js"),
  Chunk915618 = require("./915618.js"),
  Chunk572164 = require("./572164.js"),
  Chunk399925 = require("./399925.js");
require("./63389.js");
var Chunk696016 = require("./696016.js"),
  Chunk985018 = require("./985018.jsx");
let g = "CLIPS_IN_CALL_WARNING";
class E extends Chunk366598.A {
  showClipsToast() {
    (0, r.showToast)({
      id: g,
      message: m.intl.string(m.t["d+41qJ"]),
      type: r.ToastType.CLIP,
      options: {
        duration: h.Vi
      }
    })
  }
  applyNativeClipsSettings(e) {
    if (!(0, f.A)(s.A)) return;
    let t = d.A.getSettings(),
      n = (0, p.TD)(),
      r = s.A.getMediaEngine();
    if (r.setClipBufferLength(n ? t.clipsLength / 1e3 : 0), r.setClipsMaxPendingTasks(u.A.getConfig({
        location: "applyNativeClipsSettings"
      }).count), r.setClipsBufferSize(l.A.getConfig({
        location: "applyNativeClipsSettings"
      }).size), (null == e ? true : e.settings.decoupledClipsEnabled) === true && this.fireClipsInitEvent(), null == e || (null == e ? true : e.settings.clipsQuality) != null) {
      let {
        frameRate: n,
        resolution: i
      } = t.clipsQuality, a = i <= 480 ? i / 3 * 4 : i / 9 * 16, o = i;
      r.setClipsQualitySettings(a, o, n) || null == e || this.fireClipsInitEvent()
    }
  }
  handleClipsInitOnToggleDetection(e) {
    let t = a.Ay.getVisibleGame();
    null != t && t.id === e.game.id && this.fireClipsInitEvent()
  }
  handleClipsInitOnGamesChange(e) {
    let t = a.Ay.getVisibleGame();
    null == t || (e.added.find(e => e.pid === t.pid) ? setTimeout(() => this.fireClipsInitEvent(), h.dV) : this.fireClipsInitEvent())
  }
  fireClipsInitEvent() {
    if (!(0, p.TD)() || null != o.A.getCurrentUserActiveStream()) return;
    let e = a.Ay.getVisibleGame();
    if ((null == e ? true : e.pid) == null || (null == e ? true : e.windowHandle) == null || null == e.name || "" === e.name) return;
    let t = d.A.getSettings();
    i.h.dispatch({
      type: "CLIPS_INIT",
      sourceId: "window:".concat(null == e ? true : e.windowHandle),
      applicationName: e.name,
      quality: t.clipsQuality
    })
  }
  loadClipsFromStorage() {
    let e = d.A.getSettings().storageLocation;
    "" !== e && _.Fb(e).catch(e => {
      h.nx.error("Failed to load clips directory on connection open", e)
    })
  }
}
let y = new E