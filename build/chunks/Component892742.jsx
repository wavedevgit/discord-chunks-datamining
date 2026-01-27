/** Chunk was on 92917 **/
/** chunk id: 892742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk710969 = require("./710969.js"),
  Chunk814793 = require("./814793.js"),
  Chunk338404 = require("./338404.jsx"),
  Chunk127219 = require("./127219.jsx"),
  Chunk636658 = require("./636658.jsx"),
  Chunk438038 = require("./438038.jsx"),
  Chunk986588 = require("./986588.js");

function g(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    excludedQuests: g,
    isFetchingCurrentQuests: h
  } = (0, s.mL)({
    fetchPolicy: "cache-or-network",
    callerSource: "embed"
  }), _ = i.useMemo(() => (0, o.vc)(t, n, g), [t, n, g]), b = i.useMemo(() => g.find(e => e.id === t), [t, g]);
  return h ? (0, r.jsx)(l.y$y, {
    className: f.u
  }) : null == _ ? null != b ? (0, r.jsx)(u.g, {
    questId: t
  }) : (0, r.jsx)(d.l, {
    questId: t,
    reason: d.o.NOT_FOUND
  }) : (0, c.E0)(_.config) ? (0, r.jsx)(m.R, {
    quest: _,
    location: a.uF.QUESTS_EMBED,
    sourceQuestContent: a.uF.QUESTS_EMBED
  }, _.id) : (0, r.jsx)(p.S, {
    questId: t
  })
}