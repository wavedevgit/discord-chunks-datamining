/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
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