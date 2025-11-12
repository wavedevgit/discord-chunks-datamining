/** Chunk was on web.js **/
/** chunk id: 471253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DT: () => A,
  Ef: () => P,
  HO: () => R,
  NZ: () => D,
  Pq: () => N,
  Q1: () => v,
  RK: () => T,
  _0: () => I,
  hz: () => C,
  yi: () => S
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk149765 = require("./149765.js"),
  Chunk544891 = require("./544891.js"),
  Chunk493683 = require("./493683.js");
require("./749210.js");
var Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk681678 = require("./681678.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk700785 = require("./700785.js"),
  Chunk922482 = require("./922482.js"),
  Chunk192079 = require("./192079.js"),
  Chunk706058 = require("./706058.js"),
  Chunk590415 = require("./590415.js"),
  Chunk981631 = require("./981631.js"),
  Chunk484710 = require("./484710.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), t && (0, c.yw)(E.rMx.REQUEST_TO_SPEAK_INITIATED, O({}, (0, h.s$)(e))), o.tn.patch({
    url: E.ANM.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    },
    rejectWithError: false
  })
}

function I(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), o.tn.patch({
    url: E.ANM.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: false,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    },
    rejectWithError: false
  }).catch(e => (e.code === E.evJ.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.Z.showFailedToast(b.wQ.GENERIC_ERROR), e))
}

function T(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = null == e ? true : e.getGuildId();
  i()(null != r, "This channel cannot be guildless.");
  let a = f.Z.getVoiceStateForChannel(e.id);
  return (0, g.gf)(a) !== g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, c.yw)(E.rMx.PROMOTED_TO_SPEAKER, O({}, (0, h.s$)(e))), o.tn.patch({
    url: E.ANM.UPDATE_VOICE_STATE(r),
    body: O({
      suppress: t,
      request_to_speak_timestamp: null,
      channel_id: e.id
    }, n ? {
      silent: n
    } : {}),
    rejectWithError: false
  })
}

function S(e) {
  let t = null == e ? true : e.getGuildId();
  return i()(null != t, "This channel cannot be guildless."), o.tn.patch({
    url: E.ANM.UPDATE_VOICE_STATE(t),
    body: {
      suppress: true,
      channel_id: e.id,
      self_video: false,
      self_stream: false
    },
    rejectWithError: false
  })
}

function A(e, t, n) {
  let r = e.getGuildId();
  return i()(null != r, "This channel cannot be guildless."), o.tn.patch({
    url: E.ANM.UPDATE_VOICE_STATE(r, t),
    body: {
      suppress: n,
      channel_id: e.id
    },
    rejectWithError: false
  }).catch(e => (e.code === E.evJ.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.Z.showFailedToast(b.wQ.GENERIC_ERROR), e))
}

function C(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), A(t, e.id, true), o.tn.patch({
    url: E.ANM.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: true,
      channel_id: t.id,
      self_video: false,
      self_stream: false
    },
    rejectWithError: false
  })
}

function N(e, t, n) {
  let r = e.getGuildId();
  i()(null != r, "Channel cannot be guildless");
  let o = e.permissionOverwrites[r],
    c = O({
      id: r,
      type: l.BN.ROLE,
      allow: _.Hn,
      deny: _.Hn
    }, o);
  n ? (c.allow = a.IH(c.allow, t), c.deny = a.Od(c.deny, t)) : (c.allow = a.Od(c.allow, t), c.deny = a.IH(c.deny, t)), s.Z.updatePermissionOverwrite(e.id, c)
}
async function R(e, t, n, r) {
  if ("" === t) return;
  d.Z.getVoiceChannelId() !== e.id && (0, p.TM)(e);
  let i = await (0, m.me)(e.id, t, n, r);
  return T(e, false, true), i
}
async function P(e, t, n) {
  if ("" !== t) return await (0, m.Dk)(e.id, t, n)
}
async function D(e) {
  await (0, m.Ix)(e.id)
}