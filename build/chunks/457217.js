/** Chunk was on 9452 **/
/** chunk id: 457217, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.Em)(Chunk313789.n.CLIPS_FRAME_RATE, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["2wScL1"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["Rf9+fy"]),
  useValue: () => (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().clipsQuality.frameRate),
  useOptions: () => [{
    value: Chunk37113.ApplicationStreamFPS.FPS_15,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XH, {
      fps: Chunk37113.ApplicationStreamFPS.FPS_15
    })
  }, {
    value: Chunk37113.ApplicationStreamFPS.FPS_30,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XH, {
      fps: Chunk37113.ApplicationStreamFPS.FPS_30
    })
  }, {
    value: Chunk37113.ApplicationStreamFPS.FPS_60,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.Qb44XH, {
      fps: Chunk37113.ApplicationStreamFPS.FPS_60
    })
  }],
  usePredicate: Chunk924557.w9,
  setValue: t => {
    let {
      clipsQuality: e
    } = r.Z.getSettings();
    u.yi({
      resolution: e.resolution,
      frameRate: t
    })
  }
})