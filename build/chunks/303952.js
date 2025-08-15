/** Chunk was on web.js **/
/** chunk id: 303952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => a,
  n: () => o
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  a = function(e) {
    return e.SHOP_MOUNTED = "shop_mounted", e.CATEGORIES_FETCH_STARTED = "categories_fetch_started", e.CATEGORIES_FETCH_COMPLETED = "categories_fetch_completed", e.SHOP_HOME_FETCH_STARTED = "shop_home_fetch_started", e.SHOP_HOME_FETCH_COMPLETED = "shop_home_fetch_completed", e.SHOP_RENDERED = "shop_rendered", e
  }({});
let o = e => {
  let {
    sessionId: t,
    checkpoint: n,
    tab: a,
    isFullScreen: o,
    unpublishedCategoriesShown: s,
    cacheDisabled: l
  } = e;
  r.default.track(i.rMx.COLLECTIBLES_SHOP_PERF_TRACKED, {
    page_session_id: t,
    checkpoint: n,
    tab: a,
    is_full_screen: o,
    unpublished_categories_shown: s,
    cache_disabled: l
  })
}