/** Chunk was on web.js **/
/** chunk id: 786115, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139286 = require("./139286.js"),
  Chunk989837 = require("./989837.js"),
  Chunk520117 = require("./520117.js");
let c = 1e3;

function u(e) {
  let {
    applicationId: t,
    applicationFlags: n,
    sectionName: u,
    sectionPosition: d,
    sectionOverallPosition: f,
    promotionalLabel: p,
    numFriendsWhoPlay: _
  } = e, h = (0, a.bG)([o.A], () => o.A.entrypoint()), m = r.useCallback(() => {
    (0, s.x)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.APP_LAUNCHER_ITEM,
      properties: {
        application_id: t,
        application_flags: n,
        section_name: u,
        section_position: d,
        section_overall_position: f,
        source: h,
        promotional_label: p,
        num_friends_who_play: _
      }
    })
  }, [_]), g = .5;
  return {
    trackItemImpressionRef: (0, l.A)({
      onVisible: m,
      threshold: g,
      minTimeVisibleMs: c
    })
  }
}