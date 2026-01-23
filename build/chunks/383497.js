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
  } catch (o) {
    let e = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
    a.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: "",
      applicationId: t,
      channelId: null != n ? n : null,
      guildId: null != i ? i : null,
      error: new s.LG(o),
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
      s = o.A.getChannel(a);
    null == i || null == s ? e(true) : (null == r || r(), (0, u.A)(t, s, () => {
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
    var s, o, l;
    let e = null != t ? t : await m({
      applicationId: n,
      channelId: null == r ? true : r.id,
      guildId: null != (s = null == r ? true : r.getGuildId()) ? s : true
    });
    if (null == e || null != (o = null == (l = e.embeddedActivityConfig) ? true : l.requires_age_gate) && o && !await new Promise(t => {
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
    onConfirmActivityLaunchChecksAlertOpen: s
  } = e, o = null != n ? n : await m({
    applicationId: r,
    channelId: null == a ? true : a.id,
    guildId: null != (t = null == a ? true : a.getGuildId()) ? t : true
  });
  return null != o && (!!((0, i.Lt)(o.flags, h.gfo.EMBEDDED_RELEASED) || o.isVerified || l.Ay.hasActivityEverBeenLaunched(r)) || new Promise(e => {
    null == s || s(), (0, d.q)({
      application: o,
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