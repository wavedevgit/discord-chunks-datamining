/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
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