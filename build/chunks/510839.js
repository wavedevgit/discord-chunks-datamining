/** Chunk was on web.js **/
/** chunk id: 510839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  eU: () => l,
  s2: () => a,
  xT: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js");

function a(e) {
  let {
    applicationId: t
  } = e, n = o.ZP.getCurrentEmbeddedActivity();
  null != n && (0, i.mW)({
    location: n.location,
    applicationId: n.applicationId,
    showFeedback: false
  }), r.Z.dispatch({
    type: "FRAME_LAUNCH",
    applicationId: t
  })
}

function s(e) {
  let {
    applicationId: t
  } = e;
  r.Z.dispatch({
    type: "FRAME_STOP",
    applicationId: t
  })
}

function l(e) {
  let {
    applicationId: t,
    layoutMode: n
  } = e;
  r.Z.dispatch({
    type: "FRAME_UPDATE_LAYOUT_MODE",
    applicationId: t,
    layoutMode: n
  })
}