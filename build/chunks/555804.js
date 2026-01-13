/** Chunk was on web.js **/
/** chunk id: 555804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  launchFrame: () => u,
  stopFrame: () => d,
  updateFrameLayoutMode: () => f,
  updateFramePanelMode: () => p
});
var Chunk570140 = require("./570140.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk201567 = require("./201567.js"),
  Chunk574952 = require("./574952.js"),
  Chunk591472 = require("./591472.js"),
  Chunk837366 = require("./837366.js");
async function u(e) {
  let {
    applicationId: t
  } = e;
  r.Z.dispatch({
    type: "FRAME_LAUNCH_START",
    applicationId: t
  });
  try {
    let e = await (0, i.a_)(t),
      n = a.ZP.getCurrentEmbeddedActivity();
    null != n && (0, s.Z)().leaveActivity({
      location: n.location,
      applicationId: n.applicationId,
      showFeedback: false
    });
    let o = l.Z.getConnectedFrame();
    null != o && o.applicationId !== t && (0, c.Z)().leaveFrame({
      applicationId: o.applicationId
    }), r.Z.dispatch({
      type: "FRAME_LAUNCH",
      applicationId: t,
      proxyTicket: e
    })
  } catch (i) {
    let e = (0, s.Z)(),
      n = await (0, o.k)(i, t);
    throw e.showLaunchErrorModal(n.message), r.Z.dispatch({
      type: "FRAME_LAUNCH_FAIL",
      applicationId: t,
      error: i
    }), i
  }
}

function d(e) {
  let {
    applicationId: t
  } = e;
  r.Z.dispatch({
    type: "FRAME_STOP",
    applicationId: t
  })
}

function f(e) {
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

function p(e) {
  r.Z.dispatch({
    type: "FRAME_SET_PANEL_MODE",
    activityPanelMode: e
  })
}