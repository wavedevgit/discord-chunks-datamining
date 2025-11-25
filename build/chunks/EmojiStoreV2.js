/** Chunk was on web.js **/
/** chunk id: 339085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  De: () => em,
  ZP: () => eV
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
  Chunk221518 = require("./221518.js"),
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

function K(e) {
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

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let X = [Chunk149203.UX.TOP_GUILD_EMOJI.toString(), Chunk149203.UX.FAVORITES.toString(), Chunk149203.UX.RECENT.toString(), Chunk149203.UX.CUSTOM.toString()].concat(Chunk633302.ZP.getCategories()),
  Q = {
    pendingUsages: [],
    emojiReactionPendingUsages: [],
    expandedSectionsByGuildIds: new Set
  };
class J {
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
let $ = 42,
  ee = Chunk709054.default.fromTimestamp(Date.now() - 60 * Chunk70956.Z.Millis.DAY),
  et = [],
  en = [],
  er = 3,
  ei = [...X],
  ea = {},
  eo = {},
  es = new Map;

function el(e) {
  var t, n;
  let r = eu()[e];
  return null != r && null != (n = null == (t = ea[r]) ? true : t.getEmoji(e)) ? n : true
}

function ec(e) {
  var t, n;
  let r = eu()[e];
  return null != r && null != (n = null == (t = ea[r]) ? true : t.getUsableEmoji(e)) ? n : true
}

function eu() {
  if (ed(), null == eo)
    for (let e in eo = {}, ea)
      for (let t of ea[module].emojiIds()) eo[exports] = module;
  return eo
}
async function ed() {
  if (0 !== er) return;
  let e = Chunk287328.Z.database();
  if (null == module) return;
  er = 2;
  let t = await (0, Chunk86670.gs)("EmojiStore.loadSavedEmojis", () => Chunk135273.Z.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => Chunk489033.Z.getAsync(module)));
  er = 3, null != exports && Chunk570140.Z.dispatch({
    type: "CACHED_EMOJIS_LOADED",
    emojis: exports
  })
}

function ef(e) {
  let {
    emojis: t
  } = e;
  for (let [e] of t) !Object.hasOwn(ea, e) && A.Z.isMember(e) && ev(e);
  eO()
}
let e_ = e => ({
  computeBonus: () => 100,
  lookupKey: e => {
    var t;
    return null != (t = G.ZP.getByName(e)) ? t : ec(e)
  },
  afterCompute: () => {
    e(), ei = [...X], s().some(ea, e => e.usableEmojis.length > 0) || ei.splice(X.indexOf(H.UX.CUSTOM), 1)
  },
  numFrequentlyItems: $
});

function ep(e) {
  return new _.Z(K({}, e_(e)))
}

function eh(e) {
  return new _.Z(q(K({}, e_(e)), {
    computeFrecency: (e, t, n) => null == n.maxTotalUse ? 0 : Math.trunc(1e3 * (e / n.maxTotalUse * .2 + t / 1e3 * .8)),
    calculateMaxTotalUse: true
  }))
}
class em {
  static get(e) {
    return true === e && (e = null), (null == em._lastInstance || em._lastInstance.guildId !== e) && (em._lastInstance = new em(e)), em._lastInstance
  }
  static reset() {
    em._lastInstance = null
  }
  static resetFrequentlyUsed() {
    null != em._lastInstance && (em._lastInstance.frequentlyUsed = null)
  }
  static resetFrequentlyUsedReactionEmojis() {
    null != em._lastInstance && (em._lastInstance.frequentlyUsedReactionEmojis = null, em._lastInstance.frequentlyUsedReactionNamesAndIds = null)
  }
  static clear(e) {
    null != em._lastInstance && em._lastInstance.guildId === e && (em._lastInstance = null)
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
    let e = eg.frequently.map(e => null != e.id ? this.getById(e.id) : G.ZP.getByName(e.name)).filter(Chunk823379.lm),
      t = (0, Chunk856985.Z)(module);
    return this.frequentlyUsed = [...exports.values()], this.frequentlyUsed
  }
  rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
    if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds) return {
      frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
      frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds
    };
    let e = eE.frequently.map(e => null != e.id ? this.getById(e.id) : G.ZP.getByName(e.name)).filter(Chunk823379.lm),
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
    let r = null != (t = G.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
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
        return null != (t = this.getById(e)) ? t : G.ZP.getByName(e)
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
      let n = es.get(e),
        r = B.Z.getTopEmojiIdsByGuildId(e);
      if (null == n && null == r) return et;
      let i = (null != (t = null == n ? true : n.emojiIds) ? t : r).map(e => {
          var t;
          return null != (t = this.getById(e)) ? t : G.ZP.getByName(G.ZP.convertSurrogateToName(e, false))
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
    if (null == this.newlyAddedEmoji) return et;
    let t = this.newlyAddedEmoji[e];
    return null == t ? et : t
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
      let r = null != (t = G.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
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
          r = q(K({}, e), {
            name: t,
            originalName: i
          })
        } else r = e;
        this.emojisByName[r.name] = r, this.emojisById[r.id] = r, this.customEmojis[r.name] = r;
        let {
          guildId: o
        } = e;
        null != this.groupedCustomEmojis[o] ? this.groupedCustomEmojis[o].push(r) : this.groupedCustomEmojis[o] = [r], M.default.compare(e.id, ee) >= 0 && (null != this.newlyAddedEmoji[o] ? this.newlyAddedEmoji[o].push(r) : this.newlyAddedEmoji[o] = [r]), this.disambiguatedEmoji.push(r)
      },
      o = e => {
        Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) || (n.push(x.Z.escape(e.name)), this.emoticonsByName[e.name] = e)
      };
    G.ZP.forEach(r);
    let l = e => {
      let t = ea[null == e ? V.kod : e];
      null != t && (s().each(t.usableEmojis, i), s().each(t.emoticons, o))
    };
    for (let e in l(this.guildId), this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => M.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
    R.ZP.getFlattenedGuildIds().forEach(e => {
      e !== this.guildId && l(e)
    }), this.escapedEmoticonNames = n.join("|")
  }
}
Y(em, "_lastInstance", null);
let eg = ep(em.resetFrequentlyUsed),
  eE = eh(em.resetFrequentlyUsedReactionEmojis);

function eb() {
  ea = {}, eo = {}, em.reset(), es.clear(), er = 3
}

function ey(e) {
  null != ea[e] && delete ea[e]
}

function eO() {
  eo = null, em.reset(), (3 === er || 1 === er) && (eg.compute(), eE.compute())
}

function ev(e) {
  ey(e), em.clear(e);
  let t = U.Z.getGuildEmojis(e);
  if (null == t) return;
  let n = P.default.getCurrentUser();
  if (null == n) return;
  let r = (0, v.r)(e);
  ea[e] = new J(e, n.id, t, r)
}

function eI(e) {
  for (let t of (eb(), e.guilds)) ev(t.id);
  er = +!!e.guilds.every(e => null != e.emojis.items), eO()
}

function eT(e) {
  for (let t in eb(), e.emojis) ev(t);
  er = 1, eO()
}

function eS() {
  Q.pendingUsages = [], Q.emojiReactionPendingUsages = []
}

function eA() {
  eb()
}

function eC(e) {
  1 === er && "update" === e.guild.emojis.op && null == e.guild.emojis.items && (er = 0), ev(e.guild.id), eO()
}

function eN(e) {
  ev(e.guild.id), eO()
}

function eR(e) {
  let {
    guildId: t
  } = e;
  ev(t), eO()
}

function eP(e) {
  let {
    guild: t
  } = e;
  ey(t.id), es.delete(t.id), eO()
}

function eD(e) {
  var t;
  let {
    guildId: n,
    user: r
  } = e;
  r.id === (null == (t = P.default.getCurrentUser()) ? true : t.id) && (ev(n), eO())
}

function ew(e) {
  if (!e.optimistic) returnfalse;
  let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : G.ZP.getByName(G.ZP.convertSurrogateToName(e.emoji.name, false));
  if (null == t) returnfalse;
  eU([t]), ej([t])
}

function eL(e, t) {
  if (s().isEmpty(e) && s().isEmpty(Q.pendingUsages) && T.Z.hasLoaded(W.yP.FRECENCY_AND_FAVORITES_SETTINGS))
    for (let e of ["thumbsup", "eyes", "laughing", "watermelon", "fork_and_knife", "yum", "weary", "tired_face", "poop", "100"]) eg.track(e);
  if (s().isEmpty(t) && s().isEmpty(Q.emojiReactionPendingUsages) && T.Z.hasLoaded(W.yP.FRECENCY_AND_FAVORITES_SETTINGS))
    for (let e of ["100", "100", "thumbsup", "thumbsup", "thumbsdown", "thumbsdown", "heart", "point_up", "eyes", "weary", "laughing", "white_check_mark", "x"]) eE.track(e)
}

function ex() {
  var e, t, n, r, i, a;
  let o = null == (t = Chunk581883.Z.settings.textAndImages) || null == (e = exports.diversitySurrogate) ? true : module.value;
  null != Chunk392711 && Chunk633302.ZP.setDefaultDiversitySurrogate(Chunk392711), em.reset();
  let l = Chunk581883.Z.frecencyWithoutFetchingLatest,
    c = null != (i = null == (n = Chunk913527.emojiFrecency) ? true : require.emojis) ? Chunk512722 : {},
    u = null != (a = null == (r = Chunk913527.emojiReactionFrecency) ? true : r.emojis) ? a : {};
  eg.overwriteHistory(s().mapValues(c, e => q(K({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), Q.pendingUsages), eE.overwriteHistory(s().mapValues(Chunk135273, e => q(K({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), Q.emojiReactionPendingUsages), eL(c, Chunk135273)
}

function eM(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  if (g.Z.setEmojiLocale(I.default.locale), t !== W.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  Q.pendingUsages = [], Q.emojiReactionPendingUsages = []
}

function ek(e) {
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
    null != e && (eg.track(e), Q.pendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let r = e.length > 0;
  return r && (3 === er || 1 === er) && eg.compute(), r
}

function eU(e) {
  if (null == e) returnfalse;
  for (let r of e) {
    var t, n;
    let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
    null != e && (eE.track(e), Q.emojiReactionPendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let r = e.length > 0;
  return r && (3 === er || 1 === er) && eE.compute(), r
}

function eG(e) {
  let {
    guildId: t,
    role: {
      id: n
    }
  } = e, r = C.Z.getRole(t, n);
  if (!(null != r && (0, b.Z)(r))) returnfalse;
  ev(t), eO()
}

function eB(e) {
  let {
    guildId: t
  } = e, n = new Set(Q.expandedSectionsByGuildIds);
  Q.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), Q = q(K({}, Q), {
    expandedSectionsByGuildIds: n
  })
}

function eZ(e) {
  let {
    guildId: t,
    topEmojisMetadata: n
  } = e;
  es.set(t, {
    emojiIds: n.map(e => e.emojiId),
    topEmojisTTL: c()(c()()).add(1, "days").valueOf()
  })
}
class eF extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(E.Z, S.ZP, A.Z, C.Z, N.Z, I.default, U.Z, R.ZP, O.Z, B.Z, T.Z, P.default), null != e && (null != e.pendingUsages && (Q.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (Q.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (Q.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([T.Z], ex)
  }
  getState() {
    return Q
  }
  get loadState() {
    return er
  }
  hasPendingUsage() {
    return Q.pendingUsages.length > 0 || Q.emojiReactionPendingUsages.length > 0
  }
  get expandedSectionsByGuildIds() {
    return Q.expandedSectionsByGuildIds
  }
  get categories() {
    return ei
  }
  get diversitySurrogate() {
    var e;
    return null != (e = Chunk633302.ZP.getDefaultDiversitySurrogate()) ? module : ""
  }
  get emojiFrecencyWithoutFetchingLatest() {
    return eg
  }
  get emojiReactionFrecencyWithoutFetchingLatest() {
    return eE
  }
  getGuildEmoji(e) {
    var t;
    ed();
    let n = null == e ? true : ea[e];
    return null != (t = null == n ? true : n.emojis) ? t : en
  }
  getUsableGuildEmoji(e) {
    var t;
    ed();
    let n = ea[e];
    return null != (t = null == n ? true : n.usableEmojis) ? t : en
  }
  getGuilds() {
    return ea
  }
  getDisambiguatedEmojiContext(e) {
    return ed(), em.get(e)
  }
  getSearchResultsOrder(e, t, n, r, i) {
    let a = t.toLowerCase(),
      o = x.Z.escape(a),
      l = a.slice(0, 1).toUpperCase() + a.slice(1),
      c = x.Z.escape(l);
    if (e.length > 0) {
      let {
        boostFavorites: t,
        boostCapitalizedWords: n,
        boostAtEnd: l,
        boostsIgnoreDisambiguators: u
      } = k.Z.getConfig({
        location: "getSearchResultsOrder"
      }), d = RegExp("^".concat(o), "i"), f = RegExp("".concat(o, "$"), "i"), _ = new RegExp("(^|_|[A-Z])".concat(o, "s?([A-Z]|_|$)")), p = new RegExp("(^|_|[A-Z])".concat(o, "s?([A-Z]|_|$)|(^|_|[a-z])").concat(c, "s?([A-Z]|_|$)")), h = n ? p : _, m = h.test.bind(h), g = d.test.bind(d), E = f.test.bind(f), b = e => {
        let n = null != e.uniqueName,
          o = n ? e.names[0] : u ? e.name.split("~")[0] : e.name,
          s = n ? o : e.id;
        if (null == o || null == s) return 0;
        let c = o.toLowerCase(),
          d = 1 + 4 * (c === a) + (m(c) || m(o) ? 2 : 0) + (g(o) ? 1 : l && E(o) ? .75 : 0) + (t && i.isFavoriteEmojiWithoutFetchingLatest(e) ? .5 : 0),
          f = r === F.Hz.REACTION ? eE.getScore(s) : eg.getScore(s);
        return null != f && (d *= f / 100), d
      };
      e = s().orderBy(e, [e => b(e), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
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
    ed();
    let c = r.toLowerCase().replaceAll(/[ _]/g, ""),
      u = x.Z.escape(c);
    if (null == s) {
      let e = RegExp("".concat(u), "i");
      t = t => e.test(t.replaceAll("_", ""))
    } else t = s;
    let d = null != n ? n.getGuildId() : null,
      f = em.get(d),
      _ = f.nameMatchesChain(t).reduce((e, t) => {
        let r = w.ZP.getEmojiUnavailableReason({
          emoji: t,
          channel: n,
          intention: a,
          forceIncludeExternalGuilds: o
        });
        return r !== F.Z5.PREMIUM_LOCKED || l ? null != r || l && t.type !== j.B.UNICODE || e.unlocked.push(t) : e.locked.push(t), e
      }, {
        unlocked: [],
        locked: []
      });
    return {
      unlocked: this.getSearchResultsOrder(_.unlocked, r, i, a, f),
      locked: this.getSearchResultsOrder(_.locked, r, 0, a, f)
    }
  }
  getUsableCustomEmojiById(e) {
    return ed(), ec(e)
  }
  getCustomEmojiById(e) {
    return ed(), el(e)
  }
  getTopEmoji(e) {
    return null == e ? et : (ed(), em.get(e).getTopEmojiWithoutFetchingLatest(e))
  }
  getNewlyAddedEmoji(e) {
    return null == e ? et : (ed(), em.get(e).getNewlyAddedEmojiForGuild(e))
  }
  getTopEmojisMetadata(e) {
    return es.get(e)
  }
  hasUsableEmojiInAnyGuild() {
    return ed(), Chunk709054.default.keys(ea).some(e => ea[e].usableEmojis.length > 0)
  }
  hasFavoriteEmojis(e) {
    let t = em.get(e);
    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
  }
}
Y(eF, "displayName", "EmojiStore"), Y(eF, "persistKey", "EmojiStoreV2"), Y(eF, "migrations", [e => K({}, e)]);
let eV = new eF(Chunk570140.Z, {
  LOGOUT: eS,
  BACKGROUND_SYNC: eA,
  CONNECTION_OPEN: eI,
  OVERLAY_INITIALIZE: eT,
  CACHED_EMOJIS_LOADED: ef,
  GUILD_MEMBER_UPDATE: eD,
  GUILD_CREATE: eC,
  GUILD_UPDATE: eN,
  GUILD_EMOJIS_UPDATE: eR,
  GUILD_DELETE: eP,
  MESSAGE_REACTION_ADD: ew,
  EMOJI_TRACK_USAGE: ek,
  USER_SETTINGS_PROTO_UPDATE: eM,
  GUILD_ROLE_CREATE: eG,
  GUILD_ROLE_UPDATE: eG,
  TOP_EMOJIS_FETCH_SUCCESS: eZ,
  TOGGLE_GUILD_EXPANDED_STATE: eB
})