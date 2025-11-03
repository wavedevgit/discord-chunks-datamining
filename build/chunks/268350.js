/** Chunk was on web.js **/
/** chunk id: 268350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $p: () => T,
  FQ: () => I,
  Il: () => S,
  Jf: () => R,
  SA: () => x,
  SV: () => A,
  Um: () => C,
  eu: () => P,
  hW: () => L,
  lY: () => N,
  qB: () => w
}), require("./415506.js"), require("./953529.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk38618 = require("./38618.js"),
  Chunk706454 = require("./706454.js"),
  Chunk675478 = require("./675478.js"),
  Chunk486472 = require("./486472.js"),
  Chunk594174 = require("./594174.js"),
  Chunk73346 = require("./73346.js"),
  Chunk926491 = require("./926491.js"),
  Chunk378233 = require("./378233.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

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

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = async (e, t) => {
  let {
    body: n
  } = await (0, _.Kb)({
    url: m.ANM.STICKER_PACK(e),
    rejectWithError: false
  });
  return o.Z.dispatch({
    type: "STICKER_PACK_FETCH_SUCCESS",
    packId: e,
    pack: n,
    ingestStickers: t
  }), n
}, T = async function() {
  let {
    locale: e = Chunk706454.default.locale
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  if (Chunk926491.Z.isFetchingStickerPacks || Chunk926491.Z.hasLoadedStickerPacks) return;
  Chunk570140.Z.wait(() => {
    Chunk570140.Z.dispatch({
      type: "STICKER_PACKS_FETCH_START"
    })
  });
  let {
    body: {
      sticker_packs: t
    }
  } = await Chunk544891.tn.get({
    url: Chunk981631.ANM.STICKER_PACKS,
    query: {
      locale: module
    },
    rejectWithError: false
  });
  Chunk570140.Z.dispatch({
    type: "STICKER_PACKS_FETCH_SUCCESS",
    packs: exports
  })
}, S = async e => {
  let {
    body: t
  } = await a.tn.get({
    url: m.ANM.STICKER(e),
    rejectWithError: false
  });
  if ((0, h.J8)(t)) o.Z.dispatch({
    type: "GUILD_STICKER_FETCH_SUCCESS",
    sticker: t
  });
  else if ((0, h.jl)(t)) o.Z.dispatch({
    type: "PACK_STICKER_FETCH_SUCCESS",
    sticker: t
  });
  else throw Error("Invalid sticker type")
}, A = async (e, t) => {
  let {
    body: n
  } = await a.tn.get({
    url: m.ANM.GUILD_STICKER_PACKS(e),
    rejectWithError: false,
    signal: t
  });
  o.Z.dispatch({
    type: "GUILD_STICKERS_FETCH_SUCCESS",
    guildId: e,
    stickers: n.map(e => null != e.user ? v(y({}, e), {
      user_id: e.user.id,
      user: e.user
    }) : e)
  })
}, C = async e => {
  await a.tn.del({
    url: m.ANM.GUILD_STICKER(e.guild_id, e.id),
    rejectWithError: false
  })
}, N = async e => {
  var t;
  let {
    guildId: n
  } = e, r = await a.tn.post({
    url: m.ANM.GUILD_STICKER_PACKS(n),
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
  return o.Z.dispatch({
    type: "GUILD_STICKERS_CREATE_SUCCESS",
    guildId: n,
    sticker: v(y({}, r.body), {
      user_id: null == (t = f.default.getCurrentUser()) ? true : t.id
    })
  }), r.body
}, R = async (e, t, n) => (await a.tn.patch({
  url: m.ANM.GUILD_STICKER(e, t),
  body: n,
  rejectWithError: false
})).body;

function P(e, t, n) {
  o.Z.dispatch({
    type: "ADD_STICKER_PREVIEW",
    channelId: e,
    sticker: t,
    draftType: n
  })
}

function w(e, t) {
  o.Z.dispatch({
    type: "CLEAR_STICKER_PREVIEW",
    channelId: e,
    draftType: t
  })
}

function D(e) {
  return d.Z.totalUnavailableGuilds > 0 || !l.Z.isConnected() ? e : e.filter(e => null != p.Z.getStickerById(e))
}

function x(e) {
  u.DZ.updateAsync("favoriteStickers", t => (t.stickerIds = D(t.stickerIds), i().size(t.stickerIds) >= g.oX) ? (s.Z.show({
    title: E.intl.string(E.t["+XYXtZ"]),
    body: E.intl.formatToPlainString(E.t.JaIyFi, {
      count: g.oX
    })
  }), false) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), g.fy.INFREQUENT_USER_ACTION)
}

function L(e) {
  u.DZ.updateAsync("favoriteStickers", t => {
    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = D(t.stickerIds)
  }, g.fy.INFREQUENT_USER_ACTION)
}