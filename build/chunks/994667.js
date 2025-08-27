/** Chunk was on web.js **/
/** chunk id: 994667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  dW: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk104755 = require("./104755.js"),
  Chunk509003 = require("./509003.js"),
  Chunk543696 = require("./543696.js");

function c(e) {
  let t = r.useRef([]);
  return r.useEffect(() => {
    (0, a.E)(t.current, e) || ((0, o.v)(e), t.current = e)
  }, [e]), (0, i.Wu)([l.Z], () => e.map(e => null != e ? l.Z.getSupplementalData(e) : true))
}

function u(e) {
  return c(null != e ? [e] : [])[0]
}

function d(e) {
  let t = u(e);
  return r.useMemo(() => async () => {
    null != e && (null != t && null != t.rootPlaceId ? await (0, s.yb)(t.rootPlaceId) : await (0, s.xr)(e))
  }, [t, e])
}