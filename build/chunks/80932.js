/** Chunk was on web.js **/
/** chunk id: 80932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $K: () => N,
  OQ: () => v,
  RE: () => I,
  Xe: () => P,
  dv: () => T,
  rS: () => S,
  t0: () => O
}), require("./388685.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk381499 = require("./381499.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk479531 = require("./479531.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk856985 = require("./856985.js"),
  Chunk38618 = require("./38618.js"),
  Chunk675478 = require("./675478.js"),
  Chunk486472 = require("./486472.js"),
  Chunk823379 = require("./823379.js"),
  Chunk668781 = require("./668781.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  _.hW.updateAsync("textAndImages", t => {
    t.diversitySurrogate = o.Gm.create(), t.diversitySurrogate.value = e
  }, b.fy.FREQUENT_USER_ACTION)
}

function v(e) {
  l.Z.dispatch({
    type: "EMOJI_FETCH",
    guildId: e
  }), a.tn.get({
    url: E.ANM.GUILD_EMOJIS(e),
    oldFormErrors: true,
    rejectWithError: true
  }).then(t => l.Z.dispatch({
    type: "EMOJI_FETCH_SUCCESS",
    guildId: e,
    emojis: t.body
  }), () => l.Z.dispatch({
    type: "EMOJI_FETCH_FAILURE",
    guildId: e
  }))
}

function S(e) {
  let {
    guildId: t,
    image: n,
    name: r,
    roles: i,
    analyticsLocation: o
  } = e;
  return l.Z.dispatch({
    type: "EMOJI_UPLOAD_START",
    guildId: t
  }), a.tn.post({
    url: E.ANM.GUILD_EMOJIS(t),
    body: {
      image: n,
      name: r,
      roles: i
    },
    context: {
      client_event_source: null == o ? true : o.page
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (l.Z.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), e.body), e => (l.Z.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), Promise.reject(e)))
}

function I(e, t, n) {
  return l.Z.dispatch({
    type: "EMOJI_DELETE",
    guildId: e,
    emojiId: t
  }), a.tn.del({
    url: E.ANM.GUILD_EMOJI(e, t),
    body: null != n ? {
      replaced_by: n
    } : true,
    oldFormErrors: true,
    rejectWithError: false
  }).then(() => {
    s.uv.announce(y.intl.string(y.t.L3UUha))
  })
}
async function T(e) {
  let {
    guildId: t,
    emojiId: n,
    name: r,
    roles: i
  } = e;
  try {
    return await a.tn.patch({
      url: E.ANM.GUILD_EMOJI(t, n),
      body: {
        name: r,
        roles: i
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  } catch (e) {
    throw new c.Z(e)
  }
}

function C(e) {
  if (h.Z.totalUnavailableGuilds > 0 || !p.Z.isConnected()) return e;
  let t = e.map(e => {
    var t;
    return null != (t = u.ZP.getCustomEmojiById(e)) ? t : d.ZP.getByName(e)
  }).filter(m.lm);
  return [...(0, f.Z)(t).keys()]
}

function A(e) {
  var t, n, r;
  return null == e ? null : null != (r = null != (n = e.id) ? n : null == (t = d.ZP.convertSurrogateToBase(e.surrogates)) ? true : t.name) ? r : e.name
}

function N(e) {
  let t = A(e);
  null != t && _.DZ.updateAsync("favoriteEmojis", e => (e.emojis = C(e.emojis), i().size(e.emojis) >= b.oX) ? (g.Z.show({
    title: y.intl.string(y.t["+XYXtZ"]),
    body: y.intl.formatToPlainString(y.t.JaIyFi, {
      count: b.oX
    })
  }), false) : !e.emojis.includes(t) && void e.emojis.push(t), b.fy.INFREQUENT_USER_ACTION)
}

function P(e) {
  let t = A(e);
  null != t && _.DZ.updateAsync("favoriteEmojis", e => {
    if (e.emojis = C(e.emojis), !e.emojis.includes(t)) returnfalse;
    e.emojis = e.emojis.filter(e => t !== e)
  }, b.fy.INFREQUENT_USER_ACTION)
}