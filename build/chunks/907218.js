/** Chunk was on 30485 **/
/** chunk id: 907218, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  k: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk753070 = require("./753070.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.Hn)(Chunk780964.X.CLIPS_FRAME_RATE, {
  useTitle: () => o.intl.string(o.t["2wScL1"]),
  useSubtitle: () => o.intl.string(o.t["Rf9+fy"]),
  useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipsQuality.frameRate),
  setValue: t => {
    let {
      clipsQuality: e
    } = l.A.getSettings();
    s.GS({
      resolution: e.resolution,
      frameRate: t
    })
  },
  useOptions: () => [{
    id: "15",
    value: a.kn.FPS_15,
    label: o.intl.formatToPlainString(o.t.Qb44XH, {
      fps: a.kn.FPS_15
    })
  }, {
    id: "30",
    value: a.kn.FPS_30,
    label: o.intl.formatToPlainString(o.t.Qb44XH, {
      fps: a.kn.FPS_30
    })
  }, {
    id: "60",
    value: a.kn.FPS_60,
    label: o.intl.formatToPlainString(o.t.Qb44XH, {
      fps: a.kn.FPS_60
    })
  }],
  fieldLayout: "horizontal-responsive"
})