/** Chunk was on 77069 **/
/** chunk id: 388404, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $: () => S
});
var Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk208049 = require("./208049.js"),
  Chunk242291 = require("./242291.js"),
  Chunk63063 = require("./63063.js"),
  Chunk36703 = require("./36703.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.UO)(Chunk313789.n.SOUNDBOARD_VOLUME_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.kbFsAD),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t.BPbGq7, {
    helpCenterArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SOUNDBOARD)
  }),
  setValue: function(t) {
    let e = [i.Z.USER_SETTINGS_VOICE_AND_VIDEO],
      n = (0, a.A)(t);
    (0, s.xz)(n, e)
  },
  minValue: 0,
  maxValue: 100,
  getInitialValue: function() {
    let t = (0, Chunk242291.pI)();
    return (0, Chunk36703.P)(module)
  },
  onValueRender: function(t) {
    return "".concat(t.toFixed(0), "%")
  }
})