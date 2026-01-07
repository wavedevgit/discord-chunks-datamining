/** Chunk was on web.js **/
/** chunk id: 24087, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => u,
  t: () => p
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk709054 = require("./709054.js"),
  Chunk178106 = require("./178106.js"),
  Chunk763296 = require("./763296.js"),
  Chunk771784 = require("./771784.js");

function c(e) {
  return [...e].sort((e, t) => e.available && !t.available ? false : !e.available && t.available ? 1 : 0)
}

function u(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = [...e].sort((e, t) => a.default.compare(e.soundId, t.soundId));
  return t ? c(n) : n
}

function d(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = [...e].sort((e, t) => a.default.compare(t.soundId, e.soundId));
  return t ? c(n) : n
}

function f(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = new Map(e.map(e => [e.soundId, e])),
    i = [];
  t.forEach(e => {
    let t = r.get(e);
    null != t && (i.push(t), r.delete(e))
  });
  let a = [...i, ...u(Array.from(r.values()), n)];
  return n ? c(a) : a
}

function p() {
  let {
    sortingStrategy: e
  } = (0, l.q3)("useSoundOrganizer"), t = (0, i.e7)([s.Z], () => s.Z.getAllTopSoundsForGuilds()), n = (0, i.e7)([o.Z], () => o.Z.frecentlyPlayedSounds), a = r.useRef(n).current, c = r.useCallback(e => {
    if (0 === e.length) return e;
    let n = e[0].guildId;
    if (!e.every(e => e.guildId === n)) return e;
    let r = t.get(n);
    return null == r ? u(e) : f(e, r.map(e => e.soundId))
  }, [t]), p = r.useCallback(e => f(e, a.map(e => e.soundId)), [a]);
  if (__OVERLAY__) return u;
  switch (e) {
    case l.du.TOP_SOUNDS:
      return c;
    case l.du.RECENTLY_USED_BY_USER:
      return p;
    case l.du.NEWEST_CREATION_DATE:
      return d;
    default:
      return u
  }
}