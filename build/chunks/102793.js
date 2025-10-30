/** Chunk was on 13873 **/
/** chunk id: 102793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk722733 = require("./722733.js"),
  Chunk633289 = require("./633289.js"),
  Chunk751823 = require("./751823.js");
let o = (0, Chunk722733.Z)({
  kind: "user",
  name: "2025-10-go-live-zoom-pan",
  defaultConfig: {
    allowGoLiveZoomPan: false
  },
  variations: {
    1: {
      allowGoLiveZoomPan: true
    }
  }
});

function s(e) {
  let {
    location: t
  } = e;
  return (0, r.e7)([l.Z], () => (function(e) {
    let {
      location: t
    } = e, {
      isInHoldout: n
    } = a.L.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: true
    });
    return n ? o.definition.defaultConfig : o.getConfig({
      location: t
    })
  })({
    location: t
  }))
}