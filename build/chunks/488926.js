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
  r: () => F,
  wO: () => B,
  wT: () => V,
  x3: () => T,
  xT: () => W,
  yC: () => L
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}
let T = Chunk136722.iu(0),
  C = Chunk136722.kg(...i().values(Chunk652215.xBc)),
  N = Chunk136722.kg(Chunk652215.xBc.CREATE_INSTANT_INVITE, Chunk652215.xBc.CHANGE_NICKNAME, Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.SEND_MESSAGES, Chunk652215.xBc.EMBED_LINKS, Chunk652215.xBc.ATTACH_FILES, Chunk652215.xBc.READ_MESSAGE_HISTORY, Chunk652215.xBc.MENTION_EVERYONE, Chunk652215.xBc.USE_EXTERNAL_EMOJIS, Chunk652215.xBc.USE_EXTERNAL_STICKERS, Chunk652215.xBc.ADD_REACTIONS, Chunk652215.xBc.CREATE_PUBLIC_THREADS, Chunk652215.xBc.CREATE_PRIVATE_THREADS, Chunk652215.xBc.SEND_MESSAGES_IN_THREADS, Chunk652215.xBc.SEND_POLLS, Chunk652215.xBc.CONNECT, Chunk652215.xBc.SPEAK, Chunk652215.xBc.USE_VAD, Chunk652215.xBc.STREAM, Chunk652215.xBc.USE_EMBEDDED_ACTIVITIES, Chunk652215.xBc.USE_SOUNDBOARD, Chunk652215.xBc.REQUEST_TO_SPEAK, Chunk652215.xBc.USE_APPLICATION_COMMANDS, Chunk652215.xBc.CREATE_GUILD_EXPRESSIONS, Chunk652215.xBc.CREATE_EVENTS, Chunk652215.xBc.USE_EXTERNAL_APPS),
  w = Chunk136722.kg(Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.READ_MESSAGE_HISTORY),
  R = Chunk136722.kg(Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.SEND_MESSAGES, Chunk652215.xBc.CONNECT, Chunk652215.xBc.SPEAK, Chunk652215.xBc.STREAM, Chunk652215.xBc.USE_EMBEDDED_ACTIVITIES, Chunk652215.xBc.USE_EXTERNAL_APPS, Chunk652215.xBc.USE_EXTERNAL_EMOJIS, Chunk652215.xBc.USE_EXTERNAL_SOUNDS, Chunk652215.xBc.USE_EXTERNAL_STICKERS, Chunk652215.xBc.USE_SOUNDBOARD, Chunk652215.xBc.USE_VAD, Chunk652215.xBc.SEND_MESSAGES_IN_THREADS, Chunk652215.xBc.EMBED_LINKS, Chunk652215.xBc.ATTACH_FILES, Chunk652215.xBc.ADD_REACTIONS),
  P = Chunk136722.kg(Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.READ_MESSAGE_HISTORY),
  D = Chunk136722.kg(Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.READ_MESSAGE_HISTORY, Chunk652215.xBc.CHANGE_NICKNAME),
  L = Chunk136722.kg(Chunk652215.xBc.MANAGE_GUILD, Chunk652215.xBc.MANAGE_ROLES, Chunk652215.xBc.ADMINISTRATOR, Chunk652215.xBc.BAN_MEMBERS, Chunk652215.xBc.MANAGE_NICKNAMES, Chunk652215.xBc.CREATE_GUILD_EXPRESSIONS, Chunk652215.xBc.MANAGE_GUILD_EXPRESSIONS, Chunk652215.xBc.MANAGE_WEBHOOKS, Chunk652215.xBc.VIEW_AUDIT_LOG);

function x(e, t, n) {
  let r = !(arguments.length > 3) || true === arguments[3] || arguments[3];
  if (r && t.mfaLevel === A.EkJ.ELEVATED && n === h.default.getId()) {
    var i;
    (null == (i = b.default.getCurrentUser()) ? true : i.mfaEnabled) || (e = a.TF(e, A.Lti))
  }
  return e
}

