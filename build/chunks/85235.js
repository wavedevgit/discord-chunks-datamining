/** Chunk was on web.js **/
/** chunk id: 85235, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk718745 = require("./718745.js"),
  Chunk981631 = require("./981631.js");
let s = {
  search(e, t) {
    null == a.Z.getResults(e, t) && (i.Z.dispatch({
      type: "INTEGRATION_QUERY",
      integration: e,
      query: t
    }), r.tn.get({
      url: o.ANM.INTEGRATION_SEARCH("tenor"),
      query: {
        q: t
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(n => {
      i.Z.dispatch({
        type: "INTEGRATION_QUERY_SUCCESS",
        integration: e,
        query: t,
        results: n.body
      })
    }, () => i.Z.dispatch({
      type: "INTEGRATION_QUERY_FAILURE",
      integration: e,
      query: t
    })))
  }
}