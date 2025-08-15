/** Chunk was on web.js **/
/** chunk id: 549895, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  let r, i = [],
    a = function() {
      for (var o = arguments.length, s = Array(o), l = 0; l < o; l++) s[l] = arguments[l];
      let c = Date.now();
      for (null != r && (clearTimeout(r), r = null); i.length > 0 && i[0] <= c;) i.shift();
      i.length < e ? (i.push(c + t), n(...s)) : r = setTimeout(() => a(...s), i[0] - c)
    };
  return a
}
require.d(exports, {
  Z: () => r
}), require("./539854.js"), require("./388685.js")