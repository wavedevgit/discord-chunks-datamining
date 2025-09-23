/** Chunk was on 96888 **/
/** chunk id: 328171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => r
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js");
let i = (0, Chunk818083.B)({
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

function r(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: a
  } = l.L.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i.useExperiment({
    location: t
  }, {
    disable: a,
    autoTrackExposure: n
  })
}