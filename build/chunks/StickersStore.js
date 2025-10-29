/** Chunk was on web.js **/
/** chunk id: 926491, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Q
}), require("./388685.js"), require("./781311.js"), require("./35282.js"), require("./539854.js");
var r, Chunk135273 = require("./135273.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk287328 = require("./287328.js"),
  Chunk86670 = require("./86670.js"),
  Chunk856472 = require("./856472.js"),
  Chunk633302 = require("./633302.js"),
  Chunk41776 = require("./41776.js"),
  Chunk93093 = require("./93093.js"),
  Chunk430824 = require("./430824.js"),
  Chunk70956 = require("./70956.js"),
  Chunk373228 = require("./373228.js"),
  Chunk378233 = require("./378233.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = 2,
  v = new Map,
  I = new Map,
  T = null,
  S = [],
  A = null,
  C = false,
  N = new Map,
  R = (e, t) => {
    N = new Map(N.set(e, t))
  },
  P = Chunk70956.Z.Millis.HOUR,
  w = async () => {
    if (0 !== O) return;
    let e = Chunk287328.Z.database();
    if (null == module) return;
    O = 2;
    let t = await (0, Chunk86670.gs)("StickerStore.loadSavedGuildStickers", () => Chunk135273.Z.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => Chunk856472.Z.getAsync(module)));
    null != exports && Chunk570140.Z.dispatch({
      type: "CACHED_STICKERS_LOADED",
      stickers: exports
    })
  };

function D(e) {
  let {
    stickers: t
  } = e;
  for (let [e, n] of t)
    if (f.Z.isMember(e) && !N.has(e)) {
      let t = _.Z.getGuild(e);
      for (let e of n) L(e, true, t);
      R(e, n)
    }
}
let L = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
    I.set(e.id, e), t && x(e, n)
  },
  x = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    if (null == T) return;
    let {
      tags: n
    } = e, r = {
      type: h.MO.STICKER_NAME,
      value: e.name.trim().toLocaleLowerCase()
    };
    if ((0, m.jl)(e)) {
      let t = S.find(t => t.id === e.pack_id),
        i = [r, ...(null != n ? n : "").split(",").map(e => ({
          type: h.MO.TAG,
          value: e.trim().toLocaleLowerCase()
        }))];
      null != t && i.push({
        type: h.MO.PACK_NAME,
        value: t.name
      }), T.set(e.id, i)
    } else if ((0, m.J8)(e) && null != n) {
      let i = u.ZP.getByName(n),
        a = [r, {
          type: h.MO.TAG,
          value: n.trim().toLocaleLowerCase()
        }];
      if (null != t) {
        let e = t.name.trim().toLocaleLowerCase();
        null != e && "" !== e && a.push({
          type: h.MO.GUILD_NAME,
          value: e
        })
      }
      if (null == i) return void T.set(e.id, a);
      a.push({
        type: h.MO.CORRELATED_EMOJI,
        value: i.surrogates
      }), i.forEachDiversity(e => a.push({
        type: h.MO.CORRELATED_EMOJI,
        value: e.surrogates
      })), T.set(e.id, a)
    }
  },
  M = (e, t, n) => {
    v.set(e.id, e);
    let r = [...S];
    if (t) {
      let t = r.findIndex(t => t.id === e.id);
      false !== t ? r[t] = e : r.push(e), S = r
    }(t || n) && e.stickers.forEach(e => L(e))
  },
  k = () => {
    N.forEach((e, t) => {
      let n = _.Z.getGuild(t);
      null != n && e.forEach(e => x(e, n))
    }), S.forEach(e => {
      e.stickers.forEach(e => x(e))
    })
  },
  j = e => {
    let {
      guilds: t
    } = e;
    T = null, I = new Map, N = new Map, t.forEach(G), O = +!!t.every(e => null != e.stickers.items)
  },
  U = () => {
    T = null, I = new Map, N = new Map, O = 0
  };

function G(e) {
  let t = _.Z.getGuild(e.id);
  null != t && null != e.stickers.items && (e.stickers.items.forEach(e => L(e, true, t)), R(t.id, e.stickers.items))
}

function B(e) {
  let {
    guild: t
  } = e;
  d.Z.isLurking(t.id) || (G(t), 1 === O && "update" === t.stickers.op && null == t.stickers.items && (O = 0))
}

function Z(e) {
  var t;
  let {
    guild: n
  } = e;
  (null != (t = N.get(n.id)) ? t : []).forEach(e => {
    null != T && T.delete(e.id), I.delete(e.id)
  }), N.delete(n.id), N = new Map(N)
}
let F = () => {
    O = 0, S = [], I.clear(), v.clear(), T = null, N.clear(), N = new Map(N), C = false, A = null
  },
  V = () => {
    C = true
  },
  H = e => {
    let {
      packs: t
    } = e;
    t.forEach(e => M(e, true)), A = Date.now(), C = false
  },
  Y = e => {
    let {
      pack: t,
      ingestStickers: n
    } = e;
    M(t, false, n)
  },
  W = e => {
    let {
      guildId: t,
      stickers: n
    } = e;
    n.forEach(e => L(e)), R(t, n)
  },
  K = e => {
    var t, n;
    let {
      guildId: r,
      sticker: i
    } = e, a = null != (t = N.get(r)) ? t : [];
    R(r, [...null != (n = a.filter(e => e.id !== i.id)) ? n : [], i]), L(i)
  },
  z = e => {
    let {
      sticker: t
    } = e;
    L(t, false)
  },
  q = e => {
    var t;
    let {
      guildId: n,
      stickers: r
    } = e, i = e => {
      let t, n = I.get(e.id);
      return null != n && (0, m.J8)(n) && (t = null != n.user ? n.user : true), y(E({}, e), {
        user: t
      })
    };
    (null != (t = N.get(n)) ? t : []).filter(e => null == r.find(t => t.id === e.id)).forEach(e => {
      I.delete(e.id), null != T && T.delete(e.id)
    });
    let a = r.map(e => i(e));
    a.forEach(e => L(e)), R(n, a)
  };
class X extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk93093.Z, Chunk430824.Z, Chunk41776.Z)
  }
  get isLoaded() {
    return 0 !== O
  }
  get loadState() {
    return O
  }
  get stickerMetadata() {
    return w(), null == T && (T = new Map, k()), T
  }
  get hasLoadedStickerPacks() {
    return null != A && A + P > Date.now()
  }
  get isFetchingStickerPacks() {
    return C
  }
  getStickerById(e) {
    return I.has(e) || w(), I.get(e)
  }
  getStickerPack(e) {
    return v.get(e)
  }
  getPremiumPacks() {
    return S
  }
  isPremiumPack(e) {
    return S.some(t => t.id === e)
  }
  getRawStickersByGuild() {
    return N
  }
  getAllStickersIterator() {
    return w(), I.values()
  }
  getAllGuildStickers() {
    return w(), N
  }
  getStickersByGuildId(e) {
    return w(), N.get(e)
  }
}
g(X, "displayName", "StickersStore");
let Q = new X(Chunk570140.Z, {
  BACKGROUND_SYNC: U,
  CONNECTION_OPEN: j,
  GUILD_CREATE: B,
  GUILD_DELETE: Z,
  LOGOUT: F,
  STICKER_PACKS_FETCH_START: V,
  STICKER_PACKS_FETCH_SUCCESS: H,
  STICKER_PACK_FETCH_SUCCESS: Y,
  GUILD_STICKERS_FETCH_SUCCESS: W,
  GUILD_STICKERS_CREATE_SUCCESS: K,
  STICKER_FETCH_SUCCESS: z,
  GUILD_STICKERS_UPDATE: q,
  CACHED_STICKERS_LOADED: D
})