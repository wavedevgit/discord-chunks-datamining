/** Chunk was on 99518 **/
t.d(n, {
  DT: () => N,
  Ef: () => w,
  HO: () => v,
  NZ: () => P,
  Pq: () => b,
  Q1: () => A,
  RK: () => O,
  _0: () => y,
  hz: () => I,
  yi: () => S
});
var i = t(512722),
  r = t.n(i),
  l = t(149765),
  u = t(544891),
  a = t(493683);
t(749210);
var o = t(911969),
  c = t(367907),
  d = t(944486),
  s = t(979651),
  _ = t(700785),
  E = t(922482),
  h = t(192079),
  T = t(706058),
  f = t(590415),
  g = t(981631);

function p(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = i
    })
  }
  return e
}

function A(e, n) {
  let t = e.getGuildId();
  return r()(null != t, "This channel cannot be guildless."), n && (0, c.yw)(g.rMx.REQUEST_TO_SPEAK_INITIATED, p({}, (0, h.s$)(e))), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(t),
    body: {
      request_to_speak_timestamp: n ? new Date().toISOString() : null,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function y(e, n) {
  let t = e.getGuildId();
  return r()(null != t, "This channel cannot be guildless."), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(t, n),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function O(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = null == e ? void 0 : e.getGuildId();
  r()(null != i, "This channel cannot be guildless.");
  let l = s.Z.getVoiceStateForChannel(e.id);
  return (0, f.gf)(l) !== f.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || n || (0, c.yw)(g.rMx.PROMOTED_TO_SPEAKER, p({}, (0, h.s$)(e))), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(i),
    body: p({
      suppress: n,
      request_to_speak_timestamp: null,
      channel_id: e.id
    }, t ? {
      silent: t
    } : {}),
    rejectWithError: !1
  })
}

function S(e) {
  let n = null == e ? void 0 : e.getGuildId();
  return r()(null != n, "This channel cannot be guildless."), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(n),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function N(e, n, t) {
  let i = e.getGuildId();
  return r()(null != i, "This channel cannot be guildless."), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(i, n),
    body: {
      suppress: t,
      channel_id: e.id
    },
    rejectWithError: !1
  })
}

function I(e, n) {
  if (null == n || null == e) return;
  let t = n.getGuildId();
  return r()(null != t, "This channel cannot be guildless."), N(n, e.id, !0), u.tn.patch({
    url: g.ANM.UPDATE_VOICE_STATE(t, e.id),
    body: {
      suppress: !0,
      channel_id: n.id,
      self_video: !1,
      self_stream: !1
    },
    rejectWithError: !1
  })
}

function b(e, n, t) {
  let i = e.getGuildId();
  r()(null != i, "Channel cannot be guildless");
  let u = e.permissionOverwrites[i],
    c = p({
      id: i,
      type: o.BN.ROLE,
      allow: _.Hn,
      deny: _.Hn
    }, u);
  t ? (c.allow = l.IH(c.allow, n), c.deny = l.Od(c.deny, n)) : (c.allow = l.Od(c.allow, n), c.deny = l.IH(c.deny, n)), a.Z.updatePermissionOverwrite(e.id, c)
}
async function v(e, n, t, i) {
  if ("" === n) return;
  d.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
  let r = await (0, T.me)(e.id, n, t, i);
  return O(e, !1, !0), r
}
async function w(e, n, t) {
  if ("" !== n) return await (0, T.Dk)(e.id, n, t)
}
async function P(e) {
  await (0, T.Ix)(e.id)
}