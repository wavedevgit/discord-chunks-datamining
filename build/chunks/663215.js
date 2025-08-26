/** Chunk was on web.js **/
/** chunk id: 663215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FS: () => A,
  ZP: () => S
}), require("./642613.js"), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk675478 = require("./675478.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk709054 = require("./709054.js"),
  Chunk164878 = require("./164878.js"),
  Chunk178106 = require("./178106.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk549771 = require("./549771.js"),
  Chunk710111 = require("./710111.js"),
  Chunk474936 = require("./474936.js");

function y(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = e.map((e, t) => ({
      type: m.vB.SOUND,
      sound: e,
      index: t
    }));
  return t ? n.sort((e, t) => f.default.compare(e.sound.soundId, t.sound.soundId)) : n
}

function O(e) {
  let {
    sections: t,
    guildIds: n,
    allSounds: r,
    potentialSoundIdsForSection: i,
    sectionType: o,
    sortById: a
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
    hasNitro: o
  } = e;
  for (let e of n) {
    var a;
    if (e.id === r) continue;
    let n = y(null != (a = i.get(e.id)) ? a : []);
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

function I(e, t, n) {
  var r;
  let {
    currentGuildHasAddPermissions: i,
    allSounds: o,
    filterOutEmptyCurrentGuild: a
  } = n, s = null != (r = o.get(t.id)) ? r : [], l = y(s), c = s.length < (0, u.nL)(t) && i, d = 0 === l.length;
  (c || d) && !a && l.push({
    type: m.vB.ADD_SOUND,
    guild: t
  }), a && d || e.push({
    categoryInfo: {
      type: m.bg.GUILD,
      guild: t,
      isNitroLocked: false
    },
    key: t.id,
    items: l
  })
}

function T(e, t) {
  var n;
  let r = null != (n = t.get(E.X8)) ? n : E.Hy;
  e.push({
    key: m.bg.DEFAULTS,
    categoryInfo: {
      type: m.bg.DEFAULTS
    },
    items: y(r)
  })
}

function S(e) {
  let {
    filterOutEmptyCurrentGuild: t = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && true !== arguments[2] && arguments[2], a = (0, i.e7)([c.default], () => c.default.getCurrentUser()), u = d.ZP.isPremium(a, b.p9.TIER_2), [f, E, y] = (0, i.Wu)([h.Z], () => [h.Z.getSounds(), h.Z.getFavorites(), h.Z.isFetching()]), S = (0, g.h)(e, false), A = (0, i.Wu)([s.Z], () => {
    let e = [];
    return S.forEach(t => {
      let n = s.Z.getGuild(t);
      null != n && e.push(n)
    }), e
  }), N = d.ZP.canUseSoundboardEverywhere(a), R = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? true : e.guild_id)), P = (0, i.e7)([l.Z], () => {
    let {
      canCreateExpressions: e
    } = (0, o.Gw)(R);
    return e
  }, [R]), {
    canSeeRecentlyHeard: w,
    canSeeFrequentlyPlayed: D
  } = (0, _.k)({
    location: "soundboard-useSoundGrid",
    autoTrackExposure: true
  }), x = C(), L = (0, i.Wu)([p.Z], () => p.Z.recentlyHeardSoundIds);
  return r.useMemo(() => {
    let e = 0,
      r = 0,
      i = [];
    return n ? (T(i, f), {
      categories: i,
      allSounds: f,
      isFetching: y,
      soundCounts: {
        favoriteSoundCount: 0,
        unlockedCustomSoundCount: 0,
        lockedCustomSoundCount: 0
      }
    }) : (O({
      sections: i,
      guildIds: S,
      allSounds: f,
      potentialSoundIdsForSection: Array.from(E),
      sectionType: m.bg.FAVORITES,
      sortById: true
    }), w && O({
      sections: i,
      guildIds: S,
      allSounds: f,
      potentialSoundIdsForSection: L,
      sectionType: m.bg.RECENTLY_HEARD,
      sortById: false
    }), D && O({
      sections: i,
      guildIds: S,
      allSounds: f,
      potentialSoundIdsForSection: x.map(e => e.soundId),
      sectionType: m.bg.FREQUENTLY_USED,
      sortById: false
    }), true !== R && I(i, R, {
      currentGuildHasAddPermissions: P,
      allSounds: f,
      filterOutEmptyCurrentGuild: t
    }), N || T(i, f), v({
      sections: i,
      guilds: A,
      currentGuildId: null == R ? true : R.id,
      allSounds: f,
      hasNitro: u
    }), N && T(i, f), i.forEach(t => {
      t.categoryInfo.type === m.bg.GUILD && (t.categoryInfo.isNitroLocked ? r += t.items.length : e += t.items.length)
    }), {
      categories: i,
      allSounds: f,
      isFetching: y,
      soundCounts: {
        favoriteSoundCount: E.size,
        unlockedCustomSoundCount: e,
        lockedCustomSoundCount: r
      }
    })
  }, [S, f, E, L, x, D, w, R, P, t, N, A, n, y, u])
}

function A(e, t, n) {
  return r.useMemo(() => n.length > 0 ? [{
    key: m.bg.SEARCH,
    categoryInfo: {
      type: m.bg.SEARCH
    },
    items: y(t, false)
  }] : e, [e, n.length, t])
}

function C() {
  return Chunk647438.useEffect(() => {
    Chunk675478.DZ.loadIfNecessary()
  }, []), (0, Chunk442837.e7)([Chunk178106.Z], () => Chunk178106.Z.frecentlyPlayedSounds)
}