function M(e, t, n, r) {
  let i = r[e];
  if (null != i && (n = a.TF(n, i.deny), n = a.WQ(n, i.allow)), null != t) {
    let e = T,
      i = T;
    for (let n = 0; n < t.roles.length; n++) {
      let o = r[t.roles[n]];
      null != o && (e = a.WQ(e, o.allow), i = a.WQ(i, o.deny))
    }
    n = a.TF(n, i), n = a.WQ(n, e);
    let o = r[t.userId];
    null != o && (n = a.TF(n, o.deny), n = a.WQ(n, o.allow));
    let c = a.zy(n, A.xBc.ADMINISTRATOR);
    (0, s.TR)(t) && !c && (n = a.pb(n, D)), (0, l.Z)(t) && !c && (n = a.pb(n, P))
  }
  return n
}

function j(e) {
  let {
    userId: t,
    member: n,
    guild: r,
    overwrites: i,
    roles: o,
    checkElevated: s = true,
    excludeGuildPermissions: l = false,
    lurkerPermissionsMask: c = w
  } = e;
  if (l) return M(r.id, n, T, i);
  let d = (o = null != o ? S({}, E.A.getUnsafeMutableRoles(r.id), o) : E.A.getUnsafeMutableRoles(r.id))[(0, p.af)(r)],
    f = null != d ? d.permissions : N;
  if (null != n)
    for (let e = 0; e < n.roles.length; e++) {
      let t = o[n.roles[e]];
      true !== t && (f = a.WQ(f, t.permissions))
    }
  return f = a.zy(f, A.xBc.ADMINISTRATOR) ? C : M(r.id, n, f, i), (u.A.isLurking(r.id) || (null == n ? true : n.isPending)) && (f = a.pb(f, c)), g.Ay.isCurrentUserGuest(r.id) && (f = a.pb(f, R)), x(f, r, t, s)
}

function k(e) {
  let t, {
      forceRoles: n,
      context: r,
      overwrites: i,
      roles: a,
      checkElevated: o = true,
      excludeGuildPermissions: s
    } = e,
    l = w;
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
        checkElevated: o,
        excludeGuildPermissions: s
      }), false, false)
    }
    l = null != (c = r.computeLurkerPermissionsAllowList()) ? c : l, i = null != i ? S({}, r.permissionOverwrites, i) : r.permissionOverwrites;
    let e = r.getGuildId();
    t = null != e ? y.A.getGuild(e) : null
  } else i = null != i ? i : {}, t = r;
  if (null == t) return T;
  let u = {
    userId: A.dJq,
    nick: "",
    guildId: t.id,
    guildMemberAvatar: null,
    roles: v.default.keys(n),
    colorString: null,
    colorStrings: null,
    hoistRoleId: null,
    premiumSince: null,
    isPending: false,
    joinedAt: new Date().toISOString(),
    communicationDisabledUntil: null
  };
  return j({
    userId: A.dJq,
    member: u,
    guild: t,
    overwrites: i,
    roles: a,
    checkElevated: o,
    excludeGuildPermissions: s,
    lurkerPermissionsMask: l
  })
}

