/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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