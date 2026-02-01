/** Chunk was on 88317 **/
/** chunk id: 849736, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  J7: () => S,
  Nx: () => P,
  OE: () => v,
  SA: () => y,
  Tf: () => I,
  b3: () => C,
  b6: () => N,
  e7: () => R,
  gt: () => w,
  lL: () => m
});
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
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

function b(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function S(e, n) {
  let t = e.getGuildId();
  return l()(null != t, "This channel cannot be guildless."), n && (0, c.zV)(p.HAw.REQUEST_TO_SPEAK_INITIATED, b({}, (0, T.l7)(e))), a.Bo.patch({
    url: p.Rsh.UPDATE_VOICE_STATE(t),
    body: {
      request_to_speak_timestamp: n ? new Date().toISOString() : null,
      channel_id: e.id
    },
    rejectWithError: false
  })
}

function y(e, n) {
  let t = e.getGuildId();
  return l()(null != t, "This channel cannot be guildless."), a.Bo.patch({
    url: p.Rsh.UPDATE_VOICE_STATE(t, n),
    body: {
      suppress: false,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    },
    rejectWithError: false
  }).catch(e => (e.code === p.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && d.A.showFailedToast(O.OB.GENERIC_ERROR), e))
}

function R(e, n) {
  let t = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = null == e ? true : e.getGuildId();
  l()(null != i, "This channel cannot be guildless.");
  let r = u.A.getVoiceStateForChannel(e.id),
    o = (0, A.eY)(r);
  return !n && (0, f.Cf)() ? Promise.resolve() : (o !== A.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || n || (0, c.zV)(p.HAw.PROMOTED_TO_SPEAKER, b({}, (0, T.l7)(e))), a.Bo.patch({
    url: p.Rsh.UPDATE_VOICE_STATE(i),
    body: b({
      suppress: n,
      request_to_speak_timestamp: null,
      channel_id: e.id
    }, t ? {
      silent: t
    } : {}),
    rejectWithError: false
  }))
}

function I(e) {
  let n = null == e ? true : e.getGuildId();
  return l()(null != n, "This channel cannot be guildless."), a.Bo.patch({
    url: p.Rsh.UPDATE_VOICE_STATE(n),
    body: {
      suppress: true,
      channel_id: e.id,
      self_video: false,
      self_stream: false
    },
    rejectWithError: false
  })
}

function m(e, n, t) {
  let i = e.getGuildId();
  return l()(null != i, "This channel cannot be guildless."), a.Bo.patch({
    url: p.Rsh.UPDATE_VOICE_STATE(i, n),
    body: {
      suppress: t,
      channel_id: e.id
    },
    rejectWithError: false
  }).catch(e => (e.code === p.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && d.A.showFailedToast(O.OB.GENERIC_ERROR), e))
}

function w(e, n) {
  if (null == n || null == e) return;
  let t = n.getGuildId();
  return l()(null != t, "This channel cannot be guildless."), m(n, e.id, true), a.Bo.patch({
    url: p.Rsh.UPDATE_VOICE_STATE(t, e.id),
    body: {
      suppress: true,
      channel_id: n.id,
      self_video: false,
      self_stream: false
    },
    rejectWithError: false
  })
}

function N(e, n, t) {
  let i = e.getGuildId();
  l()(null != i, "Channel cannot be guildless");
  let a = e.permissionOverwrites[i],
    c = b({
      id: i,
      type: _.r2.ROLE,
      allow: h.x3,
      deny: h.x3
    }, a);
  t ? (c.allow = r.WQ(c.allow, n), c.deny = r.TF(c.deny, n)) : (c.allow = r.TF(c.allow, n), c.deny = r.WQ(c.deny, n)), o.A.updatePermissionOverwrite(e.id, c)
}
async function P(e, n, t, i) {
  if ("" === n) return;
  s.A.getVoiceChannelId() !== e.id && (0, E.cy)(e);
  let l = await (0, g.yG)(e.id, n, t, i);
  return R(e, false, true), l
}
async function C(e, n, t) {
  if ("" !== n) return await (0, g.RY)(e.id, n, t)
}
async function v(e) {
  await (0, g.RR)(e.id)
}