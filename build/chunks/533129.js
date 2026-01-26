/** Chunk was on 67564 **/
/** chunk id: 533129, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  WL: () => a,
  np: () => s,
  tx: () => i
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function i(e) {
  let {
    selectedTab: t
  } = e;
  r.default.track(l.HAw.GLOBAL_DISCOVERY_VIEWED, {
    selected_tab: t
  })
}

function s(e) {
  let {
    selectedCategoryId: t
  } = e;
  r.default.track(l.HAw.GLOBAL_DISCOVERY_SERVERS_VIEWED, {
    selected_category_id: t
  })
}

function a(e) {
  let {
    source: t
  } = e;
  r.default.track(l.HAw.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
    source: t
  })
}