/** Chunk was on web.js **/
/** chunk id: 80932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $K: () => C,
  OQ: () => O,
  RE: () => S,
  Xe: () => N,
  dv: () => I,
  rS: () => v,
  t0: () => y
}), require("./388685.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk381499 = require("./381499.js"),
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

function y(e) {
  p.hW.updateAsync("textAndImages", t => {
    t.diversitySurrogate = o.Gm.create(), t.diversitySurrogate.value = e
  }, E.fy.FREQUENT_USER_ACTION)
}

function O(e) {
  s.Z.dispatch({
    type: "EMOJI_FETCH",
    guildId: e
  }), a.tn.get({
    url: g.ANM.GUILD_EMOJIS(e),
    oldFormErrors: true,
    rejectWithError: true
  }).then(t => s.Z.dispatch({
    type: "EMOJI_FETCH_SUCCESS",
    guildId: e,
    emojis: t.body
  }), () => s.Z.dispatch({
    type: "EMOJI_FETCH_FAILURE",
    guildId: e
  }))
}

function v(e) {
  let {
    guildId: t,
    image: n,
    name: r,
    roles: i,
    analyticsLocation: o
  } = e;
  return s.Z.dispatch({
    type: "EMOJI_UPLOAD_START",
    guildId: t
  }), a.tn.post({
    url: g.ANM.GUILD_EMOJIS(t),
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
  }).then(e => (s.Z.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), e.body), e => (s.Z.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), Promise.reject(e)))
}

function S(e, t, n) {
  return s.Z.dispatch({
    type: "EMOJI_DELETE",
    guildId: e,
    emojiId: t
  }), a.tn.del({
    url: g.ANM.GUILD_EMOJI(e, t),
    body: null != n ? {
      replaced_by: n
    } : true,
    oldFormErrors: true,
    rejectWithError: false
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
    return await a.tn.patch({
      url: g.ANM.GUILD_EMOJI(t, n),
      body: {
        name: r,
        roles: i
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  } catch (e) {
    throw new l.Z(e)
  }
}

function T(e) {
  if (_.Z.totalUnavailableGuilds > 0 || !f.Z.isConnected()) return e;
  let t = e.map(e => {
    var t;
    return null != (t = c.ZP.getCustomEmojiById(e)) ? t : u.ZP.getByName(e)
  }).filter(m.lm);
  return [...(0, d.Z)(t).keys()]
}

function A(e) {
  var t, n, r;
  return null == e ? null : null != (r = null != (n = e.id) ? n : null == (t = u.ZP.convertSurrogateToBase(e.surrogates)) ? true : t.name) ? r : e.name
}

function C(e) {
  let t = A(e);
  null != t && p.DZ.updateAsync("favoriteEmojis", e => (e.emojis = T(e.emojis), i().size(e.emojis) >= E.oX) ? (h.Z.show({
    title: b.intl.string(b.t["+XYXtZ"]),
    body: b.intl.formatToPlainString(b.t.JaIyFi, {
      count: E.oX
    })
  }), false) : !e.emojis.includes(t) && void e.emojis.push(t), E.fy.INFREQUENT_USER_ACTION)
}

function N(e) {
  let t = A(e);
  null != t && p.DZ.updateAsync("favoriteEmojis", e => {
    if (e.emojis = T(e.emojis), !e.emojis.includes(t)) returnfalse;
    e.emojis = e.emojis.filter(e => t !== e)
  }, E.fy.INFREQUENT_USER_ACTION)
}