/** Chunk was on web.js **/
/** chunk id: 303952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => o,
  n: () => a
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  o = function(e) {
    return e.SHOP_MOUNTED = "shop_mounted", e.CATEGORIES_FETCH_STARTED = "categories_fetch_started", e.CATEGORIES_FETCH_COMPLETED = "categories_fetch_completed", e.SHOP_HOME_FETCH_STARTED = "shop_home_fetch_started", e.SHOP_HOME_FETCH_COMPLETED = "shop_home_fetch_completed", e.SHOP_RENDERED = "shop_rendered", e
  }({});
let a = e => {
  let {
    sessionId: t,
    checkpoint: n,
    tab: o,
    unpublishedCategoriesShown: a,
    cacheDisabled: s
  } = e;
  r.default.track(i.rMx.COLLECTIBLES_SHOP_PERF_TRACKED, {
    page_session_id: t,
    checkpoint: n,
    tab: o,
    unpublished_categories_shown: a,
    cache_disabled: s
  })
}