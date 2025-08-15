/** Chunk was on 92522 **/
/** chunk id: 471253, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  DT: () => I,
  Ef: () => w,
  HO: () => v,
  NZ: () => P,
  Pq: () => N,
  Q1: () => A,
  RK: () => O,
  _0: () => y,
  hz: () => b,
  yi: () => S
});
var Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk149765 = require("./149765.js"),
  Chunk544891 = require("./544891.js"),
  Chunk493683 = require("./493683.js");
require("./749210.js");
var Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk700785 = require("./700785.js"),
  Chunk922482 = require("./922482.js"),
  Chunk192079 = require("./192079.js"),
  Chunk706058 = require("./706058.js"),
  Chunk590415 = require("./590415.js"),
  Chunk981631 = require("./981631.js");

function p(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable
    }))), i.forEach(function(e) {
      var i;
      i = t[e], e in n ? Object.defineProperty(n, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : n[e] = i
    })
  }
  return n
}

function A(n, e) {
  let t = n.getGuildId();
  return r()(null != t, "This channel cannot be guildless."), e && (0, c.yw)(g.rMx.REQUEST_TO_SPEAK_INITIATED, p({}, (0, h.s$)(n))), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(t),
    body: {
      request_to_speak_timestamp: e ? new Date().toISOString() : null,
      channel_id: n.id
    },
    rejectWithError: false
  })
}

function y(n, e) {
  let t = n.getGuildId();
  return r()(null != t, "This channel cannot be guildless."), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(t, e),
    body: {
      suppress: false,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: n.id
    },
    rejectWithError: false
  })
}

function O(n, e) {
  let t = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = null == n ? true : n.getGuildId();
  r()(null != i, "This channel cannot be guildless.");
  let l = s.Z.getVoiceStateForChannel(n.id);
  return (0, f.gf)(l) !== f.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || e || (0, c.yw)(g.rMx.PROMOTED_TO_SPEAKER, p({}, (0, h.s$)(n))), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(i),
    body: p({
      suppress: e,
      request_to_speak_timestamp: null,
      channel_id: n.id
    }, t ? {
      silent: t
    } : {}),
    rejectWithError: false
  })
}

function S(n) {
  let e = null == n ? true : n.getGuildId();
  return r()(null != e, "This channel cannot be guildless."), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(e),
    body: {
      suppress: true,
      channel_id: n.id,
      self_video: false,
      self_stream: false
    },
    rejectWithError: false
  })
}

function I(n, e, t) {
  let i = n.getGuildId();
  return r()(null != i, "This channel cannot be guildless."), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(i, e),
    body: {
      suppress: t,
      channel_id: n.id
    },
    rejectWithError: false
  })
}

function b(n, e) {
  if (null == e || null == n) return;
  let t = e.getGuildId();
  return r()(null != t, "This channel cannot be guildless."), I(e, n.id, true), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(t, n.id),
    body: {
      suppress: true,
      channel_id: e.id,
      self_video: false,
      self_stream: false
    },
    rejectWithError: false
  })
}

function N(n, e, t) {
  let i = n.getGuildId();
  r()(null != i, "Channel cannot be guildless");
  let u = n.permissionOverwrites[i],
    c = p({
      id: i,
      type: o.BN.ROLE,
      allow: _.Hn,
      deny: _.Hn
    }, u);
  t ? (c.allow = l.IH(c.allow, e), c.deny = l.Od(c.deny, e)) : (c.allow = l.Od(c.allow, e), c.deny = l.IH(c.deny, e)), a.Z.updatePermissionOverwrite(n.id, c)
}
async function v(n, e, t, i) {
  if ("" === e) return;
  d.Z.getVoiceChannelId() !== n.id && (0, E.TM)(n);
  let r = await (0, T.me)(n.id, e, t, i);
  return O(n, false, true), r
}
async function w(n, e, t) {
  if ("" !== e) return await (0, T.Dk)(n.id, e, t)
}
async function P(n) {
  await (0, T.Ix)(n.id)
}