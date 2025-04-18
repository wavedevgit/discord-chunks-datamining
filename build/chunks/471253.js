/** Chunk was on 85885 **/
n.d(t, {
  DT: () => I,
  Ef: () => k,
  HO: () => S,
  NZ: () => v,
  Pq: () => O,
  Q1: () => N,
  RK: () => m,
  _0: () => b,
  hz: () => y,
  yi: () => A
});
var r = n(512722),
  i = n.n(r),
  l = n(149765),
  c = n(544891),
  a = n(493683);
n(749210);
var o = n(911969),
  s = n(367907),
  d = n(944486),
  u = n(979651),
  _ = n(700785),
  h = n(922482),
  E = n(192079),
  p = n(706058),
  T = n(590415),
  g = n(981631);

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

function N(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), t && (0, s.yw)(g.rMx.REQUEST_TO_SPEAK_INITIATED, f({}, (0, E.s$)(e))), c.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function b(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), c.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function m(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null == e ? void 0 : e.getGuildId();
  i()(null != r, "This channel cannot be guildless.");
  let l = u.Z.getVoiceStateForChannel(e.id);
  return (0, T.gf)(l) !== T.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, s.yw)(g.rMx.PROMOTED_TO_SPEAKER, f({}, (0, E.s$)(e))), c.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(r),
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

function A(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return i()(null != t, "This channel cannot be guildless."), c.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(t),
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
  return i()(null != r, "This channel cannot be guildless."), c.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(r, t),
    body: {
      suppress: n,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function y(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), I(t, e.id, !0), c.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function O(e, t, n) {
  let r = e.getGuildId();
  i()(null != r, "Channel cannot be guildless");
  let c = e.permissionOverwrites[r],
    s = f({
      id: r,
      type: o.BN.ROLE,
      allow: _.Hn,
      deny: _.Hn
    }, c);
  n ? (s.allow = l.IH(s.allow, t), s.deny = l.Od(s.deny, t)) : (s.allow = l.Od(s.allow, t), s.deny = l.IH(s.deny, t)), a.Z.updatePermissionOverwrite(e.id, s)
}
async function S(e, t, n, r) {
  if ("" === t) return;
  d.Z.getVoiceChannelId() !== e.id && (0, h.TM)(e);
  let i = await (0, p.me)(e.id, t, n, r);
  return m(e, !1, !0), i
}
async function k(e, t, n) {
  if ("" !== t) return await (0, p.Dk)(e.id, t, n)
}
async function v(e) {
  await (0, p.Ix)(e.id)
}