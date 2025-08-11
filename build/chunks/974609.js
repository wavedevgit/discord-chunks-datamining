/** Chunk was on web.js **/
/** chunk id: 974609, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => a
}), require("./388685.js"), require("./442837.js");
var Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk700785 = require("./700785.js");
let a = function(e, t) {
  let [n, a] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [i.Z, r.ZP];
  if (null == e || null == t) return null;
  let s = n.getGuild(e);
  if (null == s) return null;
  let l = a.getMember(s.id, t);
  return null == l ? null : o.Hu(s, l)
}