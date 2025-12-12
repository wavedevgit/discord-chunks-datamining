/** Chunk was on web.js **/
/** chunk id: 142497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kw: () => o,
  Po: () => l,
  hv: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  i.default.track(a.rMx.HOTSPOT_HIDDEN, {
    hotspot_location: e
  }), r.Z.wait(() => {
    r.Z.dispatch({
      type: "HOTSPOT_HIDE",
      location: e
    })
  })
}

function s(e, t) {
  r.Z.dispatch({
    type: "HOTSPOT_OVERRIDE_SET",
    location: e,
    enabled: t
  })
}

function l(e) {
  r.Z.dispatch({
    type: "HOTSPOT_OVERRIDE_CLEAR",
    location: e
  })
}