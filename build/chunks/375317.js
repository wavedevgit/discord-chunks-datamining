/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";

function r(e) {
  var t = e.reduce(function(e, t) {
    var n = e[t.name];
    return e[t.name] = n ? Object.assign({}, n, t, {
      options: Object.assign({}, n.options, t.options),
      data: Object.assign({}, n.data, t.data)
    }) : t, e
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e]
  })
}
n.d(t, {
  Z: () => r
})