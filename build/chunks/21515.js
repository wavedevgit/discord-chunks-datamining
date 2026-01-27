/** Chunk was on web.js **/
/** chunk id: 21515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  launchFrame: () => u,
  refreshProxyTicket: () => _,
  stopFrame: () => d,
  updateFrameLayoutMode: () => f,
  updateFramePanelMode: () => p
});
var Chunk73153 = require("./73153.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk907645 = require("./907645.js"),
  Chunk574152 = require("./574152.js"),
  Chunk91242 = require("./91242.js"),
  Chunk580954 = require("./580954.js");
async function u(e) {
  let {
    applicationId: t
  } = e;
  r.h.dispatch({
    type: "FRAME_LAUNCH_START",
    applicationId: t
  });
  try {
    let e = await (0, i.D2)(t),
      n = a.Ay.getCurrentEmbeddedActivity();
    null != n && (0, s.A)().leaveActivity({
      location: n.location,
      applicationId: n.applicationId,
      showFeedback: false
    });
    let o = l.A.getConnectedFrame();
    null != o && o.applicationId !== t && (0, c.A)().leaveFrame({
      applicationId: o.applicationId
    }), r.h.dispatch({
      type: "FRAME_LAUNCH",
      applicationId: t,
      proxyTicket: e
    })
  } catch (i) {
    let e = (0, s.A)(),
      n = await (0, o.f)(i, t);
    throw e.showLaunchErrorModal(n.message), r.h.dispatch({
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
  r.h.dispatch({
    type: "FRAME_STOP",
    applicationId: t
  })
}

function f(e) {
  let {
    applicationId: t,
    layoutMode: n
  } = e;
  r.h.dispatch({
    type: "FRAME_UPDATE_LAYOUT_MODE",
    applicationId: t,
    layoutMode: n
  })
}

function p(e) {
  r.h.dispatch({
    type: "FRAME_SET_PANEL_MODE",
    activityPanelMode: e
  })
}
async function _(e) {
  let {
    applicationId: t
  } = e;
  r.h.dispatch({
    type: "FRAME_SET_PROXY_TICKET_REFRESHING",
    applicationId: t,
    refreshing: true
  });
  try {
    let e = await (0, i.D2)(t);
    r.h.dispatch({
      type: "FRAME_UPDATE_PROXY_TICKET",
      applicationId: t,
      proxyTicket: e
    })
  } catch (r) {
    let e = (0, s.A)(),
      n = await (0, o.f)(r, t);
    return e.showLaunchErrorModal(n.message), false
  } finally {
    r.h.dispatch({
      type: "FRAME_SET_PROXY_TICKET_REFRESHING",
      applicationId: t,
      refreshing: false
    })
  }
  returntrue
}