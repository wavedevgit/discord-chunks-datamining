/** Chunk was on web.js **/
/** chunk id: 21515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  launchFrame: () => c,
  refreshProxyTicket: () => p,
  stopFrame: () => u,
  updateFrameLayoutMode: () => d,
  updateFramePanelMode: () => f
});
var Chunk73153 = require("./73153.js"),
  Chunk795816 = require("./795816.js"),
  Chunk907645 = require("./907645.js"),
  Chunk574152 = require("./574152.js"),
  Chunk989451 = require("./989451.js"),
  Chunk448739 = require("./448739.js");
async function c(e) {
  let {
    applicationId: t
  } = e;
  r.h.dispatch({
    type: "FRAME_LAUNCH_START",
    applicationId: t
  });
  try {
    let e = await (0, i.D2)(t);
    (0, s.a)(), (0, l.Q)(), r.h.dispatch({
      type: "FRAME_LAUNCH",
      applicationId: t,
      proxyTicket: e
    })
  } catch (i) {
    let e = (0, o.A)(),
      n = await (0, a.f)(i, t);
    throw e.showLaunchErrorModal(n.message), r.h.dispatch({
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
  r.h.dispatch({
    type: "FRAME_STOP",
    applicationId: t
  })
}

function d(e) {
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

function f(e) {
  r.h.dispatch({
    type: "FRAME_SET_PANEL_MODE",
    activityPanelMode: e
  })
}
async function p(e) {
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
    let e = (0, o.A)(),
      n = await (0, a.f)(r, t);
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