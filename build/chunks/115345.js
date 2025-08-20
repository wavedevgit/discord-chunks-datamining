/** Chunk was on web.js **/
/** chunk id: 115345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F6: () => U,
  _Y: () => Q,
  cG: () => G,
  ly: () => B,
  oL: () => X,
  vo: () => F
}), require("./388685.js"), require("./997841.js"), require("./415506.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk87051 = require("./87051.js"),
  Chunk181945 = require("./181945.js"),
  Chunk149071 = require("./149071.js"),
  Chunk516373 = require("./516373.js"),
  Chunk480294 = require("./480294.js"),
  Chunk650774 = require("./650774.js"),
  Chunk888369 = require("./888369.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk9156 = require("./9156.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js"),
  Chunk960048 = require("./960048.js"),
  Chunk709054 = require("./709054.js"),
  Chunk223683 = require("./223683.js"),
  Chunk630114 = require("./630114.js"),
  Chunk506712 = require("./506712.js"),
  Chunk468788 = require("./468788.js"),
  Chunk789662 = require("./789662.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function U(e, t) {
  let [n, i] = r.useState(R.nf), [a, s] = r.useState({});
  (0, _.D)();
  let l = (0, o.Wu)([g.Z], () => g.Z.getGuildsArray()),
    c = r.useCallback(() => {
      let r = {};
      for (let i of l) r[i.id] = Z(i, n, e, t, a[i.id]);
      return r
    }, [l, n, e, t, a]),
    [u, d] = r.useState(() => c());
  return r.useEffect(() => d(c()), [c]), {
    guildPlans: u,
    overrideGuild: r.useCallback((e, t) => {
      s(n => k(j({}, n), {
        [e]: t
      }))
    }, []),
    setThresholds: i,
    getDebug: () => V(Object.values(u), t)
  }
}

function G(e, t) {
  return g.Z.getGuildsArray().some(n => {
    let [r] = p.Z.hasConsented(P.pjP.PERSONALIZATION) ? (0, C.q)(n, R.nf, e, t, false) : (0, C.A)(n, e);
    return r === R.AR.UseGreyDot
  })
}

function B() {
  let e = Chunk430824.Z.getGuildsArray(),
    t = {};
  for (let i of module) {
    var n, r;
    let e = null != (r = (null != (n = Chunk9156.ZP.getAllSettings().userGuildSettings[Chunk392711.id]) ? require : {}).flags) ? Chunk647438 : 0;
    e = (0, Chunk630388.mB)(module, Chunk526761.vc.UNREADS_ALL_MESSAGES, true), e = (0, Chunk630388.mB)(module, Chunk526761.vc.UNREADS_ONLY_MENTIONS, false), exports[Chunk392711.id] = {
      flags: module
    }
  }
  W(exports), Chunk626135.default.track(Chunk981631.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
    auto_migrated: true,
    num_unread_guids_after: module.filter(e => m.default.hasUnread(e.id)).length
  })
}

function Z(e, t, n, r, i) {
  var a;
  let [o, s, l] = p.Z.hasConsented(P.pjP.PERSONALIZATION) ? (0, C.q)(e, t, n, r, true) : (0, C.A)(e, n), c = null != (a = n.filter(t => t.guild_id === e.id)[0]) ? a : {}, u = (0, A.Z)(e, null != i ? i : o, c, r, t);
  return {
    guildId: e.id,
    mode: o,
    debugReason: l,
    actions: u,
    overrideMode: i,
    messagePain: c.messages === R.XR.High,
    visitsALot: s,
    muted: b.ZP.isMuted(e.id) && !b.ZP.isTemporarilyMuted(e.id)
  }
}

function V(e, t) {
  let n = t.reduce((e, t) => {
      var n;
      return e + Number(null != (n = t.num_year_opens) ? n : 0)
    }, 0),
    r = t.reduce((e, t) => {
      var n;
      return e + Number(null != (n = t.num_month_opens) ? n : 0)
    }, 0),
    i = E.ZP.getFlattenedGuildIds(),
    o = a().sortBy(Object.values(e), e => {
      let t = i.indexOf(e.guildId);
      return false === t ? i.length : t
    }),
    s = [
      ["Use Grey Dot", new Set([R.AR.UseGreyDot])],
      ["Keep As Is", new Set([R.AR.KeepAsIs])]
    ].map(e => {
      let [t, n] = e, r = o.filter(e => {
        var t;
        return n.has(null != (t = e.overrideMode) ? t : e.mode)
      }).map(e => {
        let t = g.Z.getGuild(e.guildId),
          n = e.actions.map(e => {
            var t;
            return "- ".concat(e.label).concat(null != (t = e.debug) ? t : "")
          }).join("\n");
        return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
      });
      return "# ".concat(t, "\n\n").concat(r.join("\n\n"))
    });
  return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(r, "\n\n").concat(s.join("\n\n"))
}

function F(e) {
  let [t, n] = r.useState(false), [i, a] = r.useState(false), o = r.useCallback(async t => {
    if (i) throw Error("Already submitted notifications migration");
    n(true);
    try {
      await H(t, e), a(true)
    } finally {
      n(false)
    }
  }, [i, e]);
  return {
    submitting: t,
    submitted: i,
    saveSettings: o
  }
}
async function H(e, t) {
  if (b.ZP.useNewNotifications) return void c.Z.show({
    title: "Info",
    body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
  });
  let n = Y(e);
  try {
    let t = {};
    for (let n of Object.values(e)) {
      var r, i;
      let e = null != (r = b.ZP.getAllSettings().userGuildSettings[n.guildId]) ? r : {},
        a = {};
      for (let t of n.actions) null == (i = t.apply) || i.call(t, a, e);
      t[n.guildId] = a
    }
    await W(t);
    let a = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
    if (a.length > 0) {
      let e = setTimeout(n, 5e3);
      (0, d.Z)(a, true, () => {
        l.Z.dispatch({
          type: "RECOMPUTE_READ_STATES"
        }), clearTimeout(e), n()
      })
    } else n()
  } catch (e) {
    I.Z.captureException(e), c.Z.show({
      title: x.intl.string(x.t.j2d6Ki),
      body: x.intl.string(x.t.mCjLAQ),
      onConfirm: t
    })
  }
}

function Y(e) {
  let t = Object.values(e).filter(e => {
      var t;
      return (null != (t = e.overrideMode) ? t : e.mode) === R.AR.UseGreyDot
    }).map(e => {
      var t;
      return {
        plan: e,
        memberCount: null != (t = h.Z.getMemberCount(e.guildId)) ? t : 0
      }
    }),
    n = {
      num_unread_guilds_before: T.default.keys(e).filter(e => m.default.hasUnread(e)).length,
      unmuted_server_ids: t.filter(e => b.ZP.isMuted(e.plan.guildId)).map(e => e.plan.guildId)
    };
  return () => {
    y.default.track(P.rMx.NOTIFICATION_MIGRATION_COMPLETED, k(j({}, n), {
      auto_migrated: true,
      pre_selected_server_ids: Object.values(e).filter(e => e.mode === R.AR.UseGreyDot).map(e => e.guildId),
      final_selected_server_ids: t.map(e => e.plan.guildId),
      num_unread_guids_after: T.default.keys(e).filter(e => m.default.hasUnread(e)).length,
      num_tiny_servers_selected: t.filter(e => e.memberCount <= 20).length,
      num_small_servers_selected: t.filter(e => e.memberCount > 20 && e.memberCount <= 200).length,
      num_medium_servers_selected: t.filter(e => e.memberCount > 200 && e.memberCount <= 1e3).length,
      num_large_servers_selected: t.filter(e => e.memberCount > 1e3).length,
      num_quiet_servers_selected: t.filter(e => !e.plan.messagePain).length,
      num_busy_servers_selected: t.filter(e => e.plan.messagePain).length,
      num_frequent_visited_servers_selected: t.filter(e => e.plan.visitsALot).length,
      num_infrequent_visited_servers_selected: t.filter(e => !e.plan.visitsALot).length
    }))
  }
}
async function W(e) {
  await K(() => z()), await K(() => u.Z.setAccountFlag(N.c.USE_NEW_NOTIFICATIONS, true));
  let t = await K(() => f.Z.saveUserGuildSettingsBulk(e));
  l.Z.dispatch({
    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
    userGuildSettings: t
  }), l.Z.dispatch({
    type: "RECOMPUTE_READ_STATES"
  })
}
async function K(e) {
  for (let t = 0; t < 3; t++) try {
    return await e()
  } catch (e) {
    await new Promise(e => setTimeout(e, 1e3 * (t + 1)))
  }
  return await e()
}
async function z() {
  let e = await (0, Chunk223683.Tn)();
  module.length > 0 ? await q() && (0, Chunk223683.dt)(module) : (0, Chunk223683.$U)("Backup from ".concat(new Date().toLocaleDateString()))
}

function q() {
  return new Promise(e => {
    c.Z.show({
      title: "Create new Backup?",
      body: "It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?",
      confirmText: "Take New Backup",
      cancelText: "Skip Backup",
      onConfirm: () => e(true),
      onCancel: () => e(false)
    })
  })
}
async function X() {
  Chunk433517.K.set("turnedOffNewNotifications", true), Chunk626135.default.track(Chunk981631.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
    num_guilds_with_new_setting: Chunk430824.Z.getGuildsArray().filter(e => b.ZP.resolveGuildUnreadSetting(e) === w.i.ONLY_MENTIONS).length
  });
  let e = await (0, Chunk223683.Tn)(),
    t = a().sortBy(module, e => new Date(e.recorded_at).getTime());
  if (exports.length > 0) {
    let e = exports[exports.length - 1];
    await new Promise(t => c.Z.show({
      title: "Please Confirm",
      body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
      onConfirm: t,
      cancelText: "Cancel",
      onCancel: () => {}
    })), await (0, Chunk223683.xx)(module.id), await Chunk87051.Z.setAccountFlag(Chunk468788.c.USE_NEW_NOTIFICATIONS, false)
  } else await Chunk87051.Z.setAccountFlag(Chunk468788.c.USE_NEW_NOTIFICATIONS, false)
}

function Q(e) {
  var t, n, r;
  if (null == e) return [];
  let i = a().keyBy(null != (t = e.voice_joins) ? t : [], "channel_id"),
    o = a().keyBy(null != (n = e.message_sends) ? n : [], "channel_id");
  return (null != (r = e.channel_opens) ? r : []).map(e => {
    var t, n, r, a, s, l, c, u, d, f, _;
    let p = null != (t = i[e.channel_id]) ? t : {},
      h = null != (n = o[e.channel_id]) ? n : {};
    return {
      channel_id: e.channel_id,
      num_year_opens: Number(null != (r = e.year_opens) ? r : 0),
      num_month_opens: Number(null != (a = e.one_month_opens) ? a : 0),
      num_three_month_opens: Number(null != (s = e.three_month_opens) ? s : 0),
      num_six_month_opens: Number(null != (l = e.six_month_opens) ? l : 0),
      num_messages: Number(null != (c = null == h ? true : h.num_messages) ? c : 0),
      num_year_voice_joins: Number(null != (u = null == p ? true : p.year_opens) ? u : 0),
      num_month_voice_joins: Number(null != (d = null == p ? true : p.one_month_opens) ? d : 0),
      num_three_month_voice_joins: Number(null != (f = null == p ? true : p.three_month_opens) ? f : 0),
      num_six_month_voice_joins: Number(null != (_ = null == p ? true : p.six_month_opens) ? _ : 0)
    }
  }).filter(v.lm)
}