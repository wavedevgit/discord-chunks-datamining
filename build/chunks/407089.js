/** Chunk was on web.js **/
/** chunk id: 407089, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => l,
  r: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk812206 = require("./812206.js"),
  Chunk189451 = require("./189451.js"),
  Chunk674563 = require("./674563.js");

function s(e) {
  var t;
  if (null == e) return null;
  if (e.type !== o.wW.GAME) return e;
  for (let n of null != (t = e.linkedGames) ? t : []) {
    let e = i.Z.getApplication(n.id);
    if (null != e && n.type === a.tE.OFFICIAL) return e
  }
  return null
}

function l(e) {
  return r.useMemo(() => s(e), [e])
}