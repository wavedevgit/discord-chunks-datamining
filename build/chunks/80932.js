/** Chunk was on web.js **/
"use strict";
n.d(t, {
  $K: () => A,
  OQ: () => y,
  RE: () => S,
  Xe: () => C,
  dv: () => I,
  rS: () => O,
  t0: () => b
}), n(47120), n(653041);
var r = n(392711),
  i = n.n(r),
  o = n(544891),
  a = n(381499),
  s = n(570140),
  l = n(479531),
  c = n(339085),
  u = n(633302),
  d = n(856985),
  f = n(38618),
  p = n(675478),
  _ = n(486472),
  h = n(823379),
  m = n(668781),
  g = n(981631),
  E = n(526761),
  v = n(388032);

function b(e) {
  p.hW.updateAsync("textAndImages", t => {
    t.diversitySurrogate = a.Gm.create(), t.diversitySurrogate.value = e
  }, E.fy.FREQUENT_USER_ACTION)
}

function y(e) {
  s.Z.dispatch({
    type: "EMOJI_FETCH",
    guildId: e
  }), o.tn.get({
    url: g.ANM.GUILD_EMOJIS(e),
    oldFormErrors: !0,
    rejectWithError: !0
  }).then(t => s.Z.dispatch({
    type: "EMOJI_FETCH_SUCCESS",
    guildId: e,
    emojis: t.body
  }), () => s.Z.dispatch({
    type: "EMOJI_FETCH_FAILURE",
    guildId: e
  }))
}

function O(e) {
  let {
    guildId: t,
    image: n,
    name: r,
    roles: i
  } = e;
  return s.Z.dispatch({
    type: "EMOJI_UPLOAD_START",
    guildId: t
  }), o.tn.post({
    url: g.ANM.GUILD_EMOJIS(t),
    body: {
      image: n,
      name: r,
      roles: i
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }).then(() => s.Z.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), e => (s.Z.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), Promise.reject(e)))
}

function S(e, t) {
  return s.Z.dispatch({
    type: "EMOJI_DELETE",
    guildId: e,
    emojiId: t
  }), o.tn.del({
    url: g.ANM.GUILD_EMOJI(e, t),
    oldFormErrors: !0,
    rejectWithError: !1
  })
}
async function I(e) {
  let {
    guildId: t,
    emojiId: n,
    name: r,
    roles: i
  } = e;
  try {
    return await o.tn.patch({
      url: g.ANM.GUILD_EMOJI(t, n),
      body: {
        name: r,
        roles: i
      },
      oldFormErrors: !0,
      rejectWithError: !0
    })
  } catch (e) {
    throw new l.Z(e)
  }
}

function T(e) {
  if (_.Z.totalUnavailableGuilds > 0 || !f.Z.isConnected()) return e;
  let t = e.map(e => {
    var t;
    return null !== (t = c.ZP.getCustomEmojiById(e)) && void 0 !== t ? t : u.ZP.getByName(e)
  }).filter(h.lm);
  return [...(0, d.Z)(t).keys()]
}

function N(e) {
  var t, n, r;
  return null == e ? null : null !== (r = null !== (n = e.id) && void 0 !== n ? n : null === (t = u.ZP.convertSurrogateToBase(e.surrogates)) || void 0 === t ? void 0 : t.name) && void 0 !== r ? r : e.name
}

function A(e) {
  let t = N(e);
  null != t && p.DZ.updateAsync("favoriteEmojis", e => (e.emojis = T(e.emojis), i().size(e.emojis) >= E.oX) ? (m.Z.show({
    title: v.NW.string(v.t["+XYXtb"]),
    body: v.NW.formatToPlainString(v.t.JaIyFh, {
      count: E.oX
    })
  }), !1) : !e.emojis.includes(t) && void e.emojis.push(t), E.fy.INFREQUENT_USER_ACTION)
}

function C(e) {
  let t = N(e);
  null != t && p.DZ.updateAsync("favoriteEmojis", e => {
    if (e.emojis = T(e.emojis), !e.emojis.includes(t)) return !1;
    e.emojis = e.emojis.filter(e => t !== e)
  }, E.fy.INFREQUENT_USER_ACTION)
}