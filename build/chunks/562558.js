/** Chunk was on web.js **/
/** chunk id: 562558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk835473 = require("./835473.js"),
  Chunk823379 = require("./823379.js");
let a = 5;

function s(e) {
  return (t, n) => {
    var r, i, o, a;
    let s = null != (o = null == (r = e[t.id]) ? true : r.score) ? o : 0,
      l = null != (a = null == (i = e[n.id]) ? true : i.score) ? a : 0;
    return s !== l ? l - s : 0
  }
}

function l(e) {
  let t = (0, i.Z)(e.gameApplicationIds);
  return r.useMemo(() => t.filter(o.lm), [t])
}

function c(e) {
  let t = e.gameActivity,
    n = l(e),
    i = r.useMemo(() => {
      let e = s(t);
      return n.sort(e), n
    }, [n, t]),
    o = r.useMemo(() => i.slice(0, a), [i]);
  return {
    gamesToDisplay: o,
    lastGameToDisplay: r.useMemo(() => {
      var e;
      return null != (e = i[a]) ? e : null
    }, [i]),
    remainingGames: r.useMemo(() => i.slice(a), [i])
  }
}