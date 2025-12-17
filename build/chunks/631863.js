/** Chunk was on web.js **/
/** chunk id: 631863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk835473 = require("./835473.js"),
  Chunk164670 = require("./164670.js"),
  Chunk699955 = require("./699955.js");

function o(e, t) {
  var n, o;
  let s = (0, i.$p)(e) ? [] : null != (o = null == e || null == (n = e.linkedGames) ? true : n.map(e => e.id)) ? o : [],
    l = (0, r.Z)(s);
  if (!(0, a.cZ)({
      location: t
    }) || null == e) return null;
  if ((0, i.$p)(e)) return e;
  for (let e of l)
    if (null != e && (0, i.$p)(e)) return e;
  return null
}