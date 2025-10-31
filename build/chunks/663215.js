/** Chunk was on web.js **/
/** chunk id: 663215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FS: () => A,
  ZP: () => S
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
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
    type: h.vB.SOUND,
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
    sectionType: a,
    sortSoundsFn: o
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
  let u = y(c, o);
  u.length > 0 && t.push({
    key: a,
    categoryInfo: {
      type: a
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
    hasNitro: a,
    sortSoundsFn: o
  } = e;
  for (let e of n) {
    var s;
    if (e.id === r) continue;
    let n = y(null != (s = i.get(e.id)) ? s : [], o);
    n.length > 0 && t.push({
      categoryInfo: {
        type: h.bg.GUILD,
        guild: e,
        isNitroLocked: !a
      },
      key: e.id,
      items: n
    })
  }
}

function I(e, t, n) {
  var r;
  let {
    currentGuildHasAddPermissions: i,
    allSounds: a,
    filterOutEmptyCurrentGuild: o,
    sortSoundsFn: s
  } = n, l = null != (r = a.get(t.id)) ? r : [], c = y(l, s), d = l.length < (0, u.nL)(t) && i, f = 0 === c.length;
  (d || f) && !o && c.push({
    type: h.vB.ADD_SOUND,
    guild: t
  }), o && f || e.push({
    categoryInfo: {
      type: h.bg.GUILD,
      guild: t,
      isNitroLocked: false
    },
    key: t.id,
    items: c
  })
}

function T(e, t) {
  var n;
  let r = null != (n = t.get(E.X8)) ? n : E.Hy;
  e.push({
    key: h.bg.DEFAULTS,
    categoryInfo: {
      type: h.bg.DEFAULTS
    },
    items: y(r, g.l)
  })
}

function S(e) {
  let {
    filterOutEmptyCurrentGuild: t = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && true !== arguments[2] && arguments[2], o = (0, i.e7)([c.default], () => c.default.getCurrentUser()), u = d.ZP.isPremium(o, b.PremiumTypes.TIER_2), [E, y, S] = (0, i.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites(), p.Z.isFetching()]), A = (0, g.t)(), N = (0, m.h)(e, false), R = (0, i.Wu)([s.Z], () => {
    let e = [];
    return N.forEach(t => {
      let n = s.Z.getGuild(t);
      null != n && e.push(n)
    }), e
  }), P = d.ZP.canUseSoundboardEverywhere(o), w = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? true : e.guild_id)), D = (0, i.e7)([l.Z], () => {
    let {
      canCreateExpressions: e
    } = (0, a.Gw)(w);
    return e
  }, [w]), {
    canSeeRecentlyHeard: x,
    canSeeFrequentlyPlayed: L
  } = (0, f.k)({
    location: "soundboard-useSoundGrid",
    autoTrackExposure: true
  }), M = C(), j = (0, i.Wu)([_.Z], () => _.Z.recentlyHeardSoundIds);
  return r.useMemo(() => {
    let e = 0,
      r = 0,
      i = [];
    return n ? (T(i, E), {
      categories: i,
      allSounds: E,
      isFetching: S,
      soundCounts: {
        favoriteSoundCount: 0,
        unlockedCustomSoundCount: 0,
        lockedCustomSoundCount: 0
      }
    }) : (O({
      sections: i,
      guildIds: N,
      allSounds: E,
      potentialSoundIdsForSection: Array.from(y),
      sectionType: h.bg.FAVORITES,
      sortSoundsFn: g.l
    }), x && O({
      sections: i,
      guildIds: N,
      allSounds: E,
      potentialSoundIdsForSection: j,
      sectionType: h.bg.RECENTLY_HEARD
    }), L && O({
      sections: i,
      guildIds: N,
      allSounds: E,
      potentialSoundIdsForSection: M.map(e => e.soundId),
      sectionType: h.bg.FREQUENTLY_USED
    }), true !== w && I(i, w, {
      currentGuildHasAddPermissions: D,
      allSounds: E,
      filterOutEmptyCurrentGuild: t,
      sortSoundsFn: A
    }), P || T(i, E), v({
      sections: i,
      guilds: R,
      currentGuildId: null == w ? true : w.id,
      allSounds: E,
      hasNitro: u,
      sortSoundsFn: A
    }), P && T(i, E), i.forEach(t => {
      t.categoryInfo.type === h.bg.GUILD && (t.categoryInfo.isNitroLocked ? r += t.items.length : e += t.items.length)
    }), {
      categories: i,
      allSounds: E,
      isFetching: S,
      soundCounts: {
        favoriteSoundCount: y.size,
        unlockedCustomSoundCount: e,
        lockedCustomSoundCount: r
      }
    })
  }, [N, E, y, j, M, L, x, w, D, t, P, R, n, S, u, A])
}

function A(e, t, n) {
  return r.useMemo(() => n.length > 0 ? [{
    key: h.bg.SEARCH,
    categoryInfo: {
      type: h.bg.SEARCH
    },
    items: y(t)
  }] : e, [e, n.length, t])
}

function C() {
  return Chunk647438.useEffect(() => {
    Chunk675478.DZ.loadIfNecessary()
  }, []), (0, Chunk442837.e7)([Chunk178106.Z], () => Chunk178106.Z.frecentlyPlayedSounds)
}