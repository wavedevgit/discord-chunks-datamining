/** Chunk was on 81985 **/
/** chunk id: 571457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RI: () => l,
  k5: () => o,
  kR: () => a
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let {
    selectedTab: t
  } = e;
  r.default.track(i.rMx.GLOBAL_DISCOVERY_VIEWED, {
    selected_tab: t
  })
}

function a(e) {
  let {
    selectedCategoryId: t
  } = e;
  r.default.track(i.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, {
    selected_category_id: t
  })
}

function o(e) {
  let {
    source: t
  } = e;
  r.default.track(i.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
    source: t
  })
}