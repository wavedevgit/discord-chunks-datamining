/** Chunk was on web.js **/
/** chunk id: 51758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => c,
  V: () => l
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk709977 = require("./709977.js");

function l(e) {
  let [t, n, r] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.A, s.default, i.Ay];
  if (null == e) returnfalse;
  let l = t.getGuild(e),
    c = n.getCurrentUser(),
    u = false;
  if (null != c) {
    var d, f;
    u = null != (d = null == (f = r.getMember(e, c.id)) ? true : f.isPending) && d
  }
  return u && !!(0, o.Qd)(l)
}

function c(e) {
  return (0, r.bG)([a.A, s.default, i.Ay], () => null != e && l(e, [a.A, s.default, i.Ay]), [e])
}