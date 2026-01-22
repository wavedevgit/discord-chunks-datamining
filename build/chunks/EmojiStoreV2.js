/** Chunk was on web.js **/
/** chunk id: 508675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eH,
  o2: () => em
}), require("./896048.js"), require("./205816.js"), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./321073.js"), require("./638769.js"), require("./812715.js"), require("./866193.js");
var r, Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk989349 = require("./989349.js"),
  c = require.n(Chunk989349),
  Chunk61090 = require("./61090.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk283047 = require("./283047.js"),
  Chunk723176 = require("./723176.js"),
  Chunk154049 = require("./154049.js"),
  Chunk995604 = require("./995604.js"),
  Chunk710026 = require("./710026.js"),
  Chunk49463 = require("./49463.js"),
  Chunk98318 = require("./98318.js"),
  Chunk492494 = require("./492494.js"),
  Chunk384684 = require("./384684.js"),
  Chunk46467 = require("./46467.js"),
  Chunk773669 = require("./773669.js"),
  Chunk617617 = require("./617617.js"),
  Chunk696451 = require("./696451.js"),
  Chunk184989 = require("./184989.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk711014 = require("./711014.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk690521 = require("./690521.js"),
  Chunk403362 = require("./403362.js"),
  Chunk257120 = require("./257120.js"),
  Chunk661191 = require("./661191.js"),
  Chunk84144 = require("./84144.js"),
  Chunk770335 = require("./770335.js"),
  Chunk608960 = require("./608960.js"),
  Chunk7584 = require("./7584.js"),
  Chunk354430 = require("./354430.js"),
  Chunk635222 = require("./635222.js"),
  Chunk307731 = require("./307731.js"),
  Chunk652215 = require("./652215.js"),
  Chunk732139 = require("./732139.js"),
  Chunk355097 = require("./355097.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Z = [Chunk732139.R2.TOP_GUILD_EMOJI.toString(), Chunk732139.R2.FAVORITES.toString(), Chunk732139.R2.RECENT.toString(), Chunk732139.R2.CUSTOM.toString()].concat(Chunk7584.Ay.getCategories()),
  Q = {
    pendingUsages: [],
    emojiReactionPendingUsages: [],
    expandedSectionsByGuildIds: new Set
  };
class $ {
  getEmoji(e) {
    return this._emojiMap[e]
  }
  getUsableEmoji(e) {
    let t = this.getEmoji(e);
    return null != t && this.isUsable(t) ? t : true
  }
  isUsable(e) {
    if (0 === e.roles.length) returntrue;
    let t = I.Ay.getMember(this.id, this._userId);
    return null != t && !!(t.roles.some(t => e.roles.includes(t)) || (0, y.kT)(e))
  }
  emojiIds() {
    return j.default.keys(this._emojiMap)
  }
  get emojis() {
    return null == this._emojis && (this._emojis = Object.values(this._emojiMap)), this._emojis
  }
  get emoticons() {
    return null == this._emoticons && (this._emoticons = this.usableEmojis.filter(e => !e.require_colons)), this._emoticons
  }
  get usableEmojis() {
    return null == this._usableEmojis && (this._usableEmojis = o().sortBy(this.emojis.filter(e => this.isUsable(e)), e => e.name)), this._usableEmojis
  }
  constructor(e, t, n, r = false) {
    K(this, "id", true), K(this, "_userId", true), K(this, "_emojis", null), K(this, "_emojiMap", true), K(this, "_emoticons", null), K(this, "_usableEmojis", null), K(this, "_canSeeServerSubIAP", false), this.id = e, this._userId = t, this._emojiMap = n, this._canSeeServerSubIAP = r
  }
}
let J = 42,
  ee = Chunk661191.default.fromTimestamp(Date.now() - 60 * Chunk927813.A.Millis.DAY),
  et = [],
  en = [],
  er = 3,
  ei = [...Z],
  ea = {},
  es = {},
  eo = new Map;

function el(e) {
  var t, n;
  let r = eu()[e];
  return null != r && null != (t = null == (n = ea[r]) ? true : n.getEmoji(e)) ? t : true
}

function ec(e) {
  var t, n;
  let r = eu()[e];
  return null != r && null != (t = null == (n = ea[r]) ? true : n.getUsableEmoji(e)) ? t : true
}

function eu() {
  if (ed(), null == es)
    for (let e in es = {}, ea)
      for (let t of ea[e].emojiIds()) es[t] = e;
  return es
}
async function ed() {
  if (0 !== er) return;
  let e = _.A.database();
  if (null == e) return;
  er = 2;
  let t = await (0, h.ES)("EmojiStore.loadSavedEmojis", () => u.A.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => m.A.getAsync(e)));
  er = 3, null != t && f.h.dispatch({
    type: "CACHED_EMOJIS_LOADED",
    emojis: t
  })
}

function ef(e) {
  let {
    emojis: t
  } = e;
  for (let [e] of t) !Object.hasOwn(ea, e) && T.A.isMember(e) && eA(e);
  eO()
}
let ep = e => ({
  computeBonus: () => 100,
  lookupKey: e => {
    var t;
    return null != (t = G.Ay.getByName(e)) ? t : ec(e)
  },
  afterCompute: () => {
    e(), ei = [...Z], o().some(ea, e => e.usableEmojis.length > 0) || ei.splice(Z.indexOf(Y.R2.CUSTOM), 1)
  },
  numFrequentlyItems: J
});

function e_(e) {
  return new p.A(z({}, ep(e)))
}

function eh(e) {
  return new p.A(X(z({}, ep(e)), {
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
    let e = eg.frequently.map(e => null != e.id ? this.getById(e.id) : G.Ay.getByName(e.name)).filter(x.Vq),
      t = (0, F.A)(e);
    return this.frequentlyUsed = [...t.values()], this.frequentlyUsed
  }
  rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
    if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds) return {
      frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
      frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds
    };
    let e = eE.frequently.map(e => null != e.id ? this.getById(e.id) : G.Ay.getByName(e.name)).filter(x.Vq),
      t = (0, F.A)(e);
    return this.frequentlyUsedReactionEmojis = [...t.values()], this.frequentlyUsedReactionNamesAndIds = new Set(t.keys()), {
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
    let r = null != (t = G.Ay.convertSurrogateToBase(e.surrogates)) ? t : e;
    return n.has(r.name)
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
    var e, t;
    if (null != this.favorites && null != this.favoriteNamesAndIds) return {
      favorites: this.favorites,
      favoriteNamesAndIds: this.favoriteNamesAndIds
    };
    let n = (null != (e = null == (t = S.A.frecencyWithoutFetchingLatest.favoriteEmojis) ? true : t.emojis) ? e : []).map(e => {
        var t;
        return null != (t = this.getById(e)) ? t : G.Ay.getByName(e)
      }).filter(x.Vq),
      r = (0, F.A)(n);
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
    return this.favoriteEmojisWithoutFetchingLatest.concat(e).filter(e => !t.has(e) && (t.add(e), true))
  }
  getTopEmojiWithoutFetchingLatest(e) {
    if (null == this.topEmojis) {
      var t;
      let n = eo.get(e),
        r = V.A.getTopEmojiIdsByGuildId(e);
      if (null == n && null == r) return et;
      let i = (null != (t = null == n ? true : n.emojiIds) ? t : r).map(e => {
          var t;
          return null != (t = this.getById(e)) ? t : G.Ay.getByName(G.Ay.convertSurrogateToName(e, false))
        }),
        a = [];
      i.forEach(e => {
        null != e && a.push(e)
      });
      let s = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
      this.topEmojis = a.filter(e => !s.includes(e.id))
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
    return o()(this.getDisambiguatedEmoji()).filter(t => {
      let {
        names: n,
        name: r
      } = t, i = null != n && o().some(n, e), a = null != r && e(r), s = null != r && o().some(g.A.getTermsForEmoji(r), e);
      return i || a || s
    })
  }
  constructor(e) {
    K(this, "favorites", null), K(this, "favoriteNamesAndIds", null), K(this, "topEmojis", null), K(this, "guildId", true), K(this, "escapedEmoticonNames", true), K(this, "disambiguatedEmoji", []), K(this, "emoticonRegex", null), K(this, "frequentlyUsed", null), K(this, "frequentlyUsedReactionEmojis", null), K(this, "frequentlyUsedReactionNamesAndIds", null), K(this, "unicodeAliases", {}), K(this, "customEmojis", {}), K(this, "groupedCustomEmojis", {}), K(this, "emoticonsByName", {}), K(this, "emojisByName", {}), K(this, "emojisById", {}), K(this, "newlyAddedEmoji", {}), K(this, "isFavoriteEmojiWithoutFetchingLatest", e => {
      var t;
      if (null == e) returnfalse;
      let {
        favoriteNamesAndIds: n
      } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
      if (null != e.id) return n.has(e.id);
      let r = null != (t = G.Ay.convertSurrogateToBase(e.surrogates)) ? t : e;
      return n.has(r.name)
    }), this.guildId = e;
    const t = {},
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
          r = X(z({}, e), {
            name: t,
            originalName: i
          })
        } else r = e;
        this.emojisByName[r.name] = r, this.emojisById[r.id] = r, this.customEmojis[r.name] = r;
        let {
          guildId: s
        } = e;
        null != this.groupedCustomEmojis[s] ? this.groupedCustomEmojis[s].push(r) : this.groupedCustomEmojis[s] = [r], j.default.compare(e.id, ee) >= 0 && (null != this.newlyAddedEmoji[s] ? this.newlyAddedEmoji[s].push(r) : this.newlyAddedEmoji[s] = [r]), this.disambiguatedEmoji.push(r)
      },
      s = e => {
        Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) || (n.push(L.A.escape(e.name)), this.emoticonsByName[e.name] = e)
      };
    G.Ay.forEach(r);
    const l = e => {
      let t = ea[null == e ? H.eGj : e];
      null != t && (o().each(t.usableEmojis, i), o().each(t.emoticons, s))
    };
    for (const e in l(this.guildId), this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => j.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
    R.Ay.getFlattenedGuildIds().forEach(e => {
      e !== this.guildId && l(e)
    }), this.escapedEmoticonNames = n.join("|")
  }
}
K(em, "_lastInstance", null);
let eg = e_(em.resetFrequentlyUsed),
  eE = eh(em.resetFrequentlyUsedReactionEmojis);

function eb() {
  ea = {}, es = {}, em.reset(), eo.clear(), er = 3
}

function ey(e) {
  null != ea[e] && delete ea[e]
}

function eO() {
  es = null, em.reset(), (3 === er || 1 === er) && (eg.compute(), eE.compute())
}

function eA(e) {
  ey(e), em.clear(e);
  let t = U.A.getGuildEmojis(e);
  if (null == t) return;
  let n = w.default.getCurrentUser();
  if (null == n) return;
  let r = (0, A.p)(e);
  ea[e] = new $(e, n.id, t, r)
}

function ev(e) {
  for (let t of (eb(), e.guilds)) eA(t.id);
  er = +!!e.guilds.every(e => null != e.emojis.items), eO()
}

function eS(e) {
  for (let t in eb(), e.emojis) eA(t);
  er = 1, eO()
}

function eI() {
  Q.pendingUsages = [], Q.emojiReactionPendingUsages = []
}

function eT() {
  eb()
}

function eC(e) {
  1 === er && "update" === e.guild.emojis.op && null == e.guild.emojis.items && (er = 0), eA(e.guild.id), eO()
}

function eN(e) {
  eA(e.guild.id), eO()
}

function eR(e) {
  let {
    guildId: t
  } = e;
  eA(t), eO()
}

function ew(e) {
  let {
    guild: t
  } = e;
  ey(t.id), eo.delete(t.id), eO()
}

function eP(e) {
  var t;
  let {
    guildId: n,
    user: r
  } = e;
  r.id === (null == (t = w.default.getCurrentUser()) ? true : t.id) && (eA(n), eO())
}

function eD(e) {
  if (!e.optimistic) returnfalse;
  let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : G.Ay.getByName(G.Ay.convertSurrogateToName(e.emoji.name, false));
  if (null == t) returnfalse;
  eU([t]), ek([t])
}

function ex(e, t) {
  if (o().isEmpty(e) && o().isEmpty(Q.pendingUsages) && S.A.hasLoaded(W.oD.FRECENCY_AND_FAVORITES_SETTINGS))
    for (let e of ["thumbsup", "eyes", "laughing", "watermelon", "fork_and_knife", "yum", "weary", "tired_face", "poop", "100"]) eg.track(e);
  if (o().isEmpty(t) && o().isEmpty(Q.emojiReactionPendingUsages) && S.A.hasLoaded(W.oD.FRECENCY_AND_FAVORITES_SETTINGS))
    for (let e of ["100", "100", "thumbsup", "thumbsup", "thumbsdown", "thumbsdown", "heart", "point_up", "eyes", "weary", "laughing", "white_check_mark", "x"]) eE.track(e)
}

function eL() {
  var e, t, n, r, i, a;
  let s = null == (r = S.A.settings.textAndImages) || null == (n = r.diversitySurrogate) ? true : n.value;
  null != s && G.Ay.setDefaultDiversitySurrogate(s), em.reset();
  let l = S.A.frecencyWithoutFetchingLatest,
    c = null != (e = null == (i = l.emojiFrecency) ? true : i.emojis) ? e : {},
    u = null != (t = null == (a = l.emojiReactionFrecency) ? true : a.emojis) ? t : {};
  eg.overwriteHistory(o().mapValues(c, e => X(z({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), Q.pendingUsages), eE.overwriteHistory(o().mapValues(u, e => X(z({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), Q.emojiReactionPendingUsages), ex(c, u)
}

function ej(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  if (g.A.setEmojiLocale(v.default.locale), t !== W.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  Q.pendingUsages = [], Q.emojiReactionPendingUsages = []
}

function eM(e) {
  let {
    emojiUsed: t
  } = e;
  ek(t)
}

function ek(e) {
  if (null == e) returnfalse;
  for (let r of e) {
    var t, n;
    let e = null != (t = null != (n = r.id) ? n : r.uniqueName) ? t : r.name;
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
    let e = null != (t = null != (n = r.id) ? n : r.uniqueName) ? t : r.name;
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
  } = e, r = C.A.getRole(t, n);
  if (!(null != r && (0, b.U)(r))) returnfalse;
  eA(t), eO()
}

function eV(e) {
  let {
    guildId: t
  } = e, n = new Set(Q.expandedSectionsByGuildIds);
  Q.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), Q = X(z({}, Q), {
    expandedSectionsByGuildIds: n
  })
}

function eF(e) {
  let {
    guildId: t,
    topEmojisMetadata: n
  } = e;
  eo.set(t, {
    emojiIds: n.map(e => e.emojiId),
    topEmojisTTL: c()(c()()).add(1, "days").valueOf()
  })
}
class eB extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(E.A, I.Ay, T.A, C.A, N.A, v.default, U.A, R.Ay, O.A, V.A, S.A, w.default), null != e && (null != e.pendingUsages && (Q.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (Q.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (Q.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([S.A], eL)
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
    return null != (e = G.Ay.getDefaultDiversitySurrogate()) ? e : ""
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
      s = L.A.escape(a),
      l = a.slice(0, 1).toUpperCase() + a.slice(1),
      c = L.A.escape(l);
    if (e.length > 0) {
      let {
        boostFavorites: t,
        boostCapitalizedWords: n,
        boostAtEnd: l,
        boostsIgnoreDisambiguators: u
      } = M.A.getConfig({
        location: "getSearchResultsOrder"
      }), d = RegExp("^".concat(s), "i"), f = RegExp("".concat(s, "$"), "i"), p = new RegExp("(^|_|[A-Z])".concat(s, "s?([A-Z]|_|$)")), _ = new RegExp("(^|_|[A-Z])".concat(s, "s?([A-Z]|_|$)|(^|_|[a-z])").concat(c, "s?([A-Z]|_|$)")), h = n ? _ : p, m = h.test.bind(h), g = d.test.bind(d), E = f.test.bind(f), b = e => {
        let n = null != e.uniqueName,
          s = n ? e.names[0] : u ? e.name.split("~")[0] : e.name,
          o = n ? s : e.id;
        if (null == s || null == o) return 0;
        let c = s.toLowerCase(),
          d = 1 + 4 * (c === a) + (m(c) || m(s) ? 2 : 0) + (g(s) ? 1 : l && E(s) ? .75 : 0) + (t && i.isFavoriteEmojiWithoutFetchingLatest(e) ? .5 : 0),
          f = r === B.b_.REACTION ? eE.getScore(o) : eg.getScore(o);
        return null != f && (d *= f / 100), d
      };
      e = o().orderBy(e, [e => b(e), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
    }
    return n > 0 && (e = e.slice(0, n)), e
  }
  searchWithoutFetchingLatest(e) {
    let t, {
      channel: n,
      query: r,
      count: i = 0,
      intention: a,
      includeExternalGuilds: s = true,
      matchComparator: o,
      showOnlyUnicode: l
    } = e;
    ed();
    let c = r.toLowerCase().replaceAll(/[ _]/g, ""),
      u = L.A.escape(c);
    if (null == o) {
      let e = RegExp("".concat(u), "i");
      t = t => e.test(t.replaceAll("_", ""))
    } else t = o;
    let d = null != n ? n.getGuildId() : null,
      f = em.get(d),
      p = f.nameMatchesChain(t).reduce((e, t) => {
        let r = D.Ay.getEmojiUnavailableReason({
          emoji: t,
          channel: n,
          intention: a,
          forceIncludeExternalGuilds: s
        });
        return r !== B.Am.PREMIUM_LOCKED || l ? null != r || l && t.type !== k.i.UNICODE || e.unlocked.push(t) : e.locked.push(t), e
      }, {
        unlocked: [],
        locked: []
      });
    return {
      unlocked: this.getSearchResultsOrder(p.unlocked, r, i, a, f),
      locked: this.getSearchResultsOrder(p.locked, r, 0, a, f)
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
    return eo.get(e)
  }
  hasUsableEmojiInAnyGuild() {
    return ed(), j.default.keys(ea).some(e => ea[e].usableEmojis.length > 0)
  }
  hasFavoriteEmojis(e) {
    let t = em.get(e);
    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
  }
}
K(eB, "displayName", "EmojiStore"), K(eB, "persistKey", "EmojiStoreV2"), K(eB, "migrations", [e => z({}, e)]);
let eH = new eB(Chunk73153.h, {
  LOGOUT: eI,
  BACKGROUND_SYNC: eT,
  CONNECTION_OPEN: ev,
  OVERLAY_INITIALIZE: eS,
  CACHED_EMOJIS_LOADED: ef,
  GUILD_MEMBER_UPDATE: eP,
  GUILD_CREATE: eC,
  GUILD_UPDATE: eN,
  GUILD_EMOJIS_UPDATE: eR,
  GUILD_DELETE: ew,
  MESSAGE_REACTION_ADD: eD,
  EMOJI_TRACK_USAGE: eM,
  USER_SETTINGS_PROTO_UPDATE: ej,
  GUILD_ROLE_CREATE: eG,
  GUILD_ROLE_UPDATE: eG,
  TOP_EMOJIS_FETCH_SUCCESS: eF,
  TOGGLE_GUILD_EXPANDED_STATE: eV
})