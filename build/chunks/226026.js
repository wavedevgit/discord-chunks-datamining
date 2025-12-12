/** Chunk was on web.js **/
/** chunk id: 226026, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk213609 = require("./213609.js"),
  Chunk541099 = require("./541099.js"),
  Chunk312871 = require("./312871.js");
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
  } = e, m = (0, o.e7)([s.Z], () => s.Z.entrypoint()), h = r.useCallback(() => {
    (0, a.h)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.APP_LAUNCHER_ITEM,
      properties: {
        application_id: t,
        application_flags: n,
        section_name: u,
        section_position: d,
        section_overall_position: f,
        source: m,
        promotional_label: p,
        num_friends_who_play: _
      }
    })
  }, [_]), g = .5;
  return {
    trackItemImpressionRef: (0, l.Z)({
      onVisible: h,
      threshold: g,
      minTimeVisibleMs: c
    })
  }
}