/** Chunk was on web.js **/
/** chunk id: 902527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk110259 = require("./110259.js"),
  Chunk139286 = require("./139286.js"),
  Chunk989837 = require("./989837.js"),
  Chunk520117 = require("./520117.js");

function s(e) {
  let {
    sectionName: t,
    numItems: n,
    numVisibleItems: s
  } = e, l = () => {
    (0, i.x)({
      type: r.ImpressionTypes.VIEW,
      name: r.ImpressionNames.APP_LAUNCHER_SECTION,
      properties: {
        section_name: t,
        num_items: n,
        num_visible_items: s,
        source: a.A.entrypoint()
      }
    })
  }, c = 1;
  return {
    trackSectionImpressionRef: (0, o.A)({
      onVisible: l,
      threshold: c
    })
  }
}