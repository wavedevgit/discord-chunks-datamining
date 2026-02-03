/** Chunk was on web.js **/
/** chunk id: 287809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  ASSISTANT_WUMPUS_VOICE_USER: () => I,
  default: () => eU,
  mergeUser: () => R,
  transformUser: () => N,
  users: () => v
}), require("./896048.js"), require("./938796.js"), require("./205816.js"), require("./321073.js"), require("./638769.js");
var Chunk735438 = require("./735438.js"),
  Chunk665260 = require("./665260.js"),
  Chunk155718 = require("./155718.js"),
  Chunk807605 = require("./807605.js"),
  Chunk507698 = require("./507698.js"),
  Chunk628856 = require("./628856.js"),
  Chunk945096 = require("./945096.js"),
  Chunk47537 = require("./47537.js"),
  Chunk244284 = require("./244284.js"),
  Chunk683760 = require("./683760.js"),
  Chunk392737 = require("./392737.js"),
  Chunk572009 = require("./572009.js"),
  Chunk427157 = require("./427157.js"),
  Chunk403362 = require("./403362.js"),
  Chunk961350 = require("./961350.js"),
  Chunk536802 = require("./536802.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = {},
  A = 0,
  I = "47835198259242069";

function S(e, t, n) {
  let r = v[e];
  if (null == r) returnfalse;
  let i = r;
  i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n), v[r.id] = i;
  let a = r !== i;
  return a && A++, a
}

function T(e, t) {
  let n = v[e];
  return !(null == n || (0, u.D)(n.primaryGuild, t.primary_guild)) && (null == n.primaryGuild || null != t.primary_guild) && (n.primaryGuild = (0, u.j)(t.primary_guild), v[n.id] = n, A++, true)
}

function C(e, t) {
  switch (true) {
    case null == e.primaryGuild && null == t.primary_guild:
      break;
    case null != e.primaryGuild && null == t.primary_guild:
    case (0, u.D)(e.primaryGuild, t.primary_guild):
      t.primary_guild = e.primaryGuild;
      break;
    default:
      t.primary_guild = (0, u.j)(t.primary_guild)
  }
  return t
}

function N(e) {
  let t = e.mfa_enabled;
  null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
  let n = (0, _.nq)(e.premium_type);
  true !== n && (e.premiumType = n, delete e.premium_type);
  let r = e.nsfw_allowed;
  null != r && (e.nsfwAllowed = r, delete e.nsfw_allowed);
  let i = e.age_verification_status;
  null != i && (e.ageVerificationStatus = i, delete e.age_verification_status);
  let a = e.public_flags;
  null != a && (e.publicFlags = a, delete e.public_flags);
  let o = e.purchased_flags;
  true !== o && (e.purchasedFlags = o, delete e.purchased_flags);
  let f = e.premium_usage_flags;
  true !== f && (e.premiumUsageFlags = f, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
  let h = e.avatar_decoration_data;
  true !== h && (e.avatarDecorationData = (0, s.Xq)(h), delete e.avatar_decoration_data);
  let m = e.collectibles;
  true !== m && (delete e.collectibles, e.collectibles = (0, l.t)(m));
  let g = e.global_name;
  true !== g && (e.globalName = g, delete e.global_name);
  let E = e.primary_guild;
  true !== E && (e.primary_guild = (0, u.j)(E));
  let y = e.display_name_styles;
  true !== y && (e.displayNameStyles = (0, c.mT)(y), delete e.display_name_styles);
  let b = e.premium_state;
  true !== b && (e.premiumState = (0, p.f)(b), delete e.premium_state);
  let O = e.restricted_schedule;
  if (true !== O) {
    var v;
    e.restrictedSchedule = null != (v = d.kX.fromServer(O)) ? v : null, delete e.restricted_schedule
  }
  let A = e.app_transaction_ids;
  return true !== A && (e.appTransactionIds = A, delete e.app_transaction_ids), e
}

function w(e) {
  return e.id !== g.default.getId()
}

function R(e) {
  let t, n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    r = v[e.id],
    i = true !== e.id && e.id === g.default.getId();
  if (null == r) true !== (t = (r = new h.A(e)).premiumType) && i && (r.premiumType = D((0, _.I9)(r), r.premiumType));
  else if (n) {
    var a;
    let n = N(e);
    true !== (t = null != (a = n.premium_type) ? a : n.premiumType) && i && (0, _._D)(n) && (n = P(n)), n = C(r, n), r = r.merge(n)
  }(0, _.gX)((0, _.I9)(r), t, r.premiumType);
  let o = v[e.id] !== r;
  return v[e.id] = r, o && A++, o
}

function P(e) {
  var t;
  let n = null != (t = e.premium_type) ? t : e.premiumType,
    r = D((0, _._D)(e), n);
  return true !== e.premiumType ? e.premiumType = r : true !== e.premium_type && (e.premium_type = r), e
}

function D(e, t) {
  if (!e) return t;
  let n = f.A.getPremiumTypeOverride(),
    r = f.A.getPremiumTypeActual();
  return n === b.$I ? r : n
}

function L(e, t) {
  if ((null == e ? true : e.users) == null) returnfalse;
  for (let n in e.users) {
    let r = e.users[n];
    w(r) && R(r, t)
  }
}

function x(e, t) {
  var n, r, i, a, o;
  null != e.author && "SENDING" !== e.state && w(e.author) && R(e.author, t), null == (n = e.mentions) || n.forEach(e => {
    w(e) && R(e, t)
  }), (null == (r = e.interaction) ? true : r.user) != null && w(null == (i = e.interaction) ? true : i.user) && R(e.interaction.user, t), null == (a = e.attachments) || a.forEach(e => {
    var n;
    null == (n = e.clip_participants) || n.forEach(e => {
      w(e) && R(e, t)
    })
  }), L(e.resolved, t), (null == (o = e.interaction_metadata) ? true : o.user) != null && w(e.interaction_metadata.user) && R(e.interaction_metadata.user, t), null != e.message_snapshots && e.message_snapshots.forEach(e => {
    var n, r, i, a, o, s, l;
    (null == (i = e.moderator_report) || null == (r = i.reported_member) ? true : r.user) != null && R(e.moderator_report.reported_member.user, t), (null == (o = e.moderator_report) || null == (a = o.reporting_member) ? true : a.user) != null && R(e.moderator_report.reporting_member.user, t), Object.values(null != (n = null == (l = e.message) || null == (s = l.resolved) ? true : s.users) ? n : {}).forEach(e => {
      w(e) && R(e, t)
    })
  })
}

function M(e) {
  let {
    user: t,
    users: n,
    guilds: r
  } = e;
  delete t.premium, delete t.banner_color, R(t), n.forEach(e => {
    R(e)
  }), r.forEach(e => {
    e.members.forEach(t => {
      S(t.user.id, e.id, t.avatar), T(t.user.id, t.user)
    })
  }), null != v[g.default.getId()] && (v[I] = new h.A({
    id: I,
    username: "Wumpus",
    discriminator: "0",
    globalName: "Wumpus",
    avatar: "c1f86b313385cb97985f1b118851c28c"
  }))
}

function j(e) {
  let {
    guilds: t,
    lazyPrivateChannels: n
  } = e;
  t.forEach(e => {
    e.members.forEach(t => {
      S(t.user.id, e.id, t.avatar), T(t.user.id, t.user)
    })
  }), null == n || n.forEach(e => {
    var t;
    null == (t = e.rawRecipients) || t.forEach(e => {
      R(e)
    })
  })
}

function k(e) {
  return !("incomplete" in e)
}

function U(e) {
  if (null != e.users)
    for (let t of e.users) t.id in v && k(t) || (v[t.id] = new h.A(t))
}

function G(e) {
  let {
    user: t
  } = e;
  if (!w(t)) returnfalse;
  R(t)
}

function V(e) {
  let {
    userProfile: t
  } = e;
  if (!w(t.user)) returnfalse;
  R(t.user)
}

function F(e) {
  let {
    user: t
  } = e;
  R(t)
}

function B(e) {
  let {
    user: t
  } = e;
  R({
    id: t.id,
    premiumType: t.premiumType
  }, true)
}

function H(e) {
  let {
    messages: t
  } = e;
  return t.forEach(e => x(e, true)), false
}

function Y(e) {
  let {
    pins: t
  } = e;
  return t.forEach(e => {
    let {
      message: t
    } = e;
    return x(t, true)
  }), false
}

function W(e) {
  let {
    mostRecentMessages: t
  } = e;
  return null == t || t.forEach(e => x(e, false)), false
}

function K(e) {
  let {
    data: t
  } = e;
  return t.forEach(e => {
    let {
      messages: t,
      channels: n
    } = e;
    t.forEach(e => {
      e.forEach(e => {
        x(e, true)
      })
    }), n.forEach(e => {
      if (e.type === y.rbe.DM || e.type === y.rbe.GROUP_DM) {
        var t;
        null == (t = e.recipients) || t.forEach(e => R(e)), null != e.recipient && R(e.recipient)
      }
    })
  }), false
}

function z(e) {
  let {
    firstMessages: t,
    owners: n
  } = e;
  null != t && t.forEach(e => x(e, true)), null != n && n.forEach(e => R(e.user, true))
}

function q(e) {
  let {
    threads: t
  } = e;
  Object.values(t).forEach(e => {
    let {
      first_message: t,
      most_recent_message: n,
      owner: r
    } = e;
    null != t && x(t, true), null != n && x(n, true), null != r && null != r.user && R(r.user, true)
  })
}

function Z(e) {
  let {
    supplementalData: t
  } = e;
  Object.values(t).forEach(e => {
    let {
      message_preview: t
    } = e;
    null != t && x(t, true)
  })
}

function Q(e) {
  let {
    guildScheduledEventUsers: t,
    guildId: n
  } = e;
  t.forEach(e => {
    let {
      user: t,
      member: r
    } = e;
    if (null == t) return;
    R(t);
    let i = null == r ? true : r.avatar;
    null != i && S(t.id, n, i)
  })
}

function X(e) {
  let {
    items: t
  } = e;
  t.forEach(e => {
    null != e.other_user && R(e.other_user)
  })
}

function J(e) {
  let {
    item: t
  } = e;
  null != t.other_user && R(t.other_user)
}

function $(e) {
  let {
    message: t
  } = e;
  if (x(t, true), null != t.flags && i.Lt(t.flags, y.pr7.URGENT)) {
    let e = v[g.default.getId()];
    return null != e && (v[g.default.getId()] = e.set("flags", i.lA(e.flags, y.nhx.HAS_UNREAD_URGENT_MESSAGES, true)), true)
  }
  returnfalse
}

function ee(e) {
  let {
    channel: {
      rawRecipients: t
    }
  } = e;
  return null != t && t.forEach(e => R(e)), false
}

function et(e) {
  let {
    channels: t
  } = e;
  for (let {
      rawRecipients: e
    }
    of t) null != e && e.forEach(e => R(e));
  returnfalse
}
let en = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];

function er(e) {
  let {
    updates: t
  } = e;
  return t.map(e => {
    let t = v[e.user.id];
    if (null == t) returnfalse;
    let n = en.reduce((n, i) => {
      if (e.user.hasOwnProperty(i)) {
        let a = t.set((0, r.camelCase)(i), e.user[i]);
        n = n || a !== t, t = a
      }
      return n
    }, false);
    return !!n && (v[t.id] = t, n)
  }).some(e => e)
}

function ei(e) {
  let {
    bans: t
  } = e;
  t.forEach(e => R(e.user))
}

function ea(e) {
  let {
    bans: t
  } = e;
  t.forEach(e => R(e.user))
}

function eo(e) {
  return R(e.user)
}

function es(e) {
  return !!e.isMember && R(e.user)
}

function el(e) {
  let t = R(e.user);
  return S(e.user.id, e.guildId, e.avatar) || t
}

function ec(e) {
  let {
    ops: t
  } = e;
  for (let e of t)
    if ("INSERT" === e.op || "UPDATE" === e.op) {
      var n;
      let t = null == (n = e.item.member) ? true : n.user;
      if (null == t) continue;
      T(t.id, t)
    } returnfalse
}

function eu(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let e of t) n = e.members.reduce((t, n) => {
    let r = R(n.user);
    return S(n.user.id, e.guildId, n.avatar) || r || t
  }, false) || n;
  return n
}

function ed(e) {
  let t = false;
  for (let n of e.members) R(n.user) && (t = true), S(n.user.id, e.guildId, n.avatar) && (t = true);
  return t
}

function ef(e) {
  var t;
  let n = false;
  for (let r of null != (t = e.users) ? t : []) Object.hasOwn(v, r.id) || (n = R(r) || n);
  return n
}

function ep(e) {
  let {
    members: t
  } = e, n = false;
  return t.forEach(e => {
    null != e.member && R(e.member.user) && (n = true), null != e.presence && R(e.presence.user) && (n = true)
  }), n
}

function e_(e) {
  let {
    addedMembers: t
  } = e, n = false;
  return null == t || t.forEach(e => {
    null != e.member && R(e.member.user) && (n = true), null != e.presence && R(e.presence.user) && (n = true)
  }), n
}

function eh(e) {
  let {
    guild: t
  } = e;
  t.members.forEach(e => {
    let {
      user: {
        id: n,
        username: r,
        avatar: i,
        discriminator: a,
        bot: o
      },
      avatar: s
    } = e;
    n !== g.default.getId() && R({
      id: n,
      username: r,
      avatar: i,
      discriminator: a,
      bot: o
    }), S(n, t.id, s)
  })
}

function em(e) {
  return R(e.relationship.user)
}

function eg(e) {
  return R(e.gameRelationship.user)
}

function eE(e) {
  let {
    relationships: t
  } = e;
  return t.reduce((e, t) => R(t.user) || e, false)
}

function ey(e) {
  return R(e.suggestion.suggested_user)
}

function eb(e) {
  let {
    suggestions: t
  } = e;
  return t.reduce((e, t) => R(t.suggested_user) || e, false)
}

function eO(e) {
  let {
    users: t
  } = e;
  t.forEach(e => {
    null == v[e.id] && (v[e.id] = new h.A(e))
  })
}

function ev(e) {
  let {
    giftCode: t
  } = e;
  return null != t.user && R(t.user)
}

function eA(e) {
  let {
    appliedBoosts: t
  } = e;
  t.forEach(e => {
    let {
      user: t
    } = e;
    null != t && R(t)
  })
}

function eI(e) {
  let {
    request: t
  } = e, {
    user: n,
    actioned_by_user: r
  } = t, i = false;
  return null != n && (i = i || R(n)), null != r && (i = i || R(r)), i
}

function eS(e) {
  let {
    users: t,
    familyCenterTeenActivity: n
  } = e, {
    users: r
  } = n;
  return [...t, ...r].reduce((e, t) => R(t) || e, false)
}

function eT(e) {
  let {
    users: t
  } = e;
  return t.reduce((e, t) => R(t) || e, false)
}

function eC(e) {
  let {
    users: t
  } = e;
  return t.reduce((e, t) => R(t) || e, false)
}

function eN(e) {
  let {
    familyCenterTeenActivity: t
  } = e;
  if (true === t) return;
  let {
    users: n
  } = t;
  return n.reduce((e, t) => R(t) || e, false)
}

function ew(e) {
  let {
    familyCenterTeenActivity: t
  } = e, {
    users: n
  } = t;
  return n.reduce((e, t) => R(t) || e, false)
}

function eR(e) {
  let {
    members: t
  } = e, n = g.default.getId();
  return t.reduce((e, t) => t.member.user.id === n ? e : R(t.member.user) || e, false)
}

function eP(e) {
  let {
    messageItems: t
  } = e;
  t.forEach(e => {
    null != e.message && x(e.message, true)
  }, false)
}

function eD(e) {
  let {
    participants: t
  } = e;
  return t.reduce((e, t) => (0, o.A)(t) && R(t.member.user) || e, false)
}

function eL(e) {
  let {} = e, t = v[g.default.getId()];
  return null != t && (v[g.default.getId()] = t.set("ageVerificationStatus", a.Tk.CLIENT_ONLY_PENDING), true)
}

function ex(e) {
  let {
    status: t
  } = e, n = v[g.default.getId()];
  return null != n && n.ageVerificationStatus === a.Tk.CLIENT_ONLY_PENDING && (v[g.default.getId()] = n.set("ageVerificationStatus", t), true)
}

function eM(e) {
  let {
    resolved: t
  } = e;
  return L(t, true)
}

function ej(e) {
  let {
    stickers: t
  } = e;
  return t.reduce((e, t) => null != t.user && R(t.user) || e, false)
}
class ek extends Chunk536802.A {
  initialize() {
    this.waitFor(g.default, f.A)
  }
  takeSnapshot() {
    let e = this.getCurrentUser();
    return {
      version: ek.LATEST_SNAPSHOT_VERSION,
      data: {
        users: [e].filter(m.Vq)
      }
    }
  }
  handleLoadCache(e) {
    let t = this.readSnapshot(ek.LATEST_SNAPSHOT_VERSION);
    if (null != t)
      for (let e of t.users) v[e.id] = new h.A(e);
    if (null != e.users)
      for (let t of e.users) t.id in v && k(t) || (v[t.id] = new h.A(t));
    for (let t of [e.privateChannels, e.initialGuildChannels])
      for (let e of t) {
        var n;
        null == (n = e.rawRecipients) || n.forEach(e => R(e, false))
      }
  }
  getUserStoreVersion() {
    return A
  }
  getUser(e) {
    if (null != e) return v[e]
  }
  getUsers() {
    return v
  }
  forEach(e) {
    for (let t in v)
      if (false === e(v[t])) break
  }
  findByTag(e, t) {
    for (let n in v) {
      let r = v[n];
      if (null != t && r.username === e && r.discriminator === t || null == t && r.username === e && r.hasUniqueUsername()) return r
    }
  }
  filter(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = [];
    for (let t in v) {
      let r = v[t];
      e(r) && n.push(r)
    }
    return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? false : 0), n
  }
  getCurrentUser() {
    return v[g.default.getId()]
  }
  constructor() {
    super({
      CONNECTION_OPEN: M,
      CONNECTION_OPEN_SUPPLEMENTAL: j,
      UPDATE_CLIENT_PREMIUM_TYPE: B,
      OVERLAY_INITIALIZE: U,
      CACHE_LOADED: e => this.handleLoadCache(e),
      USER_UPDATE: G,
      USER_PROFILE_FETCH_SUCCESS: V,
      CURRENT_USER_UPDATE: F,
      PRESENCE_UPDATES: er,
      SEARCH_MESSAGES_SUCCESS: K,
      MOD_VIEW_SEARCH_MESSAGES_SUCCESS: K,
      LOAD_MESSAGES_SUCCESS: H,
      LOAD_MESSAGES_AROUND_SUCCESS: H,
      LOAD_RECENT_MENTIONS_SUCCESS: H,
      LOAD_PINNED_MESSAGES_SUCCESS: Y,
      THREAD_LIST_SYNC: W,
      MESSAGE_CREATE: $,
      MESSAGE_UPDATE: $,
      GUILD_SETTINGS_LOADED_BANS: ei,
      GUILD_SETTINGS_LOADED_BANS_BATCH: ea,
      GUILD_CREATE: eh,
      GUILD_BAN_ADD: eo,
      GUILD_BAN_REMOVE: eo,
      CHANNEL_RECIPIENT_ADD: es,
      CHANNEL_RECIPIENT_REMOVE: es,
      GUILD_STICKERS_FETCH_SUCCESS: ej,
      GUILD_JOIN_REQUEST_CREATE: eI,
      GUILD_JOIN_REQUEST_UPDATE: eI,
      GUILD_MEMBER_ADD: el,
      GUILD_MEMBER_UPDATE: el,
      GUILD_MEMBERS_CHUNK_BATCH: eu,
      GUILD_MEMBER_LIST_UPDATE: ec,
      THREAD_MEMBER_LIST_UPDATE: ep,
      THREAD_MEMBERS_UPDATE: e_,
      CHANNEL_CREATE: ee,
      CHANNEL_UPDATES: et,
      RELATIONSHIP_ADD: em,
      GAME_RELATIONSHIP_ADD: eg,
      LOAD_RELATIONSHIPS_SUCCESS: eE,
      FRIEND_SUGGESTION_CREATE: ey,
      LOAD_FRIEND_SUGGESTIONS_SUCCESS: eb,
      AUDIT_LOG_FETCH_SUCCESS: eO,
      AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eO,
      GIFT_CODE_RESOLVE_SUCCESS: ev,
      GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eA,
      LOAD_THREADS_SUCCESS: z,
      LOAD_ARCHIVED_THREADS_SUCCESS: z,
      LOAD_FORUM_POSTS: q,
      GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: Q,
      LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: X,
      NOTIFICATION_CENTER_ITEM_CREATE: J,
      LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: Z,
      PASSIVE_UPDATE_V2: ed,
      LOCAL_MESSAGES_LOADED: ef,
      FAMILY_CENTER_INITIAL_LOAD: eS,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eT,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eN,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: ew,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: eC,
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eR,
      LOAD_ICYMI_HYDRATED: eP,
      EMBEDDED_ACTIVITY_UPDATE_V2: eD,
      INITIATE_AGE_VERIFICATION: eL,
      CLOSE_AGE_VERIFICATION_MODAL: ex,
      INTERACTION_MODAL_CREATE: eM
    })
  }
}
O(ek, "displayName", "UserStore"), O(ek, "LATEST_SNAPSHOT_VERSION", 1);
let eU = new ek