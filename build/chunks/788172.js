/** Chunk was on 30485 **/
/** chunk id: 788172, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  m: () => d
});
var Chunk171316 = require("./171316.js"),
  Chunk419954 = require("./419954.js"),
  Chunk975571 = require("./975571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.DATA_USAGE_QUESTS_3P_SETTING, {
  useTitle: () => o.intl.string(o.t.CyLYKZ),
  useSubtitle: () => o.intl.format(o.t["2QFDU/"], {
    helpdeskArticle: s.A.getArticleURL(a.MVz.QUESTS_PRIVACY_CONTROLS)
  }),
  useValue: function() {
    return !r.vf.useSetting()
  },
  setValue: function(t) {
    r.vf.updateSetting(!t)
  },
  useDisabled: function() {
    let t = r.H1.useSetting(),
      e = (0, n.uM)();
    return t || e
  },
  useSearchTerms: () => [o.intl.string(o.t.CyLYKZ)]
})