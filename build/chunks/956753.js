/** Chunk was on web.js **/
/** chunk id: 956753, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U5: () => s,
  v$: () => o
}), require("./896048.js");
var Chunk291445 = require("./291445.js"),
  Chunk589051 = require("./589051.js"),
  Chunk672396 = require("./672396.js");

function o(e, t) {
  return function() {
    for (var n = arguments.length, o = Array(n), s = 0; s < n; s++) o[s] = arguments[s];
    let l = (a.OX || a.ed) && (0, i.NI)(t).hasFriendList,
      c = r.z.getConfig({
        location: t
      }).hasFriendList;
    return (!!l || !!c) && e(...o)
  }
}

function s(e, t) {
  return function() {
    for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
    return !!(0, i.NI)(t).hasChat && e(...r)
  }
}