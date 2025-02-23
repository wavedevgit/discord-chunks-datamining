/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Hj: () => o,
  YJ: () => i
});
var r = function(e, t) {
  return e === t
};

function i(e, t) {
  return !e && !t || !!e && !!t && e.x === t.x && e.y === t.y
}

function o(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
  if (e.length !== t.length) return !1;
  for (var i = 0; i < e.length; ++i)
    if (!n(e[i], t[i])) return !1;
  return !0
}