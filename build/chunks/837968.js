/** Chunk was on web.js **/
/** chunk id: 837968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk383451 = require("./383451.js"),
  Chunk131951 = require("./131951.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  r.Z.dispatch({
    type: "PUSH_TO_TALK_STATE_CHANGE",
    isActive: e,
    isPriority: t,
    isLatched: n
  });
  let l = o.Z.getMode() === a.pM4.PUSH_TO_TALK,
    c = (0, i.f)({
      location: "doPTT",
      autoTrackExposure: false
    }).enableLatching && true === o.Z.getModeOptions().pttLatchingEnabled;
  o.Z.getMediaEngine().eachConnection(r => r.setForceAudioInput(e, t, l && c && !n && !e), s.Yn.DEFAULT)
}