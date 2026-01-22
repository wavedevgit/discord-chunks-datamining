/** Chunk was on web.js **/
/** chunk id: 975460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => l,
  t: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk587895 = require("./587895.js"),
  Chunk223273 = require("./223273.js"),
  Chunk705751 = require("./705751.js");

function o(e) {
  var t;
  if (null == e) return null;
  if (e.type !== s.S7.GAME) return e;
  for (let n of null != (t = e.linkedGames) ? t : []) {
    let e = i.A.getApplication(n.id);
    if (null != e && n.type === a.Mh.OFFICIAL) return e
  }
  return null
}

function l(e) {
  return r.useMemo(() => o(e), [e])
}