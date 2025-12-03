/** Chunk was on web.js **/
/** chunk id: 348066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk670081 = require("./670081.js"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk862657 = require("./862657.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk867305 = require("./867305.jsx"),
  Chunk557843 = require("./557843.jsx"),
  Chunk10514 = require("./10514.jsx"),
  Chunk686834 = require("./686834.jsx"),
  Chunk159183 = require("./159183.js");

function g(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    excludedQuests: g,
    isFetchingCurrentQuests: E
  } = (0, l.J2)({
    fetchPolicy: "cache-or-network",
    callerSource: "embed"
  }), b = i.useMemo(() => (0, c._x)(t, n, g), [t, n, g]), y = i.useMemo(() => g.find(e => e.id === t), [t, g]), O = i.useMemo(() => (null == b ? true : b.config.features.includes(a.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === true, [null == b ? true : b.config.features]);
  return E ? (0, r.jsx)(o.$jN, {
    className: h.spinner
  }) : null == b ? null != y ? (0, r.jsx)(f.q, {
    questId: t
  }) : (0, r.jsx)(p.W, {
    questId: t,
    reason: p.X.NOT_FOUND
  }) : (0, u.HJ)(b) && !O ? (0, r.jsx)(p.W, {
    questId: t,
    reason: p.X.MOBILE_ONLY
  }) : (0, d.VB)(b.config) ? (0, r.jsx)(m.X, {
    quest: b,
    location: s.jn.QUESTS_EMBED,
    sourceQuestContent: s.jn.QUESTS_EMBED
  }, b.id) : (0, r.jsx)(_.J, {
    questId: t
  })
}