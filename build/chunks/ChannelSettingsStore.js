/** Chunk was on web.js **/
/** chunk id: 863036, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l;
require.d(exports, {
  A: () => ee
}), require("./938796.js"), require("./896048.js");
var c, Chunk735438 = require("./735438.js"),
  d = require.n(Chunk735438),
  Chunk989349 = require("./989349.js"),
  p = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk95701 = require("./95701.js"),
  Chunk671759 = require("./671759.js"),
  Chunk427157 = require("./427157.js"),
  Chunk860689 = require("./860689.js"),
  Chunk734057 = require("./734057.js"),
  Chunk652215 = require("./652215.js");

function A(e, t, n) {
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
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = Chunk652215.XlH.CLOSED,
  N = {},
  w = {},
  R = false,
  P = false,
  D = null,
  L = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "defaultTagSetting", "iconEmoji", "themeColor"];

function x(e) {
  if (null == a || a.id !== e) returnfalse;
  if (a === o) {
    let t = O.A.getChannel(e);
    if (null == t) returnfalse;
    o = a = t, s = O.A.getChannel(o.parent_id)
  } else {
    let t = O.A.getChannel(e);
    if (null == t) returnfalse;
    a = t, null != o && (o = o.set("permissionOverwrites", a.permissionOverwrites), s = O.A.getChannel(o.parent_id))
  }
  returntrue
}

function M(e) {
  let t = O.A.getChannel(e.channelId);
  if (null == t) return k();
  C = v.XlH.OPEN, o = a = t, D = "location" in e && null != e.location ? e.location : null, i = "subsection" in e ? e.subsection : null, null != o && (o = o.set("nsfw", o.isNSFW())), s = O.A.getChannel(o.parent_id), l = o.getGuildId();
  let n = o.isModeratorReportChannel() ? v.p_A.PERMISSIONS : v.p_A.OVERVIEW;
  return N = {}, j({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: null != r ? r : n,
    subsection: i
  }), true
}

function j(e) {
  r = e.section, i = e.subsection, null != o && r === v.p_A.INSTANT_INVITES && (R = true, h.Bo.get({
    url: v.Rsh.INSTANT_INVITES(o.id),
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    R = false, m.h.dispatch({
      type: "CHANNEL_SETTINGS_LOADED_INVITES",
      invites: e.body
    })
  }, () => R = false))
}

function k() {
  P = false, C = v.XlH.CLOSED, r = null, o = a = null, s = null, w = {}
}

function U() {
  C = v.XlH.SUBMITTING, N = {}
}

function G() {
  a = o, C = v.XlH.OPEN
}

function F(e) {
  var t;
  C = v.XlH.OPEN, N = Object.keys(null != (t = e.errors) ? t : {}).reduce((t, n) => {
    let r = e.errors[n];
    return (0, u.isArray)(r) ? t[n] = r.join("\n") : t[n] = r, t
  }, {})
}
let V = d().debounce(() => {
  if (null == o || null == a) returnfalse;
  let e = o.toJS(),
    t = a.toJS();
  L.every(n => e[n] === t[n]) && o !== a && (o = a, $.emitChange())
}, 500);

function B(e) {
  let {
    name: t,
    channelType: n,
    topic: r,
    bitrate: i,
    userLimit: a,
    nsfw: s,
    flags: l,
    rateLimitPerUser: c,
    defaultThreadRateLimitPerUser: u,
    autoArchiveDuration: d,
    locked: f,
    invitable: p,
    defaultAutoArchiveDuration: _,
    template: h,
    defaultReactionEmoji: m,
    rtcRegion: g,
    videoQualityMode: E,
    availableTags: y,
    defaultSortOrder: b,
    defaultForumLayout: O,
    defaultTagSetting: v,
    iconEmoji: A,
    themeColor: S
  } = e;
  if (null == o) returnfalse;
  null != t && (o = o.set("name", t)), null != r && (o = o.set("topic", r)), null != i && (o = o.set("bitrate", i)), null != a && (o = o.set("userLimit", a)), null != s && (o = o.set("nsfw", s)), null != l && (o = o.set("flags", l)), null != c && (o = o.set("rateLimitPerUser", c)), null != u && (o = o.set("defaultThreadRateLimitPerUser", u)), null != d && (o = o.set("threadMetadata", T(I({}, o.threadMetadata), {
    autoArchiveDuration: d
  }))), null != f && (o = o.set("threadMetadata", T(I({}, o.threadMetadata), {
    locked: f
  }))), null != p && (o = o.set("threadMetadata", T(I({}, o.threadMetadata), {
    invitable: p
  }))), null != _ && (o = o.set("defaultAutoArchiveDuration", _)), null != h && (o = o.set("template", h)), null != n && (o = o.set("type", n)), true !== g && (o = o.set("rtcRegion", g)), null != E && (o = o.set("videoQualityMode", E)), true !== m && (o = o.set("defaultReactionEmoji", m)), null != y && (o = o.set("availableTags", y)), null != b && (o = o.set("defaultSortOrder", b)), null != v && (o = o.set("defaultTagSetting", v)), null != O && (o = o.set("defaultForumLayout", O)), true !== A && (o = o.set("iconEmoji", A)), null != S && (o = o.set("themeColor", S)), V()
}

function H(e) {
  return new E.A({
    code: e.code,
    temporary: e.temporary,
    revoked: e.revoked,
    inviter: null != e.inviter ? new y.A(e.inviter) : null,
    channel: (0, g.OY)(e.channel),
    guild: null != e.guild ? (0, b.DY)(e.guild) : null,
    uses: e.uses,
    maxUses: e.max_uses,
    maxAge: e.max_age,
    createdAt: p()(e.created_at),
    type: e.type
  })
}

function Y(e) {
  w = {}, e.invites.forEach(e => {
    w[e.code] = H(e)
  })
}

function W(e) {
  w = I({}, w), delete w[e.code]
}

function K(e) {
  w = T(I({}, w), {
    [e.invite.code]: H(e.invite)
  })
}

function z(e) {
  return !!x(e) && null != o && (null != l && null == o.permissionOverwrites[l] && (l = o.getGuildId()), true)
}

function q(e) {
  let {
    channels: t
  } = e;
  if (null == o) returnfalse;
  let n = false;
  for (let e of t) n = z(e.id) || n;
  return n
}

function Z(e) {
  let {
    channelId: t
  } = e;
  return z(t)
}

function Q(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  if (null == o || o.id !== t) returnfalse;
  C = v.XlH.CLOSED
}

function X(e) {
  let {
    overwriteId: t
  } = e;
  l = t
}
class J extends(c = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(O.A)
  }
  hasChanges() {
    return o !== a
  }
  isOpen() {
    return P
  }
  getSection() {
    return r
  }
  getInvites() {
    return {
      invites: w,
      loading: R
    }
  }
  showNotice() {
    return this.hasChanges()
  }
  getChannel() {
    return o
  }
  getFormState() {
    return C
  }
  getCategory() {
    return s
  }
  getProps() {
    return {
      submitting: C === v.XlH.SUBMITTING,
      errors: N,
      channel: o,
      section: r,
      subsection: i,
      invites: w,
      selectedOverwriteId: l,
      hasChanges: this.hasChanges(),
      analyticsLocation: D
    }
  }
}
A(J, "displayName", "ChannelSettingsStore");
let $ = new J(Chunk73153.h, {
    CHANNEL_SETTINGS_INIT: M,
    CHANNEL_SETTINGS_SUBMIT: U,
    CHANNEL_SETTINGS_SUBMIT_SUCCESS: G,
    CHANNEL_SETTINGS_SUBMIT_FAILURE: F,
    CHANNEL_SETTINGS_CLOSE: k,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: Z,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: Z,
    CHANNEL_SETTINGS_OVERWRITE_SELECT: X,
    CHANNEL_SETTINGS_UPDATE: B,
    CHANNEL_SETTINGS_SET_SECTION: j,
    CHANNEL_SETTINGS_LOADED_INVITES: Y,
    CHANNEL_UPDATES: q,
    CHANNEL_DELETE: Q,
    INSTANT_INVITE_REVOKE_SUCCESS: W,
    INSTANT_INVITE_CREATE_SUCCESS: K
  }),
  ee = $