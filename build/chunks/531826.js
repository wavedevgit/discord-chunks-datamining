/** Chunk was on web.js **/
/** chunk id: 531826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => p,
  jA: () => m,
  sU: () => h
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk812206 = require("./812206.js"),
  Chunk522474 = require("./522474.js"),
  Chunk636449 = require("./636449.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk917107 = require("./917107.js"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  var t;
  let {
    application: n,
    channelId: i
  } = e;
  if (null != n && (0, r.yE)(null != (t = n.flags) ? t : 0, f.udG.EMBEDDED)) {
    if (a.Z.getWindowOpen(f.KJ3.ACTIVITY_POPOUT) && l.ZP.getActivityPanelMode() === d.Ez.ACTIVITY_POPOUT_WINDOW) return f.KJ3.ACTIVITY_POPOUT;
    if (a.Z.getWindowOpen(f.KJ3.CHANNEL_CALL_POPOUT) && (0, u.Z)(i) && !(0, s.R)()) return f.KJ3.CHANNEL_CALL_POPOUT
  }
}

function _(e) {
  let {
    channelId: t,
    EmbeddedActivitiesStore: n,
    ApplicationStore: r
  } = e, i = n.getSelfEmbeddedActivityForChannel(t), o = r.getApplication(null == i ? true : i.applicationId);
  if (null != o) return p({
    application: o,
    channelId: t
  })
}

function m(e) {
  let {
    applicationId: t
  } = e, n = l.ZP.getCurrentEmbeddedActivity();
  if (null == n || n.applicationId !== t) return;
  let r = o.Z.getApplication(t);
  if (null != r) return p({
    application: r,
    channelId: (0, c.p)(n.location)
  })
}

function h(e) {
  let {
    channelId: t
  } = e;
  return (0, i.e7)([a.Z, l.ZP, o.Z], () => {
    let e = _({
      channelId: null != t ? t : l.ZP.getConnectedActivityChannelId(),
      EmbeddedActivitiesStore: l.ZP,
      ApplicationStore: o.Z
    });
    return null != e ? a.Z.getWindow(e) : true
  })
}