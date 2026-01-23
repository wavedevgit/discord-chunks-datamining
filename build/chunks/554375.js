/** Chunk was on web.js **/
/** chunk id: 554375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cp: () => S,
  Gf: () => A,
  Sw: () => w,
  V4: () => N,
  ak: () => I,
  dK: () => O,
  dZ: () => v
}), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk562465 = require("./562465.js"),
  Chunk406935 = require("./406935.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk181658 = require("./181658.js"),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js"),
  Chunk635222 = require("./635222.js"),
  Chunk142120 = require("./142120.js"),
  Chunk594061 = require("./594061.js"),
  Chunk919638 = require("./919638.js"),
  Chunk403362 = require("./403362.js"),
  Chunk157559 = require("./157559.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function O(e) {
  _.wc.updateAsync("textAndImages", t => {
    t.diversitySurrogate = s.hU.create(), t.diversitySurrogate.value = e
  }, y.Sb.FREQUENT_USER_ACTION)
}

function v(e) {
  l.h.dispatch({
    type: "EMOJI_FETCH",
    guildId: e
  }), a.Bo.get({
    url: E.Rsh.GUILD_EMOJIS(e),
    oldFormErrors: true,
    rejectWithError: true
  }).then(t => l.h.dispatch({
    type: "EMOJI_FETCH_SUCCESS",
    guildId: e,
    emojis: t.body
  }), () => l.h.dispatch({
    type: "EMOJI_FETCH_FAILURE",
    guildId: e
  }))
}

function A(e) {
  let {
    guildId: t,
    image: n,
    name: r,
    roles: i,
    analyticsLocation: s
  } = e;
  return l.h.dispatch({
    type: "EMOJI_UPLOAD_START",
    guildId: t
  }), a.Bo.post({
    url: E.Rsh.GUILD_EMOJIS(t),
    body: {
      image: n,
      name: r,
      roles: i
    },
    context: {
      client_event_source: null == s ? true : s.page
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (l.h.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), e.body), e => (l.h.dispatch({
    type: "EMOJI_UPLOAD_STOP",
    guildId: t
  }), Promise.reject(e)))
}

function I(e, t, n) {
  return l.h.dispatch({
    type: "EMOJI_DELETE",
    guildId: e,
    emojiId: t
  }), a.Bo.del({
    url: E.Rsh.GUILD_EMOJI(e, t),
    body: null != n ? {
      replaced_by: n
    } : true,
    oldFormErrors: true,
    rejectWithError: false
  }).then(() => {
    o.OR.announce(b.intl.string(b.t.L3UUha))
  })
}
async function S(e) {
  let {
    guildId: t,
    emojiId: n,
    name: r,
    roles: i
  } = e;
  try {
    return await a.Bo.patch({
      url: E.Rsh.GUILD_EMOJI(t, n),
      body: {
        name: r,
        roles: i
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  } catch (e) {
    throw new c.A(e)
  }
}

function T(e) {
  if (h.A.totalUnavailableGuilds > 0 || !p.A.isConnected()) return e;
  let t = e.map(e => {
    var t;
    return null != (t = u.Ay.getCustomEmojiById(e)) ? t : d.Ay.getByName(e)
  }).filter(m.Vq);
  return [...(0, f.A)(t).keys()]
}

function C(e) {
  var t, n, r;
  return null == e ? null : null != (t = null != (n = e.id) ? n : null == (r = d.Ay.convertSurrogateToBase(e.surrogates)) ? true : r.name) ? t : e.name
}

function N(e) {
  let t = C(e);
  null != t && _.bW.updateAsync("favoriteEmojis", e => (e.emojis = T(e.emojis), i().size(e.emojis) >= 250) ? (g.A.show({
    title: b.intl.string(b.t["+XYXtZ"]),
    body: b.intl.formatToPlainString(b.t.JaIyFi, {
      count: 250
    })
  }), false) : !e.emojis.includes(t) && void e.emojis.push(t), y.Sb.INFREQUENT_USER_ACTION)
}

function w(e) {
  let t = C(e);
  null != t && _.bW.updateAsync("favoriteEmojis", e => {
    if (e.emojis = T(e.emojis), !e.emojis.includes(t)) returnfalse;
    e.emojis = e.emojis.filter(e => t !== e)
  }, y.Sb.INFREQUENT_USER_ACTION)
}