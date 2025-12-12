/** Chunk was on web.js **/
/** chunk id: 835473, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  q: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk823379 = require("./823379.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js");

function d(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = r.useRef([]);
  return r.useEffect(() => {
    t && !(0, s.E)(e, n.current) && (c.ZP.fetchApplications(o()(e).filter(l.lm).uniq().value(), false), n.current = e)
  }, [e, t]), (0, a.Wu)([u.Z], () => e.map(e => null != e ? u.Z.getApplication(e) : true))
}

function f(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return d(null != e ? [e] : [], t)[0]
}