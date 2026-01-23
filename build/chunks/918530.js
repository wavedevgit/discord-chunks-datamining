/** Chunk was on web.js **/
/** chunk id: 918530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => S,
  Ip: () => T
}), require("./896048.js"), require("./321073.js"), require("./864466.js"), require("./443073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk931991 = require("./931991.js"),
  Chunk594061 = require("./594061.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk473145 = require("./473145.js"),
  Chunk927578 = require("./927578.js"),
  Chunk477851 = require("./477851.js"),
  Chunk163956 = require("./163956.js"),
  Chunk209932 = require("./209932.js"),
  Chunk807348 = require("./807348.js"),
  Chunk805143 = require("./805143.js"),
  Chunk194567 = require("./194567.js"),
  Chunk980504 = require("./980504.js"),
  Chunk788868 = require("./788868.js");

function b(e, t) {
  return null != t && (e = t(e)), e.map((e, t) => ({
    type: h.uq.SOUND,
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
    sortSoundsFn: s
  } = e, o = {};
  for (let e of [...n, E.mV]) {
    var l;
    for (let t of null != (l = r.get(e)) ? l : []) null != i.find(e => e === t.soundId) && (o[t.soundId] = t)
  }
  let c = [];
  for (let e of i) {
    let t = o[e];
    null != t && c.push(t)
  }
  let u = b(c, s);
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
    sortSoundsFn: s
  } = e;
  for (let e of n) {
    var o;
    if (e.id === r) continue;
    let n = b(null != (o = i.get(e.id)) ? o : [], s);
    n.length > 0 && t.push({
      categoryInfo: {
        type: h.Cx.GUILD,
        guild: e,
        isNitroLocked: !a
      },
      key: e.id,
      items: n
    })
  }
}

function A(e, t, n) {
  var r;
  let {
    currentGuildHasAddPermissions: i,
    allSounds: a,
    filterOutEmptyCurrentGuild: s,
    sortSoundsFn: o
  } = n, l = null != (r = a.get(t.id)) ? r : [], c = b(l, o), d = l.length < (0, u.fA)(t) && i, f = 0 === c.length;
  (d || f) && !s && c.push({
    type: h.uq.ADD_SOUND,
    guild: t
  }), s && f || e.push({
    categoryInfo: {
      type: h.Cx.GUILD,
      guild: t,
      isNitroLocked: false
    },
    key: t.id,
    items: c
  })
}

function I(e, t) {
  var n;
  let r = null != (n = t.get(E.mV)) ? n : E.pD;
  e.push({
    key: h.Cx.DEFAULTS,
    categoryInfo: {
      type: h.Cx.DEFAULTS
    },
    items: b(r, g.U)
  })
}

function S(e) {
  let {
    filterOutEmptyCurrentGuild: t = false,
    moveDefaultsToBottom: n = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, s = arguments.length > 2 && true !== arguments[2] && arguments[2], u = (0, i.bG)([c.default], () => c.default.getCurrentUser()), b = d.Ay.isPremium(u, y.PremiumTypes.TIER_2), [S, T, N] = (0, i.yK)([_.A], () => [_.A.getSounds(), _.A.getFavorites(), _.A.isFetching()]), R = (0, g.I)(), w = (0, m.Y)(e, false), P = (0, i.yK)([o.A], () => {
    let e = [];
    return w.forEach(t => {
      let n = o.A.getGuild(t);
      null != n && e.push(n)
    }), e
  }), D = d.Ay.canUseSoundboardEverywhere(u), x = (0, i.bG)([o.A], () => o.A.getGuild(null == e ? true : e.guild_id)), L = (0, i.bG)([l.A], () => {
    let {
      canCreateExpressions: e
    } = (0, a.ie)(x);
    return e
  }, [x]), {
    canSeeRecentlyHeard: j,
    canSeeFrequentlyPlayed: M
  } = (0, f.d)({
    location: "soundboard-useSoundGrid",
    autoTrackExposure: true
  }), k = C(), U = (0, i.yK)([p.A], () => p.A.recentlyHeardSoundIds);
  return r.useMemo(() => {
    let e = 0,
      r = 0,
      i = [];
    if (s) {
      var a;
      return I(i, S), {
        categories: i,
        availableSounds: null != (a = S.get(E.mV)) ? a : E.pD,
        isFetching: N,
        soundCounts: {
          favoriteSoundCount: 0,
          unlockedCustomSoundCount: 0,
          lockedCustomSoundCount: 0
        }
      }
    }
    return O({
      sections: i,
      guildIds: w,
      allSounds: S,
      potentialSoundIdsForSection: Array.from(T),
      sectionType: h.Cx.FAVORITES,
      sortSoundsFn: g.U
    }), j && O({
      sections: i,
      guildIds: w,
      allSounds: S,
      potentialSoundIdsForSection: U,
      sectionType: h.Cx.RECENTLY_HEARD
    }), M && O({
      sections: i,
      guildIds: w,
      allSounds: S,
      potentialSoundIdsForSection: k.map(e => e.soundId),
      sectionType: h.Cx.FREQUENTLY_USED
    }), true !== x && A(i, x, {
      currentGuildHasAddPermissions: L,
      allSounds: S,
      filterOutEmptyCurrentGuild: t,
      sortSoundsFn: R
    }), n || D || I(i, S), v({
      sections: i,
      guilds: P,
      currentGuildId: null == x ? true : x.id,
      allSounds: S,
      hasNitro: b,
      sortSoundsFn: R
    }), (n || D) && I(i, S), i.forEach(t => {
      t.categoryInfo.type === h.Cx.GUILD && (t.categoryInfo.isNitroLocked ? r += t.items.length : e += t.items.length)
    }), {
      categories: i,
      availableSounds: Array.from(S.values()).flat(),
      isFetching: N,
      soundCounts: {
        favoriteSoundCount: T.size,
        unlockedCustomSoundCount: e,
        lockedCustomSoundCount: r
      }
    }
  }, [w, S, T, U, k, M, j, x, L, t, n, D, P, s, N, b, R])
}

function T(e, t, n) {
  return r.useMemo(() => n.length > 0 ? [{
    key: h.Cx.SEARCH,
    categoryInfo: {
      type: h.Cx.SEARCH
    },
    items: b(t)
  }] : e, [e, n.length, t])
}

function C() {
  return r.useEffect(() => {
    s.bW.loadIfNecessary()
  }, []), (0, i.bG)([p.A], () => p.A.frecentlyPlayedSounds)
}