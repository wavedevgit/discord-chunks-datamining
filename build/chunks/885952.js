/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = {
  start: "end",
  end: "start"
};

function i(e) {
  return e.replace(/start|end/g, function(e) {
    return r[e]
  })
}