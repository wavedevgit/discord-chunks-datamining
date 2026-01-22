/** Chunk was on web.js **/
/** chunk id: 115703, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk429913 = require("./429913.js"),
  Chunk403362 = require("./403362.js");
let s = 5;

function o(e) {
  return (t, n) => {
    var r, i, a, s;
    let o = null != (r = null == (a = e[t.id]) ? true : a.score) ? r : 0,
      l = null != (i = null == (s = e[n.id]) ? true : s.score) ? i : 0;
    return o !== l ? l - o : 0
  }
}

function l(e) {
  let t = (0, i.A)(e.gameApplicationIds);
  return r.useMemo(() => t.filter(a.Vq), [t])
}

function c(e) {
  let t = e.gameActivity,
    n = l(e),
    i = r.useMemo(() => {
      let e = o(t);
      return n.sort(e), n
    }, [n, t]),
    a = r.useMemo(() => i.slice(0, s), [i]);
  return {
    gamesToDisplay: a,
    lastGameToDisplay: r.useMemo(() => {
      var e;
      return null != (e = i[s]) ? e : null
    }, [i]),
    remainingGames: r.useMemo(() => i.slice(s), [i])
  }
}