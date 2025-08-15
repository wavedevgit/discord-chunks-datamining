/** Chunk was on 35755 **/
/** chunk id: 532309, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk213609 = require("./213609.js"),
  Chunk541099 = require("./541099.js"),
  Chunk312871 = require("./312871.js");

function s(e) {
  let {
    applicationId: t,
    commandId: n,
    searchResultsPosition: s,
    query: c
  } = e, u = (0, i.e7)([a.Z], () => a.Z.entrypoint());
  return {
    trackSearchResultsItemImpressionRef: (0, o.Z)({
      onVisible: () => {
        (0, r.h)({
          type: l.ImpressionTypes.VIEW,
          name: l.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
          properties: {
            application_id: t,
            command_id: n,
            search_results_position: s,
            query: c,
            source: u
          }
        })
      },
      threshold: 1
    })
  }
}