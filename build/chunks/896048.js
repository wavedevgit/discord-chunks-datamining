/** Chunk was on web.js **/
/** chunk id: 896048, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860511 = require("./860511.js"),
  Chunk487127 = require("./487127.js"),
  Chunk712573 = require("./712573.js"),
  Chunk39139 = require("./39139.js"),
  Chunk706938 = require("./706938.js"),
  Chunk174168 = require("./174168.js"),
  c = require("./380744.js")("iterator"),
  u = Chunk39139.values,
  d = function(e, t) {
    if (e) {
      if (e[c] !== u) try {
        o(e, c, u)
      } catch (t) {
        e[c] = u
      }
      if (l(e, t, true), i[t]) {
        for (var n in s)
          if (e[n] !== s[n]) try {
            o(e, n, s[n])
          } catch (t) {
            e[n] = s[n]
          }
      }
    }
  };
for (var f in Chunk487127) d(Chunk860511[f] && Chunk860511[f].prototype, f);
d(Chunk712573, "DOMTokenList")