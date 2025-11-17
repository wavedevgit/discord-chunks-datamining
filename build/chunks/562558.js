/** Chunk was on web.js **/
/** chunk id: 562558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk835473 = require("./835473.js"),
  Chunk823379 = require("./823379.js");
let o = 5;

function s(e) {
  return (t, n) => {
    var r, i, a, o;
    let s = null != (a = null == (r = e[t.id]) ? true : r.score) ? a : 0,
      l = null != (o = null == (i = e[n.id]) ? true : i.score) ? o : 0;
    return s !== l ? l - s : 0
  }
}

function l(e) {
  let t = (0, i.Z)(e.gameApplicationIds);
  return r.useMemo(() => t.filter(a.lm), [t])
}

function c(e) {
  let t = e.gameActivity,
    n = l(e),
    i = r.useMemo(() => {
      let e = s(t);
      return n.sort(e), n
    }, [n, t]),
    a = r.useMemo(() => i.slice(0, o), [i]);
  return {
    gamesToDisplay: a,
    lastGameToDisplay: r.useMemo(() => {
      var e;
      return null != (e = i[o]) ? e : null
    }, [i]),
    remainingGames: r.useMemo(() => i.slice(o), [i])
  }
}