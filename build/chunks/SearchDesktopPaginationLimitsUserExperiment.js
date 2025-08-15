/** Chunk was on 86357 **/
/** chunk id: 672041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_search_desktop_pagination_limits",
  label: "Search Desktop Pagination Limits",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.ro)({
    location: t,
    autoTrackExposure: n
  }), {
    enabled: a
  } = l.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a
}