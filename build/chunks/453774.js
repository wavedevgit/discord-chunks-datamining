/** Chunk was on web.js **/
/** chunk id: 453774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk429913 = require("./429913.js"),
  Chunk871123 = require("./871123.js"),
  Chunk916023 = require("./916023.js");

function s(e, t) {
  var n, s;
  let o = (0, i.Xg)(e) ? [] : null != (n = null == e || null == (s = e.linkedGames) ? true : s.map(e => e.id)) ? n : [],
    l = (0, r.A)(o);
  if (!(0, a.kt)({
      location: t
    }) || null == e) return null;
  if ((0, i.Xg)(e)) return e;
  for (let e of l)
    if (null != e && (0, i.Xg)(e)) return e;
  return null
}