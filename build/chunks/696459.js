/** Chunk was on web.js **/
/** chunk id: 696459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk29599 = require("./29599.js"),
  Chunk652215 = require("./652215.js");
let s = {
  search(e, t) {
    null == a.A.getResults(e, t) && (i.h.dispatch({
      type: "INTEGRATION_QUERY",
      integration: e,
      query: t
    }), r.Bo.get({
      url: o.Rsh.INTEGRATION_SEARCH("tenor"),
      query: {
        q: t
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(n => {
      i.h.dispatch({
        type: "INTEGRATION_QUERY_SUCCESS",
        integration: e,
        query: t,
        results: n.body
      })
    }, () => i.h.dispatch({
      type: "INTEGRATION_QUERY_FAILURE",
      integration: e,
      query: t
    })))
  }
}