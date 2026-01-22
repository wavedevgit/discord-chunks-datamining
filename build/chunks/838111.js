/** Chunk was on web.js **/
/** chunk id: 838111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  b: () => u
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");

function u(e, t) {
  let [n, r, u] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.default, a.A, s.A], d = r.getGuild(e), f = n.getUser(t);
  return !(null == d || null == f || f.isNonUserBot() || (0, i.bM)(d, f) || l.$3({
    permission: c.xBc.ADMINISTRATOR,
    user: f,
    context: d
  })) && u.canManageUser(c.xBc.MODERATE_MEMBERS, f, d)
}

function d(e, t) {
  return (0, r.bG)([o.default, a.A, s.A], () => u(e, t, [o.default, a.A, s.A]), [e, t])
}