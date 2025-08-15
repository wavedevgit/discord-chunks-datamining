/** Chunk was on 35755 **/
/** chunk id: 888617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk990547 = require("./990547.js"),
  Chunk213609 = require("./213609.js"),
  Chunk541099 = require("./541099.js"),
  Chunk312871 = require("./312871.js");

function o(e) {
  let {
    sectionName: t,
    numItems: n,
    numVisibleItems: o
  } = e;
  return {
    trackSectionImpressionRef: (0, a.Z)({
      onVisible: () => {
        (0, i.h)({
          type: l.ImpressionTypes.VIEW,
          name: l.ImpressionNames.APP_LAUNCHER_SECTION,
          properties: {
            section_name: t,
            num_items: n,
            num_visible_items: o,
            source: r.Z.entrypoint()
          }
        })
      },
      threshold: 1
    })
  }
}