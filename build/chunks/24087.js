/** Chunk was on web.js **/
/** chunk id: 24087, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => c,
  t: () => f
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk709054 = require("./709054.js"),
  Chunk178106 = require("./178106.js"),
  Chunk763296 = require("./763296.js"),
  Chunk771784 = require("./771784.js");

function c(e) {
  return [...e].sort((e, t) => a.default.compare(e.soundId, t.soundId))
}

function u(e) {
  return [...e].sort((e, t) => a.default.compare(t.soundId, e.soundId))
}

function d(e, t) {
  let n = new Map(e.map(e => [e.soundId, e])),
    r = [];
  return t.forEach(e => {
    let t = n.get(e);
    null != t && (r.push(t), n.delete(e))
  }), [...r, ...c(Array.from(n.values()))]
}

function f() {
  let {
    sortingStrategy: e
  } = (0, Chunk771784.q3)("useSoundOrganizer"), t = (0, Chunk442837.e7)([Chunk763296.Z], () => Chunk763296.Z.getAllTopSoundsForGuilds()), n = (0, Chunk442837.e7)([Chunk178106.Z], () => Chunk178106.Z.frecentlyPlayedSounds), a = Chunk473749.useRef(require).current, f = Chunk473749.useCallback(e => {
    if (0 === e.length) return e;
    let n = e[0].guildId;
    if (!e.every(e => e.guildId === n)) return e;
    let r = t.get(n);
    return null == r ? c(e) : d(e, r.map(e => e.soundId))
  }, [exports]), _ = Chunk473749.useCallback(e => d(e, a.map(e => e.soundId)), [Chunk709054]);
  if (__OVERLAY__) return c;
  switch (module) {
    case Chunk771784.du.TOP_SOUNDS:
      return f;
    case Chunk771784.du.RECENTLY_USED_BY_USER:
      return _;
    case Chunk771784.du.NEWEST_CREATION_DATE:
      return u;
    default:
      return c
  }
}