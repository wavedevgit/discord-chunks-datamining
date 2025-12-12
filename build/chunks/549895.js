/** Chunk was on web.js **/
/** chunk id: 549895, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  let r, i = [],
    o = function() {
      for (var a = arguments.length, s = Array(a), l = 0; l < a; l++) s[l] = arguments[l];
      let c = Date.now();
      for (null != r && (clearTimeout(r), r = null); i.length > 0 && i[0] <= c;) i.shift();
      i.length < e ? (i.push(c + t), n(...s)) : r = setTimeout(() => o(...s), i[0] - c)
    };
  return o
}
require.d(exports, {
  Z: () => r
}), require("./539854.js"), require("./388685.js")