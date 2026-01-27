/** Chunk was on web.js **/
/** chunk id: 514983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./228524.js"), require("./896048.js"), require("./733351.js"), require("./321073.js");
var Chunk810531 = require("./810531.js"),
  Chunk942269 = require("./942269.js"),
  Chunk927813 = require("./927813.js"),
  Chunk842086 = require("./842086.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = false,
  c = null,
  u = Chunk927813.A.Millis.HOUR;

function d(e) {
  return {
    id: e.id,
    tags: e.tags,
    type: e.type,
    name: e.name,
    description: e.description,
    format_type: e.format_type,
    pack_id: e.pack_id,
    [r.L]: "PackSticker"
  }
}

function f(e) {
  let t = {};
  for (let n of e) t[n.id] = d(n);
  return t
}

function p(e, t) {
  let n = [];
  return n.push({
    type: o.cG.STICKER_NAME,
    value: e.name.trim().toLocaleLowerCase()
  }), null != t && n.push({
    type: o.cG.PACK_NAME,
    value: t.name
  }), n
}
class _ extends Chunk942269.yW {
  stateWrapper() {
    return {
      packsDatabase: this.packsDatabase,
      packStickersDatabase: this.packStickersDatabase,
      premiumPacksDatabase: this.premiumPacksDatabase,
      clearAllDBs: () => this.clearAllDatabases()
    }
  }
  get isFetchingStickerPacks() {
    return l
  }
  get hasLoadedStickerPacks() {
    return null != c && c + u > performance.now()
  }
  getStickerById(e) {
    return this.packStickerByIdIndex.get(e)
  }
  isPremiumPack(e) {
    return null != this.premiumPacksDatabase.get(e)
  }
  getStickerPack(e) {
    return this.packsDatabase.get(e)
  }
  constructor(...e) {
    super(...e), s(this, "packsDatabase", this.addKVDatabase("stickerPacks")), s(this, "packStickersDatabase", this.addKKVDatabase("packStickers")), s(this, "packStickerByIdIndex", this.packStickersDatabase.addSecondaryKVIndex("id")), s(this, "premiumPacksDatabase", this.addKVDatabase("premiumPacks")), s(this, "getAllPackStickers", this.packStickersDatabase.memoized(e => {
      let t = new Map;
      for (let n in e) t.set(n, Object.values(e[n].root));
      return t
    })), s(this, "getStickerMetadataMap", this.packStickersDatabase.memoized(e => {
      let t = new Map;
      for (let n in e) {
        let r = n;
        for (let [n, i] of Object.entries(e[r].root)) {
          let e = this.packsDatabase.get(r);
          t.set(n, p(i, e))
        }
      }
      return t
    })), s(this, "getPremiumPacks", this.premiumPacksDatabase.memoized(e => Object.values(e)))
  }
}

function h(e, t, n, r, i) {
  n.set(e.id, e), i && r.set(e.id, e), t.setPartition(e.id, f(e.stickers))
}
s(_, "displayName", "StickersPackStore");
let m = new _({
  LOGOUT: (e, t) => {
    let {
      clearAllDBs: n
    } = t;
    n()
  },
  STICKER_PACK_FETCH_SUCCESS: (e, t) => {
    let {
      pack: n
    } = e, {
      packStickersDatabase: r,
      packsDatabase: i,
      premiumPacksDatabase: a
    } = t;
    h(n, r, i, a, false)
  },
  STICKER_PACKS_FETCH_START: (e, t) => {
    l = true
  },
  STICKER_PACKS_FETCH_SUCCESS: (e, t) => {
    let {
      packs: n
    } = e, {
      packStickersDatabase: r,
      packsDatabase: i,
      premiumPacksDatabase: a
    } = t;
    for (let e of (l = false, c = performance.now(), n)) h(e, r, i, a, true)
  },
  PACK_STICKER_FETCH_SUCCESS: (e, t) => {
    let {
      sticker: n
    } = e, {
      packStickersDatabase: r
    } = t;
    r.setRecord(n.pack_id, n.id, d(n))
  }
})