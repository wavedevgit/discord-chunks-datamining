/** Chunk was on web.js **/
/** chunk id: 488926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $3: () => K,
  HJ: () => H,
  Ib: () => q,
  MJ: () => z,
  TJ: () => G,
  aH: () => k,
  cc: () => U,
  li: () => Y,
  qN: () => N,
  r: () => V,
  wO: () => B,
  wT: () => F,
  x3: () => T,
  xT: () => W,
  yC: () => x
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk155718 = require("./155718.js"),
  Chunk229527 = require("./229527.js"),
  Chunk316031 = require("./316031.js"),
  Chunk164956 = require("./164956.js"),
  Chunk857071 = require("./857071.js"),
  Chunk152007 = require("./152007.js"),
  Chunk95701 = require("./95701.js"),
  Chunk260509 = require("./260509.js"),
  Chunk34457 = require("./34457.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk7864 = require("./7864.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}
let T = Chunk136722.iu(0),
  C = Chunk136722.kg(...i().values(Chunk652215.xBc)),
  N = Chunk136722.kg(Chunk652215.xBc.CREATE_INSTANT_INVITE, Chunk652215.xBc.CHANGE_NICKNAME, Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.SEND_MESSAGES, Chunk652215.xBc.EMBED_LINKS, Chunk652215.xBc.ATTACH_FILES, Chunk652215.xBc.READ_MESSAGE_HISTORY, Chunk652215.xBc.MENTION_EVERYONE, Chunk652215.xBc.USE_EXTERNAL_EMOJIS, Chunk652215.xBc.USE_EXTERNAL_STICKERS, Chunk652215.xBc.ADD_REACTIONS, Chunk652215.xBc.CREATE_PUBLIC_THREADS, Chunk652215.xBc.CREATE_PRIVATE_THREADS, Chunk652215.xBc.SEND_MESSAGES_IN_THREADS, Chunk652215.xBc.SEND_POLLS, Chunk652215.xBc.CONNECT, Chunk652215.xBc.SPEAK, Chunk652215.xBc.USE_VAD, Chunk652215.xBc.STREAM, Chunk652215.xBc.USE_EMBEDDED_ACTIVITIES, Chunk652215.xBc.USE_SOUNDBOARD, Chunk652215.xBc.REQUEST_TO_SPEAK, Chunk652215.xBc.USE_APPLICATION_COMMANDS, Chunk652215.xBc.CREATE_GUILD_EXPRESSIONS, Chunk652215.xBc.CREATE_EVENTS, Chunk652215.xBc.USE_EXTERNAL_APPS),
  R = Chunk136722.kg(Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.READ_MESSAGE_HISTORY),
  w = Chunk136722.kg(Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.SEND_MESSAGES, Chunk652215.xBc.CONNECT, Chunk652215.xBc.SPEAK, Chunk652215.xBc.STREAM, Chunk652215.xBc.USE_EMBEDDED_ACTIVITIES, Chunk652215.xBc.USE_EXTERNAL_APPS, Chunk652215.xBc.USE_EXTERNAL_EMOJIS, Chunk652215.xBc.USE_EXTERNAL_SOUNDS, Chunk652215.xBc.USE_EXTERNAL_STICKERS, Chunk652215.xBc.USE_SOUNDBOARD, Chunk652215.xBc.USE_VAD, Chunk652215.xBc.SEND_MESSAGES_IN_THREADS),
  P = Chunk136722.kg(Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.READ_MESSAGE_HISTORY),
  D = Chunk136722.kg(Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.READ_MESSAGE_HISTORY, Chunk652215.xBc.CHANGE_NICKNAME),
  x = Chunk136722.kg(Chunk652215.xBc.MANAGE_GUILD, Chunk652215.xBc.MANAGE_ROLES, Chunk652215.xBc.ADMINISTRATOR, Chunk652215.xBc.BAN_MEMBERS, Chunk652215.xBc.MANAGE_NICKNAMES, Chunk652215.xBc.CREATE_GUILD_EXPRESSIONS, Chunk652215.xBc.MANAGE_GUILD_EXPRESSIONS, Chunk652215.xBc.MANAGE_WEBHOOKS, Chunk652215.xBc.VIEW_AUDIT_LOG);

function L(e, t, n) {
  let r = !(arguments.length > 3) || true === arguments[3] || arguments[3];
  if (r && t.mfaLevel === v.EkJ.ELEVATED && n === h.default.getId()) {
    var i;
    (null == (i = y.default.getCurrentUser()) ? true : i.mfaEnabled) || (e = a.TF(e, v.Lti))
  }
  return e
}

function j(e, t, n, r) {
  let i = r[e];
  if (null != i && (n = a.TF(n, i.deny), n = a.WQ(n, i.allow)), null != t) {
    let e = T,
      i = T;
    for (let n = 0; n < t.roles.length; n++) {
      let s = r[t.roles[n]];
      null != s && (e = a.WQ(e, s.allow), i = a.WQ(i, s.deny))
    }
    n = a.TF(n, i), n = a.WQ(n, e);
    let s = r[t.userId];
    null != s && (n = a.TF(n, s.deny), n = a.WQ(n, s.allow));
    let c = a.zy(n, v.xBc.ADMINISTRATOR);
    (0, o.TR)(t) && !c && (n = a.pb(n, D)), (0, l.Z)(t) && !c && (n = a.pb(n, P))
  }
  return n
}

function M(e) {
  let {
    userId: t,
    member: n,
    guild: r,
    overwrites: i,
    roles: s,
    checkElevated: o = true,
    excludeGuildPermissions: l = false,
    lurkerPermissionsMask: c = R
  } = e;
  if (l) return j(r.id, n, T, i);
  let d = (s = null != s ? I({}, E.A.getUnsafeMutableRoles(r.id), s) : E.A.getUnsafeMutableRoles(r.id))[(0, p.af)(r)],
    f = null != d ? d.permissions : N;
  if (null != n)
    for (let e = 0; e < n.roles.length; e++) {
      let t = s[n.roles[e]];
      true !== t && (f = a.WQ(f, t.permissions))
    }
  return f = a.zy(f, v.xBc.ADMINISTRATOR) ? C : j(r.id, n, f, i), (u.A.isLurking(r.id) || (null == n ? true : n.isPending)) && (f = a.pb(f, c)), g.Ay.isCurrentUserGuest(r.id) && (f = a.pb(f, w)), L(f, r, t, o)
}

function k(e) {
  let t, {
      forceRoles: n,
      context: r,
      overwrites: i,
      roles: a,
      checkElevated: s = true,
      excludeGuildPermissions: o
    } = e,
    l = R;
  if (r instanceof f.YB) {
    var c;
    if (r.isScheduledForDeletion()) return T;
    if (f.Le.has(r.type)) {
      let e = m.A.getChannel(r.parent_id);
      return null == e ? T : G(r, k({
        forceRoles: n,
        context: e,
        overwrites: i,
        roles: a,
        checkElevated: s,
        excludeGuildPermissions: o
      }), false, false)
    }
    l = null != (c = r.computeLurkerPermissionsAllowList()) ? c : l, i = null != i ? I({}, r.permissionOverwrites, i) : r.permissionOverwrites;
    let e = r.getGuildId();
    t = null != e ? b.A.getGuild(e) : null
  } else i = null != i ? i : {}, t = r;
  if (null == t) return T;
  let u = {
    userId: v.dJq,
    nick: "",
    guildId: t.id,
    guildMemberAvatar: null,
    roles: A.default.keys(n),
    colorString: null,
    colorStrings: null,
    hoistRoleId: null,
    premiumSince: null,
    isPending: false,
    joinedAt: new Date().toISOString(),
    communicationDisabledUntil: null
  };
  return M({
    userId: v.dJq,
    member: u,
    guild: t,
    overwrites: i,
    roles: a,
    checkElevated: s,
    excludeGuildPermissions: o,
    lurkerPermissionsMask: l
  })
}

function U(e) {
  var t, n, r;
  let i, {
    user: a,
    context: s,
    overwrites: o,
    roles: l,
    checkElevated: u = true,
    excludeGuildPermissions: _ = false
  } = e;
  if (null == a) return T;
  let h = "string" == typeof a ? a : a.id,
    E = R;
  if (s instanceof f.YB) {
    if (s.isScheduledForDeletion()) return T;
    if (f.Le.has(s.type)) {
      let e = m.A.getChannel(s.parent_id);
      if (null == e || e.isScheduledForDeletion()) return T;
      let t = h === (null == (n = y.default.getCurrentUser()) ? true : n.id) && d.A.hasJoined(s.id);
      return G(s, U({
        user: a,
        context: e,
        overwrites: o,
        roles: l,
        checkElevated: u,
        excludeGuildPermissions: _
      }), t, g.Ay.isCurrentUserGuest(s.guild_id))
    }
    E = null != (r = s.computeLurkerPermissionsAllowList()) ? r : E, o = null != o ? I({}, s.permissionOverwrites, o) : s.permissionOverwrites;
    let e = s.getGuildId();
    i = null != e ? b.A.getGuild(e) : null
  } else o = null != o ? o : {}, i = s;
  if (null == i) return T;
  if (!(h === (null == (t = y.default.getCurrentUser()) ? true : t.id) && c.A.isViewingRoles(i.id)) && (0, p.bM)(i, h)) return L(C, i, h, u);
  let O = g.Ay.getMember(i.id, h);
  return M({
    userId: h,
    member: O,
    guild: i,
    overwrites: o,
    roles: l,
    checkElevated: u,
    excludeGuildPermissions: _,
    lurkerPermissionsMask: E
  })
}

function G(e, t, n, r) {
  return e.type !== v.rbe.PRIVATE_THREAD || n || r || a.zy(t, v.xBc.MANAGE_THREADS) ? a.zy(t, v.xBc.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !a.zy(t, v.xBc.MANAGE_THREADS) ? a.TF(t, v.xBc.SEND_MESSAGES) : a.kg(t, v.xBc.SEND_MESSAGES) : a.TF(t, v.xBc.SEND_MESSAGES) : T
}

function V(e, t) {
  if (f.Le.has(e.type)) returntrue;
  let {
    guild_id: n
  } = e;
  if (null == t || null == n || n !== t.guild_id) returnfalse;
  let r = I({}, e.permissionOverwrites),
    i = I({}, t.permissionOverwrites);
  return null == r[n] && (r[n] = W(n)), null == i[n] && (i[n] = W(n)), Object.keys(r).length === Object.keys(i).length && !Object.keys(r).some(e => {
    let t = r[e],
      n = i[e];
    return !(null != n && a.aI(n.deny, t.deny) && a.aI(n.allow, t.allow))
  })
}

function F(e) {
  var t;
  return i().some(E.A.getUnsafeMutableRoles(e.id), e => e.hoist && (0, _._m)(e, v.xBc.ADMINISTRATOR)) ? true : null != (t = e.ownerId) ? t : true
}

function B(e, t, n, r) {
  return !!(null != t && (0, p.bM)(e, t)) || null != n && (null == r || (0, O.zA)(n, r))
}

function H(e, t) {
  let n = g.Ay.getMember(e.id, t);
  if (null != n) return E.A.getSortedRoles(e.id).find(e => n.roles.includes(e.id))
}

function Y(e, t) {
  return null == t.hoistRoleId ? null : E.A.getRole(e.id, t.hoistRoleId)
}

function W(e) {
  return {
    id: e,
    type: s.r2.ROLE,
    allow: T,
    deny: T
  }
}

function K(e) {
  let {
    permission: t,
    user: n,
    context: r,
    overwrites: i,
    roles: s,
    excludeGuildPermissions: o
  } = e;
  return a.zy(U({
    user: n,
    context: r,
    overwrites: i,
    roles: s,
    checkElevated: true,
    excludeGuildPermissions: o
  }), t)
}

function z(e, t) {
  let n, r = {};
  if (t instanceof f.YB) {
    if (t.type === v.rbe.PRIVATE_THREAD || f.Le.has(t.type) && null == (t = m.A.getChannel(t.parent_id))) returnfalse;
    r = t.permissionOverwrites;
    let e = t.getGuildId();
    n = null != e ? b.A.getGuild(e) : null
  } else n = t;
  if (null == n) returnfalse;
  let i = E.A.getEveryoneRole(n).permissions,
    s = r[n.id];
  return null != s && (i = a.TF(i, s.deny), i = a.WQ(i, s.allow)), a.zy(i, e)
}

function q(e, t) {
  let n, r = {};
  if (t instanceof f.YB) {
    if (t.type === v.rbe.PRIVATE_THREAD || f.Le.has(t.type) && null == (t = m.A.getChannel(t.parent_id))) returnfalse;
    r = t.permissionOverwrites;
    let e = t.getGuildId();
    n = null != e ? b.A.getGuild(e) : null
  } else n = t;
  if (null == n) returnfalse;
  let s = E.A.getEveryoneRole(n);
  return !(!(0, _._m)(s, e) || i().some(r, t => a.zy(t.deny, e)))
}