function U(e) {
  var t, n, r;
  let i, {
    user: a,
    context: o,
    overwrites: s,
    roles: l,
    checkElevated: u = true,
    excludeGuildPermissions: _ = false
  } = e;
  if (null == a) return T;
  let h = "string" == typeof a ? a : a.id,
    E = w;
  if (o instanceof f.YB) {
    if (o.isScheduledForDeletion()) return T;
    if (f.Le.has(o.type)) {
      let e = m.A.getChannel(o.parent_id);
      if (null == e || e.isScheduledForDeletion()) return T;
      let t = h === (null == (n = b.default.getCurrentUser()) ? true : n.id) && d.A.hasJoined(o.id);
      return G(o, U({
        user: a,
        context: e,
        overwrites: s,
        roles: l,
        checkElevated: u,
        excludeGuildPermissions: _
      }), t, g.Ay.isCurrentUserGuest(o.guild_id))
    }
    E = null != (r = o.computeLurkerPermissionsAllowList()) ? r : E, s = null != s ? S({}, o.permissionOverwrites, s) : o.permissionOverwrites;
    let e = o.getGuildId();
    i = null != e ? y.A.getGuild(e) : null
  } else s = null != s ? s : {}, i = o;
  if (null == i) return T;
  if (!(h === (null == (t = b.default.getCurrentUser()) ? true : t.id) && c.A.isViewingRoles(i.id)) && (0, p.bM)(i, h)) return x(C, i, h, u);
  let O = g.Ay.getMember(i.id, h);
  return j({
    userId: h,
    member: O,
    guild: i,
    overwrites: s,
    roles: l,
    checkElevated: u,
    excludeGuildPermissions: _,
    lurkerPermissionsMask: E
  })
}

function G(e, t, n, r) {
  return e.type !== A.rbe.PRIVATE_THREAD || n || r || a.zy(t, A.xBc.MANAGE_THREADS) ? a.zy(t, A.xBc.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !a.zy(t, A.xBc.MANAGE_THREADS) ? a.TF(t, A.xBc.SEND_MESSAGES) : a.kg(t, A.xBc.SEND_MESSAGES) : a.TF(t, A.xBc.SEND_MESSAGES) : T
}

function F(e, t) {
  if (f.Le.has(e.type)) returntrue;
  let {
    guild_id: n
  } = e;
  if (null == t || null == n || n !== t.guild_id) returnfalse;
  let r = S({}, e.permissionOverwrites),
    i = S({}, t.permissionOverwrites);
  return null == r[n] && (r[n] = W(n)), null == i[n] && (i[n] = W(n)), Object.keys(r).length === Object.keys(i).length && !Object.keys(r).some(e => {
    let t = r[e],
      n = i[e];
    return !(null != n && a.aI(n.deny, t.deny) && a.aI(n.allow, t.allow))
  })
}

function V(e) {
  var t;
  return i().some(E.A.getUnsafeMutableRoles(e.id), e => e.hoist && (0, _._m)(e, A.xBc.ADMINISTRATOR)) ? true : null != (t = e.ownerId) ? t : true
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
    type: o.r2.ROLE,
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
    roles: o,
    excludeGuildPermissions: s
  } = e;
  return a.zy(U({
    user: n,
    context: r,
    overwrites: i,
    roles: o,
    checkElevated: true,
    excludeGuildPermissions: s
  }), t)
}

function z(e, t) {
  let n, r = {};
  if (t instanceof f.YB) {
    if (t.type === A.rbe.PRIVATE_THREAD || f.Le.has(t.type) && null == (t = m.A.getChannel(t.parent_id))) returnfalse;
    r = t.permissionOverwrites;
    let e = t.getGuildId();
    n = null != e ? y.A.getGuild(e) : null
  } else n = t;
  if (null == n) returnfalse;
  let i = E.A.getEveryoneRole(n).permissions,
    o = r[n.id];
  return null != o && (i = a.TF(i, o.deny), i = a.WQ(i, o.allow)), a.zy(i, e)
}

function q(e, t) {
  let n, r = {};
  if (t instanceof f.YB) {
    if (t.type === A.rbe.PRIVATE_THREAD || f.Le.has(t.type) && null == (t = m.A.getChannel(t.parent_id))) returnfalse;
    r = t.permissionOverwrites;
    let e = t.getGuildId();
    n = null != e ? y.A.getGuild(e) : null
  } else n = t;
  if (null == n) returnfalse;
  let o = E.A.getEveryoneRole(n);
  return !(!(0, _._m)(o, e) || i().some(r, t => a.zy(t.deny, e)))
}