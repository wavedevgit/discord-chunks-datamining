/** Chunk was on 98829 **/
n.d(t, {
  DT: () => v,
  Ef: () => I,
  HO: () => m,
  NZ: () => P,
  Pq: () => C,
  Q1: () => y,
  RK: () => g,
  _0: () => b,
  hz: () => S,
  yi: () => O
});
var i = n(512722),
  r = n.n(i),
  l = n(149765),
  a = n(544891),
  u = n(493683);
n(749210);
var d = n(911969),
  o = n(367907),
  c = n(944486),
  s = n(979651),
  _ = n(700785),
  E = n(922482),
  f = n(192079),
  h = n(706058),
  A = n(590415),
  p = n(981631);

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function y(e, t) {
  let n = e.getGuildId();
  return r()(null != n, "This channel cannot be guildless."), t && (0, o.yw)(p.rMx.REQUEST_TO_SPEAK_INITIATED, T({}, (0, f.s$)(e))), a.tn.patch({
    url: p.ANM.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function b(e, t) {
  let n = e.getGuildId();
  return r()(null != n, "This channel cannot be guildless."), a.tn.patch({
    url: p.ANM.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function g(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = null == e ? void 0 : e.getGuildId();
  r()(null != i, "This channel cannot be guildless.");
  let l = s.Z.getVoiceStateForChannel(e.id);
  return (0, A.gf)(l) !== A.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, o.yw)(p.rMx.PROMOTED_TO_SPEAKER, T({}, (0, f.s$)(e))), a.tn.patch({
    url: p.ANM.UPDATE_VOICE_STATE(i),
    body: T({
      suppress: t,
      request_to_speak_timestamp: null,
      channel_id: e.id
    }, n ? {
      silent: n
    } : {}),
    rejectWithError: !1
  })
}

function O(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return r()(null != t, "This channel cannot be guildless."), a.tn.patch({
    url: p.ANM.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function v(e, t, n) {
  let i = e.getGuildId();
  return r()(null != i, "This channel cannot be guildless."), a.tn.patch({
    url: p.ANM.UPDATE_VOICE_STATE(i, t),
    body: {
      suppress: n,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function S(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return r()(null != n, "This channel cannot be guildless."), v(t, e.id, !0), a.tn.patch({
    url: p.ANM.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function C(e, t, n) {
  let i = e.getGuildId();
  r()(null != i, "Channel cannot be guildless");
  let a = e.permissionOverwrites[i],
    o = T({
      id: i,
      type: d.BN.ROLE,
      allow: _.Hn,
      deny: _.Hn
    }, a);
  n ? (o.allow = l.IH(o.allow, t), o.deny = l.Od(o.deny, t)) : (o.allow = l.Od(o.allow, t), o.deny = l.IH(o.deny, t)), u.Z.updatePermissionOverwrite(e.id, o)
}
async function m(e, t, n, i) {
  if ("" === t) return;
  c.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
  let r = await (0, h.me)(e.id, t, n, i);
  return g(e, !1, !0), r
}
async function I(e, t, n) {
  if ("" !== t) return await (0, h.Dk)(e.id, t, n)
}
async function P(e) {
  await (0, h.Ix)(e.id)
}