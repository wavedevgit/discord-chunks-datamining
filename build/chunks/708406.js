/** Chunk was on web.js **/
/** chunk id: 708406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fo: () => o,
  _2: () => s
});
var Chunk981631 = require("./981631.js");

function i(e) {
  return "Klipy" === e
}

function a(e) {
  return i(e)
}

function o(e) {
  var t, n;
  if (!a(e.providerName)) return;
  let {
    thumbnail: r
  } = e;
  if (null != r) return null != (n = null != (t = r.proxyURL) ? t : r.url) ? n : r.uri
}

function s(e, t, n) {
  let i = null != t ? {
      [t]: 1
    } : {},
    {
      offset: a,
      limit: o,
      results: s,
      totalResults: l
    } = null != n ? n : {};
  return {
    search_type: r.aib.GIF,
    load_id: e,
    limit: o,
    offset: a,
    page: null != o && null != a ? Math.floor(a / o) + 1 : 1,
    total_results: l,
    page_results: null != s ? s : null,
    num_modifiers: Object.keys(i).length,
    modifiers: i
  }
}