/** Chunk was on 77069 **/
/** chunk id: 625944, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => T
});
var Chunk915009 = require("./915009.js"),
  Chunk509613 = require("./509613.js"),
  Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.DATA_USAGE_QUESTS_3P_SETTING, {
  useTitle: () => o.intl.string(o.t.CyLYKZ),
  useSubtitle: () => o.intl.format(o.t["2QFDU/"], {
    helpdeskArticle: s.Z.getArticleURL(a.BhN.QUESTS_PRIVACY_CONTROLS)
  }),
  useValue: function() {
    return !u.JT.useSetting()
  },
  setValue: function(t) {
    u.JT.updateSetting(!t)
  },
  useDisabled: function() {
    let t = u.bh.useSetting(),
      e = (0, i.LN)();
    return t || e
  },
  useDisabledMessage: function() {
    if (u.bh.useSetting()) {
      let t = o.intl.string(o.t.sJYh5t);
      return o.intl.format(o.t.W2Vg7a, {
        settingTitle: t
      })
    }
  },
  useSearchTerms: () => [o.intl.string(o.t.CyLYKZ)]
})