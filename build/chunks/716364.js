/** Chunk was on web.js **/
/** chunk id: 716364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk474873 = require("./474873.js"),
  Chunk981631 = require("./981631.js");

function s(e, t) {
  i.default.track(o.rMx.SOUNDPACK_UPDATED, {
    soundpack: e,
    previous_soundpack: a.Z.getSoundpack()
  }), r.Z.dispatch({
    type: "SET_SOUNDPACK",
    soundpack: e,
    forExperimentId: t
  })
}