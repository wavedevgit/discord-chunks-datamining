/** Chunk was on 96430 **/
/** chunk id: 849736, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  J7: () => R,
  Nx: () => m,
  OE: () => G,
  SA: () => I,
  Tf: () => y,
  b3: () => P,
  b6: () => S,
  e7: () => O,
  gt: () => N,
  lL: () => b
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

function C(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function R(t, e) {
  let n = t.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), e && (0, d.zV)(v.HAw.REQUEST_TO_SPEAK_INITIATED, C({}, (0, f.l7)(t))), l.Bo.patch({
    url: v.Rsh.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: e ? new Date().toISOString() : null,
      channel_id: t.id
    },
    rejectWithError: false
  })
}

function I(t, e) {
  let n = t.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), l.Bo.patch({
    url: v.Rsh.UPDATE_VOICE_STATE(n, e),
    body: {
      suppress: false,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: t.id
    },
    rejectWithError: false
  }).catch(t => (t.code === v.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && s.A.showFailedToast(g.OB.GENERIC_ERROR), t))
}

function O(t, e) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = null == t ? true : t.getGuildId();
  i()(null != r, "This channel cannot be guildless.");
  let a = E.A.getVoiceStateForChannel(t.id),
    o = (0, p.eY)(a);
  return !e && (0, T.Cf)() ? Promise.resolve() : (o !== p.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || e || (0, d.zV)(v.HAw.PROMOTED_TO_SPEAKER, C({}, (0, f.l7)(t))), l.Bo.patch({
    url: v.Rsh.UPDATE_VOICE_STATE(r),
    body: C({
      suppress: e,
      request_to_speak_timestamp: null,
      channel_id: t.id
    }, n ? {
      silent: n
    } : {}),
    rejectWithError: false
  }))
}

function y(t) {
  let e = null == t ? true : t.getGuildId();
  return i()(null != e, "This channel cannot be guildless."), l.Bo.patch({
    url: v.Rsh.UPDATE_VOICE_STATE(e),
    body: {
      suppress: true,
      channel_id: t.id,
      self_video: false,
      self_stream: false
    },
    rejectWithError: false
  })
}

function b(t, e, n) {
  let r = t.getGuildId();
  return i()(null != r, "This channel cannot be guildless."), l.Bo.patch({
    url: v.Rsh.UPDATE_VOICE_STATE(r, e),
    body: {
      suppress: n,
      channel_id: t.id
    },
    rejectWithError: false
  }).catch(t => (t.code === v.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && s.A.showFailedToast(g.OB.GENERIC_ERROR), t))
}

function N(t, e) {
  if (null == e || null == t) return;
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), b(e, t.id, true), l.Bo.patch({
    url: v.Rsh.UPDATE_VOICE_STATE(n, t.id),
    body: {
      suppress: true,
      channel_id: e.id,
      self_video: false,
      self_stream: false
    },
    rejectWithError: false
  })
}

function S(t, e, n) {
  let r = t.getGuildId();
  i()(null != r, "Channel cannot be guildless");
  let l = t.permissionOverwrites[r],
    d = C({
      id: r,
      type: u.r2.ROLE,
      allow: A.x3,
      deny: A.x3
    }, l);
  n ? (d.allow = a.WQ(d.allow, e), d.deny = a.TF(d.deny, e)) : (d.allow = a.TF(d.allow, e), d.deny = a.WQ(d.deny, e)), o.A.updatePermissionOverwrite(t.id, d)
}
async function m(t, e, n, r) {
  if ("" === e) return;
  c.A.getVoiceChannelId() !== t.id && (0, _.cy)(t);
  let i = await (0, h.yG)(t.id, e, n, r);
  return O(t, false, true), i
}
async function P(t, e, n) {
  if ("" !== e) return await (0, h.RY)(t.id, e, n)
}
async function G(t) {
  await (0, h.RR)(t.id)
}