/** Chunk was on web.js **/
/** chunk id: 621853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ed
}), require("./953529.js"), require("./388685.js"), require("./997841.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk846519 = require("./846519.js"),
  Chunk726542 = require("./726542.js"),
  Chunk706454 = require("./706454.js"),
  Chunk598077 = require("./598077.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk750041 = require("./750041.js"),
  Chunk158776 = require("./158776.js"),
  Chunk771845 = require("./771845.js"),
  Chunk291175 = require("./291175.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = Symbol("NO GUILD ID"),
  v = new Map,
  I = new Set,
  T = "premium",
  S = "guild_booster_lvl",
  A = 0x7fffffff,
  C = new Map,
  N = new Map,
  R = new Map,
  P = new Map,
  w = new Map,
  D = new Map,
  x = new Map,
  L = [],
  j = [];

function k(e) {
  let t = e.data.type,
    n = e.data.games.map(e => ({
      applicationId: e.game_id,
      comment: e.comment,
      tags: e.tags
    }));
  return {
    id: e.id,
    type: t,
    games: n
  }
}
let M = false,
  U = null;

function G(e) {
  let t = C.get(e);
  if (null == t) return;
  let n = t.profileEffect;
  if ((null == n ? true : n.expiresAt) == null) return;
  let r = 1e3 * n.expiresAt + h.Cm - Date.now();
  if (r <= 0) {
    t.profileEffect = true, R.delete(e), eu.emitChange();
    return
  }
  let i = R.get(e);
  null != i && i.start(Math.min(A, r), () => G(e))
}

function B(e, t) {
  var n, r;
  let i = N.get(e);
  if (null == i) return;
  let o = i.get(t);
  if (null == o) return;
  let a = o.profileEffect;
  if ((null == a ? true : a.expiresAt) == null) return;
  let s = 1e3 * a.expiresAt + h.Cm - Date.now();
  if (s <= 0) {
    i.set(t, y(E({}, o), {
      profileEffect: true
    })), null == (r = P.get(e)) || r.delete(t), eu.emitChange();
    return
  }
  let l = null == (n = P.get(e)) ? true : n.get(t);
  null != l && l.start(Math.min(A, s), () => B(e, t))
}

function Z() {
  v.clear(), I.clear(), C.clear(), N.clear(), w.clear(), D.clear(), x.clear(), M = false
}

function F(e) {
  let {
    userId: t
  } = e;
  I.add(t)
}

function V(e) {
  let {
    userId: t
  } = e;
  I.delete(t)
}

function H(e) {
  return i()(e).map(e => ({
    key: e.id,
    user: new l.Z(e),
    status: f.Z.getStatus(e.id)
  })).sortBy(e => {
    let {
      user: t
    } = e;
    return t.username.toLowerCase()
  }).value()
}

function Y(e) {
  I.delete(e.userId), w.set(e.userId, H(e.mutualFriends)), D.set(e.userId, e.mutualFriends.length)
}

function W(e) {
  var t, n, r, i, s, l, c, d, f, h, g, b, A, j, M, Z, F, V, Y, W, z;
  let {
    userProfile: q,
    fetchStartedAt: X
  } = e, Q = null != (A = null == (t = q.guild_member_profile) ? true : t.guild_id) ? A : O;
  if (null == (n = v.get(q.user.id)) || n.delete(Q), I.delete(q.user.id), null != q.mutual_guilds) {
    let e = {};
    q.mutual_guilds.forEach(t => {
      let {
        id: n,
        nick: r
      } = t, i = u.Z.getGuild(n);
      null != i && (e[n] = {
        guild: i,
        nick: r
      })
    }), x.set(q.user.id, _.ZP.getFlattenedGuildIds().filter(t => null != e[t]).map(t => ({
      guild: e[t].guild,
      nick: e[t].nick
    })))
  }
  if (null != q.mutual_friends_count) {
    let e = q.mutual_friends_count;
    D.set(q.user.id, e), 0 === e && w.set(q.user.id, L)
  }
  null != q.mutual_friends && (w.set(q.user.id, H(q.mutual_friends)), D.set(q.user.id, q.mutual_friends.length));
  let J = null != q.premium_since ? new Date(q.premium_since) : null,
    $ = null != q.premium_guild_since ? new Date(q.premium_guild_since) : null,
    ee = q.application,
    et = null == (r = q.user_profile) ? true : r.profile_effect,
    en = null != q.badges ? q.badges.map(e => {
      let t = (0, p.fv)(e.id);
      if ((e.id === T || null != t) && null != J) {
        let n = m.intl.formatToPlainString(m.t["8zbGNT"], {
          date: J
        });
        return null != t && (n = m.intl.formatToPlainString(m.t.Hu4jfn, {
          date: J
        })), y(E({}, e), {
          description: n
        })
      }
      return e.id.startsWith(S) && null != $ ? y(E({}, e), {
        description: m.intl.formatToPlainString(m.t.IWkAq6, {
          date: $
        })
      }) : e
    }) : [];
  if (null != U && U.userId === q.user.id && (Date.now() > U.expiresAtMs ? U = null : K(en, U)), C.set(q.user.id, {
      userId: q.user.id,
      banner: null == (i = q.user_profile) ? true : i.banner,
      accentColor: null == (s = q.user_profile) ? true : s.accent_color,
      themeColors: null == (l = q.user_profile) ? true : l.theme_colors,
      popoutAnimationParticleType: null == (c = q.user_profile) ? true : c.popout_animation_particle_type,
      bio: null != (j = null == (d = q.user_profile) ? true : d.bio) ? j : "",
      profileEffect: null != et ? {
        id: et.id,
        skuId: et.sku_id,
        expiresAt: et.expires_at
      } : true,
      pronouns: null != (M = null == (f = q.user_profile) ? true : f.pronouns) ? M : "",
      connectedAccounts: null != (Z = q.connected_accounts.filter(e => a.Z.isSupported(e.type))) ? Z : [],
      applicationRoleConnections: null != (F = q.application_role_connections) ? F : [],
      premiumSince: J,
      premiumType: q.premium_type,
      premiumGuildSince: $,
      fetchStartedAt: X,
      fetchEndedAt: Date.now(),
      legacyUsername: q.legacy_username,
      application: null != ee ? {
        id: ee.id,
        primarySkuId: ee.primary_sku_id,
        customInstallUrl: ee.custom_install_url,
        installParams: ee.install_params,
        integrationTypesConfig: ee.integration_types_config,
        flags: ee.flags,
        popularApplicationCommandIds: ee.popular_application_command_ids,
        storefront_available: ee.storefront_available,
        name: ee.name
      } : null,
      badges: en,
      widgets: null == (h = q.widgets) ? true : h.map(k)
    }), (null == (b = q.user_profile) || null == (g = b.profile_effect) ? true : g.expires_at) != null) {
    let e = new o.V7;
    R.set(q.user.id, e), G(q.user.id)
  }
  if (null != q.guild_member_profile) {
    let e = q.guild_member_profile.profile_effect,
      t = {
        userId: q.user.id,
        guildId: q.guild_member_profile.guild_id,
        banner: q.guild_member_profile.banner,
        accentColor: q.guild_member_profile.accent_color,
        themeColors: null == (V = q.guild_member_profile) ? true : V.theme_colors,
        popoutAnimationParticleType: null == (Y = q.guild_member_profile) ? true : Y.popout_animation_particle_type,
        profileEffect: null != e ? {
          id: e.id,
          skuId: e.sku_id,
          expiresAt: e.expires_at
        } : true,
        bio: q.guild_member_profile.bio,
        pronouns: q.guild_member_profile.pronouns,
        badges: q.guild_badges
      },
      n = N.get(q.user.id);
    if (null != n) n.set(q.guild_member_profile.guild_id, t);
    else {
      let e = new Map;
      e.set(q.guild_member_profile.guild_id, t), N.set(q.user.id, e)
    }
    if ((null == (z = q.guild_member_profile) || null == (W = z.profile_effect) ? true : W.expires_at) != null) {
      let e = new o.V7,
        t = P.get(q.user.id);
      if (null != t) t.set(q.guild_member_profile.guild_id, e);
      else {
        let t = new Map;
        t.set(q.guild_member_profile.guild_id, e), P.set(q.user.id, t)
      }
      B(q.user.id, q.guild_member_profile.guild_id)
    }
  }
}

function K(e, t) {
  if (null == e) return;
  let n = new Set(e.map(e => e.id)),
    r = null == t ? true : t.badges.filter(e => !n.has(e.id));
  return r.length > 0 && e.push(...r), e
}

function z(e) {
  let {
    userId: t,
    guildId: n,
    withMutualFriends: r
  } = e, i = null != n ? n : O, o = v.get(t);
  if (null != o) o.add(i);
  else {
    let e = new Set;
    e.add(i), v.set(t, e)
  }
  r && I.add(t)
}

function q(e) {
  var t, n;
  let {
    userId: r,
    guildId: i,
    apiError: o,
    fetchStartedAt: a
  } = e;
  null == (t = v.get(r)) || t.delete(null != i ? i : O), I.delete(r);
  let s = null != (n = C.get(r)) ? n : {
    connectedAccounts: [],
    applicationRoleConnections: [],
    premiumSince: null,
    premiumGuildSince: null,
    application: null,
    legacyUsername: null,
    userId: r,
    banner: null,
    accentColor: null,
    bio: "",
    pronouns: "",
    premiumType: null,
    fetchStartedAt: 0,
    fetchEndedAt: 0,
    fetchError: true
  };
  s.fetchStartedAt = a, s.fetchEndedAt = Date.now(), s.fetchError = o, C.set(r, s), (null == o ? true : o.status) === 404 && (D.set(r, 0), w.set(r, L), x.set(r, j))
}

function X(e) {
  let {
    userId: t,
    accent_color: n,
    banner: r,
    bio: i,
    pronouns: a,
    popout_animation_particle_type: s,
    theme_colors: l,
    profile_effect: c
  } = e, u = C.get(t);
  if (null == u) returnfalse;
  if (C.set(t, y(E({}, u), {
      accentColor: n,
      banner: r,
      bio: i,
      pronouns: a,
      popoutAnimationParticleType: s,
      themeColors: l,
      profileEffect: null != c ? {
        id: c.id,
        skuId: c.sku_id,
        expiresAt: c.expires_at
      } : true
    })), (null == c ? true : c.expires_at) != null) {
    let e = new o.V7;
    R.set(t, e), G(t)
  }
}

function Q(e) {
  let {
    userId: t,
    guild_id: n,
    accent_color: r,
    banner: i,
    bio: a,
    pronouns: s,
    popout_animation_particle_type: l,
    theme_colors: c,
    profile_effect: u
  } = e, d = N.get(t);
  if (null == n || null == d) returnfalse;
  let f = d.get(n);
  if (null == f) returnfalse;
  if (d.set(n, y(E({}, f), {
      accentColor: r,
      banner: i,
      bio: a,
      pronouns: s,
      popoutAnimationParticleType: l,
      themeColors: c,
      profileEffect: null != u ? {
        id: u.id,
        skuId: u.sku_id,
        expiresAt: u.expires_at
      } : true
    })), (null == u ? true : u.expires_at) != null) {
    let e = new o.V7,
      r = P.get(t);
    if (null != r) r.set(n, e);
    else {
      let r = new Map;
      r.set(n, e), P.set(t, r)
    }
    B(t, n)
  }
}

function J(e) {
  M = true
}

function $(e) {
  M = false, null != e.guild_id ? Q(e) : X(e)
}

function ee(e) {
  M = false
}

function et(e) {
  let {
    userId: t,
    widgets: n
  } = e, r = C.get(t);
  if (null == r) returnfalse;
  C.set(t, y(E({}, r), {
    widgets: n.map(k)
  }))
}

function en(e) {
  let {
    badges: t,
    ttlInSeconds: n,
    userId: r
  } = e;
  U = {
    userId: r,
    badges: t,
    expiresAtMs: Date.now() + 1e3 * n
  };
  let i = C.get(r);
  if (null != i) {
    var o;
    let e = null != (o = i.badges) ? o : [];
    K(e, U), C.set(r, y(E({}, i), {
      badges: e
    }))
  }
}

function er(e) {
  var t, n;
  let r = e.user.id;
  return !((null != (n = null == (t = v.get(r)) ? true : t.size) ? n : 0) > 0) && el(r)
}

function ei(e) {
  return [...C.keys()].reduce((e, t) => el(t) || e, false)
}

function eo(e) {
  return el(e.user.id)
}

function ea(e) {
  return el(e.relationship.id)
}

function es() {
  v.clear(), I.clear(), C.clear(), N.clear()
}

function el(e) {
  if (null == e) returnfalse;
  let t = C.get(e);
  if (null == t) returnfalse;
  t.fetchStartedAt = 0, t.fetchEndedAt = 0, t.fetchError = true
}
class ec extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk771845.ZP), this.syncWith([Chunk706454.default], es)
  }
  isFetchingProfile(e, t) {
    let n = v.get(e);
    return null != n && n.has(null != t ? t : O)
  }
  isFetchingFriends(e) {
    return I.has(e)
  }
  get isSubmitting() {
    return M
  }
  getUserProfile(e) {
    return C.get(e)
  }
  getGuildMemberProfile(e, t) {
    var n, r;
    return null == t ? null : null != (r = null == (n = N.get(e)) ? true : n.get(t)) ? r : null
  }
  getMutualFriends(e) {
    return w.get(e)
  }
  getMutualFriendsCount(e) {
    return D.get(e)
  }
  getMutualGuilds(e) {
    return x.get(e)
  }
  getWidgets(e) {
    var t;
    return null == (t = C.get(e)) ? true : t.widgets
  }
  takeSnapshot() {
    let e = Chunk314897.default.getId(),
      t = C.get(module);
    return null != exports ? {
      version: ec.LATEST_SNAPSHOT_VERSION,
      data: [{
        userId: module,
        profile: exports
      }]
    } : {
      version: ec.LATEST_SNAPSHOT_VERSION,
      data: []
    }
  }
  constructor() {
    super({
      CACHE_LOADED_LAZY: () => this.loadCache(),
      USER_PROFILE_FETCH_START: z,
      USER_PROFILE_FETCH_FAILURE: q,
      USER_PROFILE_FETCH_SUCCESS: W,
      USER_PROFILE_UPDATE_START: J,
      USER_PROFILE_UPDATE_SUCCESS: $,
      USER_PROFILE_UPDATE_FAILURE: ee,
      WIDGET_PENDING_SAVE_SUCCESS: et,
      USER_PROFILE_PIN_BADGES_ON_CLIENT: en,
      MUTUAL_FRIENDS_FETCH_START: F,
      MUTUAL_FRIENDS_FETCH_SUCCESS: Y,
      MUTUAL_FRIENDS_FETCH_FAILURE: V,
      USER_UPDATE: er,
      GUILD_MEMBER_UPDATE: er,
      GUILD_JOIN: ei,
      GUILD_DELETE: ei,
      INVITE_ACCEPT_SUCCESS: ei,
      GUILD_MEMBER_ADD: eo,
      GUILD_MEMBER_REMOVE: eo,
      RELATIONSHIP_ADD: ea,
      RELATIONSHIP_REMOVE: ea,
      RELATIONSHIP_UPDATE: ea,
      LOGOUT: Z
    }), g(this, "loadCache", () => {
      let e = this.readSnapshot(ec.LATEST_SNAPSHOT_VERSION);
      null != module && module.forEach(e => {
        let {
          userId: t,
          profile: n
        } = e;
        null != t && (null != n ? C.set(t, n) : C.delete(t))
      })
    })
  }
}
g(ec, "displayName", "UserProfileStore"), g(ec, "LATEST_SNAPSHOT_VERSION", 1);
let eu = new ec,
  ed = eu