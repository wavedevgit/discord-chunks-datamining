/** Chunk was on 85885 **/
e.d(n, {
  DT: () => I,
  Ef: () => v,
  HO: () => S,
  NZ: () => k,
  Pq: () => O,
  Q1: () => b,
  RK: () => y,
  _0: () => m,
  hz: () => N,
  yi: () => A
});
var i = e(512722),
  r = e.n(i),
  l = e(149765),
  a = e(544891),
  c = e(493683);
e(749210);
var s = e(911969),
  o = e(367907),
  d = e(944486),
  u = e(979651),
  _ = e(700785),
  h = e(922482),
  p = e(192079),
  E = e(706058),
  T = e(590415),
  g = e(981631);

function f(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(e);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = e[n], n in t ? Object.defineProperty(t, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[n] = i
    })
  }
  return t
}

function b(t, n) {
  let e = t.getGuildId();
  return r()(null != e, "This channel cannot be guildless."), n && (0, o.yw)(g.rMx.REQUEST_TO_SPEAK_INITIATED, f({}, (0, p.s$)(t))), a.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(e),
    body: {
      request_to_speak_timestamp: n ? new Date().toISOString() : null,
      channel_id: t.id
    },
    rejectWithError: !1
  })
}

function m(t, n) {
  let e = t.getGuildId();
  return r()(null != e, "This channel cannot be guildless."), a.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(e, n),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: t.id
    },
    rejectWithError: !1
  })
}

function y(t, n) {
  let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = null == t ? void 0 : t.getGuildId();
  r()(null != i, "This channel cannot be guildless.");
  let l = u.Z.getVoiceStateForChannel(t.id);
  return (0, T.gf)(l) !== T.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || n || (0, o.yw)(g.rMx.PROMOTED_TO_SPEAKER, f({}, (0, p.s$)(t))), a.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(i),
    body: f({
      suppress: n,
      request_to_speak_timestamp: null,
      channel_id: t.id
    }, e ? {
      silent: e
    } : {}),
    rejectWithError: !1
  })
}

function A(t) {
  let n = null == t ? void 0 : t.getGuildId();
  return r()(null != n, "This channel cannot be guildless."), a.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(n),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function I(t, n, e) {
  let i = t.getGuildId();
  return r()(null != i, "This channel cannot be guildless."), a.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(i, n),
    body: {
      suppress: e,
      channel_id: t.id
    },
    rejectWithError: !1
  })
}

function N(t, n) {
  if (null == n || null == t) return;
  let e = n.getGuildId();
  return r()(null != e, "This channel cannot be guildless."), I(n, t.id, !0), a.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(e, t.id),
    body: {
      suppress: !0,
      channel_id: n.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function O(t, n, e) {
  let i = t.getGuildId();
  r()(null != i, "Channel cannot be guildless");
  let a = t.permissionOverwrites[i],
    o = f({
      id: i,
      type: s.BN.ROLE,
      allow: _.Hn,
      deny: _.Hn
    }, a);
  e ? (o.allow = l.IH(o.allow, n), o.deny = l.Od(o.deny, n)) : (o.allow = l.Od(o.allow, n), o.deny = l.IH(o.deny, n)), c.Z.updatePermissionOverwrite(t.id, o)
}
async function S(t, n, e, i) {
  if ("" === n) return;
  d.Z.getVoiceChannelId() !== t.id && (0, h.TM)(t);
  let r = await (0, E.me)(t.id, n, e, i);
  return y(t, !1, !0), r
}
async function v(t, n, e) {
  if ("" !== n) return await (0, E.Dk)(t.id, n, e)
}
async function k(t) {
  await (0, E.Ix)(t.id)
}