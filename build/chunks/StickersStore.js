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
    let e = s.Z.database();
    if (null == e) return;
    m = 2;
    let t = await (0, l.gs)("StickerStore.loadSavedGuildStickers", () => i.Z.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.Z.getAsync(e)));
    null != t && o.Z.dispatch({
      type: "CACHED_STICKERS_LOADED",
      stickers: t
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
    this.waitFor(u.Z, f.Z, d.Z, p.Z), this.syncWith([f.Z, p.Z], () => true)
  }
  get isLoaded() {
    return 0 !== m
  }
  get loadState() {
    return m
  }
  getStickerMetadataArrays() {
    return h(), [f.Z.getStickerMetadataMap(), p.Z.getStickerMetadataMap()]
  }
  get hasLoadedStickerPacks() {
    return p.Z.hasLoadedStickerPacks
  }
  get isFetchingStickerPacks() {
    return p.Z.isFetchingStickerPacks
  }
  getStickerById(e) {
    var t;
    return h(), null != (t = f.Z.getStickerById(e)) ? t : p.Z.getStickerById(e)
  }
  getStickerPack(e) {
    return p.Z.getStickerPack(e)
  }
  getPremiumPacks() {
    return p.Z.getPremiumPacks()
  }
  isPremiumPack(e) {
    return p.Z.isPremiumPack(e)
  }
  getRawStickersByGuild() {
    return f.Z.getAllGuildStickers()
  }
  getAllGuildStickers() {
    return h(), f.Z.getAllGuildStickers()
  }
  getAllPackStickers() {
    return p.Z.getAllPackStickers()
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