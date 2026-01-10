/** Chunk was on web.js **/
/** chunk id: 621853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eb
}), require("./953529.js"), require("./388685.js"), require("./997841.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk296009 = require("./296009.js"),
  Chunk846519 = require("./846519.js"),
  Chunk726542 = require("./726542.js"),
  Chunk192274 = require("./192274.js"),
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

function v(e, t, n) {
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
      v(e, t, n[t])
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
let C = Symbol("NO GUILD ID"),
  A = new Map,
  N = new Set,
  P = "premium",
  R = "guild_booster_lvl",
  w = 0x7fffffff,
  D = new Map,
  x = new Map,
  L = new Map,
  j = new Map,
  M = new Map,
  k = new Map,
  U = new Map,
  G = [],
  Z = [],
  F = null,
  B = new Map;

function V(e) {
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
        })),
        r = i().uniqBy(n, "applicationId");
      return new b.zy({
        id: e.id,
        type: t,
        games: r
      });
    case a.l.APPLICATION:
      return new E.q({
        id: e.id,
        applicationId: e.data.application_id
      })
  }
}
let H = false,
  Y = null;

function W(e) {
  let t = D.get(e);
  if (null == t) return;
  let n = t.profileEffect;
  if ((null == n ? true : n.expiresAt) == null) return;
  let r = 1e3 * n.expiresAt + y.Cm - Date.now();
  if (r <= 0) {
    t.profileEffect = true, L.delete(e), eE.emitChange();
    return
  }
  let i = L.get(e);
  null != i && i.start(Math.min(w, r), () => W(e))
}

function K(e, t) {
  var n, r;
  let i = x.get(e);
  if (null == i) return;
  let a = i.get(t);
  if (null == a) return;
  let o = a.profileEffect;
  if ((null == o ? true : o.expiresAt) == null) return;
  let s = 1e3 * o.expiresAt + y.Cm - Date.now();
  if (s <= 0) {
    i.set(t, T(S({}, a), {
      profileEffect: true
    })), null == (r = j.get(e)) || r.delete(t), eE.emitChange();
    return
  }
  let l = null == (n = j.get(e)) ? true : n.get(t);
  null != l && l.start(Math.min(w, s), () => K(e, t))
}

function z() {
  A.clear(), N.clear(), D.clear(), x.clear(), M.clear(), k.clear(), U.clear(), H = false
}

function q(e) {
  let {
    userId: t
  } = e;
  N.add(t)
}

function Q(e) {
  let {
    userId: t
  } = e;
  N.delete(t)
}

function X(e) {
  return i()(e).map(e => ({
    key: e.id,
    user: new u.Z(e),
    status: _.Z.getStatus(e.id)
  })).sortBy(e => {
    let {
      user: t
    } = e;
    return t.username.toLowerCase()
  }).value()
}

function J(e) {
  N.delete(e.userId), M.set(e.userId, X(e.mutualFriends)), k.set(e.userId, e.mutualFriends.length)
}

function $(e) {
  var t, n, r, i, a, l, c, u, d, p, _, E, b, y, v, I, w, Z, F, B, H;
  let {
    userProfile: z,
    fetchStartedAt: q
  } = e, Q = null != (b = null == (t = z.guild_member_profile) ? true : t.guild_id) ? b : C;
  if (null == (n = A.get(z.user.id)) || n.delete(Q), N.delete(z.user.id), null != z.mutual_guilds) {
    let e = {};
    z.mutual_guilds.forEach(t => {
      let {
        id: n,
        nick: r
      } = t, i = f.Z.getGuild(n);
      null != i && (e[n] = {
        guild: i,
        nick: r
      })
    }), U.set(z.user.id, m.ZP.getFlattenedGuildIds().filter(t => null != e[t]).map(t => ({
      guild: e[t].guild,
      nick: e[t].nick
    })))
  }
  if (null != z.mutual_friends_count) {
    let e = z.mutual_friends_count;
    k.set(z.user.id, e), 0 === e && M.set(z.user.id, G)
  }
  null != z.mutual_friends && (M.set(z.user.id, X(z.mutual_friends)), k.set(z.user.id, z.mutual_friends.length));
  let J = null != z.premium_since ? new Date(z.premium_since) : null,
    $ = null != z.premium_guild_since ? new Date(z.premium_guild_since) : null,
    et = z.application,
    en = null == (r = z.user_profile) ? true : r.profile_effect,
    er = null != z.badges ? z.badges.map(e => {
      let t = (0, g.fv)(e.id);
      if ((e.id === P || null != t) && null != J) {
        let n = O.intl.formatToPlainString(O.t["8zbGNR"], {
          date: J
        });
        return null != t && (n = O.intl.formatToPlainString(O.t.Hu4jfi, {
          date: J
        })), T(S({}, e), {
          description: n
        })
      }
      return e.id.startsWith(R) && null != $ ? T(S({}, e), {
        description: O.intl.formatToPlainString(O.t.IWkAq7, {
          date: $
        })
      }) : e
    }) : [];
  if (null != Y && Y.userId === z.user.id && (Date.now() > Y.expiresAtMs ? Y = null : ee(er, Y)), D.set(z.user.id, {
      userId: z.user.id,
      banner: null == (i = z.user_profile) ? true : i.banner,
      accentColor: null == (a = z.user_profile) ? true : a.accent_color,
      themeColors: null == (l = z.user_profile) ? true : l.theme_colors,
      popoutAnimationParticleType: null == (c = z.user_profile) ? true : c.popout_animation_particle_type,
      bio: null != (y = null == (u = z.user_profile) ? true : u.bio) ? y : "",
      profileEffect: null != en ? {
        skuId: en.sku_id,
        expiresAt: en.expires_at
      } : true,
      pronouns: null != (v = null == (d = z.user_profile) ? true : d.pronouns) ? v : "",
      connectedAccounts: null != (I = z.connected_accounts.filter(e => s.Z.isSupported(e.type))) ? I : [],
      applicationRoleConnections: null != (w = z.application_role_connections) ? w : [],
      premiumSince: J,
      premiumType: z.premium_type,
      premiumGuildSince: $,
      fetchStartedAt: q,
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
      widgets: null == (p = z.widgets) ? true : p.map(V).filter(h.lm),
      wishlistSettings: z.wishlist_settings
    }), (null == (E = z.user_profile) || null == (_ = E.profile_effect) ? true : _.expires_at) != null) {
    let e = new o.V7;
    L.set(z.user.id, e), W(z.user.id)
  }
  if (null != z.guild_member_profile) {
    let e = z.guild_member_profile.profile_effect,
      t = {
        userId: z.user.id,
        guildId: z.guild_member_profile.guild_id,
        banner: z.guild_member_profile.banner,
        accentColor: z.guild_member_profile.accent_color,
        themeColors: null == (Z = z.guild_member_profile) ? true : Z.theme_colors,
        popoutAnimationParticleType: null == (F = z.guild_member_profile) ? true : F.popout_animation_particle_type,
        profileEffect: null != e ? {
          skuId: e.sku_id,
          expiresAt: e.expires_at
        } : true,
        bio: z.guild_member_profile.bio,
        pronouns: z.guild_member_profile.pronouns,
        badges: z.guild_badges
      },
      n = x.get(z.user.id);
    if (null != n) n.set(z.guild_member_profile.guild_id, t);
    else {
      let e = new Map;
      e.set(z.guild_member_profile.guild_id, t), x.set(z.user.id, e)
    }
    if ((null == (H = z.guild_member_profile) || null == (B = H.profile_effect) ? true : B.expires_at) != null) {
      let e = new o.V7,
        t = j.get(z.user.id);
      if (null != t) t.set(z.guild_member_profile.guild_id, e);
      else {
        let t = new Map;
        t.set(z.guild_member_profile.guild_id, e), j.set(z.user.id, t)
      }
      K(z.user.id, z.guild_member_profile.guild_id)
    }
  }
}

function ee(e, t) {
  if (null == e) return;
  let n = new Set(e.map(e => e.id)),
    r = null == t ? true : t.badges.filter(e => !n.has(e.id));
  return r.length > 0 && e.push(...r), e
}

function et(e) {
  let {
    userId: t,
    guildId: n,
    withMutualFriends: r
  } = e, i = null != n ? n : C, a = A.get(t);
  if (null != a) a.add(i);
  else {
    let e = new Set;
    e.add(i), A.set(t, e)
  }
  r && N.add(t)
}

function en(e) {
  var t, n;
  let {
    userId: r,
    guildId: i,
    apiError: a,
    fetchStartedAt: o
  } = e;
  null == (t = A.get(r)) || t.delete(null != i ? i : C), N.delete(r);
  let s = null != (n = D.get(r)) ? n : {
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
  s.fetchStartedAt = o, s.fetchEndedAt = Date.now(), s.fetchError = a, D.set(r, s), (null == a ? true : a.status) === 404 && (k.set(r, 0), M.set(r, G), U.set(r, Z))
}

function er(e) {
  let {
    userId: t,
    accent_color: n,
    banner: r,
    bio: i,
    pronouns: a,
    popout_animation_particle_type: s,
    theme_colors: l,
    profile_effect: c
  } = e, u = D.get(t);
  if (null == u) returnfalse;
  if (D.set(t, T(S({}, u), {
      accentColor: n,
      banner: r,
      bio: i,
      pronouns: a,
      popoutAnimationParticleType: s,
      themeColors: l,
      profileEffect: null != c ? {
        skuId: c.sku_id,
        expiresAt: c.expires_at
      } : true
    })), (null == c ? true : c.expires_at) != null) {
    let e = new o.V7;
    L.set(t, e), W(t)
  }
}

function ei(e) {
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
  } = e, d = x.get(t);
  if (null == n || null == d) returnfalse;
  let f = d.get(n);
  if (null == f) returnfalse;
  if (d.set(n, T(S({}, f), {
      accentColor: r,
      banner: i,
      bio: a,
      pronouns: s,
      popoutAnimationParticleType: l,
      themeColors: c,
      profileEffect: null != u ? {
        skuId: u.sku_id,
        expiresAt: u.expires_at
      } : true
    })), (null == u ? true : u.expires_at) != null) {
    let e = new o.V7,
      r = j.get(t);
    if (null != r) r.set(n, e);
    else {
      let r = new Map;
      r.set(n, e), j.set(t, r)
    }
    K(t, n)
  }
}

function ea(e) {
  H = true
}

function eo(e) {
  H = false, null != e.guild_id ? ei(e) : er(e)
}

function es(e) {
  H = false
}

function el(e) {
  let {
    userId: t,
    widgets: n
  } = e, r = D.get(t);
  if (null == r) returnfalse;
  D.set(t, T(S({}, r), {
    widgets: n.map(V).filter(h.lm)
  }))
}

function ec(e) {
  let {
    badges: t,
    ttlInSeconds: n,
    userId: r
  } = e;
  Y = {
    userId: r,
    badges: t,
    expiresAtMs: Date.now() + 1e3 * n
  };
  let i = D.get(r);
  if (null != i) {
    var a;
    let e = null != (a = i.badges) ? a : [];
    ee(e, Y), D.set(r, T(S({}, i), {
      badges: e
    }))
  }
}

function eu(e) {
  var t, n;
  let r = e.user.id;
  return !((null != (n = null == (t = A.get(r)) ? true : t.size) ? n : 0) > 0) && em(r)
}

function ed(e) {
  return [...D.keys()].reduce((e, t) => em(t) || e, false)
}

function ef(e) {
  return em(e.user.id)
}

function ep(e) {
  return em(e.relationship.id)
}

function e_() {
  A.clear(), N.clear(), D.clear(), x.clear()
}

function em(e) {
  if (null == e) returnfalse;
  let t = D.get(e);
  if (null == t) returnfalse;
  t.fetchStartedAt = 0, t.fetchEndedAt = 0, t.fetchError = true
}

function eh(e) {
  for (let t of (F = e.applicationConfigs.map(e => new l.P(e)), B.clear(), F)) B.set(t.applicationId, t)
}
class eg extends Chunk750041.Z {
  initialize() {
    this.waitFor(m.ZP), this.syncWith([c.default], e_)
  }
  isFetchingProfile(e, t) {
    let n = A.get(e);
    return null != n && n.has(null != t ? t : C)
  }
  isFetchingFriends(e) {
    return N.has(e)
  }
  get isSubmitting() {
    return H
  }
  getUserProfile(e) {
    return D.get(e)
  }
  getGuildMemberProfile(e, t) {
    var n, r;
    return null == t ? null : null != (r = null == (n = x.get(e)) ? true : n.get(t)) ? r : null
  }
  getMutualFriends(e) {
    return M.get(e)
  }
  getMutualFriendsCount(e) {
    return k.get(e)
  }
  getMutualGuilds(e) {
    return U.get(e)
  }
  getWidgets(e) {
    var t;
    return null == (t = D.get(e)) ? true : t.widgets
  }
  getWishlistIds(e) {
    let t = D.get(e);
    return (null == t ? true : t.wishlistSettings) != null ? Object.keys(t.wishlistSettings) : []
  }
  getFirstWishlistId(e) {
    let t = this.getWishlistIds(e);
    return t.length > 0 ? t[0] : null
  }
  getWishlistSettings(e, t) {
    var n, r;
    let i = D.get(e);
    return null != (r = null == i || null == (n = i.wishlistSettings) ? true : n[t]) ? r : null
  }
  takeSnapshot() {
    let e = d.default.getId(),
      t = D.get(e);
    return null != t ? {
      version: eg.LATEST_SNAPSHOT_VERSION,
      data: [{
        userId: e,
        profile: t
      }]
    } : {
      version: eg.LATEST_SNAPSHOT_VERSION,
      data: []
    }
  }
  get applicationWidgetConfigs() {
    return F
  }
  getApplicationWidgetConfig(e) {
    return B.get(e)
  }
  constructor() {
    super({
      CACHE_LOADED_LAZY: () => this.loadCache(),
      USER_PROFILE_FETCH_START: et,
      USER_PROFILE_FETCH_FAILURE: en,
      USER_PROFILE_FETCH_SUCCESS: $,
      USER_PROFILE_UPDATE_START: ea,
      USER_PROFILE_UPDATE_SUCCESS: eo,
      USER_PROFILE_UPDATE_FAILURE: es,
      WIDGET_PENDING_SAVE_SUCCESS: el,
      USER_PROFILE_PIN_BADGES_ON_CLIENT: ec,
      MUTUAL_FRIENDS_FETCH_START: q,
      MUTUAL_FRIENDS_FETCH_SUCCESS: J,
      MUTUAL_FRIENDS_FETCH_FAILURE: Q,
      USER_UPDATE: eu,
      GUILD_MEMBER_UPDATE: eu,
      GUILD_JOIN: ed,
      GUILD_DELETE: ed,
      INVITE_ACCEPT_SUCCESS: ed,
      GUILD_MEMBER_ADD: ef,
      GUILD_MEMBER_REMOVE: ef,
      RELATIONSHIP_ADD: ep,
      RELATIONSHIP_REMOVE: ep,
      RELATIONSHIP_UPDATE: ep,
      USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: eh,
      LOGOUT: z
    }), v(this, "loadCache", () => {
      let e = this.readSnapshot(eg.LATEST_SNAPSHOT_VERSION);
      null != e && e.forEach(e => {
        let {
          userId: t,
          profile: n
        } = e;
        null != t && (null != n ? D.set(t, n) : D.delete(t))
      })
    })
  }
}
v(eg, "displayName", "UserProfileStore"), v(eg, "LATEST_SNAPSHOT_VERSION", 1);
let eE = new eg,
  eb = eE