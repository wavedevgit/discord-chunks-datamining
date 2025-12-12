/** Chunk was on web.js **/
/** chunk id: 532309, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk213609 = require("./213609.js"),
  Chunk541099 = require("./541099.js"),
  Chunk312871 = require("./312871.js");

function l(e) {
  let {
    applicationId: t,
    commandId: n,
    searchResultsPosition: l,
    query: c
  } = e, u = (0, i.e7)([o.Z], () => o.Z.entrypoint()), d = () => {
    (0, a.h)({
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
    trackSearchResultsItemImpressionRef: (0, s.Z)({
      onVisible: d,
      threshold: f
    })
  }
}