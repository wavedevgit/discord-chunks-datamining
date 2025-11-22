/** Chunk was on web.js **/
/** chunk id: 430711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk670081 = require("./670081.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313481 = require("./313481.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk645997 = require("./645997.jsx"),
  Chunk429999 = require("./429999.jsx"),
  Chunk864306 = require("./864306.jsx"),
  Chunk752367 = require("./752367.jsx"),
  Chunk312898 = require("./312898.js");

function h(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    excludedQuests: h,
    isFetchingCurrentQuests: m
  } = (0, s.J2)({
    fetchPolicy: "cache-or-network",
    callerSource: "embed"
  }), g = i.useMemo(() => (0, c._x)(t, n, h), [t, n, h]), E = i.useMemo(() => h.find(e => e.id === t), [t, h]), b = i.useMemo(() => (null == g ? true : g.config.features.includes(a.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === true, [null == g ? true : g.config.features]);
  return m ? (0, r.jsx)(o.$jN, {
    className: p.spinner
  }) : null == g ? null != E ? (0, r.jsx)(u.q, {
    questId: t
  }) : (0, r.jsx)(d.W, {
    questId: t,
    reason: d.X.NOT_FOUND
  }) : (0, c.HJ)(g) && !b ? (0, r.jsx)(d.W, {
    questId: t,
    reason: d.X.MOBILE_ONLY
  }) : (0, c.vB)(g.config) ? (0, r.jsx)(_.X, {
    quest: g,
    location: l.jn.QUESTS_EMBED,
    sourceQuestContent: l.jn.QUESTS_EMBED
  }, g.id) : (0, r.jsx)(f.J, {
    questId: t
  })
}