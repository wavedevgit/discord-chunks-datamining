/** Chunk was on 66866 **/
/** chunk id: 265299, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk670081 = require("./670081.js"),
  Chunk481060 = require("./481060.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk530691 = require("./530691.js"),
  Chunk37303 = require("./37303.jsx"),
  Chunk722334 = require("./722334.jsx"),
  Chunk683650 = require("./683650.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk506207 = require("./506207.js");

function g(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    excludedQuests: g,
    isFetchingCurrentQuests: h
  } = (0, s.J2)({
    fetchPolicy: "cache-or-network",
    callerSource: "embed"
  }), b = i.useMemo(() => n.find(e => e.id === t), [t, n]), E = i.useMemo(() => g.find(e => e.id === t), [t, g]), C = i.useMemo(() => (null == b ? true : b.config.features.includes(l.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === true, [null == b ? true : b.config.features]);
  if (h) return (0, r.jsx)(a.$jN, {
    className: _.spinner
  });
  if (null != E) return (0, r.jsx)(p.W, {
    questId: t
  });
  if (null == b) return (0, r.jsx)(m.o, {
    questId: t,
    reason: m.X.NOT_FOUND
  });
  if ((0, o.HJ)(b)) {
    let {
      enabled: e
    } = u.S.getCurrentConfig({
      location: f.dr.EMBED_DESKTOP
    }, {
      autoTrackExposure: C
    });
    if (!C || !e) return (0, r.jsx)(m.o, {
      questId: t,
      reason: m.X.MOBILE_ONLY
    })
  }
  return (0, r.jsx)(d.Z, {
    quest: b,
    location: c.jn.QUESTS_EMBED,
    sourceQuestContent: c.jn.QUESTS_EMBED
  }, b.id)
}