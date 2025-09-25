/** Chunk was on web.js **/
/** chunk id: 621853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eg
}), require("./953529.js"), require("./388685.js"), require("./997841.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk296009 = require("./296009.js"),
  Chunk846519 = require("./846519.js"),
  Chunk726542 = require("./726542.js"),
  Chunk706454 = require("./706454.js"),
  Chunk598077 = require("./598077.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk750041 = require("./750041.js"),
  Chunk158776 = require("./158776.js"),
  Chunk771845 = require("./771845.js"),
  Chunk823379 = require("./823379.js"),
  Chunk291175 = require("./291175.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = Symbol("NO GUILD ID"),
  A = new Map,
  C = new Set,
  N = "premium",
  R = "guild_booster_lvl",
  P = 0x7fffffff,
  w = new Map,
  D = new Map,
  x = new Map,
  L = new Map,
  j = new Map,
  M = new Map,
  k = new Map,
  U = [],
  G = [],
  B = null;

function Z(e) {
  let t = e.data.type;
  switch (t) {
    case a.l.CURRENT_GAMES:
    case a.l.FAVORITE_GAMES:
    case a.l.PLAYED_GAMES:
    case a.l.WANT_TO_PLAY_GAMES:
      let n = e.data.games.map(e => ({
        applicationId: e.game_id,
        comment: e.comment,
        tags: e.tags
      }));
      return new E.zy({
        id: e.id,
        type: t,
        games: n
      });
    case a.l.APPLICATION:
      return new g.q({
        id: e.id,
        type: t,
        applicationId: e.data.application_id
      })
  }
}
let F = false,
  V = null;

function H(e) {
  let t = w.get(e);
  if (null == t) return;
  let n = t.profileEffect;
  if ((null == n ? true : n.expiresAt) == null) return;
  let r = 1e3 * n.expiresAt + b.Cm - Date.now();
  if (r <= 0) {
    t.profileEffect = true, x.delete(e), em.emitChange();
    return
  }
  let i = x.get(e);
  null != i && i.start(Math.min(P, r), () => H(e))
}

function Y(e, t) {
  var n, r;
  let i = D.get(e);
  if (null == i) return;
  let a = i.get(t);
  if (null == a) return;
  let o = a.profileEffect;
  if ((null == o ? true : o.expiresAt) == null) return;
  let s = 1e3 * o.expiresAt + b.Cm - Date.now();
  if (s <= 0) {
    i.set(t, T(v({}, a), {
      profileEffect: true
    })), null == (r = L.get(e)) || r.delete(t), em.emitChange();
    return
  }
  let l = null == (n = L.get(e)) ? true : n.get(t);
  null != l && l.start(Math.min(P, s), () => Y(e, t))
}

function W() {
  A.clear(), C.clear(), w.clear(), D.clear(), j.clear(), M.clear(), k.clear(), F = false
}

function K(e) {
  let {
    userId: t
  } = e;
  C.add(t)
}

function z(e) {
  let {
    userId: t
  } = e;
  C.delete(t)
}

function q(e) {
  return i()(e).map(e => ({
    key: e.id,
    user: new c.Z(e),
    status: _.Z.getStatus(e.id)
  })).sortBy(e => {
    let {
      user: t
    } = e;
    return t.username.toLowerCase()
  }).value()
}

function X(e) {
  C.delete(e.userId), j.set(e.userId, q(e.mutualFriends)), M.set(e.userId, e.mutualFriends.length)
}

function Q(e) {
  var t, n, r, i, a, l, c, u, f, _, g, E, b, O, I, P, G, B, F, W, K;
  let {
    userProfile: z,
    fetchStartedAt: X
  } = e, Q = null != (b = null == (t = z.guild_member_profile) ? true : t.guild_id) ? b : S;
  if (null == (n = A.get(z.user.id)) || n.delete(Q), C.delete(z.user.id), null != z.mutual_guilds) {
    let e = {};
    z.mutual_guilds.forEach(t => {
      let {
        id: n,
        nick: r
      } = t, i = d.Z.getGuild(n);
      null != i && (e[n] = {
        guild: i,
        nick: r
      })
    }), k.set(z.user.id, p.ZP.getFlattenedGuildIds().filter(t => null != e[t]).map(t => ({
      guild: e[t].guild,
      nick: e[t].nick
    })))
  }
  if (null != z.mutual_friends_count) {
    let e = z.mutual_friends_count;
    M.set(z.user.id, e), 0 === e && j.set(z.user.id, U)
  }
  null != z.mutual_friends && (j.set(z.user.id, q(z.mutual_friends)), M.set(z.user.id, z.mutual_friends.length));
  let $ = null != z.premium_since ? new Date(z.premium_since) : null,
    ee = null != z.premium_guild_since ? new Date(z.premium_guild_since) : null,
    et = z.application,
    en = null == (r = z.user_profile) ? true : r.profile_effect,
    er = null != z.badges ? z.badges.map(e => {
      let t = (0, m.fv)(e.id);
      if ((e.id === N || null != t) && null != $) {
        let n = y.intl.formatToPlainString(y.t["8zbGNT"], {
          date: $
        });
        return null != t && (n = y.intl.formatToPlainString(y.t.Hu4jfn, {
          date: $
        })), T(v({}, e), {
          description: n
        })
      }
      return e.id.startsWith(R) && null != ee ? T(v({}, e), {
        description: y.intl.formatToPlainString(y.t.IWkAq6, {
          date: ee
        })
      }) : e
    }) : [];
  if (null != V && V.userId === z.user.id && (Date.now() > V.expiresAtMs ? V = null : J(er, V)), w.set(z.user.id, {
      userId: z.user.id,
      banner: null == (i = z.user_profile) ? true : i.banner,
      accentColor: null == (a = z.user_profile) ? true : a.accent_color,
      themeColors: null == (l = z.user_profile) ? true : l.theme_colors,
      popoutAnimationParticleType: null == (c = z.user_profile) ? true : c.popout_animation_particle_type,
      bio: null != (O = null == (u = z.user_profile) ? true : u.bio) ? O : "",
      profileEffect: null != en ? {
        id: en.id,
        skuId: en.sku_id,
        expiresAt: en.expires_at
      } : true,
      pronouns: null != (I = null == (f = z.user_profile) ? true : f.pronouns) ? I : "",
      connectedAccounts: null != (P = z.connected_accounts.filter(e => s.Z.isSupported(e.type))) ? P : [],
      applicationRoleConnections: null != (G = z.application_role_connections) ? G : [],
      premiumSince: $,
      premiumType: z.premium_type,
      premiumGuildSince: ee,
      fetchStartedAt: X,
      fetchEndedAt: Date.now(),
      legacyUsername: z.legacy_username,
      application: null != et ? {
        id: et.id,
        primarySkuId: et.primary_sku_id,
        customInstallUrl: et.custom_install_url,
        installParams: et.install_params,
        integrationTypesConfig: et.integration_types_config,
        flags: et.flags,
        popularApplicationCommandIds: et.popular_application_command_ids,
        storefront_available: et.storefront_available,
        name: et.name
      } : null,
      badges: er,
      widgets: null == (_ = z.widgets) ? true : _.map(Z).filter(h.lm),
      wishlistSettings: z.wishlist_settings
    }), (null == (E = z.user_profile) || null == (g = E.profile_effect) ? true : g.expires_at) != null) {
    let e = new o.V7;
    x.set(z.user.id, e), H(z.user.id)
  }
  if (null != z.guild_member_profile) {
    let e = z.guild_member_profile.profile_effect,
      t = {
        userId: z.user.id,
        guildId: z.guild_member_profile.guild_id,
        banner: z.guild_member_profile.banner,
        accentColor: z.guild_member_profile.accent_color,
        themeColors: null == (B = z.guild_member_profile) ? true : B.theme_colors,
        popoutAnimationParticleType: null == (F = z.guild_member_profile) ? true : F.popout_animation_particle_type,
        profileEffect: null != e ? {
          id: e.id,
          skuId: e.sku_id,
          expiresAt: e.expires_at
        } : true,
        bio: z.guild_member_profile.bio,
        pronouns: z.guild_member_profile.pronouns,
        badges: z.guild_badges
      },
      n = D.get(z.user.id);
    if (null != n) n.set(z.guild_member_profile.guild_id, t);
    else {
      let e = new Map;
      e.set(z.guild_member_profile.guild_id, t), D.set(z.user.id, e)
    }
    if ((null == (K = z.guild_member_profile) || null == (W = K.profile_effect) ? true : W.expires_at) != null) {
      let e = new o.V7,
        t = L.get(z.user.id);
      if (null != t) t.set(z.guild_member_profile.guild_id, e);
      else {
        let t = new Map;
        t.set(z.guild_member_profile.guild_id, e), L.set(z.user.id, t)
      }
      Y(z.user.id, z.guild_member_profile.guild_id)
    }
  }
}

function J(e, t) {
  if (null == e) return;
  let n = new Set(e.map(e => e.id)),
    r = null == t ? true : t.badges.filter(e => !n.has(e.id));
  return r.length > 0 && e.push(...r), e
}

function $(e) {
  let {
    userId: t,
    guildId: n,
    withMutualFriends: r
  } = e, i = null != n ? n : S, a = A.get(t);
  if (null != a) a.add(i);
  else {
    let e = new Set;
    e.add(i), A.set(t, e)
  }
  r && C.add(t)
}

function ee(e) {
  var t, n;
  let {
    userId: r,
    guildId: i,
    apiError: a,
    fetchStartedAt: o
  } = e;
  null == (t = A.get(r)) || t.delete(null != i ? i : S), C.delete(r);
  let s = null != (n = w.get(r)) ? n : {
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
  s.fetchStartedAt = o, s.fetchEndedAt = Date.now(), s.fetchError = a, w.set(r, s), (null == a ? true : a.status) === 404 && (M.set(r, 0), j.set(r, U), k.set(r, G))
}

function et(e) {
  let {
    userId: t,
    accent_color: n,
    banner: r,
    bio: i,
    pronouns: a,
    popout_animation_particle_type: s,
    theme_colors: l,
    profile_effect: c
  } = e, u = w.get(t);
  if (null == u) returnfalse;
  if (w.set(t, T(v({}, u), {
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
    x.set(t, e), H(t)
  }
}

function en(e) {
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
  } = e, d = D.get(t);
  if (null == n || null == d) returnfalse;
  let f = d.get(n);
  if (null == f) returnfalse;
  if (d.set(n, T(v({}, f), {
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
      r = L.get(t);
    if (null != r) r.set(n, e);
    else {
      let r = new Map;
      r.set(n, e), L.set(t, r)
    }
    Y(t, n)
  }
}

function er(e) {
  F = true
}

function ei(e) {
  F = false, null != e.guild_id ? en(e) : et(e)
}

function ea(e) {
  F = false
}

function eo(e) {
  let {
    userId: t,
    widgets: n
  } = e, r = w.get(t);
  if (null == r) returnfalse;
  w.set(t, T(v({}, r), {
    widgets: n.map(Z).filter(h.lm)
  }))
}

function es(e) {
  let {
    badges: t,
    ttlInSeconds: n,
    userId: r
  } = e;
  V = {
    userId: r,
    badges: t,
    expiresAtMs: Date.now() + 1e3 * n
  };
  let i = w.get(r);
  if (null != i) {
    var a;
    let e = null != (a = i.badges) ? a : [];
    J(e, V), w.set(r, T(v({}, i), {
      badges: e
    }))
  }
}

function el(e) {
  var t, n;
  let r = e.user.id;
  return !((null != (n = null == (t = A.get(r)) ? true : t.size) ? n : 0) > 0) && e_(r)
}

function ec(e) {
  return [...w.keys()].reduce((e, t) => e_(t) || e, false)
}

function eu(e) {
  return e_(e.user.id)
}

function ed(e) {
  return e_(e.relationship.id)
}

function ef() {
  A.clear(), C.clear(), w.clear(), D.clear()
}

function e_(e) {
  if (null == e) returnfalse;
  let t = w.get(e);
  if (null == t) returnfalse;
  t.fetchStartedAt = 0, t.fetchEndedAt = 0, t.fetchError = true
}

function ep(e) {
  B = e.applicationIds
}
class eh extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk771845.ZP), this.syncWith([Chunk706454.default], ef)
  }
  isFetchingProfile(e, t) {
    let n = A.get(e);
    return null != n && n.has(null != t ? t : S)
  }
  isFetchingFriends(e) {
    return C.has(e)
  }
  get isSubmitting() {
    return F
  }
  getUserProfile(e) {
    return w.get(e)
  }
  getGuildMemberProfile(e, t) {
    var n, r;
    return null == t ? null : null != (r = null == (n = D.get(e)) ? true : n.get(t)) ? r : null
  }
  getMutualFriends(e) {
    return j.get(e)
  }
  getMutualFriendsCount(e) {
    return M.get(e)
  }
  getMutualGuilds(e) {
    return k.get(e)
  }
  getWidgets(e) {
    var t;
    return null == (t = w.get(e)) ? true : t.widgets
  }
  getWishlistIds(e) {
    let t = w.get(e);
    return (null == t ? true : t.wishlistSettings) != null ? Object.keys(t.wishlistSettings) : []
  }
  getFirstWishlistId(e) {
    let t = this.getWishlistIds(e);
    return t.length > 0 ? t[0] : null
  }
  takeSnapshot() {
    let e = Chunk314897.default.getId(),
      t = w.get(module);
    return null != exports ? {
      version: eh.LATEST_SNAPSHOT_VERSION,
      data: [{
        userId: module,
        profile: exports
      }]
    } : {
      version: eh.LATEST_SNAPSHOT_VERSION,
      data: []
    }
  }
  get applicationWidgetApplicationIds() {
    return B
  }
  constructor() {
    super({
      CACHE_LOADED_LAZY: () => this.loadCache(),
      USER_PROFILE_FETCH_START: $,
      USER_PROFILE_FETCH_FAILURE: ee,
      USER_PROFILE_FETCH_SUCCESS: Q,
      USER_PROFILE_UPDATE_START: er,
      USER_PROFILE_UPDATE_SUCCESS: ei,
      USER_PROFILE_UPDATE_FAILURE: ea,
      WIDGET_PENDING_SAVE_SUCCESS: eo,
      USER_PROFILE_PIN_BADGES_ON_CLIENT: es,
      MUTUAL_FRIENDS_FETCH_START: K,
      MUTUAL_FRIENDS_FETCH_SUCCESS: X,
      MUTUAL_FRIENDS_FETCH_FAILURE: z,
      USER_UPDATE: el,
      GUILD_MEMBER_UPDATE: el,
      GUILD_JOIN: ec,
      GUILD_DELETE: ec,
      INVITE_ACCEPT_SUCCESS: ec,
      GUILD_MEMBER_ADD: eu,
      GUILD_MEMBER_REMOVE: eu,
      RELATIONSHIP_ADD: ed,
      RELATIONSHIP_REMOVE: ed,
      RELATIONSHIP_UPDATE: ed,
      USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS_FETCH_SUCCESS: ep,
      LOGOUT: W
    }), O(this, "loadCache", () => {
      let e = this.readSnapshot(eh.LATEST_SNAPSHOT_VERSION);
      null != module && module.forEach(e => {
        let {
          userId: t,
          profile: n
        } = e;
        null != t && (null != n ? w.set(t, n) : w.delete(t))
      })
    })
  }
}
O(eh, "displayName", "UserProfileStore"), O(eh, "LATEST_SNAPSHOT_VERSION", 1);
let em = new eh,
  eg = em