/** Chunk was on web.js **/
/** chunk id: 287809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  ASSISTANT_WUMPUS_VOICE_USER: () => A,
  default: () => ek,
  mergeUser: () => w,
  transformUser: () => C,
  users: () => O
}), require("./896048.js"), require("./938796.js"), require("./205816.js"), require("./321073.js"), require("./638769.js");
var Chunk735438 = require("./735438.js"),
  Chunk665260 = require("./665260.js"),
  Chunk155718 = require("./155718.js"),
  Chunk807605 = require("./807605.js"),
  Chunk507698 = require("./507698.js"),
  Chunk628856 = require("./628856.js"),
  Chunk945096 = require("./945096.js"),
  Chunk47537 = require("./47537.js"),
  Chunk683760 = require("./683760.js"),
  Chunk392737 = require("./392737.js"),
  Chunk572009 = require("./572009.js"),
  Chunk427157 = require("./427157.js"),
  Chunk403362 = require("./403362.js"),
  Chunk961350 = require("./961350.js"),
  Chunk536802 = require("./536802.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = {},
  v = 0,
  A = "47835198259242069";

function I(e, t, n) {
  let r = O[e];
  if (null == r) returnfalse;
  let i = r;
  i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n), O[r.id] = i;
  let a = r !== i;
  return a && v++, a
}

function S(e, t) {
  let n = O[e];
  return !(null == n || (0, u.D)(n.primaryGuild, t.primary_guild)) && (null == n.primaryGuild || null != t.primary_guild) && (n.primaryGuild = (0, u.j)(t.primary_guild), O[n.id] = n, v++, true)
}

function T(e, t) {
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

function C(e) {
  let t = e.mfa_enabled;
  null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
  let n = (0, p.nq)(e.premium_type);
  true !== n && (e.premiumType = n, delete e.premium_type);
  let r = e.nsfw_allowed;
  null != r && (e.nsfwAllowed = r, delete e.nsfw_allowed);
  let i = e.age_verification_status;
  null != i && (e.ageVerificationStatus = i, delete e.age_verification_status);
  let a = e.public_flags;
  null != a && (e.publicFlags = a, delete e.public_flags);
  let s = e.purchased_flags;
  true !== s && (e.purchasedFlags = s, delete e.purchased_flags);
  let d = e.premium_usage_flags;
  true !== d && (e.premiumUsageFlags = d, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
  let _ = e.avatar_decoration_data;
  true !== _ && (e.avatarDecorationData = (0, o.Xq)(_), delete e.avatar_decoration_data);
  let h = e.collectibles;
  true !== h && (delete e.collectibles, e.collectibles = (0, l.t)(h));
  let m = e.global_name;
  true !== m && (e.globalName = m, delete e.global_name);
  let g = e.primary_guild;
  true !== g && (e.primary_guild = (0, u.j)(g));
  let E = e.display_name_styles;
  true !== E && (e.displayNameStyles = (0, c.mT)(E), delete e.display_name_styles);
  let y = e.premium_state;
  return true !== y && (e.premiumState = (0, f.f)(y), delete e.premium_state), e
}

function N(e) {
  return e.id !== m.default.getId()
}

function w(e) {
  let t, n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    r = O[e.id],
    i = true !== e.id && e.id === m.default.getId();
  if (null == r) true !== (t = (r = new _.A(e)).premiumType) && i && (r.premiumType = P((0, p.I9)(r), r.premiumType));
  else if (n) {
    var a;
    let n = C(e);
    true !== (t = null != (a = n.premium_type) ? a : n.premiumType) && i && (0, p._D)(n) && (n = R(n)), n = T(r, n), r = r.merge(n)
  }(0, p.gX)((0, p.I9)(r), t, r.premiumType);
  let s = O[e.id] !== r;
  return O[e.id] = r, s && v++, s
}

function R(e) {
  var t;
  let n = null != (t = e.premium_type) ? t : e.premiumType,
    r = P((0, p._D)(e), n);
  return true !== e.premiumType ? e.premiumType = r : true !== e.premium_type && (e.premium_type = r), e
}

function P(e, t) {
  if (!e) return t;
  let n = d.A.getPremiumTypeOverride(),
    r = d.A.getPremiumTypeActual();
  return n === y.$I ? r : n
}

function D(e, t) {
  if ((null == e ? true : e.users) == null) returnfalse;
  for (let n in e.users) {
    let r = e.users[n];
    N(r) && w(r, t)
  }
}

function x(e, t) {
  var n, r, i, a, s;
  null != e.author && "SENDING" !== e.state && N(e.author) && w(e.author, t), null == (n = e.mentions) || n.forEach(e => {
    N(e) && w(e, t)
  }), (null == (r = e.interaction) ? true : r.user) != null && N(null == (i = e.interaction) ? true : i.user) && w(e.interaction.user, t), null == (a = e.attachments) || a.forEach(e => {
    var n;
    null == (n = e.clip_participants) || n.forEach(e => {
      N(e) && w(e, t)
    })
  }), D(e.resolved, t), (null == (s = e.interaction_metadata) ? true : s.user) != null && N(e.interaction_metadata.user) && w(e.interaction_metadata.user, t), null != e.message_snapshots && e.message_snapshots.forEach(e => {
    var n, r, i, a, s, o, l;
    (null == (i = e.moderator_report) || null == (r = i.reported_member) ? true : r.user) != null && w(e.moderator_report.reported_member.user, t), (null == (s = e.moderator_report) || null == (a = s.reporting_member) ? true : a.user) != null && w(e.moderator_report.reporting_member.user, t), Object.values(null != (n = null == (l = e.message) || null == (o = l.resolved) ? true : o.users) ? n : {}).forEach(e => {
      N(e) && w(e, t)
    })
  })
}

function L(e) {
  let {
    user: t,
    users: n,
    guilds: r
  } = e;
  delete t.premium, delete t.banner_color, w(t), n.forEach(e => {
    w(e)
  }), r.forEach(e => {
    e.members.forEach(t => {
      I(t.user.id, e.id, t.avatar), S(t.user.id, t.user)
    })
  }), null != O[m.default.getId()] && (O[A] = new _.A({
    id: A,
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
      I(t.user.id, e.id, t.avatar), S(t.user.id, t.user)
    })
  }), null == n || n.forEach(e => {
    var t;
    null == (t = e.rawRecipients) || t.forEach(e => {
      w(e)
    })
  })
}

function M(e) {
  return !("incomplete" in e)
}

function k(e) {
  if (null != e.users)
    for (let t of e.users) t.id in O && M(t) || (O[t.id] = new _.A(t))
}

function U(e) {
  let {
    user: t
  } = e;
  if (!N(t)) returnfalse;
  w(t)
}

function G(e) {
  let {
    userProfile: t
  } = e;
  if (!N(t.user)) returnfalse;
  w(t.user)
}

function V(e) {
  let {
    user: t
  } = e;
  w(t)
}

function F(e) {
  let {
    user: t
  } = e;
  w({
    id: t.id,
    premiumType: t.premiumType
  }, true)
}

function B(e) {
  let {
    messages: t
  } = e;
  return t.forEach(e => x(e, true)), false
}

function H(e) {
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

function Y(e) {
  let {
    mostRecentMessages: t
  } = e;
  return null == t || t.forEach(e => x(e, false)), false
}

function W(e) {
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
      if (e.type === E.rbe.DM || e.type === E.rbe.GROUP_DM) {
        var t;
        null == (t = e.recipients) || t.forEach(e => w(e)), null != e.recipient && w(e.recipient)
      }
    })
  }), false
}

function K(e) {
  let {
    firstMessages: t,
    owners: n
  } = e;
  null != t && t.forEach(e => x(e, true)), null != n && n.forEach(e => w(e.user, true))
}

function z(e) {
  let {
    threads: t
  } = e;
  Object.values(t).forEach(e => {
    let {
      first_message: t,
      most_recent_message: n,
      owner: r
    } = e;
    null != t && x(t, true), null != n && x(n, true), null != r && null != r.user && w(r.user, true)
  })
}

function q(e) {
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

function Z(e) {
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
    w(t);
    let i = null == r ? true : r.avatar;
    null != i && I(t.id, n, i)
  })
}

function X(e) {
  let {
    items: t
  } = e;
  t.forEach(e => {
    null != e.other_user && w(e.other_user)
  })
}

function Q(e) {
  let {
    item: t
  } = e;
  null != t.other_user && w(t.other_user)
}

function J(e) {
  let {
    message: t
  } = e;
  if (x(t, true), null != t.flags && i.Lt(t.flags, E.pr7.URGENT)) {
    let e = O[m.default.getId()];
    return null != e && (O[m.default.getId()] = e.set("flags", i.lA(e.flags, E.nhx.HAS_UNREAD_URGENT_MESSAGES, true)), true)
  }
  returnfalse
}

function $(e) {
  let {
    channel: {
      rawRecipients: t
    }
  } = e;
  return null != t && t.forEach(e => w(e)), false
}

function ee(e) {
  let {
    channels: t
  } = e;
  for (let {
      rawRecipients: e
    }
    of t) null != e && e.forEach(e => w(e));
  returnfalse
}
let et = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];

function en(e) {
  let {
    updates: t
  } = e;
  return t.map(e => {
    let t = O[e.user.id];
    if (null == t) returnfalse;
    let n = et.reduce((n, i) => {
      if (e.user.hasOwnProperty(i)) {
        let a = t.set((0, r.camelCase)(i), e.user[i]);
        n = n || a !== t, t = a
      }
      return n
    }, false);
    return !!n && (O[t.id] = t, n)
  }).some(e => e)
}

function er(e) {
  let {
    bans: t
  } = e;
  t.forEach(e => w(e.user))
}

function ei(e) {
  let {
    bans: t
  } = e;
  t.forEach(e => w(e.user))
}

function ea(e) {
  return w(e.user)
}

function es(e) {
  return !!e.isMember && w(e.user)
}

function eo(e) {
  let t = w(e.user);
  return I(e.user.id, e.guildId, e.avatar) || t
}

function el(e) {
  let {
    ops: t
  } = e;
  for (let e of t)
    if ("INSERT" === e.op || "UPDATE" === e.op) {
      var n;
      let t = null == (n = e.item.member) ? true : n.user;
      if (null == t) continue;
      S(t.id, t)
    } returnfalse
}

function ec(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let e of t) n = e.members.reduce((t, n) => {
    let r = w(n.user);
    return I(n.user.id, e.guildId, n.avatar) || r || t
  }, false) || n;
  return n
}

function eu(e) {
  let t = false;
  for (let n of e.members) w(n.user) && (t = true), I(n.user.id, e.guildId, n.avatar) && (t = true);
  return t
}

function ed(e) {
  var t;
  let n = false;
  for (let r of null != (t = e.users) ? t : []) Object.hasOwn(O, r.id) || (n = w(r) || n);
  return n
}

function ef(e) {
  let {
    members: t
  } = e, n = false;
  return t.forEach(e => {
    null != e.member && w(e.member.user) && (n = true), null != e.presence && w(e.presence.user) && (n = true)
  }), n
}

function ep(e) {
  let {
    addedMembers: t
  } = e, n = false;
  return null == t || t.forEach(e => {
    null != e.member && w(e.member.user) && (n = true), null != e.presence && w(e.presence.user) && (n = true)
  }), n
}

function e_(e) {
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
        bot: s
      },
      avatar: o
    } = e;
    n !== m.default.getId() && w({
      id: n,
      username: r,
      avatar: i,
      discriminator: a,
      bot: s
    }), I(n, t.id, o)
  })
}

function eh(e) {
  return w(e.relationship.user)
}

function em(e) {
  return w(e.gameRelationship.user)
}

function eg(e) {
  let {
    relationships: t
  } = e;
  return t.reduce((e, t) => w(t.user) || e, false)
}

function eE(e) {
  return w(e.suggestion.suggested_user)
}

function ey(e) {
  let {
    suggestions: t
  } = e;
  return t.reduce((e, t) => w(t.suggested_user) || e, false)
}

function eb(e) {
  let {
    users: t
  } = e;
  t.forEach(e => {
    null == O[e.id] && (O[e.id] = new _.A(e))
  })
}

function eO(e) {
  let {
    giftCode: t
  } = e;
  return null != t.user && w(t.user)
}

function ev(e) {
  let {
    appliedBoosts: t
  } = e;
  t.forEach(e => {
    let {
      user: t
    } = e;
    null != t && w(t)
  })
}

function eA(e) {
  let {
    request: t
  } = e, {
    user: n,
    actioned_by_user: r
  } = t, i = false;
  return null != n && (i = i || w(n)), null != r && (i = i || w(r)), i
}

function eI(e) {
  let {
    users: t,
    familyCenterTeenActivity: n
  } = e, {
    users: r
  } = n;
  return [...t, ...r].reduce((e, t) => w(t) || e, false)
}

function eS(e) {
  let {
    users: t
  } = e;
  return t.reduce((e, t) => w(t) || e, false)
}

function eT(e) {
  let {
    users: t
  } = e;
  return t.reduce((e, t) => w(t) || e, false)
}

function eC(e) {
  let {
    familyCenterTeenActivity: t
  } = e;
  if (true === t) return;
  let {
    users: n
  } = t;
  return n.reduce((e, t) => w(t) || e, false)
}

function eN(e) {
  let {
    familyCenterTeenActivity: t
  } = e, {
    users: n
  } = t;
  return n.reduce((e, t) => w(t) || e, false)
}

function ew(e) {
  let {
    members: t
  } = e, n = m.default.getId();
  return t.reduce((e, t) => t.member.user.id === n ? e : w(t.member.user) || e, false)
}

function eR(e) {
  let {
    messageItems: t
  } = e;
  t.forEach(e => {
    null != e.message && x(e.message, true)
  }, false)
}

function eP(e) {
  let {
    participants: t
  } = e;
  return t.reduce((e, t) => (0, s.A)(t) && w(t.member.user) || e, false)
}

function eD(e) {
  let {} = e, t = O[m.default.getId()];
  return null != t && (O[m.default.getId()] = t.set("ageVerificationStatus", a.Tk.CLIENT_ONLY_PENDING), true)
}

function ex(e) {
  let {
    status: t
  } = e, n = O[m.default.getId()];
  return null != n && n.ageVerificationStatus === a.Tk.CLIENT_ONLY_PENDING && (O[m.default.getId()] = n.set("ageVerificationStatus", t), true)
}

function eL(e) {
  let {
    resolved: t
  } = e;
  return D(t, true)
}

function ej(e) {
  let {
    stickers: t
  } = e;
  return t.reduce((e, t) => null != t.user && w(t.user) || e, false)
}
class eM extends Chunk536802.A {
  initialize() {
    this.waitFor(m.default, d.A)
  }
  takeSnapshot() {
    let e = this.getCurrentUser();
    return {
      version: eM.LATEST_SNAPSHOT_VERSION,
      data: {
        users: [e].filter(h.Vq)
      }
    }
  }
  handleLoadCache(e) {
    let t = this.readSnapshot(eM.LATEST_SNAPSHOT_VERSION);
    if (null != t)
      for (let e of t.users) O[e.id] = new _.A(e);
    if (null != e.users)
      for (let t of e.users) t.id in O && M(t) || (O[t.id] = new _.A(t));
    for (let t of [e.privateChannels, e.initialGuildChannels])
      for (let e of t) {
        var n;
        null == (n = e.rawRecipients) || n.forEach(e => w(e, false))
      }
  }
  getUserStoreVersion() {
    return v
  }
  getUser(e) {
    if (null != e) return O[e]
  }
  getUsers() {
    return O
  }
  forEach(e) {
    for (let t in O)
      if (false === e(O[t])) break
  }
  findByTag(e, t) {
    for (let n in O) {
      let r = O[n];
      if (null != t && r.username === e && r.discriminator === t || null == t && r.username === e && r.hasUniqueUsername()) return r
    }
  }
  filter(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = [];
    for (let t in O) {
      let r = O[t];
      e(r) && n.push(r)
    }
    return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? false : 0), n
  }
  getCurrentUser() {
    return O[m.default.getId()]
  }
  constructor() {
    super({
      CONNECTION_OPEN: L,
      CONNECTION_OPEN_SUPPLEMENTAL: j,
      UPDATE_CLIENT_PREMIUM_TYPE: F,
      OVERLAY_INITIALIZE: k,
      CACHE_LOADED: e => this.handleLoadCache(e),
      USER_UPDATE: U,
      USER_PROFILE_FETCH_SUCCESS: G,
      CURRENT_USER_UPDATE: V,
      PRESENCE_UPDATES: en,
      SEARCH_MESSAGES_SUCCESS: W,
      MOD_VIEW_SEARCH_MESSAGES_SUCCESS: W,
      LOAD_MESSAGES_SUCCESS: B,
      LOAD_MESSAGES_AROUND_SUCCESS: B,
      LOAD_RECENT_MENTIONS_SUCCESS: B,
      LOAD_PINNED_MESSAGES_SUCCESS: H,
      THREAD_LIST_SYNC: Y,
      MESSAGE_CREATE: J,
      MESSAGE_UPDATE: J,
      GUILD_SETTINGS_LOADED_BANS: er,
      GUILD_SETTINGS_LOADED_BANS_BATCH: ei,
      GUILD_CREATE: e_,
      GUILD_BAN_ADD: ea,
      GUILD_BAN_REMOVE: ea,
      CHANNEL_RECIPIENT_ADD: es,
      CHANNEL_RECIPIENT_REMOVE: es,
      GUILD_STICKERS_FETCH_SUCCESS: ej,
      GUILD_JOIN_REQUEST_CREATE: eA,
      GUILD_JOIN_REQUEST_UPDATE: eA,
      GUILD_MEMBER_ADD: eo,
      GUILD_MEMBER_UPDATE: eo,
      GUILD_MEMBERS_CHUNK_BATCH: ec,
      GUILD_MEMBER_LIST_UPDATE: el,
      THREAD_MEMBER_LIST_UPDATE: ef,
      THREAD_MEMBERS_UPDATE: ep,
      CHANNEL_CREATE: $,
      CHANNEL_UPDATES: ee,
      RELATIONSHIP_ADD: eh,
      GAME_RELATIONSHIP_ADD: em,
      LOAD_RELATIONSHIPS_SUCCESS: eg,
      FRIEND_SUGGESTION_CREATE: eE,
      LOAD_FRIEND_SUGGESTIONS_SUCCESS: ey,
      AUDIT_LOG_FETCH_SUCCESS: eb,
      AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eb,
      GIFT_CODE_RESOLVE_SUCCESS: eO,
      GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: ev,
      LOAD_THREADS_SUCCESS: K,
      LOAD_ARCHIVED_THREADS_SUCCESS: K,
      LOAD_FORUM_POSTS: z,
      GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: Z,
      LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: X,
      NOTIFICATION_CENTER_ITEM_CREATE: Q,
      LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: q,
      PASSIVE_UPDATE_V2: eu,
      LOCAL_MESSAGES_LOADED: ed,
      FAMILY_CENTER_INITIAL_LOAD: eI,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eS,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eC,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eN,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: eT,
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: ew,
      LOAD_ICYMI_HYDRATED: eR,
      EMBEDDED_ACTIVITY_UPDATE_V2: eP,
      INITIATE_AGE_VERIFICATION: eD,
      CLOSE_AGE_VERIFICATION_MODAL: ex,
      INTERACTION_MODAL_CREATE: eL
    })
  }
}
b(eM, "displayName", "UserStore"), b(eM, "LATEST_SNAPSHOT_VERSION", 1);
let ek = new eM