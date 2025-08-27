/** Chunk was on web.js **/
/** chunk id: 388685, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk127849 = require("./127849.js"),
  Chunk259821 = require("./259821.js"),
  Chunk901175 = require("./901175.js"),
  Chunk366843 = require("./366843.js"),
  Chunk436207 = require("./436207.js"),
  Chunk25124 = require("./25124.js"),
  c = require("./751736.js")("iterator"),
  u = Chunk366843.values,
  d = function(e, t) {
    if (e) {
      if (e[c] !== u) try {
        s(e, c, u)
      } catch (t) {
        e[c] = u
      }
      if (l(e, t, true), i[t]) {
        for (var n in o)
          if (e[n] !== o[n]) try {
            s(e, n, o[n])
          } catch (t) {
            e[n] = o[n]
          }
      }
    }
  };
for (var f in Chunk259821) d(Chunk127849[f] && Chunk127849[f].prototype, f);
d(Chunk901175, "DOMTokenList")