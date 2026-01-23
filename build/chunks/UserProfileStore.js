/** Chunk was on web.js **/
/** chunk id: 622543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eE
}), require("./228524.js"), require("./896048.js"), require("./938796.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk540185 = require("./540185.js"),
  Chunk451988 = require("./451988.js"),
  Chunk573648 = require("./573648.js"),
  Chunk495704 = require("./495704.js"),
  Chunk773669 = require("./773669.js"),
  Chunk427157 = require("./427157.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk536802 = require("./536802.js"),
  Chunk290863 = require("./290863.js"),
  Chunk711014 = require("./711014.js"),
  Chunk403362 = require("./403362.js"),
  Chunk439174 = require("./439174.js"),
  Chunk633075 = require("./633075.js"),
  Chunk289173 = require("./289173.js"),
  Chunk985018 = require("./985018.jsx");

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

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = Symbol("NO GUILD ID"),
  T = new Map,
  C = new Set,
  N = "premium",
  R = "guild_booster_lvl",
  w = 0x7fffffff,
  P = new Map,
  D = new Map,
  x = new Map,
  L = new Map,
  j = new Map,
  M = new Map,
  k = new Map,
  U = [],
  G = [],
  V = null,
  F = new Map;

function B(e) {
  let t = e.data.type;
  switch (t) {
    case a.x.CURRENT_GAMES:
    case a.x.FAVORITE_GAMES:
    case a.x.PLAYED_GAMES:
    case a.x.WANT_TO_PLAY_GAMES:
      let n = e.data.games.map(e => ({
          applicationId: e.game_id,
          comment: e.comment,
          tags: e.tags
        })),
        r = i().uniqBy(n, "applicationId");
      return new y.Yy({
        id: e.id,
        type: t,
        games: r
      });
    case a.x.APPLICATION:
      return new E.R({
        id: e.id,
        applicationId: e.data.application_id
      })
  }
}
let H = false,
  Y = null;

function W(e) {
  let t = P.get(e);
  if (null == t) return;
  let n = t.profileEffect;
  if ((null == n ? true : n.expiresAt) == null) return;
  let r = 1e3 * n.expiresAt - Date.now();
  if (r <= 0) {
    t.profileEffect = true, x.delete(e), eg.emitChange();
    return
  }
  let i = x.get(e);
  null != i && i.start(Math.min(w, r), () => W(e))
}

function K(e, t) {
  var n, r;
  let i = D.get(e);
  if (null == i) return;
  let a = i.get(t);
  if (null == a) return;
  let s = a.profileEffect;
  if ((null == s ? true : s.expiresAt) == null) return;
  let o = 1e3 * s.expiresAt - Date.now();
  if (o <= 0) {
    i.set(t, I(v({}, a), {
      profileEffect: true
    })), null == (r = L.get(e)) || r.delete(t), eg.emitChange();
    return
  }
  let l = null == (n = L.get(e)) ? true : n.get(t);
  null != l && l.start(Math.min(w, o), () => K(e, t))
}

function z() {
  T.clear(), C.clear(), P.clear(), D.clear(), j.clear(), M.clear(), k.clear(), H = false
}

function q(e) {
  let {
    userId: t
  } = e;
  C.add(t)
}

function X(e) {
  let {
    userId: t
  } = e;
  C.delete(t)
}

function Z(e) {
  return i()(e).map(e => ({
    key: e.id,
    user: new u.A(e),
    status: _.A.getStatus(e.id)
  })).sortBy(e => {
    let {
      user: t
    } = e;
    return t.username.toLowerCase()
  }).value()
}

function Q(e) {
  C.delete(e.userId), j.set(e.userId, Z(e.mutualFriends)), M.set(e.userId, e.mutualFriends.length)
}

function $(e) {
  var t, n, r, i, a, l, c, u, d, p, _, E, y, O, A, w, G, V, F, H, z;
  let {
    userProfile: q,
    fetchStartedAt: X
  } = e, Q = null != (t = null == (l = q.guild_member_profile) ? true : l.guild_id) ? t : S;
  if (null == (c = T.get(q.user.id)) || c.delete(Q), C.delete(q.user.id), null != q.mutual_guilds) {
    let e = {};
    q.mutual_guilds.forEach(t => {
      let {
        id: n,
        nick: r
      } = t, i = f.A.getGuild(n);
      null != i && (e[n] = {
        guild: i,
        nick: r
      })
    }), k.set(q.user.id, h.Ay.getFlattenedGuildIds().filter(t => null != e[t]).map(t => ({
      guild: e[t].guild,
      nick: e[t].nick
    })))
  }
  if (null != q.mutual_friends_count) {
    let e = q.mutual_friends_count;
    M.set(q.user.id, e), 0 === e && j.set(q.user.id, U)
  }
  null != q.mutual_friends && (j.set(q.user.id, Z(q.mutual_friends)), M.set(q.user.id, q.mutual_friends.length));
  let $ = null != q.premium_since ? new Date(q.premium_since) : null,
    ee = null != q.premium_guild_since ? new Date(q.premium_guild_since) : null,
    et = q.application,
    en = null == (u = q.user_profile) ? true : u.profile_effect,
    er = null != q.badges ? q.badges.map(e => {
      let t = (0, g.e0)(e.id);
      if ((e.id === N || null != t) && null != $) {
        let n = b.intl.formatToPlainString(b.t["8zbGNR"], {
          date: $
        });
        return null != t && (n = b.intl.formatToPlainString(b.t.Hu4jfi, {
          date: $
        })), I(v({}, e), {
          description: n
        })
      }
      return e.id.startsWith(R) && null != ee ? I(v({}, e), {
        description: b.intl.formatToPlainString(b.t.IWkAq7, {
          date: ee
        })
      }) : e
    }) : [];
  if (null != Y && Y.userId === q.user.id && (Date.now() > Y.expiresAtMs ? Y = null : J(er, Y)), P.set(q.user.id, {
      userId: q.user.id,
      banner: null == (d = q.user_profile) ? true : d.banner,
      accentColor: null == (p = q.user_profile) ? true : p.accent_color,
      themeColors: null == (_ = q.user_profile) ? true : _.theme_colors,
      popoutAnimationParticleType: null == (E = q.user_profile) ? true : E.popout_animation_particle_type,
      bio: null != (n = null == (y = q.user_profile) ? true : y.bio) ? n : "",
      profileEffect: null != en ? {
        skuId: en.sku_id,
        expiresAt: en.expires_at
      } : true,
      pronouns: null != (r = null == (O = q.user_profile) ? true : O.pronouns) ? r : "",
      connectedAccounts: null != (i = q.connected_accounts.filter(e => o.A.isSupported(e.type))) ? i : [],
      applicationRoleConnections: null != (a = q.application_role_connections) ? a : [],
      premiumSince: $,
      premiumType: q.premium_type,
      premiumGuildSince: ee,
      fetchStartedAt: X,
      fetchEndedAt: Date.now(),
      legacyUsername: q.legacy_username,
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
      widgets: null == (A = q.widgets) ? true : A.map(B).filter(m.Vq),
      wishlistSettings: q.wishlist_settings
    }), (null == (G = q.user_profile) || null == (w = G.profile_effect) ? true : w.expires_at) != null) {
    let e = new s.Ep;
    x.set(q.user.id, e), W(q.user.id)
  }
  if (null != q.guild_member_profile) {
    let e = q.guild_member_profile.profile_effect,
      t = {
        userId: q.user.id,
        guildId: q.guild_member_profile.guild_id,
        banner: q.guild_member_profile.banner,
        accentColor: q.guild_member_profile.accent_color,
        themeColors: null == (V = q.guild_member_profile) ? true : V.theme_colors,
        popoutAnimationParticleType: null == (F = q.guild_member_profile) ? true : F.popout_animation_particle_type,
        profileEffect: null != e ? {
          skuId: e.sku_id,
          expiresAt: e.expires_at
        } : true,
        bio: q.guild_member_profile.bio,
        pronouns: q.guild_member_profile.pronouns,
        badges: q.guild_badges
      },
      n = D.get(q.user.id);
    if (null != n) n.set(q.guild_member_profile.guild_id, t);
    else {
      let e = new Map;
      e.set(q.guild_member_profile.guild_id, t), D.set(q.user.id, e)
    }
    if ((null == (z = q.guild_member_profile) || null == (H = z.profile_effect) ? true : H.expires_at) != null) {
      let e = new s.Ep,
        t = L.get(q.user.id);
      if (null != t) t.set(q.guild_member_profile.guild_id, e);
      else {
        let t = new Map;
        t.set(q.guild_member_profile.guild_id, e), L.set(q.user.id, t)
      }
      K(q.user.id, q.guild_member_profile.guild_id)
    }
  }
}

function J(e, t) {
  if (null == e) return;
  let n = new Set(e.map(e => e.id)),
    r = null == t ? true : t.badges.filter(e => !n.has(e.id));
  return r.length > 0 && e.push(...r), e
}

function ee(e) {
  let {
    userId: t,
    guildId: n,
    withMutualFriends: r
  } = e, i = null != n ? n : S, a = T.get(t);
  if (null != a) a.add(i);
  else {
    let e = new Set;
    e.add(i), T.set(t, e)
  }
  r && C.add(t)
}

function et(e) {
  var t, n;
  let {
    userId: r,
    guildId: i,
    apiError: a,
    fetchStartedAt: s
  } = e;
  null == (n = T.get(r)) || n.delete(null != i ? i : S), C.delete(r);
  let o = null != (t = P.get(r)) ? t : {
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
  o.fetchStartedAt = s, o.fetchEndedAt = Date.now(), o.fetchError = a, P.set(r, o), (null == a ? true : a.status) === 404 && (M.set(r, 0), j.set(r, U), k.set(r, G))
}

function en(e) {
  let {
    userId: t,
    accent_color: n,
    banner: r,
    bio: i,
    pronouns: a,
    popout_animation_particle_type: o,
    theme_colors: l,
    profile_effect: c
  } = e, u = P.get(t);
  if (null == u) returnfalse;
  if (P.set(t, I(v({}, u), {
      accentColor: n,
      banner: r,
      bio: i,
      pronouns: a,
      popoutAnimationParticleType: o,
      themeColors: l,
      profileEffect: null != c ? {
        skuId: c.sku_id,
        expiresAt: c.expires_at
      } : true
    })), (null == c ? true : c.expires_at) != null) {
    let e = new s.Ep;
    x.set(t, e), W(t)
  }
}

function er(e) {
  let {
    userId: t,
    guild_id: n,
    accent_color: r,
    banner: i,
    bio: a,
    pronouns: o,
    popout_animation_particle_type: l,
    theme_colors: c,
    profile_effect: u
  } = e, d = D.get(t);
  if (null == n || null == d) returnfalse;
  let f = d.get(n);
  if (null == f) returnfalse;
  if (d.set(n, I(v({}, f), {
      accentColor: r,
      banner: i,
      bio: a,
      pronouns: o,
      popoutAnimationParticleType: l,
      themeColors: c,
      profileEffect: null != u ? {
        skuId: u.sku_id,
        expiresAt: u.expires_at
      } : true
    })), (null == u ? true : u.expires_at) != null) {
    let e = new s.Ep,
      r = L.get(t);
    if (null != r) r.set(n, e);
    else {
      let r = new Map;
      r.set(n, e), L.set(t, r)
    }
    K(t, n)
  }
}

function ei(e) {
  H = true
}

function ea(e) {
  H = false, null != e.guild_id ? er(e) : en(e)
}

function es(e) {
  H = false
}

function eo(e) {
  let {
    userId: t,
    widgets: n
  } = e, r = P.get(t);
  if (null == r) returnfalse;
  P.set(t, I(v({}, r), {
    widgets: n.map(B).filter(m.Vq)
  }))
}

function el(e) {
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
  let i = P.get(r);
  if (null != i) {
    var a;
    let e = null != (a = i.badges) ? a : [];
    J(e, Y), P.set(r, I(v({}, i), {
      badges: e
    }))
  }
}

function ec(e) {
  var t, n;
  let r = e.user.id;
  return !((null != (t = null == (n = T.get(r)) ? true : n.size) ? t : 0) > 0) && e_(r)
}

function eu(e) {
  return [...P.keys()].reduce((e, t) => e_(t) || e, false)
}

function ed(e) {
  return e_(e.user.id)
}

function ef(e) {
  return e_(e.relationship.id)
}

function ep() {
  T.clear(), C.clear(), P.clear(), D.clear()
}

function e_(e) {
  if (null == e) returnfalse;
  let t = P.get(e);
  if (null == t) returnfalse;
  t.fetchStartedAt = 0, t.fetchEndedAt = 0, t.fetchError = true
}

function eh(e) {
  for (let t of (V = e.applicationConfigs.map(e => new l.V(e)), F.clear(), V)) F.set(t.applicationId, t)
}
class em extends Chunk536802.A {
  initialize() {
    this.waitFor(h.Ay), this.syncWith([c.default], ep)
  }
  isFetchingProfile(e, t) {
    let n = T.get(e);
    return null != n && n.has(null != t ? t : S)
  }
  isFetchingFriends(e) {
    return C.has(e)
  }
  get isSubmitting() {
    return H
  }
  getUserProfile(e) {
    return P.get(e)
  }
  getGuildMemberProfile(e, t) {
    var n, r;
    return null == t ? null : null != (n = null == (r = D.get(e)) ? true : r.get(t)) ? n : null
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
    return null == (t = P.get(e)) ? true : t.widgets
  }
  getWishlistIds(e) {
    let t = P.get(e);
    return (null == t ? true : t.wishlistSettings) != null ? Object.keys(t.wishlistSettings) : []
  }
  getFirstWishlistId(e) {
    let t = this.getWishlistIds(e);
    return t.length > 0 ? t[0] : null
  }
  getWishlistSettings(e, t) {
    var n, r;
    let i = P.get(e);
    return null != (n = null == i || null == (r = i.wishlistSettings) ? true : r[t]) ? n : null
  }
  takeSnapshot() {
    let e = d.default.getId(),
      t = P.get(e);
    return null != t ? {
      version: em.LATEST_SNAPSHOT_VERSION,
      data: [{
        userId: e,
        profile: t
      }]
    } : {
      version: em.LATEST_SNAPSHOT_VERSION,
      data: []
    }
  }
  get applicationWidgetConfigs() {
    return V
  }
  getApplicationWidgetConfig(e) {
    return F.get(e)
  }
  constructor() {
    super({
      CACHE_LOADED_LAZY: () => this.loadCache(),
      USER_PROFILE_FETCH_START: ee,
      USER_PROFILE_FETCH_FAILURE: et,
      USER_PROFILE_FETCH_SUCCESS: $,
      USER_PROFILE_UPDATE_START: ei,
      USER_PROFILE_UPDATE_SUCCESS: ea,
      USER_PROFILE_UPDATE_FAILURE: es,
      WIDGET_PENDING_SAVE_SUCCESS: eo,
      USER_PROFILE_PIN_BADGES_ON_CLIENT: el,
      MUTUAL_FRIENDS_FETCH_START: q,
      MUTUAL_FRIENDS_FETCH_SUCCESS: Q,
      MUTUAL_FRIENDS_FETCH_FAILURE: X,
      USER_UPDATE: ec,
      GUILD_MEMBER_UPDATE: ec,
      GUILD_JOIN: eu,
      GUILD_DELETE: eu,
      INVITE_ACCEPT_SUCCESS: eu,
      GUILD_MEMBER_ADD: ed,
      GUILD_MEMBER_REMOVE: ed,
      RELATIONSHIP_ADD: ef,
      RELATIONSHIP_REMOVE: ef,
      RELATIONSHIP_UPDATE: ef,
      USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS: eh,
      LOGOUT: z
    }), O(this, "loadCache", () => {
      let e = this.readSnapshot(em.LATEST_SNAPSHOT_VERSION);
      null != e && e.forEach(e => {
        let {
          userId: t,
          profile: n
        } = e;
        null != t && (null != n ? P.set(t, n) : P.delete(t))
      })
    })
  }
}
O(em, "displayName", "UserProfileStore"), O(em, "LATEST_SNAPSHOT_VERSION", 1);
let eg = new em,
  eE = eg