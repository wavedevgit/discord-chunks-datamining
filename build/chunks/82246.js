/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(566885),
  i = n(470592),
  o = n(339718),
  a = n(49693),
  s = function(e) {
    var t = 1 === e;
    return function(n, s, l) {
      for (var c, u = o(n), d = i(u), f = r(s, l), p = a(d); p-- > 0;)
        if (f(c = d[p], p, u)) switch (e) {
          case 0:
            return c;
          case 1:
            return p
        }
      return t ? -1 : void 0
    }
  };
e.exports = {
  findLast: s(0),
  findLastIndex: s(1)
}