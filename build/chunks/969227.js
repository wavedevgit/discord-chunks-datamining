/** Chunk was on 75909 **/
/** chunk id: 969227, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk100527 = require("./100527.js"),
  Chunk335131 = require("./335131.js"),
  Chunk115179 = require("./115179.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk215023 = require("./215023.js");

function c(e) {
  var t;
  let {
    quest: n,
    questContent: c,
    sourceQuestContent: u,
    onCloseModal: d,
    shouldShowShopIfAlreadyClaimed: m
  } = e, f = (0, a.hf)({
    quest: n,
    questContent: c,
    sourceQuestContent: u
  });
  return r.useCallback(e => {
    var t;
    (0, i.xN)(n.config) && (null == (t = n.userStatus) ? true : t.claimedAt) != null && m ? (null == d || d(e), (0, l.mK)({
      tab: s.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: o.Z.QUEST_HOME_PAGE
    })) : ((0, i.Bg)(n.config) && (null == d || d(e)), f())
  }, [n.config, null == (t = n.userStatus) ? true : t.claimedAt, f, m, d])
}