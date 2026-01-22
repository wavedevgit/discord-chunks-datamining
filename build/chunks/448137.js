/** Chunk was on web.js **/
/** chunk id: 448137, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139286 = require("./139286.js"),
  Chunk989837 = require("./989837.js"),
  Chunk520117 = require("./520117.js");

function l(e) {
  let {
    applicationId: t,
    commandId: n,
    searchResultsPosition: l,
    query: c
  } = e, u = (0, i.bG)([s.A], () => s.A.entrypoint()), d = () => {
    (0, a.x)({
      type: r.ImpressionTypes.VIEW,
      name: r.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
      properties: {
        application_id: t,
        command_id: n,
        search_results_position: l,
        query: c,
        source: u
      }
    })
  }, f = 1;
  return {
    trackSearchResultsItemImpressionRef: (0, o.A)({
      onVisible: d,
      threshold: f
    })
  }
}