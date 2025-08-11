/** Chunk was on web.js **/
/** chunk id: 189357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => c,
  m: () => u
}), require("./388685.js");
var Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk478743 = require("./478743.js");
let c = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.Z, a.default];
  if (null == e) returnfalse;
  let [n, i] = t, c = n.getGuild(e);
  if (null == c) returnfalse;
  let u = i.getCurrentUser();
  return r.Db(s.uB({
    user: u,
    context: c,
    checkElevated: false
  }), l.N)
};

function u(e) {
  return (0, i.e7)([o.Z, a.default], () => c(e, [o.Z, a.default]), [e])
}