/** Chunk was on web.js **/
/** chunk id: 775666, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EQ: () => E,
  T5: () => b,
  ZP: () => g
}), require("./388685.js"), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk221259 = require("./221259.js"),
  Chunk113449 = require("./113449.js"),
  Chunk686660 = require("./686660.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let t = E(e);
  return e.type === _.d4z.GUILD_VOICE ? null : <a.sNh id={"channel_notification_settings"} label={m.intl.string(m.t.HcoRu7)}>{t}</a.sNh>
}

function E(e) {
  let t = (0, l.ZA)(e),
    n = (0, l.yN)(e),
    c = t.preset === u.s8.CUSTOM && !n.inherited,
    [f, p] = i.useState(c),
    [h, g] = i.useState(false),
    E = h ? u.s8.CUSTOM : t.preset,
    y = b(e, () => g(false)),
    O = (0, o.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(e)),
    v = "parent" === n.inheritedFrom ? m.intl.string(m.t.wlrV1d) : m.intl.string(m.t["1Wn2Mz"]);
  return e.type === _.d4z.GUILD_STAGE_VOICE ? <a.kSQ>{<a.k5B id={"cns_default"} label={v} checked={n.inherited} group={"channel_notification_settings"} subtext={t.notification === _.bL.NO_MESSAGES ? m.intl.string(m.t.CtVGyc) : m.intl.string(m.t["BENn//"])} action={() => (0, l.JK)(e.guild_id, e.id)} />}{<a.k5B id={"cns_only_mention"} group={"channel_notification_settings"} checked={!n.inherited && t.notification !== _.bL.NO_MESSAGES} label={m.intl.string(m.t["BENn//"])} action={() => (0, l.ft)(e.guild_id, e.id, _.bL.ONLY_MENTIONS)} />}{<a.k5B id={"cns_no_message"} group={"channel_notification_settings"} label={m.intl.string(m.t.CtVGyc)} checked={!n.inherited && t.notification === _.bL.NO_MESSAGES} action={() => (0, l.ft)(e.guild_id, e.id, _.bL.NO_MESSAGES)} />}</a.kSQ> : <r.Fragment>{e.isForumLikeChannel() ? <r.Fragment>{<a.S89 id={"new-forum-threads-created"} label={m.intl.string(m.t.Rkgjpq)} checked={O} action={() => s.Z.setForumThreadsCreated(e, !O)} />}{<a.Clw />}</r.Fragment> : null}{<a.kSQ>{<a.k5B id={"cns_default"} label={v} group={"channel_notification_settings"} checked={n.inherited && !h} subtext={n.inheritedPreset} action={() => ((0, l.JK)(e.guild_id, e.id), g(false))} />}{<a.k5B id={"cns_everything"} group={"channel_notification_settings"} label={m.intl.string(m.t.hZrr6u)} checked={!n.inherited && E === u.s8.ALL_MESSAGES} action={() => ((0, l._m)(e.guild_id, e.id, u.s8.ALL_MESSAGES), g(false))} />}{<a.k5B id={"cns_essentials"} group={"channel_notification_settings"} label={m.intl.string(m.t.y59NJi)} checked={!n.inherited && E === u.s8.MENTIONS} action={() => ((0, l._m)(e.guild_id, e.id, u.s8.MENTIONS), g(false))} />}{<a.k5B id={"cns_nothing"} group={"channel_notification_settings"} label={m.intl.string(m.t["pGn/bG"])} checked={!n.inherited && E === u.s8.NOTHING} action={() => ((0, l._m)(e.guild_id, e.id, u.s8.NOTHING), g(false))} />}{<a.k5B id={"cns_custom"} group={"channel_notification_settings"} label={m.intl.string(m.t["32yow8"])} checked={h || !n.inherited && E === u.s8.CUSTOM} action={() => (p(true), g(true))} />}</a.kSQ>}{(f || c) && y}</r.Fragment>
}

function b(e, t) {
  let {
    notification: n,
    unread: i
  } = (0, l.ZA)(e), o = e => {
    e(), t()
  }, u = t => {
    let n = {
      message_notifications: t
    };
    t === _.bL.ALL_MESSAGES && i !== p.i.ALL_MESSAGES && (n.flags = (0, c.pq)(d.ZP.getChannelIdFlags(e.guild_id, e.id), h.ic.UNREADS_ALL_MESSAGES)), s.Z.updateChannelOverrideSettings(e.guild_id, e.id, n, f.UE.notifications(t))
  };
  return <a.kSQ>{<a.sNh id={"unread_setting"} label={"Unread Badges"}>{<a.k5B id={"unread_setting_all_messages"} group={"unread_setting"} checked={i === p.i.ALL_MESSAGES} label={m.intl.string(m.t["HVah//"])} action={() => o(() => (0, l.IG)(e.guild_id, e.id, p.i.ALL_MESSAGES))} />}{<a.k5B id={"unread_setting_mention_only"} group={"unread_setting"} checked={i === p.i.ONLY_MENTIONS} label={m.intl.string(m.t["tu+ZWF"])} disabled={i !== p.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES} subtext={i !== p.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES ? m.intl.string(m.t.eP8yWV) : true} action={() => o(() => (0, l.IG)(e.guild_id, e.id, p.i.ONLY_MENTIONS))} />}</a.sNh>}{<a.sNh id={"push_settings"} label={m.intl.string(m.t.HcoRu7)}>{<a.k5B group={"notification-preset"} id={"push_settings_everything"} label={m.intl.string(m.t["HVah//"])} checked={n === _.bL.ALL_MESSAGES} subtext={i !== p.i.ALL_MESSAGES && n !== _.bL.ALL_MESSAGES ? m.intl.string(m.t.idXSbG) : true} action={() => o(() => u(_.bL.ALL_MESSAGES))} />}{<a.k5B group={"notification-preset"} id={"push_settings_everything_mention"} checked={n === _.bL.ONLY_MENTIONS} label={m.intl.string(m.t["tu+ZWF"])} action={() => o(() => u(_.bL.ONLY_MENTIONS))} />}{<a.k5B group={"notification-preset"} id={"push_settings_everything_nothing"} label={m.intl.string(m.t.X4wWUl)} checked={n === _.bL.NO_MESSAGES} action={() => o(() => u(_.bL.NO_MESSAGES))} />}</a.sNh>}</a.kSQ>
}