/** Chunk was on 1272 **/
/** chunk id: 78687, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./539854.js"), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk377108 = require("./377108.js"),
  Chunk433517 = require("./433517.js"),
  Chunk709054 = require("./709054.js"),
  Chunk48481 = require("./48481.js"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js");
let p = "selectedChannelGuildFrecency";

function f(e) {
  let {
    state: t
  } = l.ZP.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [e => null == e ? {
    favorites: [],
    timesFavorited: 0
  } : Array.isArray(e) ? {
    favorites: e,
    timesFavorited: 0
  } : e, e => Array.isArray(e.favorites) ? e : {
    favorites: [],
    timesFavorited: 0
  }]);
  return null == t || 0 === t.favorites.length ? [] : t.favorites.map((n, r) => {
    let i = a.JM.create();
    return i.format = "IMAGE" === n.format ? a.EO.IMAGE : "VIDEO" === n.format ? a.EO.VIDEO : a.EO.NONE, i.src = n.src, i.width = n.width, i.height = n.height, i.order = t.favorites.length - r + e, {
      url: n.url,
      favorite: i
    }
  })
}
let g = [{
  version: 2,
  run(e) {
    let t = f(1);
    if (0 === t.length) returnfalse;
    for (let {
        url: n,
        favorite: r
      }
      of(null == e.favoriteGifs && (e.favoriteGifs = a.wK.create()), e.favoriteGifs.gifs = {}, t)) e.favoriteGifs.gifs[n] = r;
    return e.favoriteGifs.hideTooltip = t.length > 2, true
  },
  cleanup() {}
}, {
  version: 3,
  run(e) {
    function t() {
      return {
        usageHistory: {},
        favorites: []
      }
    }
    let {
      state: n
    } = l.ZP.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [e => null == e || 0 === Object.keys(e).length ? t() : e, e => null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e)]);
    if (null == n) returnfalse;
    let r = false;
    return n.favorites.length > 0 && (e.favoriteStickers = a.Lt.create(), e.favoriteStickers.stickerIds = i().uniq(n.favorites).slice(0, u.oX), r = true), i().size(n.usageHistory) > 0 && (e.stickerFrecency = a.ls.create(), e.stickerFrecency.stickers = (0, c.tU)(n.usageHistory, 100), r = true), r
  },
  cleanup() {
    Chunk433517.K.remove("StickersPersistedStore")
  }
}, {
  version: 4,
  run(e) {
    let {
      state: t
    } = l.ZP.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
      usageHistory: s.K.get("EmojiUsageHistory") || {}
    })]);
    if (null == t) returnfalse;
    let n = false;
    return null != t.favorites && t.favorites.length > 0 && (e.favoriteEmojis = a.ND.create(), e.favoriteEmojis.emojis = i().uniq(t.favorites).slice(0, u.oX), n = true), i().size(t.usageHistory) > 0 && (e.emojiFrecency = a.PL.create(), e.emojiFrecency.emojis = (0, c.tU)(t.usageHistory, 100), n = true), n
  },
  cleanup() {
    Chunk433517.K.remove("EmojiStore"), Chunk433517.K.remove("EmojiUsageHistory"), Chunk433517.K.remove("EmojiDiversitySurrogate")
  }
}, {
  version: 6,
  run(e) {
    null == e.favoriteGifs && (e.favoriteGifs = a.wK.create()), null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
    let t = f(1);
    if (0 === t.length) returnfalse;
    i()(e.favoriteGifs.gifs).values().sortBy("order").forEach((e, n) => e.order = t.length + 1 + n);
    let n = a.wK.toBinary(e.favoriteGifs).length,
      r = 0;
    for (let {
        url: i,
        favorite: l
      }
      of t) {
      if (l.order = t.length - r, r++, i in e.favoriteGifs.gifs) {
        e.favoriteGifs.gifs[i].order = l.order;
        continue
      }
      let s = a.JM.toBinary(l).length + i.length + 7;
      n + s > u.vY || (n += s, e.favoriteGifs.gifs[i] = l)
    }
    for (n = a.wK.toBinary(e.favoriteGifs).length; n > u.vY;) {
      let t = 0;
      for (let n in e.favoriteGifs.gifs)
        if (delete e.favoriteGifs.gifs[n], ++t >= 10) break;
      n = a.wK.toBinary(e.favoriteGifs).length
    }
    returntrue
  },
  cleanup() {}
}, {
  version: 7,
  run(e) {
    let {
      state: t
    } = l.ZP.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
    if (null == t) returnfalse;
    let n = false;
    return i().size(t.usageHistory) > 0 && (e.applicationCommandFrecency = a.YI.create(), e.applicationCommandFrecency.applicationCommands = (0, c.tU)(t.usageHistory, 500), n = true), n
  },
  cleanup() {
    Chunk433517.K.remove("ApplicationCommandFrecency")
  }
}, {
  version: 8,
  run(e) {
    let {
      state: t
    } = l.ZP.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
    if (null == t) returnfalse;
    let n = false;
    return i().size(t.favoriteSounds) > 0 && (e.favoriteSoundboardSounds = a.h_.create(), o.default.keys(t.favoriteSounds).forEach(n => {
      new Set(t.favoriteSounds[n]).forEach(t => {
        var n;
        null == (n = e.favoriteSoundboardSounds) || n.soundIds.push(t)
      })
    }), n = true), n
  },
  cleanup() {
    Chunk433517.K.remove("SoundboardFavoriteStore")
  }
}, {
  version: 9,
  run(e) {
    let t = s.K.get(p);
    if (null == t) returnfalse;
    for (let e in t) d.Xyh.test(e) || delete t[e];
    return e.guildAndChannelFrecency = a.lG.create(), e.guildAndChannelFrecency.guildAndChannels = (0, c.tU)(t, 100), true
  },
  cleanup() {
    Chunk433517.K.remove(p)
  }
}, {
  version: 10,
  run(e) {
    var t;
    if (null == e.emojiFrecency) returnfalse;
    let n = null != (t = e.emojiFrecency.emojis) ? t : {},
      r = false;
    if (i().size(n) > 0) {
      let t = a.PL.create();
      a.PL.mergePartial(t, e.emojiFrecency), null != e.emojiReactionFrecency && a.PL.mergePartial(t, e.emojiReactionFrecency), e.emojiReactionFrecency = t, r = true
    }
    return r
  },
  cleanup() {}
}]