/** Chunk was on 73726 **/
/** chunk id: 368478, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => _,
  Z: () => b
}), require("./388685.js"), require("./997841.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk317381 = require("./317381.js"),
  Chunk122613 = require("./122613.js"),
  Chunk16609 = require("./16609.js"),
  Chunk574952 = require("./574952.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk783097 = require("./783097.js"),
  Chunk895924 = require("./895924.js"),
  Chunk812236 = require("./812236.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    context: t,
    primaryEntryPointCommand: n,
    application: a,
    showAppLauncherPopup: s = false
  } = e, [p, b] = r.useState(false), _ = (0, i.e7)([l.ZP], () => l.ZP.getCurrentEmbeddedActivity()), y = s ? g.t.cpT0Cq : g.t["0hKkS+"], C = r.useMemo(() => null != n ? (0, d.XZ)(n.displayName) : g.intl.string(g.t["3xjX0U"]), [n]), v = true !== a.flags && (0, h.yE)(a.flags, m.udG.EMBEDDED), x = null != _ && _.applicationId === a.id && (0, o.p)(_.location) === t.channel.id, {
    analyticsLocations: O
  } = (0, u.ZP)(c.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON), E = null != t.channel.recipients ? t.channel.recipients[0] : true;
  return {
    isExecutingLaunchInteraction: p,
    buttonText: (0, f.ms)({
      context: t,
      applicationId: a.id,
      botUserId: E
    }) && v ? x ? g.intl.string(g.t["Hi1/aQ"]) : null != C ? C : g.intl.string(g.t.zKX8Nu) : g.intl.string(y),
    hasActiveMatchingEmbeddedActivity: x,
    isEmbeddedApp: v,
    currentEmbeddedActivity: _,
    channelRecipientUserId: E,
    setIsExecutingLaunchInteraction: b,
    analyticsLocations: O
  }
}

function _(e) {
  let {
    context: t,
    application: n,
    isEmbeddedApp: i,
    hasActiveMatchingEmbeddedActivity: l,
    currentEmbeddedActivity: o,
    onOpenButtonPress: c,
    channelRecipientUserId: u,
    setIsExecutingLaunchInteraction: d,
    analyticsLocations: h
  } = e, m = (0, f.ms)({
    context: t,
    applicationId: n.id,
    botUserId: u
  }), g = r.useCallback(() => {
    l && null != o ? (0, s.Z)().leaveActivity({
      location: o.location,
      applicationId: o.applicationId
    }) : (d(true), (0, a.Z)({
      targetApplicationId: n.id,
      channelId: t.channel.id,
      analyticsLocations: h,
      onExecutedCallback: () => {
        d(false)
      },
      commandOrigin: p.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
    }))
  }, [l, t.channel.id, n.id, o, h, d]);
  return m && i ? g : c
}