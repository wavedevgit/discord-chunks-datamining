/** Chunk was on web.js **/
/** chunk id: 663215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FS: () => C,
  ZP: () => T
}), require("./388685.js"), require("./539854.js"), require("./472816.js"), require("./794429.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk675478 = require("./675478.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk164878 = require("./164878.js"),
  Chunk178106 = require("./178106.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk549771 = require("./549771.js"),
  Chunk24087 = require("./24087.js"),
  Chunk710111 = require("./710111.js"),
  Chunk474936 = require("./474936.js");

function y(e, t) {
  return null != t && (e = t(e)), e.map((e, t) => ({
    type: m.vB.SOUND,
    sound: e,
    index: t
  }))
}

function O(e) {
  let {
    sections: t,
    guildIds: n,
    allSounds: r,
    potentialSoundIdsForSection: i,
    sectionType: o,
    sortSoundsFn: a
  } = e, s = {};
  for (let e of [...n, E.X8]) {
    var l;
    for (let t of null != (l = r.get(e)) ? l : []) null != i.find(e => e === t.soundId) && (s[t.soundId] = t)
  }
  let c = [];
  for (let e of i) {
    let t = s[e];
    null != t && c.push(t)
  }
  let u = y(c, a);
  u.length > 0 && t.push({
    key: o,
    categoryInfo: {
      type: o
    },
    items: u
  })
}

function v(e) {
  let {
    sections: t,
    guilds: n,
    currentGuildId: r,
    allSounds: i,
    hasNitro: o,
    sortSoundsFn: a
  } = e;
  for (let e of n) {
    var s;
    if (e.id === r) continue;
    let n = y(null != (s = i.get(e.id)) ? s : [], a);
    n.length > 0 && t.push({
      categoryInfo: {
        type: m.bg.GUILD,
        guild: e,
        isNitroLocked: !o
      },
      key: e.id,
      items: n
    })
  }
}

function S(e, t, n) {
  var r;
  let {
    currentGuildHasAddPermissions: i,
    allSounds: o,
    filterOutEmptyCurrentGuild: a,
    sortSoundsFn: s
  } = n, l = null != (r = o.get(t.id)) ? r : [], c = y(l, s), d = l.length < (0, u.nL)(t) && i, f = 0 === c.length;
  (d || f) && !a && c.push({
    type: m.vB.ADD_SOUND,
    guild: t
  }), a && f || e.push({
    categoryInfo: {
      type: m.bg.GUILD,
      guild: t,
      isNitroLocked: false
    },
    key: t.id,
    items: c
  })
}

function I(e, t) {
  var n;
  let r = null != (n = t.get(E.X8)) ? n : E.Hy;
  e.push({
    key: m.bg.DEFAULTS,
    categoryInfo: {
      type: m.bg.DEFAULTS
    },
    items: y(r, g.l)
  })
}

function T(e) {
  let {
    filterOutEmptyCurrentGuild: t = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && true !== arguments[2] && arguments[2], a = (0, i.e7)([c.default], () => c.default.getCurrentUser()), u = d.ZP.isPremium(a, b.PremiumTypes.TIER_2), [y, T, C] = (0, i.Wu)([_.Z], () => [_.Z.getSounds(), _.Z.getFavorites(), _.Z.isFetching()]), N = (0, g.t)(), P = (0, h.h)(e, false), R = (0, i.Wu)([s.Z], () => {
    let e = [];
    return P.forEach(t => {
      let n = s.Z.getGuild(t);
      null != n && e.push(n)
    }), e
  }), w = d.ZP.canUseSoundboardEverywhere(a), D = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? true : e.guild_id)), x = (0, i.e7)([l.Z], () => {
    let {
      canCreateExpressions: e
    } = (0, o.Gw)(D);
    return e
  }, [D]), {
    canSeeRecentlyHeard: L,
    canSeeFrequentlyPlayed: j
  } = (0, f.k)({
    location: "soundboard-useSoundGrid",
    autoTrackExposure: true
  }), M = A(), k = (0, i.Wu)([p.Z], () => p.Z.recentlyHeardSoundIds);
  return r.useMemo(() => {
    let e = 0,
      r = 0,
      i = [];
    if (n) {
      var o;
      return I(i, y), {
        categories: i,
        availableSounds: null != (o = y.get(E.X8)) ? o : E.Hy,
        isFetching: C,
        soundCounts: {
          favoriteSoundCount: 0,
          unlockedCustomSoundCount: 0,
          lockedCustomSoundCount: 0
        }
      }
    }
    return O({
      sections: i,
      guildIds: P,
      allSounds: y,
      potentialSoundIdsForSection: Array.from(T),
      sectionType: m.bg.FAVORITES,
      sortSoundsFn: g.l
    }), L && O({
      sections: i,
      guildIds: P,
      allSounds: y,
      potentialSoundIdsForSection: k,
      sectionType: m.bg.RECENTLY_HEARD
    }), j && O({
      sections: i,
      guildIds: P,
      allSounds: y,
      potentialSoundIdsForSection: M.map(e => e.soundId),
      sectionType: m.bg.FREQUENTLY_USED
    }), true !== D && S(i, D, {
      currentGuildHasAddPermissions: x,
      allSounds: y,
      filterOutEmptyCurrentGuild: t,
      sortSoundsFn: N
    }), w || I(i, y), v({
      sections: i,
      guilds: R,
      currentGuildId: null == D ? true : D.id,
      allSounds: y,
      hasNitro: u,
      sortSoundsFn: N
    }), w && I(i, y), i.forEach(t => {
      t.categoryInfo.type === m.bg.GUILD && (t.categoryInfo.isNitroLocked ? r += t.items.length : e += t.items.length)
    }), {
      categories: i,
      availableSounds: Array.from(y.values()).flat(),
      isFetching: C,
      soundCounts: {
        favoriteSoundCount: T.size,
        unlockedCustomSoundCount: e,
        lockedCustomSoundCount: r
      }
    }
  }, [P, y, T, k, M, j, L, D, x, t, w, R, n, C, u, N])
}

function C(e, t, n) {
  return r.useMemo(() => n.length > 0 ? [{
    key: m.bg.SEARCH,
    categoryInfo: {
      type: m.bg.SEARCH
    },
    items: y(t)
  }] : e, [e, n.length, t])
}

function A() {
  return Chunk473749.useEffect(() => {
    Chunk675478.DZ.loadIfNecessary()
  }, []), (0, Chunk442837.e7)([Chunk178106.Z], () => Chunk178106.Z.frecentlyPlayedSounds)
}