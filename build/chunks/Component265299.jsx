/** Chunk was on web.js **/
/** chunk id: 265299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
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

function _(e) {
  let {
    questId: t
  } = e, {
    quests: n,
    excludedQuests: _,
    isFetchingCurrentQuests: p
  } = (0, s.J2)({
    fetchPolicy: "cache-or-network",
    callerSource: "embed"
  }), h = i.useMemo(() => n.find(e => e.id === t), [t, n]), m = i.useMemo(() => _.find(e => e.id === t), [t, _]);
  return p ? (0, r.jsx)(o.$jN, {
    className: f.spinner
  }) : null != m ? (0, r.jsx)(u.W, {
    questId: t
  }) : null == h ? (0, r.jsx)(d.o, {
    questId: t,
    reason: d.X.NOT_FOUND
  }) : (0, a.HJ)(h) ? (0, r.jsx)(d.o, {
    questId: t,
    reason: d.X.MOBILE_ONLY
  }) : (0, r.jsx)(c.Z, {
    quest: h,
    location: l.jn.QUESTS_EMBED,
    sourceQuestContent: l.jn.QUESTS_EMBED
  }, h.id)
}