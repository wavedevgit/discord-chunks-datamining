/** Chunk was on web.js **/
/** chunk id: 849736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J7: () => A,
  Nx: () => w,
  OE: () => D,
  SA: () => I,
  Tf: () => T,
  b3: () => P,
  b6: () => R,
  e7: () => S,
  gt: () => N,
  lL: () => C
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk136722 = require("./136722.js"),
  Chunk562465 = require("./562465.js"),
  Chunk308528 = require("./308528.js");
require("./686956.js");
var Chunk155718 = require("./155718.js"),
  Chunk58149 = require("./58149.js"),
  Chunk662502 = require("./662502.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js"),
  Chunk488926 = require("./488926.js"),
  Chunk323443 = require("./323443.js"),
  Chunk110618 = require("./110618.js"),
  Chunk602146 = require("./602146.js"),
  Chunk105530 = require("./105530.js"),
  Chunk418208 = require("./418208.js"),
  Chunk652215 = require("./652215.js"),
  Chunk835002 = require("./835002.js");

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
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), t && (0, c.zV)(y.HAw.REQUEST_TO_SPEAK_INITIATED, v({}, (0, h.l7)(e))), s.Bo.patch({
    url: y.Rsh.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    },
    rejectWithError: false
  })
}

function I(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), s.Bo.patch({
    url: y.Rsh.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: false,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    },
    rejectWithError: false
  }).catch(e => (e.code === y.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.A.showFailedToast(b.OB.GENERIC_ERROR), e))
}

function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = null == e ? true : e.getGuildId();
  i()(null != r, "This channel cannot be guildless.");
  let a = f.A.getVoiceStateForChannel(e.id),
    o = (0, g.eY)(a);
  return !t && (0, E.Cf)() ? Promise.resolve() : (o !== g.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, c.zV)(y.HAw.PROMOTED_TO_SPEAKER, v({}, (0, h.l7)(e))), s.Bo.patch({
    url: y.Rsh.UPDATE_VOICE_STATE(r),
    body: v({
      suppress: t,
      request_to_speak_timestamp: null,
      channel_id: e.id
    }, n ? {
      silent: n
    } : {}),
    rejectWithError: false
  }))
}

function T(e) {
  let t = null == e ? true : e.getGuildId();
  return i()(null != t, "This channel cannot be guildless."), s.Bo.patch({
    url: y.Rsh.UPDATE_VOICE_STATE(t),
    body: {
      suppress: true,
      channel_id: e.id,
      self_video: false,
      self_stream: false
    },
    rejectWithError: false
  })
}

function C(e, t, n) {
  let r = e.getGuildId();
  return i()(null != r, "This channel cannot be guildless."), s.Bo.patch({
    url: y.Rsh.UPDATE_VOICE_STATE(r, t),
    body: {
      suppress: n,
      channel_id: e.id
    },
    rejectWithError: false
  }).catch(e => (e.code === y.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.A.showFailedToast(b.OB.GENERIC_ERROR), e))
}

function N(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), C(t, e.id, true), s.Bo.patch({
    url: y.Rsh.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: true,
      channel_id: t.id,
      self_video: false,
      self_stream: false
    },
    rejectWithError: false
  })
}

function R(e, t, n) {
  let r = e.getGuildId();
  i()(null != r, "Channel cannot be guildless");
  let s = e.permissionOverwrites[r],
    c = v({
      id: r,
      type: l.r2.ROLE,
      allow: p.x3,
      deny: p.x3
    }, s);
  n ? (c.allow = a.WQ(c.allow, t), c.deny = a.TF(c.deny, t)) : (c.allow = a.TF(c.allow, t), c.deny = a.WQ(c.deny, t)), o.A.updatePermissionOverwrite(e.id, c)
}
async function w(e, t, n, r) {
  if ("" === t) return;
  d.A.getVoiceChannelId() !== e.id && (0, _.cy)(e);
  let i = await (0, m.yG)(e.id, t, n, r);
  return S(e, false, true), i
}
async function P(e, t, n) {
  if ("" !== t) return await (0, m.RY)(e.id, t, n)
}
async function D(e) {
  await (0, m.RR)(e.id)
}