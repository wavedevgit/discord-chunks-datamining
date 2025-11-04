/** Chunk was on web.js **/
/** chunk id: 724177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => _,
  r: () => I
}), require("./35282.js"), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk212819 = require("./212819.js"),
  Chunk590921 = require("./590921.js"),
  Chunk650774 = require("./650774.js"),
  Chunk375954 = require("./375954.js"),
  Chunk483360 = require("./483360.js"),
  Chunk657871 = require("./657871.js"),
  Chunk389458 = require("./389458.js");
let d = {
    startIndex: 0,
    query: "",
    prefix: "",
    suffix: ""
  },
  f = {
    results: {
      suggestions: [],
      queryInfo: d
    }
  },
  _ = 3,
  p = 5,
  h = 100,
  m = 200,
  g = /\w/,
  E = /[^\w\s]/;

function b(e, t) {
  if (t < 0 || t > e.length) return d;
  let n = t;
  for (; n > 0 && E.test(e[n - 1]);) n--;
  let r = n;
  for (; n > 0 && g.test(e[n - 1]);) n--;
  for (; r < e.length && g.test(e[r]);) r++;
  let i = e.substring(n, r),
    a = e.substring(0, n);
  return {
    startIndex: n,
    query: i,
    prefix: a,
    suffix: e.substring(r, e.length)
  }
}

function y(e, t, n, r) {
  var d, g;
  let {
    isIdle: E,
    currentAutocompleteType: y
  } = r;
  if (0 === t.length) return f;
  let {
    onlyExactMatch: O,
    eagerRecentSenders: v,
    largeGuildExactMatchRecentSenders: I
  } = (0, c.kB)("getMentionSuggestions", {
    autoTrackExposure: false
  }), T = b(t, n), {
    query: S
  } = T;
  if (S.length < _ || u.Z.getMaxWordCount() < h || u.Z.isFrequentlyUsedWord(S)) return f;
  let A = (0, l.Cq)(i.h8.USER),
    C = s.Z.getMessages(e.id).toArray(),
    N = new Set;
  for (let e = 0; e < C.length; e++) {
    let t = C[e];
    A[t.author.id] = (null != (d = A[t.author.id]) ? d : 1) + (C.length - e) / C.length, N.add(t.author.id)
  }
  let R = false;
  I && (R = null != e.guild_id && (null != (g = o.Z.getMemberCount(e.guild_id)) ? g : 0) > m);
  let P = l.ZP.queryMentionSuggestionResults({
    query: S,
    channel: e,
    boosters: A,
    onlyExactMatch: O && (!v || R)
  });
  return (R ? P = P.filter(e => N.has(e.user.id)) : v && (P = P.filter(e => "exact" === e.matchType || N.has(e.user.id))), E || y === a.eq.MENTION_SUGGESTIONS || !(S.length < p) || P.some(e => "exact" === e.matchType || v && N.has(e.user.id))) ? {
    results: {
      suggestions: P,
      queryInfo: T
    }
  } : f
}
let O = (0, Chunk392711.memoize)(y, (e, t, n, r) => "".concat(e.id, "-").concat(r.isIdle, "-").concat(r.currentAutocompleteType, "-").concat(t, "-").concat(n)),
  v = null;

function I(e, t, n, r) {
  return null == v && (v = setTimeout(() => {
    var e, t;
    null == (e = (t = O.cache).clear) || e.call(t), v = null
  }, 0)), O(e, t, n, r)
}