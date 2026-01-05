/** Chunk was on 77069 **/
/** chunk id: 287454, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  G: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.Em)(Chunk313789.n.CLIPS_RESOLUTION, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.aFudZJ),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.nIrkW5),
  useValue: () => (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().clipsQuality.resolution),
  setValue: t => {
    let {
      clipsQuality: e
    } = l.Z.getSettings();
    s.yi({
      resolution: t,
      frameRate: e.frameRate
    })
  },
  useOptions: () => [{
    id: "480p",
    value: Chunk37113.LY.RESOLUTION_480,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
      resolution: Chunk37113.LY.RESOLUTION_480
    })
  }, {
    id: "720p",
    value: Chunk37113.LY.RESOLUTION_720,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
      resolution: Chunk37113.LY.RESOLUTION_720
    })
  }, {
    id: "1080p",
    value: Chunk37113.LY.RESOLUTION_1080,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
      resolution: Chunk37113.LY.RESOLUTION_1080
    })
  }, {
    id: "1440p",
    value: Chunk37113.LY.RESOLUTION_1440,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
      resolution: Chunk37113.LY.RESOLUTION_1440
    })
  }, {
    id: "source",
    value: Chunk37113.LY.RESOLUTION_SOURCE,
    label: Chunk388032.intl.string(Chunk388032.t.XjXqzh)
  }]
})