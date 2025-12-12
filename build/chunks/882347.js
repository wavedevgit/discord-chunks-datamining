/** Chunk was on web.js **/
/** chunk id: 882347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => y
}), require("./997841.js");
var Chunk252258 = require("./252258.js"),
  Chunk95015 = require("./95015.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk592125 = require("./592125.js"),
  Chunk317381 = require("./317381.js"),
  Chunk424291 = require("./424291.jsx"),
  Chunk966434 = require("./966434.js"),
  Chunk649591 = require("./649591.jsx"),
  Chunk16609 = require("./16609.js"),
  Chunk224189 = require("./224189.js"),
  Chunk574952 = require("./574952.js"),
  Chunk981631 = require("./981631.js");
async function h(e) {
  let {
    applicationId: t,
    channelId: n,
    guildId: i
  } = e;
  try {
    return await (0, p.Z)(t, n)
  } catch (s) {
    let e = null != i ? r.E.GUILD_CHANNEL : r.E.PRIVATE_CHANNEL;
    o.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: "",
      applicationId: t,
      channelId: null != n ? n : null,
      guildId: null != i ? i : null,
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
      o = (0, f.p)(null == i ? true : i.location),
      a = s.Z.getChannel(o);
    if (null == i || null == a) return void e(true);
    null == r || r(), (0, u.Z)(t, a, () => {
      (0, _.Z)().leaveActivity({
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
    onConfirmActivityLaunchChecksAlertOpen: o
  } = e;
  if (null == i.nsfwAllowed) {
    var a, s, l;
    let e = null != t ? t : await h({
      applicationId: n,
      channelId: null == r ? true : r.id,
      guildId: null != (s = null == r ? true : r.getGuildId()) ? s : true
    });
    if (null == e || null != (l = null == (a = e.embeddedActivityConfig) ? true : a.requires_age_gate) && l && !await new Promise(t => {
        null == o || o(), (0, c.V)({
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
    channel: o,
    onConfirmActivityLaunchChecksAlertOpen: a
  } = e, s = null != n ? n : await h({
    applicationId: r,
    channelId: null == o ? true : o.id,
    guildId: null != (t = null == o ? true : o.getGuildId()) ? t : true
  });
  return null != s && (!!((0, i.yE)(s.flags, m.udG.EMBEDDED_RELEASED) || s.isVerified || l.ZP.hasActivityEverBeenLaunched(r)) || new Promise(e => {
    null == a || a(), (0, d.j)({
      application: s,
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