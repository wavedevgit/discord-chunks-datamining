/** Chunk was on web.js **/
/** chunk id: 140175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => l
});
var Chunk73153 = require("./73153.js"),
  Chunk555444 = require("./555444.js"),
  Chunk430452 = require("./430452.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  r.h.dispatch({
    type: "PUSH_TO_TALK_STATE_CHANGE",
    isActive: e,
    isPriority: t,
    isLatched: n
  });
  let l = a.A.getMode() === o.TBI.PUSH_TO_TALK,
    c = (0, i.H)({
      location: "doPTT",
      autoTrackExposure: false
    }).enableLatching && true === a.A.getModeOptions().pttLatchingEnabled;
  a.A.getMediaEngine().eachConnection(r => r.setForceAudioInput(e, t, l && c && !n && !e), s.x.DEFAULT)
}