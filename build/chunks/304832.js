/** Chunk was on web.js **/
/** chunk id: 304832, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hj: () => a,
  YJ: () => i
});
var r = function(e, t) {
  return e === t
};

function i(e, t) {
  return !e && !t || !!e && !!t && e.x === t.x && e.y === t.y
}

function a(e, t) {
  var n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r;
  if (e.length !== t.length) returnfalse;
  for (var i = 0; i < e.length; ++i)
    if (!n(e[i], t[i])) returnfalse;
  returntrue
}