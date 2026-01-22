/** Chunk was on web.js **/
/** chunk id: 965957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk954571 = require("./954571.js"),
  Chunk312671 = require("./312671.js"),
  Chunk652215 = require("./652215.js");

function o(e, t) {
  i.default.track(s.HAw.SOUNDPACK_UPDATED, {
    soundpack: e,
    previous_soundpack: a.A.getSoundpack()
  }), r.h.dispatch({
    type: "SET_SOUNDPACK",
    soundpack: e,
    forExperimentId: t
  })
}