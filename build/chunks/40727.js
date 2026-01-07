/** Chunk was on 77069 **/
/** chunk id: 40727, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  N: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.Em)(Chunk313789.n.CLIPS_FRAME_RATE, {
  useTitle: () => o.intl.string(o.t["2wScL1"]),
  useSubtitle: () => o.intl.string(o.t["Rf9+fy"]),
  useValue: () => (0, i.e7)([l.Z], () => l.Z.getSettings().clipsQuality.frameRate),
  setValue: t => {
    let {
      clipsQuality: e
    } = l.Z.getSettings();
    s.yi({
      resolution: e.resolution,
      frameRate: t
    })
  },
  useOptions: () => [{
    id: "15",
    value: a.ws.FPS_15,
    label: o.intl.formatToPlainString(o.t.Qb44XH, {
      fps: a.ws.FPS_15
    })
  }, {
    id: "30",
    value: a.ws.FPS_30,
    label: o.intl.formatToPlainString(o.t.Qb44XH, {
      fps: a.ws.FPS_30
    })
  }, {
    id: "60",
    value: a.ws.FPS_60,
    label: o.intl.formatToPlainString(o.t.Qb44XH, {
      fps: a.ws.FPS_60
    })
  }]
})