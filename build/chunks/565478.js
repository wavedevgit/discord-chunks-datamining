/** Chunk was on 86142 **/
/** chunk id: 565478, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk417597 = require("./417597.js"),
  Chunk32120 = require("./32120.js"),
  Chunk686683 = require("./686683.js"),
  Chunk574454 = require("./574454.js"),
  Chunk871210 = require("./871210.js");
let u = function(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    u = arguments.length > 3 && true !== arguments[3] && arguments[3],
    d = (0, s.bG)([o.A], () => o.A.validate(e), [e]),
    h = (0, s.bG)([o.A], () => o.A.isRateLimited()),
    p = (0, a.G)(),
    g = r.useMemo(() => (0, i.debounce)(e => l.A.attemptPomelo(e, n ? "registration" : "modal", n, u), p), [p, n, u]);
  return r.useEffect(() => {
    t && !h && null == d && "" !== e && g(e)
  }, [t, h, d, e, g]), r.useMemo(() => null != d ? (0, c.z2)(d) : true, [d])
}