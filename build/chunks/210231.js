/** Chunk was on web.js **/
/** chunk id: 210231, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk615339 = require("./615339.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js");
let s = RegExp(`([0-9]{4})[\\.\\/\\s](?:(${(0,Chunk476858.uJ)(Chunk615339.eB)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"),
  o = 1,
  l = 2,
  c = 3,
  u = 4;
class d extends Chunk355418.c {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[c] ? parseInt(t[c]) : r.eB[t[l].toLowerCase()];
    if (n < 1 || n > 12) return null;
    let i = parseInt(t[o]);
    return {
      day: parseInt(t[u]),
      month: n,
      year: i
    }
  }
}