/** Chunk was on 99665 **/
n.d(t, {
  DT: () => S,
  Ef: () => m,
  HO: () => P,
  NZ: () => M,
  Pq: () => I,
  Q1: () => A,
  RK: () => v,
  _0: () => p,
  hz: () => T,
  yi: () => y
});
var r = n(512722),
  l = n.n(r),
  i = n(149765),
  u = n(544891),
  o = n(493683);
n(749210);
var a = n(911969),
  c = n(367907),
  d = n(944486),
  s = n(979651),
  _ = n(700785),
  f = n(922482),
  E = n(192079),
  g = n(706058),
  b = n(590415),
  O = n(981631);

function h(e) {
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

function A(e, t) {
  let n = e.getGuildId();
  return l()(null != n, "This channel cannot be guildless."), t && (0, c.yw)(O.rMx.REQUEST_TO_SPEAK_INITIATED, h({}, (0, E.s$)(e))), u.tn.patch({
    url: O.ANM.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function p(e, t) {
  let n = e.getGuildId();
  return l()(null != n, "This channel cannot be guildless."), u.tn.patch({
    url: O.ANM.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function v(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null == e ? void 0 : e.getGuildId();
  l()(null != r, "This channel cannot be guildless.");
  let i = s.Z.getVoiceStateForChannel(e.id);
  return (0, b.gf)(i) !== b.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, c.yw)(O.rMx.PROMOTED_TO_SPEAKER, h({}, (0, E.s$)(e))), u.tn.patch({
    url: O.ANM.UPDATE_VOICE_STATE(r),
    body: h({
      suppress: t,
      request_to_speak_timestamp: null,
      channel_id: e.id
    }, n ? {
      silent: n
    } : {}),
    rejectWithError: !1
  })
}

function y(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return l()(null != t, "This channel cannot be guildless."), u.tn.patch({
    url: O.ANM.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function S(e, t, n) {
  let r = e.getGuildId();
  return l()(null != r, "This channel cannot be guildless."), u.tn.patch({
    url: O.ANM.UPDATE_VOICE_STATE(r, t),
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
  return l()(null != n, "This channel cannot be guildless."), S(t, e.id, !0), u.tn.patch({
    url: O.ANM.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function I(e, t, n) {
  let r = e.getGuildId();
  l()(null != r, "Channel cannot be guildless");
  let u = e.permissionOverwrites[r],
    c = h({
      id: r,
      type: a.BN.ROLE,
      allow: _.Hn,
      deny: _.Hn
    }, u);
  n ? (c.allow = i.IH(c.allow, t), c.deny = i.Od(c.deny, t)) : (c.allow = i.Od(c.allow, t), c.deny = i.IH(c.deny, t)), o.Z.updatePermissionOverwrite(e.id, c)
}
async function P(e, t, n, r) {
  if ("" === t) return;
  d.Z.getVoiceChannelId() !== e.id && (0, f.TM)(e);
  let l = await (0, g.me)(e.id, t, n, r);
  return v(e, !1, !0), l
}
async function m(e, t, n) {
  if ("" !== t) return await (0, g.Dk)(e.id, t, n)
}
async function M(e) {
  await (0, g.Ix)(e.id)
}