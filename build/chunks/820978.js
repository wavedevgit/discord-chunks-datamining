/** Chunk was on 9452 **/
/** chunk id: 820978, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk39604 = require("./39604.js"),
  Chunk441167 = require("./441167.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.qs)(Chunk313789.n.CLIPS_VIEWER_CLIPS_ENABLED, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.NWw7kY),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["0vjy8N"]),
  useValue: () => (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().viewerClipsEnabled),
  usePredicate: () => {
    let {
      enableViewerClipping: t
    } = Chunk441167.Z.useExperiment({
      location: "Clips Settings"
    }, {
      autoTrackExposure: false
    }), e = (0, Chunk779618.Z)(Chunk131951.Z);
    return module && exports
  },
  setValue: t => r.yl({
    enabled: t,
    trackAnalytics: true
  })
})