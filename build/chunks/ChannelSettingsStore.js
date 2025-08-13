/** Chunk was on web.js **/
/** chunk id: 388610, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o, a, s, l;
require.d(exports, {
  Z: () => ee
}), require("./997841.js"), require("./388685.js");
var c, Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  _ = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk131704 = require("./131704.js"),
  Chunk758449 = require("./758449.js"),
  Chunk598077 = require("./598077.js"),
  Chunk411198 = require("./411198.js"),
  Chunk592125 = require("./592125.js"),
  Chunk981631 = require("./981631.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = Chunk981631.QZA.CLOSED,
  C = {},
  R = {},
  P = false,
  w = false,
  D = null,
  L = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "defaultTagSetting", "iconEmoji", "themeColor"];

function x(e) {
  if (null == o || o.id !== e) returnfalse;
  if (o === a) {
    let t = O.Z.getChannel(e);
    if (null == t) returnfalse;
    a = o = t, s = O.Z.getChannel(a.parent_id)
  } else {
    let t = O.Z.getChannel(e);
    if (null == t) returnfalse;
    o = t, null != a && (a = a.set("permissionOverwrites", o.permissionOverwrites), s = O.Z.getChannel(a.parent_id))
  }
  returntrue
}

function M(e) {
  let t = O.Z.getChannel(e.channelId);
  if (null == t) return j();
  N = v.QZA.OPEN, a = o = t, D = "location" in e && null != e.location ? e.location : null, i = "subsection" in e ? e.subsection : null, null != a && (a = a.set("nsfw", a.isNSFW())), s = O.Z.getChannel(a.parent_id), l = a.getGuildId();
  let n = a.isModeratorReportChannel() ? v.CoT.PERMISSIONS : v.CoT.OVERVIEW;
  return C = {}, k({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: null != r ? r : n,
    subsection: i
  }), true
}

function k(e) {
  r = e.section, i = e.subsection, null != a && r === v.CoT.INSTANT_INVITES && (P = true, h.tn.get({
    url: v.ANM.INSTANT_INVITES(a.id),
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    P = false, m.Z.dispatch({
      type: "CHANNEL_SETTINGS_LOADED_INVITES",
      invites: e.body
    })
  }, () => P = false))
}

function j() {
  w = false, N = Chunk981631.QZA.CLOSED, r = null, a = o = null, s = null, R = {}
}

function U() {
  N = Chunk981631.QZA.SUBMITTING, C = {}
}

function G() {
  o = a, N = Chunk981631.QZA.OPEN
}

function B(e) {
  var t;
  N = v.QZA.OPEN, C = Object.keys(null != (t = e.errors) ? t : {}).reduce((t, n) => {
    let r = e.errors[n];
    return (0, u.isArray)(r) ? t[n] = r.join("\n") : t[n] = r, t
  }, {})
}
let Z = d().debounce(() => {
  if (null == a || null == o) returnfalse;
  let e = a.toJS(),
    t = o.toJS();
  L.every(n => e[n] === t[n]) && a !== o && (a = o, $.emitChange())
}, 500);

function F(e) {
  let {
    name: t,
    channelType: n,
    topic: r,
    bitrate: i,
    userLimit: o,
    nsfw: s,
    flags: l,
    rateLimitPerUser: c,
    defaultThreadRateLimitPerUser: u,
    autoArchiveDuration: d,
    locked: f,
    invitable: _,
    defaultAutoArchiveDuration: p,
    template: h,
    defaultReactionEmoji: m,
    rtcRegion: g,
    videoQualityMode: E,
    availableTags: b,
    defaultSortOrder: y,
    defaultForumLayout: O,
    defaultTagSetting: v,
    iconEmoji: I,
    themeColor: S
  } = e;
  if (null == a) returnfalse;
  null != t && (a = a.set("name", t)), null != r && (a = a.set("topic", r)), null != i && (a = a.set("bitrate", i)), null != o && (a = a.set("userLimit", o)), null != s && (a = a.set("nsfw", s)), null != l && (a = a.set("flags", l)), null != c && (a = a.set("rateLimitPerUser", c)), null != u && (a = a.set("defaultThreadRateLimitPerUser", u)), null != d && (a = a.set("threadMetadata", A(T({}, a.threadMetadata), {
    autoArchiveDuration: d
  }))), null != f && (a = a.set("threadMetadata", A(T({}, a.threadMetadata), {
    locked: f
  }))), null != _ && (a = a.set("threadMetadata", A(T({}, a.threadMetadata), {
    invitable: _
  }))), null != p && (a = a.set("defaultAutoArchiveDuration", p)), null != h && (a = a.set("template", h)), null != n && (a = a.set("type", n)), true !== g && (a = a.set("rtcRegion", g)), null != E && (a = a.set("videoQualityMode", E)), true !== m && (a = a.set("defaultReactionEmoji", m)), null != b && (a = a.set("availableTags", b)), null != y && (a = a.set("defaultSortOrder", y)), null != v && (a = a.set("defaultTagSetting", v)), null != O && (a = a.set("defaultForumLayout", O)), true !== I && (a = a.set("iconEmoji", I)), null != S && (a = a.set("themeColor", S)), Z()
}

function V(e) {
  return new E.Z({
    code: e.code,
    temporary: e.temporary,
    revoked: e.revoked,
    inviter: null != e.inviter ? new b.Z(e.inviter) : null,
    channel: (0, g.jD)(e.channel),
    guild: null != e.guild ? (0, y.Qs)(e.guild) : null,
    uses: e.uses,
    maxUses: e.max_uses,
    maxAge: e.max_age,
    createdAt: _()(e.created_at),
    type: e.type
  })
}

function H(e) {
  R = {}, e.invites.forEach(e => {
    R[e.code] = V(e)
  })
}

function Y(e) {
  R = T({}, R), delete R[e.code]
}

function W(e) {
  R = A(T({}, R), {
    [e.invite.code]: V(e.invite)
  })
}

function K(e) {
  return !!x(e) && null != a && (null != l && null == a.permissionOverwrites[l] && (l = a.getGuildId()), true)
}

function z(e) {
  let {
    channels: t
  } = e;
  if (null == a) returnfalse;
  let n = false;
  for (let e of t) n = K(e.id) || n;
  return n
}

function q(e) {
  let {
    channelId: t
  } = e;
  return K(t)
}

function X(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  if (null == a || a.id !== t) returnfalse;
  N = v.QZA.CLOSED
}

function Q(e) {
  let {
    overwriteId: t
  } = e;
  l = t
}
class J extends(c = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z)
  }
  hasChanges() {
    return a !== o
  }
  isOpen() {
    return w
  }
  getSection() {
    return r
  }
  getInvites() {
    return {
      invites: R,
      loading: P
    }
  }
  showNotice() {
    return this.hasChanges()
  }
  getChannel() {
    return a
  }
  getFormState() {
    return N
  }
  getCategory() {
    return s
  }
  getProps() {
    return {
      submitting: N === Chunk981631.QZA.SUBMITTING,
      errors: C,
      channel: a,
      section: r,
      subsection: i,
      invites: R,
      selectedOverwriteId: l,
      hasChanges: this.hasChanges(),
      analyticsLocation: D
    }
  }
}
I(J, "displayName", "ChannelSettingsStore");
let $ = new J(Chunk570140.Z, {
    CHANNEL_SETTINGS_INIT: M,
    CHANNEL_SETTINGS_SUBMIT: U,
    CHANNEL_SETTINGS_SUBMIT_SUCCESS: G,
    CHANNEL_SETTINGS_SUBMIT_FAILURE: B,
    CHANNEL_SETTINGS_CLOSE: j,
    CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: q,
    CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: q,
    CHANNEL_SETTINGS_OVERWRITE_SELECT: Q,
    CHANNEL_SETTINGS_UPDATE: F,
    CHANNEL_SETTINGS_SET_SECTION: k,
    CHANNEL_SETTINGS_LOADED_INVITES: H,
    CHANNEL_UPDATES: z,
    CHANNEL_DELETE: X,
    INSTANT_INVITE_REVOKE_SUCCESS: Y,
    INSTANT_INVITE_CREATE_SUCCESS: W
  }),
  ee = $