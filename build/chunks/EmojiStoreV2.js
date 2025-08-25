/** Chunk was on web.js **/
/** chunk id: 339085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  De: () => ep,
  ZP: () => eV
}), require("./388685.js"), require("./825670.js"), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js"), require("./642613.js"), require("./804061.js"), require("./704826.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  Chunk689789 = require("./689789.js"),
  Chunk407477 = require("./407477.js"),
  Chunk633302 = require("./633302.js"),
  Chunk396352 = require("./396352.js"),
  Chunk856985 = require("./856985.js"),
  Chunk185923 = require("./185923.js"),
  Chunk981631 = require("./981631.js"),
  Chunk149203 = require("./149203.js"),
  Chunk526761 = require("./526761.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let z = "original",
  q = [Chunk149203.UX.TOP_GUILD_EMOJI.toString(), Chunk149203.UX.FAVORITES.toString(), Chunk149203.UX.RECENT.toString(), Chunk149203.UX.CUSTOM.toString()].concat(Chunk633302.ZP.getCategories()),
  X = {
    pendingUsages: [],
    emojiReactionPendingUsages: [],
    expandedSectionsByGuildIds: new Set
  };
class Q {
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
    }), this._usableEmojis = o().sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
  }
  constructor(e, t, n, r = false) {
    H(this, "id", true), H(this, "_userId", true), H(this, "_dirty", true), H(this, "_emojis", true), H(this, "_emojiMap", {}), H(this, "_emoticons", []), H(this, "_usableEmojis", []), H(this, "_canSeeServerSubIAP", false), H(this, "_totalUsable", 0), this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = r
  }
}
let J = 42,
  $ = Chunk709054.default.fromTimestamp(Date.now() - 60 * Chunk70956.Z.Millis.DAY),
  ee = [],
  et = [],
  en = 3,
  er = [...q],
  ei = {},
  eo = {},
  ea = null,
  es = new Map;

function el(e) {
  var t, n;
  let r = eu()[e];
  return null != r && null != (n = null == (t = ei[r]) ? true : t.getEmoji(e)) ? n : true
}

function ec(e) {
  var t, n;
  let r = eu()[e];
  return null != r && null != (n = null == (t = ei[r]) ? true : t.getUsableEmoji(e)) ? n : true
}

function eu() {
  if (ed(), null == eo)
    for (let e in eo = {}, ei)
      for (let t of ei[module].rawEmojis) eo[exports.id] = module;
  return eo
}
async function ed() {
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

function ef(e) {
  let {
    emojis: t
  } = e;
  for (let [e, n] of t) !Object.hasOwn(ei, e) && T.Z.isMember(e) && ey(e, n);
  eb()
}

function e_(e) {
  return new d.ZP({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 1;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => {
      var t;
      return null != (t = M.ZP.getByName(e)) ? t : ec(e)
    },
    afterCompute: () => {
      e(), er = [...q], o().some(ei, e => e.usableEmojis.length > 0) || er.splice(q.indexOf(F.UX.CUSTOM), 1)
    },
    numFrequentlyItems: J
  })
}
class ep {
  static get(e) {
    return true === e && (e = null), (null == ep._lastInstance || ep._lastInstance.guildId !== e) && (ep._lastInstance = new ep(e)), ep._lastInstance
  }
  static reset() {
    ep._lastInstance = null
  }
  static resetFrequentlyUsed() {
    null != ep._lastInstance && (ep._lastInstance.frequentlyUsed = null)
  }
  static resetFrequentlyUsedReactionEmojis() {
    null != ep._lastInstance && (ep._lastInstance.frequentlyUsedReactionEmojis = null)
  }
  static resetFavorites() {
    null != ep._lastInstance && (ep._lastInstance.favorites = null, ep._lastInstance.favoriteNamesAndIds = null)
  }
  static clear(e) {
    null != ep._lastInstance && ep._lastInstance.guildId === e && (ep._lastInstance = null)
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
    let e = eh.frequently.map(e => null != e.id ? this.getById(e.id) : M.ZP.getByName(e.name)).filter(Chunk823379.lm),
      t = (0, Chunk856985.Z)(module);
    return this.frequentlyUsed = [...exports.values()], this.frequentlyUsed
  }
  getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
    if (this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis) return this.frequentlyUsedReactionEmojis;
    let e = em.frequently.map(e => null != e.id ? this.getById(e.id) : M.ZP.getByName(e.name)).filter(Chunk823379.lm),
      t = (0, Chunk856985.Z)(module);
    return this.frequentlyUsedReactionEmojis = [...exports.values()], this.frequentlyUsedReactionEmojis
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
    var e, t;
    if (this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds) return {
      favorites: this.favorites,
      favoriteNamesAndIds: this.favoriteNamesAndIds
    };
    let n = (null != (t = null == (e = Chunk581883.Z.frecencyWithoutFetchingLatest.favoriteEmojis) ? true : module.emojis) ? exports : []).map(e => {
        var t;
        return null != (t = this.getById(e)) ? t : M.ZP.getByName(e)
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
    let e = (0, Chunk407477.E2)({
      location: "getEmojiInPriorityOrderWithoutFetchingLatest",
      autoTrackExposure: true
    });
    Chunk407477.Xb.trackExposure({
      location: "getEmojiInPriorityOrderWithoutFetchingLatest"
    });
    let t = module ? this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest() : this.getFrequentlyUsedEmojisWithoutFetchingLatest(),
      n = new Set;
    return this.favoriteEmojisWithoutFetchingLatest.concat(exports).filter(e => !n.has(e) && (n.add(e), true))
  }
  getTopEmojiWithoutFetchingLatest(e) {
    if (this.ensureDisambiguated(), null == this.topEmojis) {
      var t;
      let n = es.get(e),
        r = U.Z.getTopEmojiIdsByGuildId(e);
      if (null == n && null == r) return ee;
      let i = (null != (t = null == n ? true : n.emojiIds) ? t : r).map(e => {
          var t;
          return null != (t = this.getById(e)) ? t : M.ZP.getByName(M.ZP.convertSurrogateToName(e, false))
        }),
        o = [];
      i.forEach(e => {
        null != e && o.push(e)
      });
      let a = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
      this.topEmojis = o.filter(e => !a.includes(e.id))
    }
    return this.topEmojis
  }
  getNewlyAddedEmojiForGuild(e) {
    if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return ee;
    let t = this.newlyAddedEmoji[e];
    return null == t ? ee : t
  }
  getEscapedCustomEmoticonNames() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
  }
  nameMatchesChain(e) {
    return o()(this.getDisambiguatedEmoji()).filter(t => {
      let {
        names: n,
        name: r
      } = t, i = null != n && o().some(n, e), a = null != r && e(r), s = null != r && o().some(h.Z.getTermsForEmoji(r), e);
      return i || a || s
    })
  }
  _buildDisambiguatedCustomEmoji() {
    let e = {},
      t = [];
    this.emoticonRegex = null, this.frequentlyUsed = null, this.frequentlyUsedReactionEmojis = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
    let n = t => {
        var n, r;
        let i = t.name,
          o = null != (n = e[i]) ? n : 0;
        if (e[i] = o + 1, o > 0) {
          let e = "".concat(i, "~").concat(o);
          t = K(Y({}, t), {
            name: e,
            originalName: i,
            allNamesString: ":".concat(e, ":")
          })
        }
        if (this.emojisByName[t.name] = t, "names" in t && (null == (r = t.names) || r.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
          let e, n;
          this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type === L.B.GUILD && (e = t.guildId, n = true), null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && x.default.compare(t.id, $) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
        }
        null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
      },
      r = e => {
        Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) || (t.push(D.Z.escape(e.name)), this.emoticonsByName[e.name] = e)
      };
    Chunk633302.ZP.forEach(require);
    let i = e => {
      let t = ei[null == e ? Z.kod : e];
      null != t && (o().each(t.usableEmojis, n), o().each(t.emoticons, r))
    };
    for (let e in Chunk392711(this.guildId), this.newlyAddedEmoji) null != this.newlyAddedEmoji[module] ? this.newlyAddedEmoji[module] = this.newlyAddedEmoji[module].sort((e, t) => x.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[module] = [];
    Chunk771845.ZP.getFlattenedGuildIds().forEach(e => {
      e !== this.guildId && i(e)
    }), this.escapedEmoticonNames = exports.join("|")
  }
  constructor(e) {
    H(this, "guildId", true), H(this, "emoticonRegex", null), H(this, "frequentlyUsed", null), H(this, "favorites", null), H(this, "favoriteNamesAndIds", null), H(this, "topEmojis", null), H(this, "escapedEmoticonNames", null), H(this, "disambiguatedEmoji", null), H(this, "customEmojis", true), H(this, "groupedCustomEmojis", true), H(this, "emoticonsByName", true), H(this, "emojisByName", true), H(this, "emojisById", true), H(this, "unicodeAliases", true), H(this, "newlyAddedEmoji", null), H(this, "frequentlyUsedReactionEmojis", null), H(this, "isFavoriteEmojiWithoutFetchingLatest", e => {
      var t;
      if (null == e) returnfalse;
      let {
        favoriteNamesAndIds: n
      } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
      if (null != e.id) return n.has(e.id);
      let r = null != (t = M.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
      return n.has(r.name)
    }), this.guildId = e
  }
}
H(ep, "_lastInstance", null);
let eh = e_(ep.resetFrequentlyUsed),
  em = e_(ep.resetFrequentlyUsedReactionEmojis);

function eg() {
  ei = {}, eo = {}, ep.reset(), es.clear(), en = 3
}

function eE(e) {
  null != ei[e] && delete ei[e]
}

function eb() {
  eo = null, ep.reset(), (3 === en || 1 === en) && (eh.compute(), em.compute())
}

function ey(e, t) {
  if (eE(e), ep.clear(e), null == t) return;
  let n = N.default.getCurrentUser();
  if (null == n) return;
  let r = (0, y.r)(e);
  ei[e] = new Q(e, n.id, t, r)
}

function eO(e) {
  for (let t of (eg(), e.guilds)) ey(t.id, t.emojis.items);
  en = +!!e.guilds.every(e => null != e.emojis.items), eb()
}

function ev(e) {
  for (let t in eg(), e.emojis) ey(t, e.emojis[t]);
  en = 1, eb()
}

function eI() {
  X.pendingUsages = [], X.emojiReactionPendingUsages = []
}

function eT() {
  eg()
}

function eS(e) {
  1 === en && "update" === e.guild.emojis.op && null == e.guild.emojis.items && (en = 0), ey(e.guild.id, e.guild.emojis.items), eb()
}

function eA(e) {
  ey(e.guild.id, e.guild.emojis), eb()
}

function eC(e) {
  let {
    guildId: t,
    emojis: n
  } = e;
  ey(t, n), eb()
}

function eN(e) {
  let {
    guild: t
  } = e;
  eE(t.id), es.delete(t.id), eb()
}

function eR(e) {
  var t;
  let {
    guildId: n,
    user: r
  } = e;
  if (r.id !== (null == (t = N.default.getCurrentUser()) ? true : t.id)) return;
  let i = ei[n];
  ey(n, null == i ? true : i.usableEmojis), eb()
}

function eP(e) {
  if (!e.optimistic) returnfalse;
  let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : M.ZP.getByName(M.ZP.convertSurrogateToName(e.emoji.name, false));
  if (null == t) returnfalse;
  eM([t]), ek([t])
}

function ew(e, t) {
  let {
    canSplitFrecencyList: n
  } = j.Z.getCurrentConfig({
    location: "populateInitialFrecencyData"
  }, {
    autoTrackExposure: true
  }), r = (0, k.E2)({
    location: "populateInitialFrecencyData",
    autoTrackExposure: true
  });
  if (k.Xb.trackExposure({
      location: "populateInitialFrecencyData"
    }), o().isEmpty(e) && o().isEmpty(X.pendingUsages) && v.Z.hasLoaded(V.yP.FRECENCY_AND_FAVORITES_SETTINGS))
    for (let e of ["thumbsup", "thumbsup", "eyes", "eyes", "laughing", "laughing", "watermelon", "fork_and_knife", "yum", "weary", "tired_face", "poop", "100"]) eh.track(e);
  if ((n || r) && o().isEmpty(t) && o().isEmpty(X.emojiReactionPendingUsages) && v.Z.hasLoaded(V.yP.FRECENCY_AND_FAVORITES_SETTINGS))
    for (let e of ["100", "100", "thumbsup", "thumbsup", "thumbsdown", "thumbsdown", "heart", "point_up", "eyes", "weary", "laughing", "white_check_mark", "x"]) em.track(e)
}

function eD() {
  var e, t, n, r, i, a;
  let s = null == (t = Chunk581883.Z.settings.textAndImages) || null == (e = exports.diversitySurrogate) ? true : module.value;
  null != s && Chunk633302.ZP.setDefaultDiversitySurrogate(s), ep.reset();
  let l = Chunk581883.Z.frecencyWithoutFetchingLatest,
    c = null != (i = null == (n = Chunk135273.emojiFrecency) ? true : require.emojis) ? Chunk392711 : {},
    u = null != (a = null == (r = Chunk135273.emojiReactionFrecency) ? true : r.emojis) ? Chunk913527 : {};
  eh.overwriteHistory(o().mapValues(Chunk442837, e => K(Y({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), X.pendingUsages), em.overwriteHistory(o().mapValues(Chunk570140, e => K(Y({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), X.emojiReactionPendingUsages), ew(Chunk442837, Chunk570140)
}

function ex(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  if (h.Z.setEmojiLocale(O.default.locale), t !== V.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  X.pendingUsages = [], X.emojiReactionPendingUsages = []
}

function eL() {
  if (!Chunk353926.Z.hasLoadedExperiments) return;
  let {
    frecencyAlgorithm: e
  } = Chunk407477.ZP.getCurrentConfig({
    location: "handleExperimentsChange"
  }, {
    autoTrackExposure: true
  }), t = Chunk704907.M$[module], n = Chunk704907.KX[module], r = "original" !== module;
  module !== z && em.replaceEntryComputeFunctions(exports, require, r), z = module
}

function ej(e) {
  let {
    emojiUsed: t
  } = e;
  ek(t)
}

function ek(e) {
  if (null == e) returnfalse;
  for (let r of e) {
    var t, n;
    let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
    null != e && (eh.track(e), X.pendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let r = e.length > 0;
  return r && (3 === en || 1 === en) && eh.compute(), r
}

function eM(e) {
  if (null == e) returnfalse;
  for (let r of e) {
    var t, n;
    let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
    null != e && (em.track(e), X.emojiReactionPendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let r = e.length > 0;
  return r && (3 === en || 1 === en) && em.compute(), r
}

function eU(e) {
  let {
    guildId: t,
    role: {
      id: n
    }
  } = e, r = S.Z.getRole(t, n);
  if (!(null != r && (0, g.Z)(r))) returnfalse;
  {
    let e = ei[t];
    ey(t, null == e ? true : e.emojis), eb()
  }
}

function eG(e) {
  let {
    guildId: t
  } = e, n = new Set(X.expandedSectionsByGuildIds);
  X.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), X = K(Y({}, X), {
    expandedSectionsByGuildIds: n
  })
}

function eB(e) {
  let {
    guildId: t,
    topEmojisMetadata: n
  } = e;
  es.set(t, {
    emojiIds: n.map(e => e.emojiId),
    topEmojisTTL: s()(s()()).add(1, "days").valueOf()
  })
}

function eZ(e) {
  let {
    text: t
  } = e;
  ea = t
}
class eF extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(f.Z, T.Z, I.ZP, A.Z, O.default, b.Z, U.Z, N.default, m.Z, S.Z), null != e && (null != e.pendingUsages && (X.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (X.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (X.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([v.Z], eD), this.syncWith([m.Z], eL)
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
    return eh
  }
  get emojiReactionFrecencyWithoutFetchingLatest() {
    return em
  }
  getGuildEmoji(e) {
    var t;
    ed();
    let n = null == e ? true : ei[e];
    return null != (t = null == n ? true : n.emojis) ? t : et
  }
  getUsableGuildEmoji(e) {
    var t;
    ed();
    let n = ei[e];
    return null != (t = null == n ? true : n.usableEmojis) ? t : et
  }
  getGuilds() {
    return ei
  }
  getDisambiguatedEmojiContext(e) {
    return ed(), ep.get(e)
  }
  getSearchResultsOrder(e, t, n, r) {
    let i = t.toLowerCase(),
      a = D.Z.escape(i),
      {
        canSplitFrecencyList: s
      } = j.Z.getCurrentConfig({
        location: "getSearchResultsOrder"
      }, {
        autoTrackExposure: true
      }),
      l = (0, k.E2)({
        location: "getSearchResultsOrder",
        autoTrackExposure: true
      });
    if (k.Xb.trackExposure({
        location: "getSearchResultsOrder"
      }), e.length > 0) {
      let t = RegExp("^".concat(a), "i"),
        n = new RegExp("(^|_|[A-Z])".concat(a, "s?([A-Z]|_|$)")),
        c = n.test.bind(n),
        u = t.test.bind(t),
        d = function(e) {
          let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : e;
          if (null == e || null == t) return 0;
          let n = e.toLowerCase(),
            o = 1 + 4 * (n === i) + (c(n) || c(e) ? 2 : 0) + +!!u(e),
            a = r === B.Hz.REACTION && (s || l) ? em.getScore(t) : eh.getScore(t);
          return null != a && (o *= a / 100), o
        };
      e = o().orderBy(e, [e => null != e.names ? d(e.names[0]) : d(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
    }
    return n > 0 && (e = e.slice(0, n)), e
  }
  searchWithoutFetchingLatest(e) {
    let t, {
      channel: n,
      query: r,
      count: i = 0,
      intention: o,
      includeExternalGuilds: a = true,
      matchComparator: s,
      showOnlyUnicode: l
    } = e;
    ed();
    let c = r.toLowerCase().replaceAll(/[ _]/g, ""),
      u = D.Z.escape(c);
    if (null == s) {
      let e = RegExp("".concat(u), "i");
      t = t => e.test(t.replaceAll("_", ""))
    } else t = s;
    let d = null != n ? n.getGuildId() : null,
      f = ep.get(d).nameMatchesChain(t).reduce((e, t) => {
        let r = P.ZP.getEmojiUnavailableReason({
          emoji: t,
          channel: n,
          intention: o,
          forceIncludeExternalGuilds: a
        });
        return r !== B.Z5.PREMIUM_LOCKED || l ? null != r || l && t.type !== L.B.UNICODE || e.unlocked.push(t) : e.locked.push(t), e
      }, {
        unlocked: [],
        locked: []
      });
    return {
      unlocked: this.getSearchResultsOrder(f.unlocked, r, i, o),
      locked: this.getSearchResultsOrder(f.locked, r, 0, o)
    }
  }
  getUsableCustomEmojiById(e) {
    return ed(), ec(e)
  }
  getCustomEmojiById(e) {
    return ed(), el(e)
  }
  getTopEmoji(e) {
    return null == e ? ee : (ed(), ep.get(e).getTopEmojiWithoutFetchingLatest(e))
  }
  getNewlyAddedEmoji(e) {
    return null == e ? ee : (ed(), ep.get(e).getNewlyAddedEmojiForGuild(e))
  }
  getTopEmojisMetadata(e) {
    return es.get(e)
  }
  getEmojiAutosuggestion(e) {
    if (null != ea && ea.length > 0) {
      let {
        locked: t,
        unlocked: n
      } = this.searchWithoutFetchingLatest({
        channel: e,
        count: 10,
        query: ea,
        intention: B.Hz.CHAT
      });
      return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5)
    }
    return []
  }
  hasUsableEmojiInAnyGuild() {
    return ed(), Chunk709054.default.keys(ei).some(e => ei[e].usableEmojis.length > 0)
  }
  hasFavoriteEmojis(e) {
    let t = ep.get(e);
    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
  }
}
H(eF, "displayName", "EmojiStore"), H(eF, "persistKey", "EmojiStoreV2"), H(eF, "migrations", [e => Y({}, e)]);
let eV = new eF(Chunk570140.Z, {
  LOGOUT: eI,
  BACKGROUND_SYNC: eT,
  CONNECTION_OPEN: eO,
  OVERLAY_INITIALIZE: ev,
  CACHED_EMOJIS_LOADED: ef,
  GUILD_MEMBER_UPDATE: eR,
  GUILD_CREATE: eS,
  GUILD_UPDATE: eA,
  GUILD_EMOJIS_UPDATE: eC,
  GUILD_DELETE: eN,
  MESSAGE_REACTION_ADD: eP,
  EMOJI_TRACK_USAGE: ej,
  USER_SETTINGS_PROTO_UPDATE: ex,
  GUILD_ROLE_CREATE: eU,
  GUILD_ROLE_UPDATE: eU,
  TOP_EMOJIS_FETCH_SUCCESS: eB,
  EMOJI_AUTOSUGGESTION_UPDATE: eZ,
  TOGGLE_GUILD_EXPANDED_STATE: eG
})