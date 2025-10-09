/** Chunk was on web.js **/
/** chunk id: 724177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => f,
  r: () => y
}), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  Chunk212819 = require("./212819.js"),
  Chunk590921 = require("./590921.js"),
  Chunk375954 = require("./375954.js"),
  Chunk483360 = require("./483360.js"),
  Chunk657871 = require("./657871.js"),
  Chunk389458 = require("./389458.js");
let u = {
    startIndex: 0,
    query: "",
    prefix: "",
    suffix: ""
  },
  d = {
    results: {
      suggestions: [],
      queryInfo: u
    }
  },
  f = 2,
  _ = 5,
  p = /\w/,
  h = /[^\w\s]/;

function m(e, t) {
  if (t < 0 || t > e.length) return u;
  let n = t;
  for (; n > 0 && h.test(e[n - 1]);) n--;
  let r = n;
  for (; n > 0 && p.test(e[n - 1]);) n--;
  for (; r < e.length && p.test(e[r]);) r++;
  let i = e.substring(n, r),
    a = e.substring(0, n);
  return {
    startIndex: n,
    query: i,
    prefix: a,
    suffix: e.substring(r, e.length)
  }
}

function g(e, t, n, r) {
  let {
    isIdle: u,
    currentAutocompleteType: p
  } = r;
  if (0 === t.length) return d;
  let {
    onlyExactMatch: h
  } = (0, l.kB)("getMentionSuggestions", {
    autoTrackExposure: false
  }), g = m(t, n), {
    query: E
  } = g;
  if (E.length < f || c.Z.isFrequentlyUsedWord(E)) return d;
  let b = (0, s.Cq)(i.h8.USER),
    y = o.Z.getMessages(e.id).toArray();
  for (let e = 0; e < y.length; e++) {
    var O;
    let t = y[e];
    b[t.author.id] = (null != (O = b[t.author.id]) ? O : 1) + (y.length - e) / y.length
  }
  let v = s.ZP.queryMentionSuggestionResults({
    query: E,
    channel: e,
    boosters: b,
    onlyExactMatch: h
  });
  return u || p !== a.eq.MENTION_SUGGESTIONS || !(E.length < _) || v.some(e => "exact" === e.matchType) ? {
    results: {
      suggestions: v,
      queryInfo: g
    }
  } : d
}
let E = (0, Chunk392711.memoize)(g, (e, t, n, r) => "".concat(e.id, "-").concat(r.isIdle, "-").concat(r.currentAutocompleteType, "-").concat(t, "-").concat(n)),
  b = null;

function y(e, t, n, r) {
  return null == b && (b = setTimeout(() => {
    var e, t;
    null == (e = (t = E.cache).clear) || e.call(t), b = null
  }, 0)), E(e, t, n, r)
}