/** Chunk was on 4670 **/
/** chunk id: 907218, original params: e,t,i (module,exports,require) **/
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
  setValue: e => {
    let {
      clipsQuality: t
    } = l.A.getSettings();
    s.GS({
      resolution: t.resolution,
      frameRate: e
    })
  },
  useOptions: () => [{
    id: "15",
    value: u.kn.FPS_15,
    label: o.intl.formatToPlainString(o.t.Qb44XH, {
      fps: u.kn.FPS_15
    })
  }, {
    id: "30",
    value: u.kn.FPS_30,
    label: o.intl.formatToPlainString(o.t.Qb44XH, {
      fps: u.kn.FPS_30
    })
  }, {
    id: "60",
    value: u.kn.FPS_60,
    label: o.intl.formatToPlainString(o.t.Qb44XH, {
      fps: u.kn.FPS_60
    })
  }],
  fieldLayout: "horizontal-responsive"
})