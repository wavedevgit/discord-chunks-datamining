/** Chunk was on 4670 **/
/** chunk id: 789643, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  X: () => d
});
var Chunk171316 = require("./171316.js"),
  Chunk419954 = require("./419954.js"),
  Chunk975571 = require("./975571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.DATA_USAGE_QUESTS_SETTING, {
  useTitle: () => o.intl.string(o.t.sJYh5t),
  useSubtitle: () => o.intl.format(o.t.cf9mvV, {
    helpdeskArticle: s.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS)
  }),
  useValue: function() {
    return !r.H1.useSetting()
  },
  setValue: function(e) {
    r.H1.updateSetting(!e)
  },
  useSearchTerms: () => [o.intl.string(o.t.VkS7Yd)],
  useDisabled: Chunk171316.uM
})