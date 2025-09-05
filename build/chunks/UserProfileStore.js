/** Chunk was on web.js **/
/** chunk id: 621853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => e_
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
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = Symbol("NO GUILD ID"),
  T = new Map,
  S = new Set,
  A = "premium",
  C = "guild_booster_lvl",
  N = 0x7fffffff,
  R = new Map,
  P = new Map,
  w = new Map,
  D = new Map,
  x = new Map,
  L = new Map,
  j = new Map,
  k = [],
  M = [];

function U(e) {
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
      return {
        id: e.id, type: t, games: n
      };
    case a.l.APPLICATION:
      return {
        id: e.id, type: t, applicationId: e.data.application_id
      }
  }
}
let G = false,
  B = null;

function Z(e) {
  let t = R.get(e);
  if (null == t) return;
  let n = t.profileEffect;
  if ((null == n ? true : n.expiresAt) == null) return;
  let r = 1e3 * n.expiresAt + g.Cm - Date.now();
  if (r <= 0) {
    t.profileEffect = true, w.delete(e), ef.emitChange();
    return
  }
  let i = w.get(e);
  null != i && i.start(Math.min(N, r), () => Z(e))
}

function F(e, t) {
  var n, r;
  let i = P.get(e);
  if (null == i) return;
  let a = i.get(t);
  if (null == a) return;
  let o = a.profileEffect;
  if ((null == o ? true : o.expiresAt) == null) return;
  let s = 1e3 * o.expiresAt + g.Cm - Date.now();
  if (s <= 0) {
    i.set(t, v(y({}, a), {
      profileEffect: true
    })), null == (r = D.get(e)) || r.delete(t), ef.emitChange();
    return
  }
  let l = null == (n = D.get(e)) ? true : n.get(t);
  null != l && l.start(Math.min(N, s), () => F(e, t))
}

function V() {
  T.clear(), S.clear(), R.clear(), P.clear(), x.clear(), L.clear(), j.clear(), G = false
}

function H(e) {
  let {
    userId: t
  } = e;
  S.add(t)
}

function Y(e) {
  let {
    userId: t
  } = e;
  S.delete(t)
}

function W(e) {
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

function K(e) {
  S.delete(e.userId), x.set(e.userId, W(e.mutualFriends)), L.set(e.userId, e.mutualFriends.length)
}

function z(e) {
  var t, n, r, i, a, l, c, u, f, _, g, b, O, N, M, G, V, H, Y, K, z;
  let {
    userProfile: X,
    fetchStartedAt: Q
  } = e, J = null != (O = null == (t = X.guild_member_profile) ? true : t.guild_id) ? O : I;
  if (null == (n = T.get(X.user.id)) || n.delete(J), S.delete(X.user.id), null != X.mutual_guilds) {
    let e = {};
    X.mutual_guilds.forEach(t => {
      let {
        id: n,
        nick: r
      } = t, i = d.Z.getGuild(n);
      null != i && (e[n] = {
        guild: i,
        nick: r
      })
    }), j.set(X.user.id, p.ZP.getFlattenedGuildIds().filter(t => null != e[t]).map(t => ({
      guild: e[t].guild,
      nick: e[t].nick
    })))
  }
  if (null != X.mutual_friends_count) {
    let e = X.mutual_friends_count;
    L.set(X.user.id, e), 0 === e && x.set(X.user.id, k)
  }
  null != X.mutual_friends && (x.set(X.user.id, W(X.mutual_friends)), L.set(X.user.id, X.mutual_friends.length));
  let $ = null != X.premium_since ? new Date(X.premium_since) : null,
    ee = null != X.premium_guild_since ? new Date(X.premium_guild_since) : null,
    et = X.application,
    en = null == (r = X.user_profile) ? true : r.profile_effect,
    er = null != X.badges ? X.badges.map(e => {
      let t = (0, m.fv)(e.id);
      if ((e.id === A || null != t) && null != $) {
        let n = E.intl.formatToPlainString(E.t["8zbGNT"], {
          date: $
        });
        return null != t && (n = E.intl.formatToPlainString(E.t.Hu4jfn, {
          date: $
        })), v(y({}, e), {
          description: n
        })
      }
      return e.id.startsWith(C) && null != ee ? v(y({}, e), {
        description: E.intl.formatToPlainString(E.t.IWkAq6, {
          date: ee
        })
      }) : e
    }) : [];
  if (null != B && B.userId === X.user.id && (Date.now() > B.expiresAtMs ? B = null : q(er, B)), R.set(X.user.id, {
      userId: X.user.id,
      banner: null == (i = X.user_profile) ? true : i.banner,
      accentColor: null == (a = X.user_profile) ? true : a.accent_color,
      themeColors: null == (l = X.user_profile) ? true : l.theme_colors,
      popoutAnimationParticleType: null == (c = X.user_profile) ? true : c.popout_animation_particle_type,
      bio: null != (N = null == (u = X.user_profile) ? true : u.bio) ? N : "",
      profileEffect: null != en ? {
        id: en.id,
        skuId: en.sku_id,
        expiresAt: en.expires_at
      } : true,
      pronouns: null != (M = null == (f = X.user_profile) ? true : f.pronouns) ? M : "",
      connectedAccounts: null != (G = X.connected_accounts.filter(e => s.Z.isSupported(e.type))) ? G : [],
      applicationRoleConnections: null != (V = X.application_role_connections) ? V : [],
      premiumSince: $,
      premiumType: X.premium_type,
      premiumGuildSince: ee,
      fetchStartedAt: Q,
      fetchEndedAt: Date.now(),
      legacyUsername: X.legacy_username,
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
      widgets: null == (_ = X.widgets) ? true : _.map(U).filter(h.lm)
    }), (null == (b = X.user_profile) || null == (g = b.profile_effect) ? true : g.expires_at) != null) {
    let e = new o.V7;
    w.set(X.user.id, e), Z(X.user.id)
  }
  if (null != X.guild_member_profile) {
    let e = X.guild_member_profile.profile_effect,
      t = {
        userId: X.user.id,
        guildId: X.guild_member_profile.guild_id,
        banner: X.guild_member_profile.banner,
        accentColor: X.guild_member_profile.accent_color,
        themeColors: null == (H = X.guild_member_profile) ? true : H.theme_colors,
        popoutAnimationParticleType: null == (Y = X.guild_member_profile) ? true : Y.popout_animation_particle_type,
        profileEffect: null != e ? {
          id: e.id,
          skuId: e.sku_id,
          expiresAt: e.expires_at
        } : true,
        bio: X.guild_member_profile.bio,
        pronouns: X.guild_member_profile.pronouns,
        badges: X.guild_badges
      },
      n = P.get(X.user.id);
    if (null != n) n.set(X.guild_member_profile.guild_id, t);
    else {
      let e = new Map;
      e.set(X.guild_member_profile.guild_id, t), P.set(X.user.id, e)
    }
    if ((null == (z = X.guild_member_profile) || null == (K = z.profile_effect) ? true : K.expires_at) != null) {
      let e = new o.V7,
        t = D.get(X.user.id);
      if (null != t) t.set(X.guild_member_profile.guild_id, e);
      else {
        let t = new Map;
        t.set(X.guild_member_profile.guild_id, e), D.set(X.user.id, t)
      }
      F(X.user.id, X.guild_member_profile.guild_id)
    }
  }
}

function q(e, t) {
  if (null == e) return;
  let n = new Set(e.map(e => e.id)),
    r = null == t ? true : t.badges.filter(e => !n.has(e.id));
  return r.length > 0 && e.push(...r), e
}

function X(e) {
  let {
    userId: t,
    guildId: n,
    withMutualFriends: r
  } = e, i = null != n ? n : I, a = T.get(t);
  if (null != a) a.add(i);
  else {
    let e = new Set;
    e.add(i), T.set(t, e)
  }
  r && S.add(t)
}

function Q(e) {
  var t, n;
  let {
    userId: r,
    guildId: i,
    apiError: a,
    fetchStartedAt: o
  } = e;
  null == (t = T.get(r)) || t.delete(null != i ? i : I), S.delete(r);
  let s = null != (n = R.get(r)) ? n : {
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
  s.fetchStartedAt = o, s.fetchEndedAt = Date.now(), s.fetchError = a, R.set(r, s), (null == a ? true : a.status) === 404 && (L.set(r, 0), x.set(r, k), j.set(r, M))
}

function J(e) {
  let {
    userId: t,
    accent_color: n,
    banner: r,
    bio: i,
    pronouns: a,
    popout_animation_particle_type: s,
    theme_colors: l,
    profile_effect: c
  } = e, u = R.get(t);
  if (null == u) returnfalse;
  if (R.set(t, v(y({}, u), {
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
    w.set(t, e), Z(t)
  }
}

function $(e) {
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
  } = e, d = P.get(t);
  if (null == n || null == d) returnfalse;
  let f = d.get(n);
  if (null == f) returnfalse;
  if (d.set(n, v(y({}, f), {
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
      r = D.get(t);
    if (null != r) r.set(n, e);
    else {
      let r = new Map;
      r.set(n, e), D.set(t, r)
    }
    F(t, n)
  }
}

function ee(e) {
  G = true
}

function et(e) {
  G = false, null != e.guild_id ? $(e) : J(e)
}

function en(e) {
  G = false
}

function er(e) {
  let {
    userId: t,
    widgets: n
  } = e, r = R.get(t);
  if (null == r) returnfalse;
  R.set(t, v(y({}, r), {
    widgets: n.map(U).filter(h.lm)
  }))
}

function ei(e) {
  let {
    badges: t,
    ttlInSeconds: n,
    userId: r
  } = e;
  B = {
    userId: r,
    badges: t,
    expiresAtMs: Date.now() + 1e3 * n
  };
  let i = R.get(r);
  if (null != i) {
    var a;
    let e = null != (a = i.badges) ? a : [];
    q(e, B), R.set(r, v(y({}, i), {
      badges: e
    }))
  }
}

function ea(e) {
  var t, n;
  let r = e.user.id;
  return !((null != (n = null == (t = T.get(r)) ? true : t.size) ? n : 0) > 0) && eu(r)
}

function eo(e) {
  return [...R.keys()].reduce((e, t) => eu(t) || e, false)
}

function es(e) {
  return eu(e.user.id)
}

function el(e) {
  return eu(e.relationship.id)
}

function ec() {
  T.clear(), S.clear(), R.clear(), P.clear()
}

function eu(e) {
  if (null == e) returnfalse;
  let t = R.get(e);
  if (null == t) returnfalse;
  t.fetchStartedAt = 0, t.fetchEndedAt = 0, t.fetchError = true
}
class ed extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk771845.ZP), this.syncWith([Chunk706454.default], ec)
  }
  isFetchingProfile(e, t) {
    let n = T.get(e);
    return null != n && n.has(null != t ? t : I)
  }
  isFetchingFriends(e) {
    return S.has(e)
  }
  get isSubmitting() {
    return G
  }
  getUserProfile(e) {
    return R.get(e)
  }
  getGuildMemberProfile(e, t) {
    var n, r;
    return null == t ? null : null != (r = null == (n = P.get(e)) ? true : n.get(t)) ? r : null
  }
  getMutualFriends(e) {
    return x.get(e)
  }
  getMutualFriendsCount(e) {
    return L.get(e)
  }
  getMutualGuilds(e) {
    return j.get(e)
  }
  getWidgets(e) {
    var t;
    return null == (t = R.get(e)) ? true : t.widgets
  }
  takeSnapshot() {
    let e = Chunk314897.default.getId(),
      t = R.get(module);
    return null != exports ? {
      version: ed.LATEST_SNAPSHOT_VERSION,
      data: [{
        userId: module,
        profile: exports
      }]
    } : {
      version: ed.LATEST_SNAPSHOT_VERSION,
      data: []
    }
  }
  constructor() {
    super({
      CACHE_LOADED_LAZY: () => this.loadCache(),
      USER_PROFILE_FETCH_START: X,
      USER_PROFILE_FETCH_FAILURE: Q,
      USER_PROFILE_FETCH_SUCCESS: z,
      USER_PROFILE_UPDATE_START: ee,
      USER_PROFILE_UPDATE_SUCCESS: et,
      USER_PROFILE_UPDATE_FAILURE: en,
      WIDGET_PENDING_SAVE_SUCCESS: er,
      USER_PROFILE_PIN_BADGES_ON_CLIENT: ei,
      MUTUAL_FRIENDS_FETCH_START: H,
      MUTUAL_FRIENDS_FETCH_SUCCESS: K,
      MUTUAL_FRIENDS_FETCH_FAILURE: Y,
      USER_UPDATE: ea,
      GUILD_MEMBER_UPDATE: ea,
      GUILD_JOIN: eo,
      GUILD_DELETE: eo,
      INVITE_ACCEPT_SUCCESS: eo,
      GUILD_MEMBER_ADD: es,
      GUILD_MEMBER_REMOVE: es,
      RELATIONSHIP_ADD: el,
      RELATIONSHIP_REMOVE: el,
      RELATIONSHIP_UPDATE: el,
      LOGOUT: V
    }), b(this, "loadCache", () => {
      let e = this.readSnapshot(ed.LATEST_SNAPSHOT_VERSION);
      null != module && module.forEach(e => {
        let {
          userId: t,
          profile: n
        } = e;
        null != t && (null != n ? R.set(t, n) : R.delete(t))
      })
    })
  }
}
b(ed, "displayName", "UserProfileStore"), b(ed, "LATEST_SNAPSHOT_VERSION", 1);
let ef = new ed,
  e_ = ef