/** Chunk was on web.js **/
/** chunk id: 724177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => p,
  x: () => c
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./704826.js");
var Chunk392711 = require("./392711.js"),
  Chunk212819 = require("./212819.js"),
  Chunk375954 = require("./375954.js"),
  Chunk483360 = require("./483360.js"),
  Chunk657871 = require("./657871.js");
let l = {
    results: {
      suggestions: [],
      trailingPunctuation: ""
    }
  },
  c = "-,.?!:;",
  u = new RegExp("([".concat((0, Chunk392711.escapeRegExp)(c), "]*)$"));

function d(e, t, n) {
  let {
    isIdle: r,
    isVisible: c
  } = n, {
    onlyExactMatch: d
  } = (0, s.kB)("getMentionSuggestions", {
    autoTrackExposure: false
  }), f = "", _ = t.replace(u, e => (f = e, "")), p = (0, o.Cq)(i.h8.USER), h = a.Z.getMessages(e.id).toArray();
  for (let e = 0; e < h.length; e++) {
    var m;
    let t = h[e];
    p[t.author.id] = (null != (m = p[t.author.id]) ? m : 1) + (h.length - e) / h.length
  }
  let g = o.ZP.queryMentionSuggestionResults({
    query: _,
    channel: e,
    boosters: p,
    onlyExactMatch: d
  });
  return r || c || !(_.length < 5) || g.some(e => "exact" === e.matchType) ? {
    results: {
      suggestions: g,
      trailingPunctuation: f
    }
  } : l
}
let f = (0, Chunk392711.memoize)(d, (e, t, n) => "".concat(e.id, "-").concat(n.isIdle, "-").concat(n.isVisible, "-").concat(t)),
  _ = null;

function p(e, t, n) {
  return null == _ && (_ = setTimeout(() => {
    var e, t;
    null == (e = (t = f.cache).clear) || e.call(t), _ = null
  }, 0)), f(e, t, n)
}