/** Chunk was on web.js **/
/** chunk id: 926491, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var r, Chunk135273 = require("./135273.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk287328 = require("./287328.js"),
  Chunk86670 = require("./86670.js"),
  Chunk856472 = require("./856472.js"),
  Chunk93093 = require("./93093.js"),
  Chunk430824 = require("./430824.js"),
  Chunk149694 = require("./149694.js"),
  Chunk737406 = require("./737406.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = 2,
  h = async () => {
    if (0 !== m) return;
    let e = Chunk287328.Z.database();
    if (null == module) return;
    m = 2;
    let t = await (0, Chunk86670.gs)("StickerStore.loadSavedGuildStickers", () => Chunk135273.Z.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => Chunk856472.Z.getAsync(module)));
    null != exports && Chunk570140.Z.dispatch({
      type: "CACHED_STICKERS_LOADED",
      stickers: exports
    })
  }, g = e => {
    let {
      guilds: t
    } = e;
    m = +!!t.every(e => null != e.stickers.items)
  }, E = () => {
    m = 0
  };

function b(e) {
  let {
    guild: t
  } = e;
  1 === m && "update" === t.stickers.op && null == t.stickers.items && (m = 0)
}
let y = () => {
  m = 0
};
class O extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk93093.Z, Chunk149694.Z, Chunk430824.Z, Chunk737406.Z), this.syncWith([Chunk149694.Z, Chunk737406.Z], () => true)
  }
  get isLoaded() {
    return 0 !== m
  }
  get loadState() {
    return m
  }
  getStickerMetadataArrays() {
    return h(), [Chunk149694.Z.getStickerMetadataMap(), Chunk737406.Z.getStickerMetadataMap()]
  }
  get hasLoadedStickerPacks() {
    return Chunk737406.Z.hasLoadedStickerPacks
  }
  get isFetchingStickerPacks() {
    return Chunk737406.Z.isFetchingStickerPacks
  }
  getStickerById(e) {
    var t;
    return h(), null != (t = f.Z.getStickerById(e)) ? t : p.Z.getStickerById(e)
  }
  getStickerPack(e) {
    return p.Z.getStickerPack(e)
  }
  getPremiumPacks() {
    return Chunk737406.Z.getPremiumPacks()
  }
  isPremiumPack(e) {
    return p.Z.isPremiumPack(e)
  }
  getRawStickersByGuild() {
    return Chunk149694.Z.getAllGuildStickers()
  }
  getAllGuildStickers() {
    return h(), Chunk149694.Z.getAllGuildStickers()
  }
  getAllPackStickers() {
    return Chunk737406.Z.getAllPackStickers()
  }
  getStickersByGuildId(e) {
    return h(), f.Z.getStickersByGuildId(e)
  }
}
_(O, "displayName", "StickersStore");
let v = new O(Chunk570140.Z, {
  BACKGROUND_SYNC: E,
  CONNECTION_OPEN: g,
  GUILD_CREATE: b,
  LOGOUT: y
})