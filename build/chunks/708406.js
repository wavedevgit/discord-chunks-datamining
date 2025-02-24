/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
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