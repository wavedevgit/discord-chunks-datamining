/** Chunk was on 77069 **/
/** chunk id: 97951, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk63063 = require("./63063.js"),
  Chunk313789 = require("./313789.js"),
  Chunk823087 = require("./823087.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");
let S = "".concat(Chunk63063.Z.getArticleURL(Chunk981631.BhN.VOICE_VIDEO_TROUBLESHOOTING), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm"),
  E = (0, Chunk509613.ON)(Chunk313789.n.VOICE_MICROPHONE_TEST_SETTING, {
    useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.nuFtHH)],
    usePredicate: function() {
      return (0, Chunk399606.e7)([Chunk131951.Z], () => Chunk131951.Z.supports(Chunk65154.AN.LOOPBACK))
    },
    Component: function() {
      return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk823087.Z, {}), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: Chunk388032.intl.format(Chunk388032.t["V+B3FH"], {
            guideURL: S
          })
        })]
      })
    }
  })