/** Chunk was on 74732 **/
/** chunk id: 328171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_animated_faces",
  label: "AV survey animated faces",
  defaultConfig: {
    surveyEmojiKind: "face"
  },
  treatments: [{
    id: 1,
    label: "Show animated faces in AV survey",
    config: {
      surveyEmojiKind: "animated-face"
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.L.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return l.useExperiment({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}