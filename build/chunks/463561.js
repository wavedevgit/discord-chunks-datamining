/** Chunk was on 9452 **/
/** chunk id: 463561, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk442837 = require("./442837.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.Em)(Chunk313789.n.CLIPS_RESOLUTION, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.aFudZJ),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.nIrkW5),
  useValue: () => (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().clipsQuality.resolution),
  useOptions: () => [{
    value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_480,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
      resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_480
    })
  }, {
    value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_720,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
      resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_720
    })
  }, {
    value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1080,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
      resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1080
    })
  }, {
    value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1440,
    label: Chunk388032.intl.formatToPlainString(Chunk388032.t.TEOC0I, {
      resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1440
    })
  }, {
    value: Chunk37113.ApplicationStreamResolutions.RESOLUTION_SOURCE,
    label: Chunk388032.intl.string(Chunk388032.t.XjXqzh)
  }],
  usePredicate: Chunk924557.w9,
  setValue: t => {
    let {
      clipsQuality: e
    } = u.Z.getSettings();
    r.yi({
      resolution: t,
      frameRate: e.frameRate
    })
  }
})