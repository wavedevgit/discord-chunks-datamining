/** Chunk was on 66866 **/
/** chunk id: 265299, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk37303 = require("./37303.jsx"),
  Chunk722334 = require("./722334.jsx"),
  Chunk683650 = require("./683650.jsx"),
  Chunk506207 = require("./506207.js");

function m(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    excludedQuests: m,
    isFetchingCurrentQuests: f
  } = (0, o.J2)({
    fetchPolicy: "cache-or-network",
    callerSource: "embed"
  }), _ = i.useMemo(() => n.find(e => e.id === t), [t, n]), g = i.useMemo(() => m.find(e => e.id === t), [t, m]);
  return f ? (0, r.jsx)(l.$jN, {
    className: p.spinner
  }) : null != g ? (0, r.jsx)(u.W, {
    questId: t
  }) : null == _ ? (0, r.jsx)(d.o, {
    questId: t,
    reason: d.X.NOT_FOUND
  }) : (0, a.HJ)(_) ? (0, r.jsx)(d.o, {
    questId: t,
    reason: d.X.MOBILE_ONLY
  }) : (0, r.jsx)(c.Z, {
    quest: _,
    location: s.jn.QUESTS_EMBED,
    sourceQuestContent: s.jn.QUESTS_EMBED
  }, _.id)
}