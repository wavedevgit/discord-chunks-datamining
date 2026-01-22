/** Chunk was on 22477 **/
/** chunk id: 20732, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk831062 = require("./831062.js"),
  Chunk216456 = require("./216456.js"),
  Chunk260364 = require("./260364.js"),
  Chunk341915 = require("./341915.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let {
    quest: t,
    hasAssetsError: n,
    isEligibleForQuests: d,
    isQuestBarVisible: u,
    isVisibilityAnimationAtRest: m,
    isLoadingAssets: p,
    currentQuestVisibleReason: h,
    shouldShowQuestBar: f,
    isQuestEnrollmentBlocked: x,
    impressionRef: b
  } = e;
  a.useEffect(() => {
    if (n) {
      var e;
      (0, r.av)({
        questId: t.id,
        event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: o.uF.QUEST_BAR,
          content_name: (0, r.jO)(o.uF.QUEST_BAR),
          reason: "asset_loading_error",
          impression_id: null == (e = b.current) ? true : e.getId()
        },
        sourceQuestContent: o.uF.QUEST_BAR_V2
      }), i.A.increment({
        name: l.K.QUEST_CONTENT_RENDERING_FAILURE,
        tags: ["quest_id:".concat(t.id), "reason:asset_loading_error"]
      })
    }
  }, [n, b, t.id]), a.useEffect(() => {
    if (!d) {
      var e;
      (0, r.av)({
        questId: t.id,
        event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: o.uF.QUEST_BAR,
          content_name: (0, r.jO)(o.uF.QUEST_BAR),
          reason: "not_eligible_for_quest",
          impression_id: null == (e = b.current) ? true : e.getId()
        },
        sourceQuestContent: o.uF.QUEST_BAR_V2
      })
    }
  }, [d, b, t.id]), a.useEffect(() => {
    if (!u && m && !p) {
      var e;
      (0, r.av)({
        questId: t.id,
        event: c.HAw.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: o.uF.QUEST_BAR,
          content_name: (0, r.jO)(o.uF.QUEST_BAR),
          reason: h,
          impression_id: null == (e = b.current) ? true : e.getId()
        },
        sourceQuestContent: o.uF.QUEST_BAR_V2
      })
    }
  }, [u, m, p, t.id, h, b]), a.useEffect(() => {
    (!f || x) && s.A.clearTracking(), u && m && !p && !n && d && s.A.stopTracking(t.id)
  }, [f, x, u, m, p, n, d, t.id])
}