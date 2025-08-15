/** Chunk was on 35755 **/
/** chunk id: 226026, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk213609 = require("./213609.js"),
  Chunk541099 = require("./541099.js"),
  Chunk312871 = require("./312871.js");

function c(e) {
  let {
    applicationId: t,
    applicationFlags: n,
    sectionName: c,
    sectionPosition: u,
    sectionOverallPosition: d,
    promotionalLabel: p,
    numFriendsWhoPlay: m
  } = e, f = (0, r.e7)([o.Z], () => o.Z.entrypoint()), h = l.useCallback(() => {
    (0, a.h)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.APP_LAUNCHER_ITEM,
      properties: {
        application_id: t,
        application_flags: n,
        section_name: c,
        section_position: u,
        section_overall_position: d,
        source: f,
        promotional_label: p,
        num_friends_who_play: m
      }
    })
  }, [m]);
  return {
    trackItemImpressionRef: (0, s.Z)({
      onVisible: h,
      threshold: .5,
      minTimeVisibleMs: 1e3
    })
  }
}