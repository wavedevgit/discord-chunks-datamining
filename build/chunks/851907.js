/** Chunk was on web.js **/
/** chunk id: 851907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => p,
  LU: () => h,
  xi: () => m
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk587895 = require("./587895.js"),
  Chunk87001 = require("./87001.js"),
  Chunk646865 = require("./646865.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk108959 = require("./108959.js"),
  Chunk5867 = require("./5867.js"),
  Chunk652215 = require("./652215.js");

function p(e) {
  var t;
  let {
    application: n,
    channelId: i
  } = e;
  if (null != n && (0, r.Lt)(null != (t = n.flags) ? t : 0, f.gfo.EMBEDDED)) {
    if (o.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT) && l.Ay.getActivityPanelMode() === d.Gd.ACTIVITY_POPOUT_WINDOW) return f.MLl.ACTIVITY_POPOUT;
    if (o.A.getWindowOpen(f.MLl.CHANNEL_CALL_POPOUT) && (0, u.A)(i) && !(0, s.f)()) return f.MLl.CHANNEL_CALL_POPOUT
  }
}

function _(e) {
  let {
    channelId: t,
    EmbeddedActivitiesStore: n,
    ApplicationStore: r
  } = e, i = n.getSelfEmbeddedActivityForChannel(t), a = r.getApplication(null == i ? true : i.applicationId);
  if (null != a) return p({
    application: a,
    channelId: t
  })
}

function h(e) {
  let {
    applicationId: t
  } = e, n = l.Ay.getCurrentEmbeddedActivity();
  if (null == n || n.applicationId !== t) return;
  let r = a.A.getApplication(t);
  if (null != r) return p({
    application: r,
    channelId: (0, c.H)(n.location)
  })
}

function m(e) {
  let {
    channelId: t
  } = e;
  return (0, i.bG)([o.A, l.Ay, a.A], () => {
    let e = _({
      channelId: null != t ? t : l.Ay.getConnectedActivityChannelId(),
      EmbeddedActivitiesStore: l.Ay,
      ApplicationStore: a.A
    });
    return null != e ? o.A.getWindow(e) : true
  })
}