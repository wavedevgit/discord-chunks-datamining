/** Chunk was on 93024 **/
n.d(t, {
  DT: () => I,
  Ef: () => E,
  HO: () => C,
  NZ: () => S,
  Pq: () => y,
  Q1: () => p,
  RK: () => N,
  _0: () => v,
  hz: () => O,
  yi: () => j
});
var r = n(512722),
  i = n.n(r),
  l = n(149765),
  o = n(544891),
  a = n(493683);
n(749210);
var c = n(911969),
  s = n(367907),
  d = n(944486),
  u = n(979651),
  h = n(700785),
  g = n(922482),
  _ = n(192079),
  m = n(706058),
  b = n(590415),
  x = n(981631);

function f(e) {
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

function p(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), t && (0, s.yw)(x.rMx.REQUEST_TO_SPEAK_INITIATED, f({}, (0, _.s$)(e))), o.tn.patch({
    url: x.ANM.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function v(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), o.tn.patch({
    url: x.ANM.UPDATE_VOICE_STATE(n, t),
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
  let l = u.Z.getVoiceStateForChannel(e.id);
  return (0, b.gf)(l) !== b.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, s.yw)(x.rMx.PROMOTED_TO_SPEAKER, f({}, (0, _.s$)(e))), o.tn.patch({
    url: x.ANM.UPDATE_VOICE_STATE(r),
    body: f({
      suppress: t,
      request_to_speak_timestamp: null,
      channel_id: e.id
    }, n ? {
      silent: n
    } : {}),
    rejectWithError: !1
  })
}

function j(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return i()(null != t, "This channel cannot be guildless."), o.tn.patch({
    url: x.ANM.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function I(e, t, n) {
  let r = e.getGuildId();
  return i()(null != r, "This channel cannot be guildless."), o.tn.patch({
    url: x.ANM.UPDATE_VOICE_STATE(r, t),
    body: {
      suppress: n,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function O(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), I(t, e.id, !0), o.tn.patch({
    url: x.ANM.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function y(e, t, n) {
  let r = e.getGuildId();
  i()(null != r, "Channel cannot be guildless");
  let o = e.permissionOverwrites[r],
    s = f({
      id: r,
      type: c.BN.ROLE,
      allow: h.Hn,
      deny: h.Hn
    }, o);
  n ? (s.allow = l.IH(s.allow, t), s.deny = l.Od(s.deny, t)) : (s.allow = l.Od(s.allow, t), s.deny = l.IH(s.deny, t)), a.Z.updatePermissionOverwrite(e.id, s)
}
async function C(e, t, n, r) {
  if ("" === t) return;
  d.Z.getVoiceChannelId() !== e.id && (0, g.TM)(e);
  let i = await (0, m.me)(e.id, t, n, r);
  return N(e, !1, !0), i
}
async function E(e, t, n) {
  if ("" !== t) return await (0, m.Dk)(e.id, t, n)
}
async function S(e) {
  await (0, m.Ix)(e.id)
}