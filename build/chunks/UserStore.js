/** Chunk was on web.js **/
/** chunk id: 594174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  ASSISTANT_WUMPUS_VOICE_USER: () => v,
  default: () => ej,
  mergeUser: () => N,
  transformUser: () => A,
  users: () => y
}), require("./997841.js"), require("./388685.js"), require("./825670.js"), require("./539854.js"), require("./642613.js");
var Chunk392711 = require("./392711.js"),
  Chunk911969 = require("./911969.js"),
  Chunk2572 = require("./2572.js"),
  Chunk864106 = require("./864106.js"),
  Chunk579407 = require("./579407.js"),
  Chunk131016 = require("./131016.js"),
  Chunk602210 = require("./602210.js"),
  Chunk502087 = require("./502087.js"),
  Chunk168232 = require("./168232.js"),
  Chunk598077 = require("./598077.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js"),
  Chunk314897 = require("./314897.js"),
  Chunk750041 = require("./750041.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = {},
  O = 0,
  v = "47835198259242069";

function I(e, t, n) {
  let r = y[e];
  if (null == r) returnfalse;
  let i = r;
  i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n), y[r.id] = i;
  let a = r !== i;
  return a && O++, a
}

function T(e, t) {
  let n = y[e];
  return !(null == n || (0, c.d)(n.primaryGuild, t.primary_guild)) && (null == n.primaryGuild || null != t.primary_guild) && (n.primaryGuild = (0, c.l)(t.primary_guild), y[n.id] = n, O++, true)
}

function S(e, t) {
  switch (true) {
    case null == e.primaryGuild && null == t.primary_guild:
      break;
    case null != e.primaryGuild && null == t.primary_guild:
    case (0, c.d)(e.primaryGuild, t.primary_guild):
      t.primary_guild = e.primaryGuild;
      break;
    default:
      t.primary_guild = (0, c.l)(t.primary_guild)
  }
  return t
}

function A(e) {
  let t = e.mfa_enabled;
  null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
  let n = (0, d.G)(e.premium_type);
  true !== n && (e.premiumType = n, delete e.premium_type);
  let r = e.nsfw_allowed;
  null != r && (e.nsfwAllowed = r, delete e.nsfw_allowed);
  let i = e.age_verification_status;
  null != i && (e.ageVerificationStatus = i, delete e.age_verification_status);
  let a = e.public_flags;
  if (null != a) {
    if (e.publicFlags = a, (a & g.xW$.STAFF) != 0) {
      var u;
      let t = null != (u = e.flags) ? u : 0;
      e.flags = t | g.xW$.STAFF
    }
    delete e.public_flags
  }
  let f = e.purchased_flags;
  true !== f && (e.purchasedFlags = f, delete e.purchased_flags);
  let _ = e.premium_usage_flags;
  true !== _ && (e.premiumUsageFlags = _, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
  let p = e.avatar_decoration_data;
  true !== p && (e.avatarDecorationData = (0, o.FG)(p), delete e.avatar_decoration_data);
  let h = e.collectibles;
  true !== h && (delete e.collectibles, e.collectibles = (0, s.Xm)(h));
  let m = e.global_name;
  true !== m && (e.globalName = m, delete e.global_name);
  let E = e.primary_guild;
  true !== E && (e.primary_guild = (0, c.l)(E));
  let b = e.display_name_styles;
  return true !== b && (e.displayNameStyles = (0, l.bN)(b), delete e.display_name_styles), e
}

function C(e) {
  return e.id !== h.default.getId()
}

function N(e) {
  let t, n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    r = y[e.id],
    i = true !== e.id && e.id === h.default.getId();
  if (null == r) true !== (t = (r = new f.Z(e)).premiumType) && i && (r.premiumType = P((0, d.QI)(r), r.premiumType));
  else if (n) {
    var a;
    let n = A(e);
    true !== (t = null != (a = n.premium_type) ? a : n.premiumType) && i && (0, d.VR)(n) && (n = R(n)), n = S(r, n), r = r.merge(n)
  }(0, d.jX)((0, d.QI)(r), t, r.premiumType);
  let o = y[e.id] !== r;
  return y[e.id] = r, o && O++, o
}

function R(e) {
  var t;
  let n = null != (t = e.premium_type) ? t : e.premiumType,
    r = P((0, d.VR)(e), n);
  return true !== e.premiumType ? e.premiumType = r : true !== e.premium_type && (e.premium_type = r), e
}

function P(e, t) {
  if (!e) return t;
  let n = u.Z.getPremiumTypeOverride(),
    r = u.Z.getPremiumTypeActual();
  return n === E.F_ ? r : n
}

function w(e, t) {
  if ((null == e ? true : e.users) == null) returnfalse;
  for (let n in e.users) {
    let r = e.users[n];
    C(r) && N(r, t)
  }
}

function D(e, t) {
  var n, r, i, a, o;
  null != e.author && "SENDING" !== e.state && C(e.author) && N(e.author, t), null == (n = e.mentions) || n.forEach(e => {
    C(e) && N(e, t)
  }), (null == (r = e.interaction) ? true : r.user) != null && C(null == (i = e.interaction) ? true : i.user) && N(e.interaction.user, t), null == (a = e.attachments) || a.forEach(e => {
    var n;
    null == (n = e.clip_participants) || n.forEach(e => {
      C(e) && N(e, t)
    })
  }), w(e.resolved, t), (null == (o = e.interaction_metadata) ? true : o.user) != null && C(e.interaction_metadata.user) && N(e.interaction_metadata.user, t), null != e.message_snapshots && e.message_snapshots.forEach(e => {
    var n, r, i, a;
    (null == (r = e.moderator_report) || null == (n = r.reported_member) ? true : n.user) != null && N(e.moderator_report.reported_member.user, t), (null == (a = e.moderator_report) || null == (i = a.reporting_member) ? true : i.user) != null && N(e.moderator_report.reporting_member.user, t)
  })
}

function x(e) {
  let {
    user: t,
    users: r,
    guilds: i
  } = e;
  delete t.premium, delete t.banner_color, N(t), r.forEach(e => {
    N(e)
  }), n.e("831").then(n.bind(n, 475941)).then(e => {
    let {
      default: t
    } = e;
    t.preloadStaffMembers()
  }), i.forEach(e => {
    e.members.forEach(t => {
      I(t.user.id, e.id, t.avatar), T(t.user.id, t.user)
    })
  }), null != y[h.default.getId()] && (y[v] = new f.Z({
    id: v,
    username: "Wumpus",
    discriminator: "0",
    globalName: "Wumpus",
    avatar: "c1f86b313385cb97985f1b118851c28c"
  }))
}

function L(e) {
  let {
    guilds: t,
    lazyPrivateChannels: n
  } = e;
  t.forEach(e => {
    e.members.forEach(t => {
      I(t.user.id, e.id, t.avatar), T(t.user.id, t.user)
    })
  }), null == n || n.forEach(e => {
    var t;
    null == (t = e.rawRecipients) || t.forEach(e => {
      N(e)
    })
  })
}

function j(e) {
  return !("incomplete" in e)
}

function k(e) {
  if (null != e.users)
    for (let t of e.users) t.id in y && j(t) || (y[t.id] = new f.Z(t))
}

function M(e) {
  let {
    user: t
  } = e;
  if (!C(t)) returnfalse;
  N(t)
}

function U(e) {
  let {
    userProfile: t
  } = e;
  if (!C(t.user)) returnfalse;
  N(t.user)
}

function G(e) {
  let {
    user: t
  } = e;
  N(t)
}

function B(e) {
  let {
    user: t
  } = e;
  N(t)
}

function Z(e) {
  let {
    messages: t
  } = e;
  return t.forEach(e => D(e, true)), false
}

function F(e) {
  let {
    pins: t
  } = e;
  return t.forEach(e => {
    let {
      message: t
    } = e;
    return D(t, true)
  }), false
}

function V(e) {
  let {
    mostRecentMessages: t
  } = e;
  return null == t || t.forEach(e => D(e, false)), false
}

function H(e) {
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
        D(e, true)
      })
    }), n.forEach(e => {
      if (e.type === g.d4z.DM || e.type === g.d4z.GROUP_DM) {
        var t;
        null == (t = e.recipients) || t.forEach(e => N(e)), null != e.recipient && N(e.recipient)
      }
    })
  }), false
}

function Y(e) {
  let {
    firstMessages: t,
    owners: n
  } = e;
  null != t && t.forEach(e => D(e, true)), null != n && n.forEach(e => N(e.user, true))
}

function W(e) {
  let {
    threads: t
  } = e;
  Object.values(t).forEach(e => {
    let {
      first_message: t,
      most_recent_message: n,
      owner: r
    } = e;
    null != t && D(t, true), null != n && D(n, true), null != r && null != r.user && N(r.user, true)
  })
}

function K(e) {
  let {
    supplementalData: t
  } = e;
  Object.values(t).forEach(e => {
    let {
      message_preview: t
    } = e;
    null != t && D(t, true)
  })
}

function z(e) {
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
    N(t);
    let i = null == r ? true : r.avatar;
    null != i && I(t.id, n, i)
  })
}

function q(e) {
  let {
    items: t
  } = e;
  t.forEach(e => {
    null != e.other_user && N(e.other_user)
  })
}

function X(e) {
  let {
    item: t
  } = e;
  null != t.other_user && N(t.other_user)
}

function Q(e) {
  let {
    message: t
  } = e;
  if (D(t, true), null != t.flags && _.yE(t.flags, g.iLy.URGENT)) {
    let e = y[h.default.getId()];
    return null != e && (y[h.default.getId()] = e.set("flags", _.mB(e.flags, g.xW$.HAS_UNREAD_URGENT_MESSAGES, true)), true)
  }
  returnfalse
}

function J(e) {
  let {
    channel: {
      rawRecipients: t
    }
  } = e;
  return null != t && t.forEach(e => N(e)), false
}

function $(e) {
  let {
    channels: t
  } = e;
  for (let {
      rawRecipients: e
    }
    of t) null != e && e.forEach(e => N(e));
  returnfalse
}
let ee = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];

function et(e) {
  let {
    updates: t
  } = e;
  return t.map(e => {
    let t = y[e.user.id];
    if (null == t) returnfalse;
    let n = ee.reduce((n, i) => {
      if (e.user.hasOwnProperty(i)) {
        let a = t.set((0, r.camelCase)(i), e.user[i]);
        n = n || a !== t, t = a
      }
      return n
    }, false);
    return !!n && (y[t.id] = t, n)
  }).some(e => e)
}

function en(e) {
  let {
    bans: t
  } = e;
  t.forEach(e => N(e.user))
}

function er(e) {
  let {
    bans: t
  } = e;
  t.forEach(e => N(e.user))
}

function ei(e) {
  return N(e.user)
}

function ea(e) {
  return !!e.isMember && N(e.user)
}

function eo(e) {
  let t = N(e.user);
  return I(e.user.id, e.guildId, e.avatar) || t
}

function es(e) {
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

function el(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let e of t) n = e.members.reduce((t, n) => {
    let r = N(n.user);
    return I(n.user.id, e.guildId, n.avatar) || r || t
  }, false) || n;
  return n
}

function ec(e) {
  let t = false;
  for (let n of e.members) N(n.user) && (t = true), I(n.user.id, e.guildId, n.avatar) && (t = true);
  return t
}

function eu(e) {
  var t;
  let n = false;
  for (let r of null != (t = e.users) ? t : []) Object.hasOwn(y, r.id) || (n = N(r) || n);
  return n
}

function ed(e) {
  let {
    members: t
  } = e, n = false;
  return t.forEach(e => {
    null != e.member && N(e.member.user) && (n = true), null != e.presence && N(e.presence.user) && (n = true)
  }), n
}

function ef(e) {
  let {
    addedMembers: t
  } = e, n = false;
  return null == t || t.forEach(e => {
    null != e.member && N(e.member.user) && (n = true), null != e.presence && N(e.presence.user) && (n = true)
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
        bot: o
      },
      avatar: s
    } = e;
    n !== h.default.getId() && N({
      id: n,
      username: r,
      avatar: i,
      discriminator: a,
      bot: o
    }), I(n, t.id, s)
  })
}

function ep(e) {
  return N(e.relationship.user)
}

function eh(e) {
  return N(e.gameRelationship.user)
}

function em(e) {
  let {
    relationships: t
  } = e;
  return t.reduce((e, t) => N(t.user) || e, false)
}

function eg(e) {
  return N(e.suggestion.suggested_user)
}

function eE(e) {
  let {
    suggestions: t
  } = e;
  return t.reduce((e, t) => N(t.suggested_user) || e, false)
}

function eb(e) {
  let {
    users: t
  } = e;
  t.forEach(e => {
    null == y[e.id] && (y[e.id] = new f.Z(e))
  })
}

function ey(e) {
  let {
    giftCode: t
  } = e;
  return null != t.user && N(t.user)
}

function eO(e) {
  let {
    appliedBoosts: t
  } = e;
  t.forEach(e => {
    let {
      user: t
    } = e;
    null != t && N(t)
  })
}

function ev(e) {
  let {
    request: t
  } = e, {
    user: n,
    actioned_by_user: r
  } = t, i = false;
  return null != n && (i = i || N(n)), null != r && (i = i || N(r)), i
}

function eI(e) {
  let {
    users: t,
    familyCenterTeenActivity: n
  } = e, {
    users: r
  } = n;
  return [...t, ...r].reduce((e, t) => N(t) || e, false)
}

function eT(e) {
  let {
    users: t
  } = e;
  return t.reduce((e, t) => N(t) || e, false)
}

function eS(e) {
  let {
    users: t
  } = e;
  return t.reduce((e, t) => N(t) || e, false)
}

function eA(e) {
  let {
    familyCenterTeenActivity: t
  } = e;
  if (true === t) return;
  let {
    users: n
  } = t;
  return n.reduce((e, t) => N(t) || e, false)
}

function eC(e) {
  let {
    familyCenterTeenActivity: t
  } = e, {
    users: n
  } = t;
  return n.reduce((e, t) => N(t) || e, false)
}

function eN(e) {
  let {
    members: t
  } = e, n = h.default.getId();
  return t.reduce((e, t) => t.member.user.id === n ? e : N(t.member.user) || e, false)
}

function eR(e) {
  let {
    messageItems: t
  } = e;
  t.forEach(e => {
    null != e.message && D(e.message, true)
  }, false)
}

function eP(e) {
  let {
    participants: t
  } = e;
  return t.reduce((e, t) => (0, a.Z)(t) && N(t.member.user) || e, false)
}

function ew(e) {
  let {} = e, t = y[h.default.getId()];
  return null != t && (y[h.default.getId()] = t.set("ageVerificationStatus", i.F$.CLIENT_ONLY_PENDING), true)
}

function eD(e) {
  let {
    status: t
  } = e, n = y[h.default.getId()];
  return null != n && n.ageVerificationStatus === i.F$.CLIENT_ONLY_PENDING && (y[h.default.getId()] = n.set("ageVerificationStatus", t), true)
}

function ex(e) {
  let {
    resolved: t
  } = e;
  return w(t, true)
}
class eL extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk502087.Z)
  }
  takeSnapshot() {
    let e = this.getCurrentUser();
    return {
      version: eL.LATEST_SNAPSHOT_VERSION,
      data: {
        users: [module].filter(Chunk823379.lm)
      }
    }
  }
  handleLoadCache(e) {
    let t = this.readSnapshot(eL.LATEST_SNAPSHOT_VERSION);
    if (null != t)
      for (let e of t.users) y[e.id] = new f.Z(e);
    if (null != e.users)
      for (let t of e.users) t.id in y && j(t) || (y[t.id] = new f.Z(t));
    for (let t of [e.privateChannels, e.initialGuildChannels])
      for (let e of t) {
        var n;
        null == (n = e.rawRecipients) || n.forEach(e => N(e, false))
      }
  }
  getUserStoreVersion() {
    return O
  }
  getUser(e) {
    if (null != e) return y[e]
  }
  getUsers() {
    return y
  }
  forEach(e) {
    for (let t in y)
      if (false === e(y[t])) break
  }
  findByTag(e, t) {
    for (let n in y) {
      let r = y[n];
      if (null != t && r.username === e && r.discriminator === t || null == t && r.username === e && r.hasUniqueUsername()) return r
    }
  }
  filter(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = [];
    for (let t in y) {
      let r = y[t];
      e(r) && n.push(r)
    }
    return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? false : 0), n
  }
  getCurrentUser() {
    return y[Chunk314897.default.getId()]
  }
  constructor() {
    super({
      CONNECTION_OPEN: x,
      CONNECTION_OPEN_SUPPLEMENTAL: L,
      UPDATE_CLIENT_PREMIUM_TYPE: B,
      OVERLAY_INITIALIZE: k,
      CACHE_LOADED: e => this.handleLoadCache(e),
      USER_UPDATE: M,
      USER_PROFILE_FETCH_SUCCESS: U,
      CURRENT_USER_UPDATE: G,
      PRESENCE_UPDATES: et,
      SEARCH_MESSAGES_SUCCESS: H,
      MOD_VIEW_SEARCH_MESSAGES_SUCCESS: H,
      LOAD_MESSAGES_SUCCESS: Z,
      LOAD_MESSAGES_AROUND_SUCCESS: Z,
      LOAD_RECENT_MENTIONS_SUCCESS: Z,
      LOAD_PINNED_MESSAGES_SUCCESS: F,
      THREAD_LIST_SYNC: V,
      MESSAGE_CREATE: Q,
      MESSAGE_UPDATE: Q,
      GUILD_SETTINGS_LOADED_BANS: en,
      GUILD_SETTINGS_LOADED_BANS_BATCH: er,
      GUILD_CREATE: e_,
      GUILD_BAN_ADD: ei,
      GUILD_BAN_REMOVE: ei,
      CHANNEL_RECIPIENT_ADD: ea,
      CHANNEL_RECIPIENT_REMOVE: ea,
      GUILD_JOIN_REQUEST_CREATE: ev,
      GUILD_JOIN_REQUEST_UPDATE: ev,
      GUILD_MEMBER_ADD: eo,
      GUILD_MEMBER_UPDATE: eo,
      GUILD_MEMBERS_CHUNK_BATCH: el,
      GUILD_MEMBER_LIST_UPDATE: es,
      THREAD_MEMBER_LIST_UPDATE: ed,
      THREAD_MEMBERS_UPDATE: ef,
      CHANNEL_CREATE: J,
      CHANNEL_UPDATES: $,
      RELATIONSHIP_ADD: ep,
      GAME_RELATIONSHIP_ADD: eh,
      LOAD_RELATIONSHIPS_SUCCESS: em,
      FRIEND_SUGGESTION_CREATE: eg,
      LOAD_FRIEND_SUGGESTIONS_SUCCESS: eE,
      AUDIT_LOG_FETCH_SUCCESS: eb,
      AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eb,
      GIFT_CODE_RESOLVE_SUCCESS: ey,
      GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eO,
      LOAD_THREADS_SUCCESS: Y,
      LOAD_ARCHIVED_THREADS_SUCCESS: Y,
      LOAD_FORUM_POSTS: W,
      GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: z,
      LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: q,
      NOTIFICATION_CENTER_ITEM_CREATE: X,
      LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: K,
      PASSIVE_UPDATE_V2: ec,
      LOCAL_MESSAGES_LOADED: eu,
      FAMILY_CENTER_INITIAL_LOAD: eI,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eT,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eA,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eC,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: eS,
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eN,
      LOAD_ICYMI_HYDRATED: eR,
      EMBEDDED_ACTIVITY_UPDATE_V2: eP,
      INITIATE_AGE_VERIFICATION: ew,
      CLOSE_AGE_VERIFICATION_MODAL: eD,
      INTERACTION_MODAL_CREATE: ex
    })
  }
}
b(eL, "displayName", "UserStore"), b(eL, "LATEST_SNAPSHOT_VERSION", 1);
let ej = new eL