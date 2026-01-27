/** Chunk was on web.js **/
/** chunk id: 383497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => b
}), require("./938796.js");
var Chunk344351 = require("./344351.js"),
  Chunk665260 = require("./665260.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk734057 = require("./734057.js"),
  Chunk933958 = require("./933958.js"),
  Chunk710839 = require("./710839.jsx"),
  Chunk825591 = require("./825591.js"),
  Chunk123281 = require("./123281.jsx"),
  Chunk969151 = require("./969151.js"),
  Chunk817636 = require("./817636.js"),
  Chunk574152 = require("./574152.js"),
  Chunk652215 = require("./652215.js");
async function m(e) {
  let {
    applicationId: t,
    channelId: n,
    guildId: i
  } = e;
  try {
    return await (0, p.A)(t, n)
  } catch (s) {
    let e = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
    a.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: "",
      applicationId: t,
      channelId: null != n ? n : null,
      guildId: null != i ? i : null,
      error: new o.LG(s),
      locationKind: e
    })
  }
}
async function g(e) {
  let {
    currentEmbeddedApplication: t,
    shouldClosePopoutOnLeaveCurrentEmbeddedApplication: n,
    onConfirmActivityLaunchChecksAlertOpen: r
  } = e;
  return (null == t || !!await new Promise(e => {
    let i = l.Ay.getSelfEmbeddedActivities().get(t.id),
      a = (0, f.H)(null == i ? true : i.location),
      o = s.A.getChannel(a);
    null == i || null == o ? e(true) : (null == r || r(), (0, u.A)(t, o, () => {
      (0, _.A)().leaveActivity({
        location: i.location,
        applicationId: t.id,
        shouldClosePopout: n
      }), e(true)
    }, () => e(false)))
  })) && true
}
async function E(e) {
  let {
    application: t,
    applicationId: n,
    channel: r,
    user: i,
    onConfirmActivityLaunchChecksAlertOpen: a
  } = e;
  if (null == i.nsfwAllowed) {
    var o, s, l;
    let e = null != t ? t : await m({
      applicationId: n,
      channelId: null == r ? true : r.id,
      guildId: null != (o = null == r ? true : r.getGuildId()) ? o : true
    });
    if (null == e || null != (s = null == (l = e.embeddedActivityConfig) ? true : l.requires_age_gate) && s && !await new Promise(t => {
        null == a || a(), (0, c.i)({
          application: e,
          channelId: null == r ? true : r.id,
          onAgree: () => t(true),
          onDisagree: () => t(false)
        })
      })) returnfalse
  }
  returntrue
}
async function y(e) {
  var t;
  let {
    application: n,
    applicationId: r,
    channel: a,
    onConfirmActivityLaunchChecksAlertOpen: o
  } = e, s = null != n ? n : await m({
    applicationId: r,
    channelId: null == a ? true : a.id,
    guildId: null != (t = null == a ? true : a.getGuildId()) ? t : true
  });
  return null != s && (!!((0, i.Lt)(s.flags, h.gfo.EMBEDDED_RELEASED) || s.isVerified || l.Ay.hasActivityEverBeenLaunched(r)) || new Promise(e => {
    null == o || o(), (0, d.q)({
      application: s,
      onConfirm: () => e(true),
      onCancel: () => e(false)
    })
  }))
}
async function b(e) {
  return !!await g({
    currentEmbeddedApplication: e.currentEmbeddedApplication,
    shouldClosePopoutOnLeaveCurrentEmbeddedApplication: e.shouldClosePopoutOnLeaveCurrentEmbeddedApplication,
    onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen
  }) && !!await E(e) && !!await y(e)
}