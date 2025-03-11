/** Chunk was on 99277 **/
n.d(t, {
  DT: () => C,
  Ef: () => v,
  HO: () => y,
  NZ: () => P,
  Pq: () => S,
  Q1: () => g,
  RK: () => N,
  _0: () => O,
  hz: () => T,
  yi: () => I
});
var r = n(512722),
  i = n.n(r),
  o = n(149765),
  l = n(544891),
  a = n(493683);
n(749210);
var s = n(911969),
  c = n(367907),
  u = n(944486),
  d = n(979651),
  _ = n(700785),
  p = n(922482),
  E = n(192079),
  f = n(706058),
  m = n(590415),
  h = n(981631);

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function g(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), t && (0, c.yw)(h.rMx.REQUEST_TO_SPEAK_INITIATED, b({}, (0, E.s$)(e))), l.tn.patch({
    url: h.ANM.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function O(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), l.tn.patch({
    url: h.ANM.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function N(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null == e ? void 0 : e.getGuildId();
  i()(null != r, "This channel cannot be guildless.");
  let o = d.Z.getVoiceStateForChannel(e.id);
  return (0, m.gf)(o) !== m.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, c.yw)(h.rMx.PROMOTED_TO_SPEAKER, b({}, (0, E.s$)(e))), l.tn.patch({
    url: h.ANM.UPDATE_VOICE_STATE(r),
    body: b({
      suppress: t,
      request_to_speak_timestamp: null,
      channel_id: e.id
    }, n ? {
      silent: n
    } : {}),
    rejectWithError: !1
  })
}

function I(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return i()(null != t, "This channel cannot be guildless."), l.tn.patch({
    url: h.ANM.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function C(e, t, n) {
  let r = e.getGuildId();
  return i()(null != r, "This channel cannot be guildless."), l.tn.patch({
    url: h.ANM.UPDATE_VOICE_STATE(r, t),
    body: {
      suppress: n,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function T(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), C(t, e.id, !0), l.tn.patch({
    url: h.ANM.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function S(e, t, n) {
  let r = e.getGuildId();
  i()(null != r, "Channel cannot be guildless");
  let l = e.permissionOverwrites[r],
    c = b({
      id: r,
      type: s.BN.ROLE,
      allow: _.Hn,
      deny: _.Hn
    }, l);
  n ? (c.allow = o.IH(c.allow, t), c.deny = o.Od(c.deny, t)) : (c.allow = o.Od(c.allow, t), c.deny = o.IH(c.deny, t)), a.Z.updatePermissionOverwrite(e.id, c)
}
async function y(e, t, n, r) {
  if ("" === t) return;
  u.Z.getVoiceChannelId() !== e.id && (0, p.TM)(e);
  let i = await (0, f.me)(e.id, t, n, r);
  return N(e, !1, !0), i
}
async function v(e, t, n) {
  if ("" !== t) return await (0, f.Dk)(e.id, t, n)
}
async function P(e) {
  await (0, f.Ix)(e.id)
}