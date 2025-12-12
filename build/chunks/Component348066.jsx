/** Chunk was on web.js **/
/** chunk id: 348066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk862657 = require("./862657.js"),
  Chunk283689 = require("./283689.js"),
  Chunk867305 = require("./867305.jsx"),
  Chunk557843 = require("./557843.jsx"),
  Chunk10514 = require("./10514.jsx"),
  Chunk686834 = require("./686834.jsx"),
  Chunk447544 = require("./447544.js");

function m(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    excludedQuests: m,
    isFetchingCurrentQuests: h
  } = (0, s.J2)({
    fetchPolicy: "cache-or-network",
    callerSource: "embed"
  }), g = i.useMemo(() => (0, l._x)(t, n, m), [t, n, m]), E = i.useMemo(() => m.find(e => e.id === t), [t, m]);
  return h ? (0, r.jsx)(a.$jN, {
    className: _.spinner
  }) : null == g ? null != E ? (0, r.jsx)(u.q, {
    questId: t
  }) : (0, r.jsx)(d.W, {
    questId: t,
    reason: d.X.NOT_FOUND
  }) : (0, c.VB)(g.config) ? (0, r.jsx)(p.X, {
    quest: g,
    location: o.jn.QUESTS_EMBED,
    sourceQuestContent: o.jn.QUESTS_EMBED
  }, g.id) : (0, r.jsx)(f.J, {
    questId: t
  })
}