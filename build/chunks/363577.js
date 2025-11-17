/** Chunk was on 85342 **/
/** chunk id: 363577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk986197 = require("./986197.js"),
  Chunk654344 = require("./654344.js"),
  Chunk135200 = require("./135200.js"),
  Chunk346585 = require("./346585.js");
let u = function(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    u = arguments.length > 3 && true !== arguments[3] && arguments[3],
    d = (0, a.e7)([l.Z], () => l.Z.validate(e), [e]),
    m = (0, a.e7)([l.Z], () => l.Z.isRateLimited()),
    g = (0, s.c)(),
    f = r.useMemo(() => (0, i.debounce)(e => o.Z.attemptPomelo(e, n ? "registration" : "modal", n, u), g), [g, n, u]);
  return r.useEffect(() => {
    t && !m && null == d && "" !== e && f(e)
  }, [t, m, d, e, f]), r.useMemo(() => null != d ? (0, c.ti)(d) : true, [d])
}