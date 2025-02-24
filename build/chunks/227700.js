/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  u: () => o
});
var r = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function(e) {
      return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
  },
  i = "trunc";

function o(e) {
  return e ? r[e] : r[i]
}