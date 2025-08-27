/** Chunk was on web.js **/
/** chunk id: 510839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  eU: () => d,
  s2: () => c,
  xT: () => u
});
var Chunk570140 = require("./570140.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk729200 = require("./729200.js"),
  Chunk201567 = require("./201567.js"),
  Chunk574952 = require("./574952.js");
async function c(e) {
  let {
    applicationId: t
  } = e;
  r.Z.dispatch({
    type: "FRAME_LAUNCH_START",
    applicationId: t
  });
  try {
    let e;
    (0, o.g)() && (e = await (0, i.a_)(t));
    let n = a.ZP.getCurrentEmbeddedActivity();
    null != n && (0, i.mW)({
      location: n.location,
      applicationId: n.applicationId,
      showFeedback: false
    }), r.Z.dispatch({
      type: "FRAME_LAUNCH",
      applicationId: t,
      proxyTicket: e
    })
  } catch (i) {
    let e = (0, l.Z)(),
      n = await (0, s.k)(i, t);
    throw e.showLaunchErrorModal(n.message), r.Z.dispatch({
      type: "FRAME_LAUNCH_FAIL",
      applicationId: t,
      error: i
    }), i
  }
}

function u(e) {
  let {
    applicationId: t
  } = e;
  r.Z.dispatch({
    type: "FRAME_STOP",
    applicationId: t
  })
}

function d(e) {
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