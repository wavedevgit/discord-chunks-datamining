/** Chunk was on web.js **/
/** chunk id: 679382, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var r, Chunk61090 = require("./61090.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk723176 = require("./723176.js"),
  Chunk154049 = require("./154049.js"),
  Chunk351697 = require("./351697.js"),
  Chunk184989 = require("./184989.js"),
  Chunk71393 = require("./71393.js"),
  Chunk41237 = require("./41237.js"),
  Chunk514983 = require("./514983.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 2,
  m = async () => {
    if (0 !== h) return;
    let e = o.A.database();
    if (null == e) return;
    h = 2;
    let t = await (0, l.ES)("StickerStore.loadSavedGuildStickers", () => i.A.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.A.getAsync(e)));
    null != t && s.h.dispatch({
      type: "CACHED_STICKERS_LOADED",
      stickers: t
    })
  }, g = e => {
    let {
      guilds: t
    } = e;
    h = +!!t.every(e => null != e.stickers.items)
  }, E = () => {
    h = 0
  };

function b(e) {
  let {
    guild: t
  } = e;
  1 === h && "update" === t.stickers.op && null == t.stickers.items && (h = 0)
}
let y = () => {
  h = 0
};
class O extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, f.A, d.A, p.A), this.syncWith([f.A, p.A], () => true)
  }
  get isLoaded() {
    return 0 !== h
  }
  get loadState() {
    return h
  }
  getStickerMetadataArrays() {
    return m(), [f.A.getStickerMetadataMap(), p.A.getStickerMetadataMap()]
  }
  get hasLoadedStickerPacks() {
    return p.A.hasLoadedStickerPacks
  }
  get isFetchingStickerPacks() {
    return p.A.isFetchingStickerPacks
  }
  getStickerById(e) {
    var t;
    return m(), null != (t = f.A.getStickerById(e)) ? t : p.A.getStickerById(e)
  }
  getStickerPack(e) {
    return p.A.getStickerPack(e)
  }
  getPremiumPacks() {
    return p.A.getPremiumPacks()
  }
  isPremiumPack(e) {
    return p.A.isPremiumPack(e)
  }
  getRawStickersByGuild() {
    return f.A.getAllGuildStickers()
  }
  getAllGuildStickers() {
    return m(), f.A.getAllGuildStickers()
  }
  getAllPackStickers() {
    return p.A.getAllPackStickers()
  }
  getStickersByGuildId(e) {
    return m(), f.A.getStickersByGuildId(e)
  }
}
_(O, "displayName", "StickersStore");
let A = new O(Chunk73153.h, {
  BACKGROUND_SYNC: E,
  CONNECTION_OPEN: g,
  GUILD_CREATE: b,
  LOGOUT: y
})