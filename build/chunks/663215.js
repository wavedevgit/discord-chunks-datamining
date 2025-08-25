/** Chunk was on web.js **/
/** chunk id: 663215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FS: () => C,
  ZP: () => A
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
  Chunk388081 = require("./388081.js"),
  Chunk178106 = require("./178106.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk549771 = require("./549771.js"),
  Chunk710111 = require("./710111.js"),
  Chunk474936 = require("./474936.js");

function O(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = e.map((e, t) => ({
      type: g.vB.SOUND,
      sound: e,
      index: t
    }));
  return t ? n.sort((e, t) => f.default.compare(e.sound.soundId, t.sound.soundId)) : n
}

function v(e) {
  let {
    sections: t,
    guildIds: n,
    allSounds: r,
    potentialSoundIdsForSection: i,
    sectionType: o,
    sortById: a
  } = e, s = {};
  for (let e of [...n, b.X8]) {
    var l;
    for (let t of null != (l = r.get(e)) ? l : []) null != i.find(e => e === t.soundId) && (s[t.soundId] = t)
  }
  let c = [];
  for (let e of i) {
    let t = s[e];
    null != t && c.push(t)
  }
  let u = O(c, a);
  u.length > 0 && t.push({
    key: o,
    categoryInfo: {
      type: o
    },
    items: u
  })
}

function I(e) {
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
    let n = O(null != (a = i.get(e.id)) ? a : []);
    n.length > 0 && t.push({
      categoryInfo: {
        type: g.bg.GUILD,
        guild: e,
        isNitroLocked: !o
      },
      key: e.id,
      items: n
    })
  }
}

function T(e, t, n) {
  var r;
  let {
    currentGuildHasAddPermissions: i,
    allSounds: o,
    filterOutEmptyCurrentGuild: a
  } = n, s = null != (r = o.get(t.id)) ? r : [], l = O(s), c = s.length < (0, u.nL)(t) && i, d = 0 === l.length;
  (c || d) && !a && l.push({
    type: g.vB.ADD_SOUND,
    guild: t
  }), a && d || e.push({
    categoryInfo: {
      type: g.bg.GUILD,
      guild: t,
      isNitroLocked: false
    },
    key: t.id,
    items: l
  })
}

function S(e, t) {
  var n;
  let r = null != (n = t.get(b.X8)) ? n : b.Hy;
  e.push({
    key: g.bg.DEFAULTS,
    categoryInfo: {
      type: g.bg.DEFAULTS
    },
    items: O(r)
  })
}

function A(e) {
  let {
    filterOutEmptyCurrentGuild: t = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && true !== arguments[2] && arguments[2], a = (0, i.e7)([c.default], () => c.default.getCurrentUser()), u = d.ZP.isPremium(a, y.p9.TIER_2), [f, b, O] = (0, i.Wu)([m.Z], () => [m.Z.getSounds(), m.Z.getFavorites(), m.Z.isFetching()]), A = (0, E.h)(e, false), C = (0, i.Wu)([s.Z], () => {
    let e = [];
    return A.forEach(t => {
      let n = s.Z.getGuild(t);
      null != n && e.push(n)
    }), e
  }), R = d.ZP.canUseSoundboardEverywhere(a), P = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? true : e.guild_id)), w = (0, i.e7)([l.Z], () => {
    let {
      canCreateExpressions: e
    } = (0, o.Gw)(P);
    return e
  }, [P]), {
    canSeeRecentlyHeard: D,
    canSeeFrequentlyPlayed: x
  } = (0, _.k)({
    location: "soundboard-useSoundGrid",
    autoTrackExposure: true
  }), L = N(), j = (0, i.Wu)([h.Z], () => h.Z.recentlyHeardSoundIds), k = p.C.useExperiment({
    location: "useSoundGrid"
  });
  return r.useMemo(() => {
    let e = 0,
      r = 0,
      i = [];
    if (n) return S(i, f), {
      categories: i,
      allSounds: f,
      isFetching: O,
      soundCounts: {
        favoriteSoundCount: 0,
        unlockedCustomSoundCount: 0,
        lockedCustomSoundCount: 0
      }
    };
    v({
      sections: i,
      guildIds: A,
      allSounds: f,
      potentialSoundIdsForSection: Array.from(b),
      sectionType: g.bg.FAVORITES,
      sortById: true
    }), D && v({
      sections: i,
      guildIds: A,
      allSounds: f,
      potentialSoundIdsForSection: j,
      sectionType: g.bg.RECENTLY_HEARD,
      sortById: false
    }), x && v({
      sections: i,
      guildIds: A,
      allSounds: f,
      potentialSoundIdsForSection: L.map(e => e.soundId),
      sectionType: g.bg.FREQUENTLY_USED,
      sortById: false
    }), true !== P && T(i, P, {
      currentGuildHasAddPermissions: w,
      allSounds: f,
      filterOutEmptyCurrentGuild: t
    });
    let o = R || k.moveDefaultToBottom;
    return o || S(i, f), I({
      sections: i,
      guilds: C,
      currentGuildId: null == P ? true : P.id,
      allSounds: f,
      hasNitro: u
    }), o && S(i, f), i.forEach(t => {
      t.categoryInfo.type === g.bg.GUILD && (t.categoryInfo.isNitroLocked ? r += t.items.length : e += t.items.length)
    }), {
      categories: i,
      allSounds: f,
      isFetching: O,
      soundCounts: {
        favoriteSoundCount: b.size,
        unlockedCustomSoundCount: e,
        lockedCustomSoundCount: r
      }
    }
  }, [A, f, b, j, L, x, D, P, w, t, R, C, n, O, u, k.moveDefaultToBottom])
}

function C(e, t, n) {
  return r.useMemo(() => n.length > 0 ? [{
    key: g.bg.SEARCH,
    categoryInfo: {
      type: g.bg.SEARCH
    },
    items: O(t, false)
  }] : e, [e, n.length, t])
}

function N() {
  return Chunk647438.useEffect(() => {
    Chunk675478.DZ.loadIfNecessary()
  }, []), (0, Chunk442837.e7)([Chunk178106.Z], () => Chunk178106.Z.frecentlyPlayedSounds)
}