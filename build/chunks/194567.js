/** Chunk was on web.js **/
/** chunk id: 194567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => p,
  U: () => u
}), require("./896048.js"), require("./638769.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk661191 = require("./661191.js"),
  Chunk163956 = require("./163956.js"),
  Chunk209932 = require("./209932.js"),
  Chunk766864 = require("./766864.js");

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
  } = (0, l.zZ)("useSoundOrganizer"), t = (0, i.bG)([o.A], () => o.A.getAllTopSoundsForGuilds()), n = (0, i.bG)([s.A], () => s.A.frecentlyPlayedSounds), a = r.useRef(n).current, c = r.useCallback(e => {
    if (0 === e.length) return e;
    let n = e[0].guildId;
    if (!e.every(e => e.guildId === n)) return e;
    let r = t.get(n);
    return null == r ? u(e) : f(e, r.map(e => e.soundId))
  }, [t]), p = r.useCallback(e => f(e, a.map(e => e.soundId)), [a]);
  if (__OVERLAY__) return u;
  switch (e) {
    case l.X9.TOP_SOUNDS:
      return c;
    case l.X9.RECENTLY_USED_BY_USER:
      return p;
    case l.X9.NEWEST_CREATION_DATE:
      return d;
    default:
      return u
  }
}