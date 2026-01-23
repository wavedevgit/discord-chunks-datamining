/** Chunk was on 90432 **/
/** chunk id: 887560, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  Au: () => N,
  UD: () => u,
  bH: () => S,
  gN: () => A,
  mA: () => E,
  qk: () => b
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
  let n = (0, t.bG)([r.Ay], () => r.Ay.resolveUnreadSetting(e)),
    i = (0, t.bG)([r.Ay], () => r.Ay.resolvedMessageNotifications(e));
  return {
    unread: n,
    notification: i,
    preset: (0, c.jU)(n, i)
  }
}

function u(e) {
  let n = (0, t.yK)([r.Ay], () => (0, d.ct)(r.Ay.getChannelOverrides(e.guild_id), {
      ignoreMute: true,
      ignoreUnreadSetting: false,
      ignoreNotificationSetting: false
    })),
    [i, _] = (0, t.yK)([r.Ay, s.A], () => {
      let i = s.A.getChannel(e.parent_id);
      return null != i && n.includes(i.id) ? ["parent", (0, c.jL)((0, c.jU)(r.Ay.resolveUnreadSetting(i), r.Ay.resolvedMessageNotifications(i)))] : ["guild", (0, c.jL)((0, c.jU)(r.Ay.getGuildUnreadSetting(e.guild_id), r.Ay.getMessageNotifications(e.guild_id)))]
    }, [e.guild_id, e.parent_id, n]);
  return {
    inherited: !n.includes(e.id),
    inheritedFrom: i,
    inheritedPreset: _
  }
}

function A(e, n, i) {
  let t = r.Ay.getChannelIdFlags(e, n);
  i === c.N9.ALL_MESSAGES ? _.A.updateChannelOverrideSettings(e, n, {
    message_notifications: l.orn.ALL_MESSAGES,
    flags: (0, o.mD)(t, h.vv.UNREADS_ALL_MESSAGES)
  }, a.fd.PresetAll) : i === c.N9.MENTIONS ? _.A.updateChannelOverrideSettings(e, n, {
    message_notifications: l.orn.ONLY_MENTIONS,
    flags: (0, o.mD)(t, h.vv.UNREADS_ONLY_MENTIONS)
  }, a.fd.PresetMentions) : i === c.N9.NOTHING && _.A.updateChannelOverrideSettings(e, n, {
    message_notifications: l.orn.NO_MESSAGES,
    flags: (0, o.mD)(t, h.vv.UNREADS_ONLY_MENTIONS)
  }, a.fd.PresetNothing)
}

function N(e, n) {
  _.A.updateChannelOverrideSettings(e, n, {
    message_notifications: l.orn.NULL,
    flags: (0, o.PW)(r.Ay.getChannelIdFlags(e, n))
  }, a.fd.PresetDefault)
}

function E(e, n, i) {
  let t = r.Ay.getChannelIdFlags(e, n);
  _.A.updateChannelOverrideSettings(e, n, {
    flags: (0, o.mD)(t, i === g.e.ALL_MESSAGES ? h.vv.UNREADS_ALL_MESSAGES : h.vv.UNREADS_ONLY_MENTIONS)
  }, a.G_.unreads(i))
}

function b(e, n, i) {
  _.A.updateChannelOverrideSettings(e, n, {
    message_notifications: i
  }, a.G_.notifications(i))
}