/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};

function i(e) {
  return e.replace(/left|right|bottom|top/g, function(e) {
    return r[e]
  })
}