/** Chunk was on web.js **/
/** chunk id: 429913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  h: () => f
});
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk403362 = require("./403362.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js");

function d(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = r.useRef([]);
  return r.useEffect(() => {
    t && !(0, s.v)(e, n.current) && (c.Ay.fetchApplications(a()(e).filter(l.Vq).uniq().value(), false), n.current = e)
  }, [e, t]), (0, o.yK)([u.A], () => e.map(e => null != e ? u.A.getApplication(e) : true))
}

function f(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return d(null != e ? [e] : [], t)[0]
}