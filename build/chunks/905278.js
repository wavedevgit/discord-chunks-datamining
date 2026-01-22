/** Chunk was on web.js **/
/** chunk id: 905278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => s
}), require("./896048.js"), require("./311907.js");
var Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk488926 = require("./488926.js");
let s = function(e, t) {
  let [n, s] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [i.A, r.Ay];
  if (null == e || null == t) return null;
  let o = n.getGuild(e);
  if (null == o) return null;
  let l = s.getMember(o.id, t);
  return null == l ? null : a.li(o, l)
}