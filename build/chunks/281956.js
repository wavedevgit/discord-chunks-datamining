/** Chunk was on web.js **/
/** chunk id: 281956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => c,
  n: () => l
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk983736 = require("./983736.js");

function l(e) {
  let [t, n, r] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.Z, a.default, i.ZP];
  if (null == e) returnfalse;
  let l = t.getGuild(e),
    c = n.getCurrentUser(),
    u = false;
  if (null != c) {
    var d, f;
    u = null != (f = null == (d = r.getMember(e, c.id)) ? true : d.isPending) && f
  }
  return u && !!(0, s.Dc)(l)
}

function c(e) {
  return (0, r.e7)([o.Z, a.default, i.ZP], () => null != e && l(e, [o.Z, a.default, i.ZP]), [e])
}