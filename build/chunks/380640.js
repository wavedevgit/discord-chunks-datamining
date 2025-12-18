/** Chunk was on 77069 **/
/** chunk id: 380640, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  M: () => S
});
var Chunk915009 = require("./915009.js"),
  Chunk509613 = require("./509613.js"),
  Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.qs)(Chunk313789.n.DATA_USAGE_QUESTS_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.sJYh5t),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t.cf9mvV, {
    helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_PRIVACY_CONTROLS)
  }),
  useValue: function() {
    return !Chunk695346.bh.useSetting()
  },
  setValue: function(t) {
    u.bh.updateSetting(!t)
  },
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.VkS7Yd)],
  useDisabled: Chunk915009.LN
})