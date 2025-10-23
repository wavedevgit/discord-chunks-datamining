/** Chunk was on web.js **/
/** chunk id: 265299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk670081 = require("./670081.js"),
  Chunk481060 = require("./481060.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk37303 = require("./37303.jsx"),
  Chunk722334 = require("./722334.jsx"),
  Chunk683650 = require("./683650.jsx"),
  Chunk864306 = require("./864306.jsx"),
  Chunk506207 = require("./506207.js");

function h(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    excludedQuests: h,
    isFetchingCurrentQuests: m
  } = (0, l.J2)({
    fetchPolicy: "cache-or-network",
    callerSource: "embed"
  }), g = i.useMemo(() => n.find(e => e.id === t), [t, n]), E = i.useMemo(() => h.find(e => e.id === t), [t, h]), b = i.useMemo(() => (null == g ? true : g.config.features.includes(a.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === true, [null == g ? true : g.config.features]);
  return m ? (0, r.jsx)(o.$jN, {
    className: p.spinner
  }) : null != E ? (0, r.jsx)(d.W, {
    questId: t
  }) : null == g ? (0, r.jsx)(f.o, {
    questId: t,
    reason: f.X.NOT_FOUND
  }) : (0, s.HJ)(g) && !b ? (0, r.jsx)(f.o, {
    questId: t,
    reason: f.X.MOBILE_ONLY
  }) : (0, s.vB)(g.config) ? (0, r.jsx)(u.Z, {
    quest: g,
    location: c.jn.QUESTS_EMBED,
    sourceQuestContent: c.jn.QUESTS_EMBED
  }, g.id) : (0, r.jsx)(_.J, {
    questId: t
  })
}