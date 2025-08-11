/** Chunk was on web.js **/
/** chunk id: 708406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => i
});
var Chunk981631 = require("./981631.js");

function i(e, t, n) {
  let i = null != t ? {
      [t]: 1
    } : {},
    {
      offset: o,
      limit: a,
      results: s,
      totalResults: l
    } = null != n ? n : {};
  return {
    search_type: r.aib.GIF,
    load_id: e,
    limit: a,
    offset: o,
    page: null != a && null != o ? Math.floor(o / a) + 1 : 1,
    total_results: l,
    page_results: null != s ? s : null,
    num_modifiers: Object.keys(i).length,
    modifiers: i
  }
}