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
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.CyLYKZ),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t["2QFDU/"], {
    helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUESTS_PRIVACY_CONTROLS)
  }),
  useValue: function() {
    return !Chunk695346.JT.useSetting()
  },
  setValue: function(t) {
    u.JT.updateSetting(!t)
  },
  useDisabled: function() {
    let t = Chunk695346.bh.useSetting(),
      e = (0, Chunk915009.LN)();
    return module || exports
  },
  useDisabledMessage: function() {
    if (Chunk695346.bh.useSetting()) {
      let t = Chunk388032.intl.string(Chunk388032.t.sJYh5t);
      return Chunk388032.intl.format(Chunk388032.t.W2Vg7a, {
        settingTitle: module
      })
    }
  },
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.CyLYKZ)]
})