/** Chunk was on web.js **/
/** chunk id: 339085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  De: () => eh,
  ZP: () => eF
}), require("./388685.js"), require("./825670.js"), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js"), require("./642613.js"), require("./804061.js"), require("./704826.js");
var r, Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk135273 = require("./135273.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk704907 = require("./704907.js"),
  Chunk287328 = require("./287328.js"),
  Chunk86670 = require("./86670.js"),
  Chunk489033 = require("./489033.js"),
  Chunk188742 = require("./188742.js"),
  Chunk353926 = require("./353926.js"),
  Chunk973542 = require("./973542.js"),
  Chunk889564 = require("./889564.js"),
  Chunk687476 = require("./687476.js"),
  Chunk978519 = require("./978519.js"),
  Chunk706454 = require("./706454.js"),
  Chunk581883 = require("./581883.js"),
  Chunk271383 = require("./271383.js"),
  Chunk93093 = require("./93093.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk176354 = require("./176354.js"),
  Chunk823379 = require("./823379.js"),
  Chunk226951 = require("./226951.js"),
  Chunk709054 = require("./709054.js"),
  Chunk906411 = require("./906411.js"),
  Chunk714424 = require("./714424.js"),
  Chunk633302 = require("./633302.js"),
  Chunk396352 = require("./396352.js"),
  Chunk856985 = require("./856985.js"),
  Chunk185923 = require("./185923.js"),
  Chunk981631 = require("./981631.js"),
  Chunk149203 = require("./149203.js"),
  Chunk526761 = require("./526761.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let q = [Chunk149203.UX.TOP_GUILD_EMOJI.toString(), Chunk149203.UX.FAVORITES.toString(), Chunk149203.UX.RECENT.toString(), Chunk149203.UX.CUSTOM.toString()].concat(Chunk633302.ZP.getCategories()),
  X = {
    pendingUsages: [],
    emojiReactionPendingUsages: [],
    expandedSectionsByGuildIds: new Set
  };
class Q {
  getEmoji(e) {
    return this._emojiMap[e]
  }
  getUsableEmoji(e) {
    let t = this.getEmoji(e);
    return null != t && this.isUsable(t) ? t : true
  }
  isUsable(e) {
    if (0 === e.roles.length) returntrue;
    let t = S.ZP.getMember(this.id, this._userId);
    return null != t && !!(t.roles.some(t => e.roles.includes(t)) || (0, y.yH)(e))
  }
  emojiIds() {
    return Chunk709054.default.keys(this._emojiMap)
  }
  get emojis() {
    return null == this._emojis && (this._emojis = Object.values(this._emojiMap)), this._emojis
  }
  get emoticons() {
    return null == this._emoticons && (this._emoticons = this.usableEmojis.filter(e => !e.require_colons)), this._emoticons
  }
  get usableEmojis() {
    return null == this._usableEmojis && (this._usableEmojis = s().sortBy(this.emojis.filter(e => this.isUsable(e)), e => e.name)), this._usableEmojis
  }
  constructor(e, t, n, r = false) {
    Y(this, "id", true), Y(this, "_userId", true), Y(this, "_emojis", null), Y(this, "_emojiMap", true), Y(this, "_emoticons", null), Y(this, "_usableEmojis", null), Y(this, "_canSeeServerSubIAP", false), this.id = e, this._userId = t, this._emojiMap = n, this._canSeeServerSubIAP = r
  }
}
let J = 42,
  $ = Chunk709054.default.fromTimestamp(Date.now() - 60 * Chunk70956.Z.Millis.DAY),
  ee = [],
  et = [],
  en = 3,
  er = [...q],
  ei = {},
  ea = {},
  eo = new Map;

function es(e) {
  var t, n;
  let r = ec()[e];
  return null != r && null != (n = null == (t = ei[r]) ? true : t.getEmoji(e)) ? n : true
}

function el(e) {
  var t, n;
  let r = ec()[e];
  return null != r && null != (n = null == (t = ei[r]) ? true : t.getUsableEmoji(e)) ? n : true
}

function ec() {
  if (eu(), null == ea)
    for (let e in ea = {}, ei)
      for (let t of ei[module].emojiIds()) ea[exports] = module;
  return ea
}
async function eu() {
  if (0 !== en) return;
  let e = Chunk287328.Z.database();
  if (null == module) return;
  en = 2;
  let t = await (0, Chunk86670.gs)("EmojiStore.loadSavedEmojis", () => Chunk135273.Z.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => Chunk489033.Z.getAsync(module)));
  en = 3, null != exports && Chunk570140.Z.dispatch({
    type: "CACHED_EMOJIS_LOADED",
    emojis: exports
  })
}

function ed(e) {
  let {
    emojis: t
  } = e;
  for (let [e] of t) !Object.hasOwn(ei, e) && A.Z.isMember(e) && eO(e);
  ey()
}
let ef = e => ({
  computeBonus: () => 100,
  lookupKey: e => {
    var t;
    return null != (t = U.ZP.getByName(e)) ? t : el(e)
  },
  afterCompute: () => {
    e(), er = [...q], s().some(ei, e => e.usableEmojis.length > 0) || er.splice(q.indexOf(V.UX.CUSTOM), 1)
  },
  numFrequentlyItems: J
});

function e_(e) {
  return new _.Z(W({}, ef(e)))
}

function ep(e) {
  return new _.Z(z(W({}, ef(e)), {
    computeFrecency: (e, t, n) => null == n.maxTotalUse ? 0 : Math.trunc(1e3 * (e / n.maxTotalUse * .2 + t / 1e3 * .8)),
    calculateMaxTotalUse: true
  }))
}
class eh {
  static get(e) {
    return true === e && (e = null), (null == eh._lastInstance || eh._lastInstance.guildId !== e) && (eh._lastInstance = new eh(e)), eh._lastInstance
  }
  static reset() {
    eh._lastInstance = null
  }
  static resetFrequentlyUsed() {
    null != eh._lastInstance && (eh._lastInstance.frequentlyUsed = null)
  }
  static resetFrequentlyUsedReactionEmojis() {
    null != eh._lastInstance && (eh._lastInstance.frequentlyUsedReactionEmojis = null, eh._lastInstance.frequentlyUsedReactionNamesAndIds = null)
  }
  static clear(e) {
    null != eh._lastInstance && eh._lastInstance.guildId === e && (eh._lastInstance = null)
  }
  getDisambiguatedEmoji() {
    return this.disambiguatedEmoji
  }
  getCustomEmoji() {
    return this.customEmojis
  }
  getGroupedCustomEmoji() {
    return this.groupedCustomEmojis
  }
  getByName(e) {
    if (Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e];
    if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
      let t = this.unicodeAliases[e];
      if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t]
    }
  }
  getEmoticonByName(e) {
    if (Object.prototype.hasOwnProperty.call(this.emoticonsByName, e)) return this.emoticonsByName[e]
  }
  getById(e) {
    if (Object.prototype.hasOwnProperty.call(this.emojisById, e)) return this.emojisById[e]
  }
  getCustomEmoticonRegex() {
    return null == this.emoticonRegex && null != this.escapedEmoticonNames && "" !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b"))), this.emoticonRegex
  }
  getFrequentlyUsedEmojisWithoutFetchingLatest() {
    if (null != this.frequentlyUsed) return this.frequentlyUsed;
    let e = em.frequently.map(e => null != e.id ? this.getById(e.id) : U.ZP.getByName(e.name)).filter(Chunk823379.lm),
      t = (0, Chunk856985.Z)(module);
    return this.frequentlyUsed = [...exports.values()], this.frequentlyUsed
  }
  rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
    if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds) return {
      frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
      frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds
    };
    let e = eg.frequently.map(e => null != e.id ? this.getById(e.id) : U.ZP.getByName(e.name)).filter(Chunk823379.lm),
      t = (0, Chunk856985.Z)(module);
    return this.frequentlyUsedReactionEmojis = [...exports.values()], this.frequentlyUsedReactionNamesAndIds = new Set(exports.keys()), {
      frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
      frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds
    }
  }
  getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
    return this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest().frequentlyUsedReactionEmojis
  }
  isFrequentlyUsedReactionEmojiWithoutFetchingLatest(e) {
    var t;
    let {
      frequentlyUsedReactionNamesAndIds: n
    } = this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest();
    if (null != e.id) return n.has(e.id);
    let r = null != (t = U.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
    return n.has(r.name)
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
    var e, t;
    if (null != this.favorites && null != this.favoriteNamesAndIds) return {
      favorites: this.favorites,
      favoriteNamesAndIds: this.favoriteNamesAndIds
    };
    let n = (null != (t = null == (e = Chunk581883.Z.frecencyWithoutFetchingLatest.favoriteEmojis) ? true : module.emojis) ? exports : []).map(e => {
        var t;
        return null != (t = this.getById(e)) ? t : U.ZP.getByName(e)
      }).filter(Chunk823379.lm),
      r = (0, Chunk856985.Z)(require);
    return this.favorites = [...r.values()], this.favoriteNamesAndIds = new Set(r.keys()), {
      favorites: this.favorites,
      favoriteNamesAndIds: this.favoriteNamesAndIds
    }
  }
  get favoriteEmojisWithoutFetchingLatest() {
    return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites
  }
  getEmojiInPriorityOrderWithoutFetchingLatest() {
    let e = this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
      t = new Set;
    return this.favoriteEmojisWithoutFetchingLatest.concat(module).filter(e => !t.has(e) && (t.add(e), true))
  }
  getTopEmojiWithoutFetchingLatest(e) {
    if (null == this.topEmojis) {
      var t;
      let n = eo.get(e),
        r = G.Z.getTopEmojiIdsByGuildId(e);
      if (null == n && null == r) return ee;
      let i = (null != (t = null == n ? true : n.emojiIds) ? t : r).map(e => {
          var t;
          return null != (t = this.getById(e)) ? t : U.ZP.getByName(U.ZP.convertSurrogateToName(e, false))
        }),
        a = [];
      i.forEach(e => {
        null != e && a.push(e)
      });
      let o = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
      this.topEmojis = a.filter(e => !o.includes(e.id))
    }
    return this.topEmojis
  }
  getNewlyAddedEmojiForGuild(e) {
    if (null == this.newlyAddedEmoji) return ee;
    let t = this.newlyAddedEmoji[e];
    return null == t ? ee : t
  }
  getEscapedCustomEmoticonNames() {
    return this.escapedEmoticonNames
  }
  nameMatchesChain(e) {
    return s()(this.getDisambiguatedEmoji()).filter(t => {
      let {
        names: n,
        name: r
      } = t, i = null != n && s().some(n, e), a = null != r && e(r), o = null != r && s().some(g.Z.getTermsForEmoji(r), e);
      return i || a || o
    })
  }
  constructor(e) {
    Y(this, "favorites", null), Y(this, "favoriteNamesAndIds", null), Y(this, "topEmojis", null), Y(this, "guildId", true), Y(this, "escapedEmoticonNames", true), Y(this, "disambiguatedEmoji", []), Y(this, "emoticonRegex", null), Y(this, "frequentlyUsed", null), Y(this, "frequentlyUsedReactionEmojis", null), Y(this, "frequentlyUsedReactionNamesAndIds", null), Y(this, "unicodeAliases", {}), Y(this, "customEmojis", {}), Y(this, "groupedCustomEmojis", {}), Y(this, "emoticonsByName", {}), Y(this, "emojisByName", {}), Y(this, "emojisById", {}), Y(this, "newlyAddedEmoji", {}), Y(this, "isFavoriteEmojiWithoutFetchingLatest", e => {
      var t;
      if (null == e) returnfalse;
      let {
        favoriteNamesAndIds: n
      } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
      if (null != e.id) return n.has(e.id);
      let r = null != (t = U.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
      return n.has(r.name)
    }), this.guildId = e;
    let t = {},
      n = [],
      r = e => {
        var n;
        e.names.slice(1).forEach(t => this.unicodeAliases[t] = e.name);
        let r = null != (n = t[e.name]) ? n : 0;
        a()(0 === r, "Expected existing count to be 0"), t[e.name] = r + 1, this.emojisByName[e.name] = e, this.disambiguatedEmoji.push(e)
      },
      i = e => {
        var n;
        let r, i = e.name,
          a = null != (n = t[i]) ? n : 0;
        if (t[i] = a + 1, a > 0) {
          let t = "".concat(i, "~").concat(a);
          r = z(W({}, e), {
            name: t,
            originalName: i
          })
        } else r = e;
        this.emojisByName[r.name] = r, this.emojisById[r.id] = r, this.customEmojis[r.name] = r;
        let {
          guildId: o
        } = e;
        null != this.groupedCustomEmojis[o] ? this.groupedCustomEmojis[o].push(r) : this.groupedCustomEmojis[o] = [r], M.default.compare(e.id, $) >= 0 && (null != this.newlyAddedEmoji[o] ? this.newlyAddedEmoji[o].push(r) : this.newlyAddedEmoji[o] = [r]), this.disambiguatedEmoji.push(r)
      },
      o = e => {
        Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) || (n.push(x.Z.escape(e.name)), this.emoticonsByName[e.name] = e)
      };
    U.ZP.forEach(r);
    let l = e => {
      let t = ei[null == e ? F.kod : e];
      null != t && (s().each(t.usableEmojis, i), s().each(t.emoticons, o))
    };
    for (let e in l(this.guildId), this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => M.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
    R.ZP.getFlattenedGuildIds().forEach(e => {
      e !== this.guildId && l(e)
    }), this.escapedEmoticonNames = n.join("|")
  }
}
Y(eh, "_lastInstance", null);
let em = e_(eh.resetFrequentlyUsed),
  eg = ep(eh.resetFrequentlyUsedReactionEmojis);

function eE() {
  ei = {}, ea = {}, eh.reset(), eo.clear(), en = 3
}

function eb(e) {
  null != ei[e] && delete ei[e]
}

function ey() {
  ea = null, eh.reset(), (3 === en || 1 === en) && (em.compute(), eg.compute())
}

function eO(e) {
  eb(e), eh.clear(e);
  let t = k.Z.getGuildEmojis(e);
  if (null == t) return;
  let n = P.default.getCurrentUser();
  if (null == n) return;
  let r = (0, v.r)(e);
  ei[e] = new Q(e, n.id, t, r)
}

function ev(e) {
  for (let t of (eE(), e.guilds)) eO(t.id);
  en = +!!e.guilds.every(e => null != e.emojis.items), ey()
}

function eI(e) {
  for (let t in eE(), e.emojis) eO(t);
  en = 1, ey()
}

function eT() {
  X.pendingUsages = [], X.emojiReactionPendingUsages = []
}

function eS() {
  eE()
}

function eA(e) {
  1 === en && "update" === e.guild.emojis.op && null == e.guild.emojis.items && (en = 0), eO(e.guild.id), ey()
}

function eC(e) {
  eO(e.guild.id), ey()
}

function eN(e) {
  let {
    guildId: t
  } = e;
  eO(t), ey()
}

function eR(e) {
  let {
    guild: t
  } = e;
  eb(t.id), eo.delete(t.id), ey()
}

function eP(e) {
  var t;
  let {
    guildId: n,
    user: r
  } = e;
  r.id === (null == (t = P.default.getCurrentUser()) ? true : t.id) && (eO(n), ey())
}

function ew(e) {
  if (!e.optimistic) returnfalse;
  let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : U.ZP.getByName(U.ZP.convertSurrogateToName(e.emoji.name, false));
  if (null == t) returnfalse;
  ek([t]), ej([t])
}

function eD(e, t) {
  if (s().isEmpty(e) && s().isEmpty(X.pendingUsages) && T.Z.hasLoaded(H.yP.FRECENCY_AND_FAVORITES_SETTINGS))
    for (let e of ["thumbsup", "eyes", "laughing", "watermelon", "fork_and_knife", "yum", "weary", "tired_face", "poop", "100"]) em.track(e);
  if (s().isEmpty(t) && s().isEmpty(X.emojiReactionPendingUsages) && T.Z.hasLoaded(H.yP.FRECENCY_AND_FAVORITES_SETTINGS))
    for (let e of ["100", "100", "thumbsup", "thumbsup", "thumbsdown", "thumbsdown", "heart", "point_up", "eyes", "weary", "laughing", "white_check_mark", "x"]) eg.track(e)
}

function eL() {
  var e, t, n, r, i, a;
  let o = null == (t = Chunk581883.Z.settings.textAndImages) || null == (e = exports.diversitySurrogate) ? true : module.value;
  null != Chunk392711 && Chunk633302.ZP.setDefaultDiversitySurrogate(Chunk392711), eh.reset();
  let l = Chunk581883.Z.frecencyWithoutFetchingLatest,
    c = null != (i = null == (n = Chunk913527.emojiFrecency) ? true : require.emojis) ? Chunk512722 : {},
    u = null != (a = null == (r = Chunk913527.emojiReactionFrecency) ? true : r.emojis) ? a : {};
  em.overwriteHistory(s().mapValues(c, e => z(W({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), X.pendingUsages), eg.overwriteHistory(s().mapValues(Chunk135273, e => z(W({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), X.emojiReactionPendingUsages), eD(c, Chunk135273)
}

function ex(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  if (g.Z.setEmojiLocale(I.default.locale), t !== H.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  X.pendingUsages = [], X.emojiReactionPendingUsages = []
}

function eM(e) {
  let {
    emojiUsed: t
  } = e;
  ej(t)
}

function ej(e) {
  if (null == e) returnfalse;
  for (let r of e) {
    var t, n;
    let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
    null != e && (em.track(e), X.pendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let r = e.length > 0;
  return r && (3 === en || 1 === en) && em.compute(), r
}

function ek(e) {
  if (null == e) returnfalse;
  for (let r of e) {
    var t, n;
    let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
    null != e && (eg.track(e), X.emojiReactionPendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let r = e.length > 0;
  return r && (3 === en || 1 === en) && eg.compute(), r
}

function eU(e) {
  let {
    guildId: t,
    role: {
      id: n
    }
  } = e, r = C.Z.getRole(t, n);
  if (!(null != r && (0, b.Z)(r))) returnfalse;
  eO(t), ey()
}

function eG(e) {
  let {
    guildId: t
  } = e, n = new Set(X.expandedSectionsByGuildIds);
  X.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), X = z(W({}, X), {
    expandedSectionsByGuildIds: n
  })
}

function eB(e) {
  let {
    guildId: t,
    topEmojisMetadata: n
  } = e;
  eo.set(t, {
    emojiIds: n.map(e => e.emojiId),
    topEmojisTTL: c()(c()()).add(1, "days").valueOf()
  })
}
class eZ extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(p.Z, A.Z, S.ZP, N.Z, I.default, O.Z, G.Z, P.default, E.Z, C.Z, k.Z), null != e && (null != e.pendingUsages && (X.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (X.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (X.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([T.Z], eL)
  }
  getState() {
    return X
  }
  get loadState() {
    return en
  }
  hasPendingUsage() {
    return X.pendingUsages.length > 0 || X.emojiReactionPendingUsages.length > 0
  }
  get expandedSectionsByGuildIds() {
    return X.expandedSectionsByGuildIds
  }
  get categories() {
    return er
  }
  get diversitySurrogate() {
    var e;
    return null != (e = Chunk633302.ZP.getDefaultDiversitySurrogate()) ? module : ""
  }
  get emojiFrecencyWithoutFetchingLatest() {
    return em
  }
  get emojiReactionFrecencyWithoutFetchingLatest() {
    return eg
  }
  getGuildEmoji(e) {
    var t;
    eu();
    let n = null == e ? true : ei[e];
    return null != (t = null == n ? true : n.emojis) ? t : et
  }
  getUsableGuildEmoji(e) {
    var t;
    eu();
    let n = ei[e];
    return null != (t = null == n ? true : n.usableEmojis) ? t : et
  }
  getGuilds() {
    return ei
  }
  getDisambiguatedEmojiContext(e) {
    return eu(), eh.get(e)
  }
  getSearchResultsOrder(e, t, n, r) {
    let i = t.toLowerCase(),
      a = x.Z.escape(i);
    if (e.length > 0) {
      let t = RegExp("^".concat(a), "i"),
        n = new RegExp("(^|_|[A-Z])".concat(a, "s?([A-Z]|_|$)")),
        o = n.test.bind(n),
        l = t.test.bind(t),
        c = function(e) {
          let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : e;
          if (null == e || null == t) return 0;
          let n = e.toLowerCase(),
            a = 1 + 4 * (n === i) + (o(n) || o(e) ? 2 : 0) + +!!l(e),
            s = r === Z.Hz.REACTION ? eg.getScore(t) : em.getScore(t);
          return null != s && (a *= s / 100), a
        };
      e = s().orderBy(e, [e => null != e.names ? c(e.names[0]) : c(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
    }
    return n > 0 && (e = e.slice(0, n)), e
  }
  searchWithoutFetchingLatest(e) {
    let t, {
      channel: n,
      query: r,
      count: i = 0,
      intention: a,
      includeExternalGuilds: o = true,
      matchComparator: s,
      showOnlyUnicode: l
    } = e;
    eu();
    let c = r.toLowerCase().replaceAll(/[ _]/g, ""),
      u = x.Z.escape(c);
    if (null == s) {
      let e = RegExp("".concat(u), "i");
      t = t => e.test(t.replaceAll("_", ""))
    } else t = s;
    let d = null != n ? n.getGuildId() : null,
      f = eh.get(d).nameMatchesChain(t).reduce((e, t) => {
        let r = D.ZP.getEmojiUnavailableReason({
          emoji: t,
          channel: n,
          intention: a,
          forceIncludeExternalGuilds: o
        });
        return r !== Z.Z5.PREMIUM_LOCKED || l ? null != r || l && t.type !== j.B.UNICODE || e.unlocked.push(t) : e.locked.push(t), e
      }, {
        unlocked: [],
        locked: []
      });
    return {
      unlocked: this.getSearchResultsOrder(f.unlocked, r, i, a),
      locked: this.getSearchResultsOrder(f.locked, r, 0, a)
    }
  }
  getUsableCustomEmojiById(e) {
    return eu(), el(e)
  }
  getCustomEmojiById(e) {
    return eu(), es(e)
  }
  getTopEmoji(e) {
    return null == e ? ee : (eu(), eh.get(e).getTopEmojiWithoutFetchingLatest(e))
  }
  getNewlyAddedEmoji(e) {
    return null == e ? ee : (eu(), eh.get(e).getNewlyAddedEmojiForGuild(e))
  }
  getTopEmojisMetadata(e) {
    return eo.get(e)
  }
  hasUsableEmojiInAnyGuild() {
    return eu(), Chunk709054.default.keys(ei).some(e => ei[e].usableEmojis.length > 0)
  }
  hasFavoriteEmojis(e) {
    let t = eh.get(e);
    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
  }
}
Y(eZ, "displayName", "EmojiStore"), Y(eZ, "persistKey", "EmojiStoreV2"), Y(eZ, "migrations", [e => W({}, e)]);
let eF = new eZ(Chunk570140.Z, {
  LOGOUT: eT,
  BACKGROUND_SYNC: eS,
  CONNECTION_OPEN: ev,
  OVERLAY_INITIALIZE: eI,
  CACHED_EMOJIS_LOADED: ed,
  GUILD_MEMBER_UPDATE: eP,
  GUILD_CREATE: eA,
  GUILD_UPDATE: eC,
  GUILD_EMOJIS_UPDATE: eN,
  GUILD_DELETE: eR,
  MESSAGE_REACTION_ADD: ew,
  EMOJI_TRACK_USAGE: eM,
  USER_SETTINGS_PROTO_UPDATE: ex,
  GUILD_ROLE_CREATE: eU,
  GUILD_ROLE_UPDATE: eU,
  TOP_EMOJIS_FETCH_SUCCESS: eB,
  TOGGLE_GUILD_EXPANDED_STATE: eG
})