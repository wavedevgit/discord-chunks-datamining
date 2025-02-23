/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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