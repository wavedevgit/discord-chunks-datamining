/** Chunk was on 90228 **/
/** chunk id: 20732, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk831062 = require("./831062.js"),
  Chunk260364 = require("./260364.js"),
  Chunk341915 = require("./341915.js"),
  Chunk561844 = require("./561844.js"),
  Chunk590202 = require("./590202.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let {
    quest: t,
    hasAssetsError: n,
    isEligibleForQuests: u,
    isQuestBarVisible: m,
    isVisibilityAnimationAtRest: p,
    isLoadingAssets: h,
    currentQuestVisibleReason: x,
    shouldShowQuestBar: g,
    isQuestEnrollmentBlocked: f,
    impressionRef: b
  } = e;
  a.useEffect(() => {
    if (n) {
      var e;
      (0, o.av)({
        questId: t.id,
        event: d.HAw.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: s.uF.QUEST_BAR,
          content_name: (0, c.jO)(s.uF.QUEST_BAR),
          reason: "asset_loading_error",
          impression_id: null == (e = b.current) ? true : e.getId()
        },
        sourceQuestContent: s.uF.QUEST_BAR_V2
      }), r.A.increment({
        name: l.K.QUEST_CONTENT_RENDERING_FAILURE,
        tags: ["quest_id:".concat(t.id), "reason:asset_loading_error"]
      })
    }
  }, [n, b, t.id]), a.useEffect(() => {
    if (!u) {
      var e;
      (0, o.av)({
        questId: t.id,
        event: d.HAw.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: s.uF.QUEST_BAR,
          content_name: (0, c.jO)(s.uF.QUEST_BAR),
          reason: "not_eligible_for_quest",
          impression_id: null == (e = b.current) ? true : e.getId()
        },
        sourceQuestContent: s.uF.QUEST_BAR_V2
      })
    }
  }, [u, b, t.id]), a.useEffect(() => {
    if (!m && p && !h) {
      var e;
      (0, o.av)({
        questId: t.id,
        event: d.HAw.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: s.uF.QUEST_BAR,
          content_name: (0, c.jO)(s.uF.QUEST_BAR),
          reason: x,
          impression_id: null == (e = b.current) ? true : e.getId()
        },
        sourceQuestContent: s.uF.QUEST_BAR_V2
      })
    }
  }, [m, p, h, t.id, x, b]), a.useEffect(() => {
    (!g || f) && i.A.clearTracking(), m && p && !h && !n && u && i.A.stopTracking(t.id)
  }, [g, f, m, p, h, n, u, t.id])
}