/** Chunk was on 23628 **/
/** chunk id: 793683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk793574 = require("./793574.js"),
  Chunk979286 = require("./979286.js"),
  Chunk92246 = require("./92246.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk758836 = require("./758836.js");

function c(e) {
  var t;
  let {
    quest: n,
    questContent: c,
    sourceQuestContent: u,
    onCloseModal: d,
    shouldShowShopIfAlreadyClaimed: f
  } = e, m = (0, s.ix)({
    quest: n,
    questContent: c,
    sourceQuestContent: u
  });
  return r.useCallback(e => {
    var t;
    (0, i.ks)(n.config) && (null == (t = n.userStatus) ? true : t.claimedAt) != null && f ? (null == d || d(e), (0, o.Cz)({
      tab: a.G2.ORBS,
      analyticsLocations: [],
      analyticsSource: l.A.QUEST_HOME_PAGE
    })) : ((0, i.K9)(n.config) && (null == d || d(e)), m())
  }, [n.config, null == (t = n.userStatus) ? true : t.claimedAt, m, f, d])
}