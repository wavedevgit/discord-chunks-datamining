/** Chunk was on web.js **/
/** chunk id: 631576, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $x: () => w,
  AO: () => I,
  MO: () => R,
  YB: () => S,
  oI: () => T,
  p9: () => N,
  sl: () => C,
  uK: () => x,
  vr: () => L,
  x5: () => P,
  zk: () => v
}), require("./65821.js"), require("./228524.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk142120 = require("./142120.js"),
  Chunk773669 = require("./773669.js"),
  Chunk594061 = require("./594061.js"),
  Chunk919638 = require("./919638.js"),
  Chunk287809 = require("./287809.js"),
  Chunk371794 = require("./371794.js"),
  Chunk679382 = require("./679382.js"),
  Chunk378058 = require("./378058.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = async (e, t) => {
  let {
    body: n
  } = await (0, p.aP)({
    url: m.Rsh.STICKER_PACK(e),
    rejectWithError: false
  });
  return s.h.dispatch({
    type: "STICKER_PACK_FETCH_SUCCESS",
    packId: e,
    pack: n,
    ingestStickers: t
  }), n
}, S = async function() {
  let {
    locale: e = c.default.locale
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  if (_.A.isFetchingStickerPacks || _.A.hasLoadedStickerPacks) return;
  s.h.wait(() => {
    s.h.dispatch({
      type: "STICKER_PACKS_FETCH_START"
    })
  });
  let {
    body: {
      sticker_packs: t
    }
  } = await a.Bo.get({
    url: m.Rsh.STICKER_PACKS,
    query: {
      locale: e
    },
    rejectWithError: false
  });
  s.h.dispatch({
    type: "STICKER_PACKS_FETCH_SUCCESS",
    packs: t
  })
}, I = async e => {
  let {
    body: t
  } = await a.Bo.get({
    url: m.Rsh.STICKER(e),
    rejectWithError: false
  });
  if ((0, h.Xw)(t)) s.h.dispatch({
    type: "GUILD_STICKER_FETCH_SUCCESS",
    sticker: t
  });
  else if ((0, h.FD)(t)) s.h.dispatch({
    type: "PACK_STICKER_FETCH_SUCCESS",
    sticker: t
  });
  else throw Error("Invalid sticker type")
}, T = async (e, t) => {
  let {
    body: n
  } = await a.Bo.get({
    url: m.Rsh.GUILD_STICKER_PACKS(e),
    rejectWithError: false,
    signal: t
  });
  s.h.dispatch({
    type: "GUILD_STICKERS_FETCH_SUCCESS",
    guildId: e,
    stickers: n.map(e => null != e.user ? A(y({}, e), {
      user_id: e.user.id,
      user: e.user
    }) : e)
  })
}, C = async e => {
  await a.Bo.del({
    url: m.Rsh.GUILD_STICKER(e.guild_id, e.id),
    rejectWithError: false
  })
}, N = async e => {
  var t;
  let {
    guildId: n
  } = e, r = await a.Bo.post({
    url: m.Rsh.GUILD_STICKER_PACKS(n),
    body: "web" === e.platform ? e.body : true,
    fields: "mobile" === e.platform ? [{
      name: "name",
      value: e.name
    }, {
      name: "tags",
      value: e.tags
    }, {
      name: "description",
      value: e.description
    }] : true,
    attachments: "mobile" === e.platform ? [{
      name: "file",
      file: {
        uri: e.uri,
        name: e.name,
        type: e.mimeType
      }
    }] : true,
    rejectWithError: false
  });
  return s.h.dispatch({
    type: "GUILD_STICKERS_CREATE_SUCCESS",
    guildId: n,
    sticker: A(y({}, r.body), {
      user_id: null == (t = f.default.getCurrentUser()) ? true : t.id
    })
  }), r.body
}, R = async (e, t, n) => (await a.Bo.patch({
  url: m.Rsh.GUILD_STICKER(e, t),
  body: n,
  rejectWithError: false
})).body;

function w(e, t, n) {
  s.h.dispatch({
    type: "ADD_STICKER_PREVIEW",
    channelId: e,
    sticker: t,
    draftType: n
  })
}

function P(e, t) {
  s.h.dispatch({
    type: "CLEAR_STICKER_PREVIEW",
    channelId: e,
    draftType: t
  })
}

function D(e) {
  return d.A.totalUnavailableGuilds > 0 || !l.A.isConnected() ? e : e.filter(e => null != _.A.getStickerById(e))
}

function x(e) {
  u.bW.updateAsync("favoriteStickers", t => (t.stickerIds = D(t.stickerIds), i().size(t.stickerIds) >= 250) ? (o.A.show({
    title: E.intl.string(E.t["+XYXtZ"]),
    body: E.intl.formatToPlainString(E.t.JaIyFi, {
      count: 250
    })
  }), false) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), g.Sb.INFREQUENT_USER_ACTION)
}

function L(e) {
  u.bW.updateAsync("favoriteStickers", t => {
    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = D(t.stickerIds)
  }, g.Sb.INFREQUENT_USER_ACTION)
}