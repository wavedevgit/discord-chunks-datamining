/** Chunk was on web.js **/
/** chunk id: 339085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  De: () => e_,
  ZP: () => eZ
}), require("./388685.js"), require("./825670.js"), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js"), require("./642613.js"), require("./804061.js"), require("./704826.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
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
  Chunk633302 = require("./633302.js"),
  Chunk396352 = require("./396352.js"),
  Chunk856985 = require("./856985.js"),
  Chunk185923 = require("./185923.js"),
  Chunk981631 = require("./981631.js"),
  Chunk149203 = require("./149203.js"),
  Chunk526761 = require("./526761.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let W = [Chunk149203.UX.TOP_GUILD_EMOJI.toString(), Chunk149203.UX.FAVORITES.toString(), Chunk149203.UX.RECENT.toString(), Chunk149203.UX.CUSTOM.toString()].concat(Chunk633302.ZP.getCategories()),
  K = {
    pendingUsages: [],
    emojiReactionPendingUsages: [],
    expandedSectionsByGuildIds: new Set
  };
class z {
  getEmoji(e) {
    return this.build(), this._emojiMap[e]
  }
  getUsableEmoji(e) {
    let t = this.getEmoji(e);
    return null != t && this.isUsable(t) ? t : null
  }
  isUsable(e) {
    if (0 === e.roles.length) returntrue;
    let t = I.ZP.getMember(this.id, this._userId);
    return null != t && !!(t.roles.some(t => e.roles.includes(t)) || (0, E.yH)(e))
  }
  get rawEmojis() {
    return this._emojis
  }
  get emojis() {
    return this.build(), this._emojis
  }
  get emoticons() {
    return this.build(), this._emoticons
  }
  get usableEmojis() {
    return this.build(), this._usableEmojis
  }
  build() {
    this._dirty && (this._dirty = false, this._emojis.forEach(e => {
      e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = L.B.GUILD, this._emojiMap[e.id] = e
    }), this._usableEmojis = a().sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
  }
  constructor(e, t, n, r = false) {
    F(this, "id", true), F(this, "_userId", true), F(this, "_dirty", true), F(this, "_emojis", true), F(this, "_emojiMap", {}), F(this, "_emoticons", []), F(this, "_usableEmojis", []), F(this, "_canSeeServerSubIAP", false), F(this, "_totalUsable", 0), this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = r
  }
}
let q = 42,
  X = Chunk709054.default.fromTimestamp(Date.now() - 60 * Chunk70956.Z.Millis.DAY),
  Q = [],
  J = [],
  $ = 3,
  ee = [...W],
  et = {},
  en = {},
  er = null,
  ei = new Map;

function ea(e) {
  var t, n;
  let r = es()[e];
  return null != r && null != (n = null == (t = et[r]) ? true : t.getEmoji(e)) ? n : true
}

function eo(e) {
  var t, n;
  let r = es()[e];
  return null != r && null != (n = null == (t = et[r]) ? true : t.getUsableEmoji(e)) ? n : true
}

function es() {
  if (el(), null == en)
    for (let e in en = {}, et)
      for (let t of et[module].rawEmojis) en[exports.id] = module;
  return en
}
async function el() {
  if (0 !== $) return;
  let e = Chunk287328.Z.database();
  if (null == module) return;
  $ = 2;
  let t = await (0, Chunk86670.gs)("EmojiStore.loadSavedEmojis", () => Chunk135273.Z.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => Chunk489033.Z.getAsync(module)));
  $ = 3, null != exports && Chunk570140.Z.dispatch({
    type: "CACHED_EMOJIS_LOADED",
    emojis: exports
  })
}

function ec(e) {
  let {
    emojis: t
  } = e;
  for (let [e, n] of t) !Object.hasOwn(et, e) && T.Z.isMember(e) && eb(e, n);
  eE()
}
let eu = e => ({
  computeBonus: () => 100,
  lookupKey: e => {
    var t;
    return null != (t = j.ZP.getByName(e)) ? t : eo(e)
  },
  afterCompute: () => {
    e(), ee = [...W], a().some(et, e => e.usableEmojis.length > 0) || ee.splice(W.indexOf(B.UX.CUSTOM), 1)
  },
  numFrequentlyItems: q
});

function ed(e) {
  return new d.Z(V({}, eu(e)))
}

function ef(e) {
  return new d.Z(Y(V({}, eu(e)), {
    computeFrecency: (e, t, n) => null == n.maxTotalUse ? 0 : Math.trunc(1e3 * (e / n.maxTotalUse * .2 + t / 1e3 * .8)),
    calculateMaxTotalUse: true
  }))
}
class e_ {
  static get(e) {
    return true === e && (e = null), (null == e_._lastInstance || e_._lastInstance.guildId !== e) && (e_._lastInstance = new e_(e)), e_._lastInstance
  }
  static reset() {
    e_._lastInstance = null
  }
  static resetFrequentlyUsed() {
    null != e_._lastInstance && (e_._lastInstance.frequentlyUsed = null)
  }
  static resetFrequentlyUsedReactionEmojis() {
    null != e_._lastInstance && (e_._lastInstance.frequentlyUsedReactionEmojis = null, e_._lastInstance.frequentlyUsedReactionNamesAndIds = null)
  }
  static resetFavorites() {
    null != e_._lastInstance && (e_._lastInstance.favorites = null, e_._lastInstance.favoriteNamesAndIds = null)
  }
  static clear(e) {
    null != e_._lastInstance && e_._lastInstance.guildId === e && (e_._lastInstance = null)
  }
  ensureDisambiguated() {
    null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji()
  }
  getDisambiguatedEmoji() {
    return null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji
  }
  getCustomEmoji() {
    return null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis
  }
  getGroupedCustomEmoji() {
    return null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis
  }
  getByName(e) {
    if ((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e];
    if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
      let t = this.unicodeAliases[e];
      if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t]
    }
  }
  getEmoticonByName(e) {
    if (null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e)) return this.emoticonsByName[e]
  }
  getById(e) {
    if (null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e)) return this.emojisById[e]
  }
  getCustomEmoticonRegex() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && "" !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b"))), this.emoticonRegex
  }
  getFrequentlyUsedEmojisWithoutFetchingLatest() {
    if (this.ensureDisambiguated(), null != this.frequentlyUsed) return this.frequentlyUsed;
    let e = ep.frequently.map(e => null != e.id ? this.getById(e.id) : j.ZP.getByName(e.name)).filter(Chunk823379.lm),
      t = (0, Chunk856985.Z)(module);
    return this.frequentlyUsed = [...exports.values()], this.frequentlyUsed
  }
  rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
    if (this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds) return {
      frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
      frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds
    };
    let e = eh.frequently.map(e => null != e.id ? this.getById(e.id) : j.ZP.getByName(e.name)).filter(Chunk823379.lm),
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
    let r = null != (t = j.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
    return n.has(r.name)
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
    var e, t;
    if (this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds) return {
      favorites: this.favorites,
      favoriteNamesAndIds: this.favoriteNamesAndIds
    };
    let n = (null != (t = null == (e = Chunk581883.Z.frecencyWithoutFetchingLatest.favoriteEmojis) ? true : module.emojis) ? exports : []).map(e => {
        var t;
        return null != (t = this.getById(e)) ? t : j.ZP.getByName(e)
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
    if (this.ensureDisambiguated(), null == this.topEmojis) {
      var t;
      let n = ei.get(e),
        r = k.Z.getTopEmojiIdsByGuildId(e);
      if (null == n && null == r) return Q;
      let i = (null != (t = null == n ? true : n.emojiIds) ? t : r).map(e => {
          var t;
          return null != (t = this.getById(e)) ? t : j.ZP.getByName(j.ZP.convertSurrogateToName(e, false))
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
    if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return Q;
    let t = this.newlyAddedEmoji[e];
    return null == t ? Q : t
  }
  getEscapedCustomEmoticonNames() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
  }
  nameMatchesChain(e) {
    return a()(this.getDisambiguatedEmoji()).filter(t => {
      let {
        names: n,
        name: r
      } = t, i = null != n && a().some(n, e), o = null != r && e(r), s = null != r && a().some(h.Z.getTermsForEmoji(r), e);
      return i || o || s
    })
  }
  _buildDisambiguatedCustomEmoji() {
    let e = {},
      t = [];
    this.emoticonRegex = null, this.frequentlyUsed = null, this.frequentlyUsedReactionEmojis = null, this.frequentlyUsedReactionNamesAndIds = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
    let n = t => {
        var n, r;
        let i = t.name,
          a = null != (n = e[i]) ? n : 0;
        if (e[i] = a + 1, a > 0) {
          let e = "".concat(i, "~").concat(a);
          t = Y(V({}, t), {
            name: e,
            originalName: i,
            allNamesString: ":".concat(e, ":")
          })
        }
        if (this.emojisByName[t.name] = t, "names" in t && (null == (r = t.names) || r.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
          let e, n;
          this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type === L.B.GUILD && (e = t.guildId, n = true), null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && x.default.compare(t.id, X) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
        }
        null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
      },
      r = e => {
        Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) || (t.push(D.Z.escape(e.name)), this.emoticonsByName[e.name] = e)
      };
    Chunk633302.ZP.forEach(require);
    let i = e => {
      let t = et[null == e ? G.kod : e];
      null != t && (a().each(t.usableEmojis, n), a().each(t.emoticons, r))
    };
    for (let e in Chunk392711(this.guildId), this.newlyAddedEmoji) null != this.newlyAddedEmoji[module] ? this.newlyAddedEmoji[module] = this.newlyAddedEmoji[module].sort((e, t) => x.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[module] = [];
    Chunk771845.ZP.getFlattenedGuildIds().forEach(e => {
      e !== this.guildId && i(e)
    }), this.escapedEmoticonNames = exports.join("|")
  }
  constructor(e) {
    F(this, "guildId", true), F(this, "emoticonRegex", null), F(this, "frequentlyUsed", null), F(this, "favorites", null), F(this, "favoriteNamesAndIds", null), F(this, "topEmojis", null), F(this, "escapedEmoticonNames", null), F(this, "disambiguatedEmoji", null), F(this, "customEmojis", true), F(this, "groupedCustomEmojis", true), F(this, "emoticonsByName", true), F(this, "emojisByName", true), F(this, "emojisById", true), F(this, "unicodeAliases", true), F(this, "newlyAddedEmoji", null), F(this, "frequentlyUsedReactionEmojis", null), F(this, "frequentlyUsedReactionNamesAndIds", null), F(this, "isFavoriteEmojiWithoutFetchingLatest", e => {
      var t;
      if (null == e) returnfalse;
      let {
        favoriteNamesAndIds: n
      } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
      if (null != e.id) return n.has(e.id);
      let r = null != (t = j.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
      return n.has(r.name)
    }), this.guildId = e
  }
}
F(e_, "_lastInstance", null);
let ep = ed(e_.resetFrequentlyUsed),
  eh = ef(e_.resetFrequentlyUsedReactionEmojis);

function em() {
  et = {}, en = {}, e_.reset(), ei.clear(), $ = 3
}

function eg(e) {
  null != et[e] && delete et[e]
}

function eE() {
  en = null, e_.reset(), (3 === $ || 1 === $) && (ep.compute(), eh.compute())
}

function eb(e, t) {
  if (eg(e), e_.clear(e), null == t) return;
  let n = N.default.getCurrentUser();
  if (null == n) return;
  let r = (0, y.r)(e);
  et[e] = new z(e, n.id, t, r)
}

function ey(e) {
  for (let t of (em(), e.guilds)) eb(t.id, t.emojis.items);
  $ = +!!e.guilds.every(e => null != e.emojis.items), eE()
}

function eO(e) {
  for (let t in em(), e.emojis) eb(t, e.emojis[t]);
  $ = 1, eE()
}

function ev() {
  K.pendingUsages = [], K.emojiReactionPendingUsages = []
}

function eI() {
  em()
}

function eT(e) {
  1 === $ && "update" === e.guild.emojis.op && null == e.guild.emojis.items && ($ = 0), eb(e.guild.id, e.guild.emojis.items), eE()
}

function eS(e) {
  eb(e.guild.id, e.guild.emojis), eE()
}

function eA(e) {
  let {
    guildId: t,
    emojis: n
  } = e;
  eb(t, n), eE()
}

function eC(e) {
  let {
    guild: t
  } = e;
  eg(t.id), ei.delete(t.id), eE()
}

function eN(e) {
  var t;
  let {
    guildId: n,
    user: r
  } = e;
  if (r.id !== (null == (t = N.default.getCurrentUser()) ? true : t.id)) return;
  let i = et[n];
  eb(n, null == i ? true : i.usableEmojis), eE()
}

function eR(e) {
  if (!e.optimistic) returnfalse;
  let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : j.ZP.getByName(j.ZP.convertSurrogateToName(e.emoji.name, false));
  if (null == t) returnfalse;
  ej([t]), eL([t])
}

function eP(e, t) {
  if (a().isEmpty(e) && a().isEmpty(K.pendingUsages) && v.Z.hasLoaded(Z.yP.FRECENCY_AND_FAVORITES_SETTINGS))
    for (let e of ["thumbsup", "eyes", "laughing", "watermelon", "fork_and_knife", "yum", "weary", "tired_face", "poop", "100"]) ep.track(e);
  if (a().isEmpty(t) && a().isEmpty(K.emojiReactionPendingUsages) && v.Z.hasLoaded(Z.yP.FRECENCY_AND_FAVORITES_SETTINGS))
    for (let e of ["100", "100", "thumbsup", "thumbsup", "thumbsdown", "thumbsdown", "heart", "point_up", "eyes", "weary", "laughing", "white_check_mark", "x"]) eh.track(e)
}

function ew() {
  var e, t, n, r, i, o;
  let s = null == (t = Chunk581883.Z.settings.textAndImages) || null == (e = exports.diversitySurrogate) ? true : module.value;
  null != s && Chunk633302.ZP.setDefaultDiversitySurrogate(s), e_.reset();
  let l = Chunk581883.Z.frecencyWithoutFetchingLatest,
    c = null != (i = null == (n = Chunk135273.emojiFrecency) ? true : require.emojis) ? Chunk392711 : {},
    u = null != (o = null == (r = Chunk135273.emojiReactionFrecency) ? true : r.emojis) ? Chunk913527 : {};
  ep.overwriteHistory(a().mapValues(Chunk442837, e => Y(V({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), K.pendingUsages), eh.overwriteHistory(a().mapValues(Chunk570140, e => Y(V({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), K.emojiReactionPendingUsages), eP(Chunk442837, Chunk570140)
}

function eD(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  if (h.Z.setEmojiLocale(O.default.locale), t !== Z.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  K.pendingUsages = [], K.emojiReactionPendingUsages = []
}

function ex(e) {
  let {
    emojiUsed: t
  } = e;
  eL(t)
}

function eL(e) {
  if (null == e) returnfalse;
  for (let r of e) {
    var t, n;
    let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
    null != e && (ep.track(e), K.pendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let r = e.length > 0;
  return r && (3 === $ || 1 === $) && ep.compute(), r
}

function ej(e) {
  if (null == e) returnfalse;
  for (let r of e) {
    var t, n;
    let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
    null != e && (eh.track(e), K.emojiReactionPendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let r = e.length > 0;
  return r && (3 === $ || 1 === $) && eh.compute(), r
}

function ek(e) {
  let {
    guildId: t,
    role: {
      id: n
    }
  } = e, r = S.Z.getRole(t, n);
  if (!(null != r && (0, g.Z)(r))) returnfalse;
  {
    let e = et[t];
    eb(t, null == e ? true : e.emojis), eE()
  }
}

function eM(e) {
  let {
    guildId: t
  } = e, n = new Set(K.expandedSectionsByGuildIds);
  K.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), K = Y(V({}, K), {
    expandedSectionsByGuildIds: n
  })
}

function eU(e) {
  let {
    guildId: t,
    topEmojisMetadata: n
  } = e;
  ei.set(t, {
    emojiIds: n.map(e => e.emojiId),
    topEmojisTTL: s()(s()()).add(1, "days").valueOf()
  })
}

function eG(e) {
  let {
    text: t
  } = e;
  er = t
}
class eB extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(f.Z, T.Z, I.ZP, A.Z, O.default, b.Z, k.Z, N.default, m.Z, S.Z), null != e && (null != e.pendingUsages && (K.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (K.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (K.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([v.Z], ew)
  }
  getState() {
    return K
  }
  get loadState() {
    return $
  }
  hasPendingUsage() {
    return K.pendingUsages.length > 0 || K.emojiReactionPendingUsages.length > 0
  }
  get expandedSectionsByGuildIds() {
    return K.expandedSectionsByGuildIds
  }
  get categories() {
    return ee
  }
  get diversitySurrogate() {
    var e;
    return null != (e = Chunk633302.ZP.getDefaultDiversitySurrogate()) ? module : ""
  }
  get emojiFrecencyWithoutFetchingLatest() {
    return ep
  }
  get emojiReactionFrecencyWithoutFetchingLatest() {
    return eh
  }
  getGuildEmoji(e) {
    var t;
    el();
    let n = null == e ? true : et[e];
    return null != (t = null == n ? true : n.emojis) ? t : J
  }
  getUsableGuildEmoji(e) {
    var t;
    el();
    let n = et[e];
    return null != (t = null == n ? true : n.usableEmojis) ? t : J
  }
  getGuilds() {
    return et
  }
  getDisambiguatedEmojiContext(e) {
    return el(), e_.get(e)
  }
  getSearchResultsOrder(e, t, n, r) {
    let i = t.toLowerCase(),
      o = D.Z.escape(i);
    if (e.length > 0) {
      let t = RegExp("^".concat(o), "i"),
        n = new RegExp("(^|_|[A-Z])".concat(o, "s?([A-Z]|_|$)")),
        s = n.test.bind(n),
        l = t.test.bind(t),
        c = function(e) {
          let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : e;
          if (null == e || null == t) return 0;
          let n = e.toLowerCase(),
            a = 1 + 4 * (n === i) + (s(n) || s(e) ? 2 : 0) + +!!l(e),
            o = r === U.Hz.REACTION ? eh.getScore(t) : ep.getScore(t);
          return null != o && (a *= o / 100), a
        };
      e = a().orderBy(e, [e => null != e.names ? c(e.names[0]) : c(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
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
    el();
    let c = r.toLowerCase().replaceAll(/[ _]/g, ""),
      u = D.Z.escape(c);
    if (null == s) {
      let e = RegExp("".concat(u), "i");
      t = t => e.test(t.replaceAll("_", ""))
    } else t = s;
    let d = null != n ? n.getGuildId() : null,
      f = e_.get(d).nameMatchesChain(t).reduce((e, t) => {
        let r = P.ZP.getEmojiUnavailableReason({
          emoji: t,
          channel: n,
          intention: a,
          forceIncludeExternalGuilds: o
        });
        return r !== U.Z5.PREMIUM_LOCKED || l ? null != r || l && t.type !== L.B.UNICODE || e.unlocked.push(t) : e.locked.push(t), e
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
    return el(), eo(e)
  }
  getCustomEmojiById(e) {
    return el(), ea(e)
  }
  getTopEmoji(e) {
    return null == e ? Q : (el(), e_.get(e).getTopEmojiWithoutFetchingLatest(e))
  }
  getNewlyAddedEmoji(e) {
    return null == e ? Q : (el(), e_.get(e).getNewlyAddedEmojiForGuild(e))
  }
  getTopEmojisMetadata(e) {
    return ei.get(e)
  }
  getEmojiAutosuggestion(e) {
    if (null != er && er.length > 0) {
      let {
        locked: t,
        unlocked: n
      } = this.searchWithoutFetchingLatest({
        channel: e,
        count: 10,
        query: er,
        intention: U.Hz.CHAT
      });
      return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5)
    }
    return []
  }
  hasUsableEmojiInAnyGuild() {
    return el(), Chunk709054.default.keys(et).some(e => et[e].usableEmojis.length > 0)
  }
  hasFavoriteEmojis(e) {
    let t = e_.get(e);
    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
  }
}
F(eB, "displayName", "EmojiStore"), F(eB, "persistKey", "EmojiStoreV2"), F(eB, "migrations", [e => V({}, e)]);
let eZ = new eB(Chunk570140.Z, {
  LOGOUT: ev,
  BACKGROUND_SYNC: eI,
  CONNECTION_OPEN: ey,
  OVERLAY_INITIALIZE: eO,
  CACHED_EMOJIS_LOADED: ec,
  GUILD_MEMBER_UPDATE: eN,
  GUILD_CREATE: eT,
  GUILD_UPDATE: eS,
  GUILD_EMOJIS_UPDATE: eA,
  GUILD_DELETE: eC,
  MESSAGE_REACTION_ADD: eR,
  EMOJI_TRACK_USAGE: ex,
  USER_SETTINGS_PROTO_UPDATE: eD,
  GUILD_ROLE_CREATE: ek,
  GUILD_ROLE_UPDATE: ek,
  TOP_EMOJIS_FETCH_SUCCESS: eU,
  EMOJI_AUTOSUGGESTION_UPDATE: eG,
  TOGGLE_GUILD_EXPANDED_STATE: eM
})