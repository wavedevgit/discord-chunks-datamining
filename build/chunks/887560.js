/** Chunk was on 90432 **/
/** chunk id: 887560, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Au: () => b,
  UD: () => A,
  bH: () => S,
  gN: () => u,
  mA: () => h,
  qk: () => N
}), require("./896048.js");
var Chunk417597 = require("./417597.js"),
  Chunk832712 = require("./832712.js"),
  Chunk734057 = require("./734057.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk769591 = require("./769591.js"),
  Chunk393432 = require("./393432.js"),
  Chunk24873 = require("./24873.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk355097 = require("./355097.js");

function S(e) {
  let i = (0, n.bG)([a.Ay], () => a.Ay.resolveUnreadSetting(e)),
    t = (0, n.bG)([a.Ay], () => a.Ay.resolvedMessageNotifications(e));
  return {
    unread: i,
    notification: t,
    preset: (0, l.jU)(i, t)
  }
}

function A(e) {
  let i = (0, n.yK)([a.Ay], () => (0, r.ct)(a.Ay.getChannelOverrides(e.guild_id), {
      ignoreMute: true,
      ignoreUnreadSetting: false,
      ignoreNotificationSetting: false
    })),
    [t, d] = (0, n.yK)([a.Ay, s.A], () => {
      let t = s.A.getChannel(e.parent_id);
      return null != t && i.includes(t.id) ? ["parent", (0, l.jL)((0, l.jU)(a.Ay.resolveUnreadSetting(t), a.Ay.resolvedMessageNotifications(t)))] : ["guild", (0, l.jL)((0, l.jU)(a.Ay.getGuildUnreadSetting(e.guild_id), a.Ay.getMessageNotifications(e.guild_id)))]
    }, [e.guild_id, e.parent_id, i]);
  return {
    inherited: !i.includes(e.id),
    inheritedFrom: t,
    inheritedPreset: d
  }
}

function u(e, i, t) {
  let n = a.Ay.getChannelIdFlags(e, i);
  t === l.N9.ALL_MESSAGES ? d.A.updateChannelOverrideSettings(e, i, {
    message_notifications: o.orn.ALL_MESSAGES,
    flags: (0, _.mD)(n, f.vv.UNREADS_ALL_MESSAGES)
  }, c.fd.PresetAll) : t === l.N9.MENTIONS ? d.A.updateChannelOverrideSettings(e, i, {
    message_notifications: o.orn.ONLY_MENTIONS,
    flags: (0, _.mD)(n, f.vv.UNREADS_ONLY_MENTIONS)
  }, c.fd.PresetMentions) : t === l.N9.NOTHING && d.A.updateChannelOverrideSettings(e, i, {
    message_notifications: o.orn.NO_MESSAGES,
    flags: (0, _.mD)(n, f.vv.UNREADS_ONLY_MENTIONS)
  }, c.fd.PresetNothing)
}

function b(e, i) {
  d.A.updateChannelOverrideSettings(e, i, {
    message_notifications: o.orn.NULL,
    flags: (0, _.PW)(a.Ay.getChannelIdFlags(e, i))
  }, c.fd.PresetDefault)
}

function h(e, i, t) {
  let n = a.Ay.getChannelIdFlags(e, i);
  d.A.updateChannelOverrideSettings(e, i, {
    flags: (0, _.mD)(n, t === g.e.ALL_MESSAGES ? f.vv.UNREADS_ALL_MESSAGES : f.vv.UNREADS_ONLY_MENTIONS)
  }, c.G_.unreads(t))
}

function N(e, i, t) {
  d.A.updateChannelOverrideSettings(e, i, {
    message_notifications: t
  }, c.G_.notifications(t))
}