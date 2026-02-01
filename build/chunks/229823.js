/** Chunk was on 30485 **/
/** chunk id: 229823, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  j: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk753070 = require("./753070.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.Hn)(Chunk780964.X.CLIPS_RESOLUTION, {
  useTitle: () => o.intl.string(o.t.aFudZJ),
  useSubtitle: () => o.intl.string(o.t.nIrkW5),
  useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipsQuality.resolution),
  setValue: t => {
    let {
      clipsQuality: e
    } = l.A.getSettings();
    s.GS({
      resolution: t,
      frameRate: e.frameRate
    })
  },
  useOptions: () => [{
    id: "480p",
    value: a.on.RESOLUTION_480,
    label: o.intl.formatToPlainString(o.t.TEOC0I, {
      resolution: a.on.RESOLUTION_480
    })
  }, {
    id: "720p",
    value: a.on.RESOLUTION_720,
    label: o.intl.formatToPlainString(o.t.TEOC0I, {
      resolution: a.on.RESOLUTION_720
    })
  }, {
    id: "1080p",
    value: a.on.RESOLUTION_1080,
    label: o.intl.formatToPlainString(o.t.TEOC0I, {
      resolution: a.on.RESOLUTION_1080
    })
  }, {
    id: "1440p",
    value: a.on.RESOLUTION_1440,
    label: o.intl.formatToPlainString(o.t.TEOC0I, {
      resolution: a.on.RESOLUTION_1440
    })
  }, {
    id: "source",
    value: a.on.RESOLUTION_SOURCE,
    label: o.intl.string(o.t.XjXqzh)
  }],
  fieldLayout: "horizontal-responsive"
})