/** Chunk was on web.js **/
/** chunk id: 265299, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  Chunk864306 = require("./864306.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk978221 = require("./978221.js");

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
  }), b = i.useMemo(() => n.find(e => e.id === t), [t, n]), y = i.useMemo(() => g.find(e => e.id === t), [t, g]), O = i.useMemo(() => (null == b ? true : b.config.features.includes(a.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === true, [null == b ? true : b.config.features]);
  if (E) return (0, r.jsx)(o.$jN, {
    className: m.spinner
  });
  if (null != y) return (0, r.jsx)(f.W, {
    questId: t
  });
  if (null == b) return (0, r.jsx)(_.o, {
    questId: t,
    reason: _.X.NOT_FOUND
  });
  if ((0, s.HJ)(b)) {
    let {
      enabled: e
    } = u.S.getCurrentConfig({
      location: h.dr.EMBED_DESKTOP
    }, {
      autoTrackExposure: O
    });
    if (!O || !e) return (0, r.jsx)(_.o, {
      questId: t,
      reason: _.X.MOBILE_ONLY
    })
  }
  return (0, s.vB)(b.config) ? (0, r.jsx)(d.Z, {
    quest: b,
    location: c.jn.QUESTS_EMBED,
    sourceQuestContent: c.jn.QUESTS_EMBED
  }, b.id) : (0, r.jsx)(p.J, {
    questId: t
  })
}