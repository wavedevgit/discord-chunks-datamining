/** Chunk was on web.js **/
/** chunk id: 882347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => y
}), require("./997841.js");
var Chunk252258 = require("./252258.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk592125 = require("./592125.js"),
  Chunk630388 = require("./630388.js"),
  Chunk317381 = require("./317381.js"),
  Chunk424291 = require("./424291.jsx"),
  Chunk966434 = require("./966434.js"),
  Chunk649591 = require("./649591.jsx"),
  Chunk16609 = require("./16609.js"),
  Chunk224189 = require("./224189.js"),
  Chunk574952 = require("./574952.js"),
  Chunk981631 = require("./981631.js");
async function m(e) {
  let {
    applicationId: t,
    channelId: n,
    guildId: o
  } = e;
  try {
    return await (0, _.Z)(t, n)
  } catch (s) {
    let e = null != o ? r.E.GUILD_CHANNEL : r.E.PRIVATE_CHANNEL;
    i.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: "",
      applicationId: t,
      channelId: null != n ? n : null,
      guildId: null != o ? o : null,
      error: new a.Hx(s),
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
    let i = l.ZP.getSelfEmbeddedActivities().get(t.id),
      a = (0, f.p)(null == i ? true : i.location),
      s = o.Z.getChannel(a);
    if (null == i || null == s) return void e(true);
    null == r || r(), (0, u.Z)(t, s, () => {
      (0, p.Z)().leaveActivity({
        location: i.location,
        applicationId: t.id,
        shouldClosePopout: n
      }), e(true)
    }, () => e(false))
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
      guildId: null != (s = null == r ? true : r.getGuildId()) ? s : true
    });
    if (null == e || null != (l = null == (o = e.embeddedActivityConfig) ? true : o.requires_age_gate) && l && !await new Promise(t => {
        null == a || a(), (0, c.V)({
          application: e,
          channelId: null == r ? true : r.id,
          onAgree: () => t(true),
          onDisagree: () => t(false)
        })
      })) returnfalse
  }
  returntrue
}
async function b(e) {
  var t;
  let {
    application: n,
    applicationId: r,
    channel: i,
    onConfirmActivityLaunchChecksAlertOpen: a
  } = e, o = null != n ? n : await m({
    applicationId: r,
    channelId: null == i ? true : i.id,
    guildId: null != (t = null == i ? true : i.getGuildId()) ? t : true
  });
  return null != o && (!!((0, s.yE)(o.flags, h.udG.EMBEDDED_RELEASED) || o.isVerified || l.ZP.hasActivityEverBeenLaunched(r)) || new Promise(e => {
    null == a || a(), (0, d.j)({
      application: o,
      onConfirm: () => e(true),
      onCancel: () => e(false)
    })
  }))
}
async function y(e) {
  return !!await g({
    currentEmbeddedApplication: e.currentEmbeddedApplication,
    shouldClosePopoutOnLeaveCurrentEmbeddedApplication: e.shouldClosePopoutOnLeaveCurrentEmbeddedApplication,
    onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen
  }) && !!await E(e) && !!await b(e)
}