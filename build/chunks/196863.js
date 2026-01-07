/** Chunk was on 77069 **/
/** chunk id: 196863, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  I: () => E
});
var Chunk442837 = require("./442837.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk39604 = require("./39604.js"),
  Chunk441167 = require("./441167.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.qs)(Chunk313789.n.CLIPS_VIEWERSIDE_CLIPS_SETTING, {
  useTitle: () => c.intl.string(c.t.NWw7kY),
  useSubtitle: () => c.intl.string(c.t["0vjy8N"]),
  useValue: function() {
    return (0, i.e7)([l.Z], () => l.Z.getSettings().viewerClipsEnabled)
  },
  setValue: t => u.yl({
    enabled: t,
    trackAnalytics: true
  }),
  usePredicate: function() {
    let t = (0, S.BK)("DataAndPrivacyPanel"),
      {
        enableViewerClipping: e
      } = r.Z.useExperiment({
        location: "Data & Privacy"
      }, {
        autoTrackExposure: false
      }),
      n = (0, i.e7)([o.Z], () => (0, s.Z)(o.Z));
    return t && e && n
  }
})