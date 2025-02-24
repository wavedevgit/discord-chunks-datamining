/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  _: () => i
});
var r = n(981631);

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