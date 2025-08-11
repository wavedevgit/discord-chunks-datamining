/** Chunk was on web.js **/
/** chunk id: 368478, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => E,
  Z: () => g
}), require("./388685.js"), require("./997841.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk317381 = require("./317381.js"),
  Chunk122613 = require("./122613.js"),
  Chunk16609 = require("./16609.js"),
  Chunk574952 = require("./574952.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk783097 = require("./783097.js"),
  Chunk895924 = require("./895924.js"),
  Chunk812236 = require("./812236.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function g(e) {
  let {
    context: t,
    primaryEntryPointCommand: n,
    application: a,
    showAppLauncherPopup: l = false
  } = e, [f, g] = r.useState(false), E = (0, i.e7)([o.ZP], () => o.ZP.getCurrentEmbeddedActivity()), b = l ? m.t.cpT0Cg : m.t["0hKkS0"], y = r.useMemo(() => null != n ? (0, d.XZ)(n.displayName) : m.intl.string(m.t["3xjX0d"]), [n]), O = true !== a.flags && (0, p.yE)(a.flags, h.udG.EMBEDDED), v = null != E && E.applicationId === a.id && (0, s.p)(E.location) === t.channel.id, {
    analyticsLocations: I
  } = (0, u.ZP)(c.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON), T = null != t.channel.recipients ? t.channel.recipients[0] : true;
  return {
    isExecutingLaunchInteraction: f,
    buttonText: (0, _.ms)({
      context: t,
      applicationId: a.id,
      botUserId: T
    }) && O ? v ? m.intl.string(m.t["Hi1/aW"]) : null != y ? y : m.intl.string(m.t.zKX8Nj) : m.intl.string(b),
    hasActiveMatchingEmbeddedActivity: v,
    isEmbeddedApp: O,
    currentEmbeddedActivity: E,
    channelRecipientUserId: T,
    setIsExecutingLaunchInteraction: g,
    analyticsLocations: I
  }
}

function E(e) {
  let {
    context: t,
    application: n,
    isEmbeddedApp: i,
    hasActiveMatchingEmbeddedActivity: o,
    currentEmbeddedActivity: s,
    onOpenButtonPress: c,
    channelRecipientUserId: u,
    setIsExecutingLaunchInteraction: d,
    analyticsLocations: p
  } = e, h = (0, _.ms)({
    context: t,
    applicationId: n.id,
    botUserId: u
  }) && i, m = r.useCallback(() => {
    o && null != s ? (0, l.Z)().leaveActivity({
      location: s.location,
      applicationId: s.applicationId
    }) : (d(true), (0, a.Z)({
      targetApplicationId: n.id,
      channelId: t.channel.id,
      analyticsLocations: p,
      onExecutedCallback: () => {
        d(false)
      },
      commandOrigin: f.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
    }))
  }, [o, t.channel.id, n.id, s, p, d]);
  return h ? m : c
}