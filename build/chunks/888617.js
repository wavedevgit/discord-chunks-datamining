/** Chunk was on web.js **/
/** chunk id: 888617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk990547 = require("./990547.js"),
  Chunk213609 = require("./213609.js"),
  Chunk541099 = require("./541099.js"),
  Chunk312871 = require("./312871.js");

function s(e) {
  let {
    sectionName: t,
    numItems: n,
    numVisibleItems: s
  } = e, l = () => {
    (0, i.h)({
      type: r.ImpressionTypes.VIEW,
      name: r.ImpressionNames.APP_LAUNCHER_SECTION,
      properties: {
        section_name: t,
        num_items: n,
        num_visible_items: s,
        source: o.Z.entrypoint()
      }
    })
  }, c = 1;
  return {
    trackSectionImpressionRef: (0, a.Z)({
      onVisible: l,
      threshold: c
    })
  }
}