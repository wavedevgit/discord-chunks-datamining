/** Chunk was on 77069 **/
/** chunk id: 380640, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  M: () => T
});
var Chunk915009 = require("./915009.js"),
  Chunk509613 = require("./509613.js"),
  Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.DATA_USAGE_QUESTS_SETTING, {
  useTitle: () => o.intl.string(o.t.sJYh5t),
  useSubtitle: () => o.intl.format(o.t.cf9mvV, {
    helpdeskArticle: s.Z.getArticleURL(a.BhN.QUESTS_PRIVACY_CONTROLS)
  }),
  useValue: function() {
    return !u.bh.useSetting()
  },
  setValue: function(t) {
    u.bh.updateSetting(!t)
  },
  useSearchTerms: () => [o.intl.string(o.t.VkS7Yd)],
  useDisabled: Chunk915009.LN
})