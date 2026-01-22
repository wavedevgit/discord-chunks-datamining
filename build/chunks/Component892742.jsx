/** Chunk was on web.js **/
/** chunk id: 892742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    excludedQuests: h,
    isFetchingCurrentQuests: m
  } = (0, o.mL)({
    fetchPolicy: "cache-or-network",
    callerSource: "embed"
  }), g = i.useMemo(() => (0, l.vc)(t, n, h), [t, n, h]), E = i.useMemo(() => h.find(e => e.id === t), [t, h]);
  return m ? (0, r.jsx)(a.y$y, {
    className: _.u
  }) : null == g ? null != E ? (0, r.jsx)(u.g, {
    questId: t
  }) : (0, r.jsx)(d.l, {
    questId: t,
    reason: d.o.NOT_FOUND
  }) : (0, c.E0)(g.config) ? (0, r.jsx)(p.R, {
    quest: g,
    location: s.uF.QUESTS_EMBED,
    sourceQuestContent: s.uF.QUESTS_EMBED
  }, g.id) : (0, r.jsx)(f.S, {
    questId: t
  })
}