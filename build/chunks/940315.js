/** Chunk was on 45476 **/
/** chunk id: 940315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => r
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk709706 = require("./709706.js");

function r() {
  let e = (0, Chunk442837.e7)([Chunk709706.Z], () => Chunk709706.Z.getLastReportedLagTimestamp()),
    [t, n] = Chunk473749.useState(false),
    [r, s] = Chunk473749.useState(false),
    o = Chunk473749.useRef(null);
  return Chunk473749.useEffect(() => {
    let t = null != module;
    require(exports);
    let a = exports ? setTimeout(() => require(false), 3e3) : null;
    return () => {
      clearTimeout(Chunk473749), require(false)
    }
  }, [module]), Chunk473749.useEffect(() => {
    let t = null != module && null == o.current;
    s(exports);
    let n = null;
    return exports && (o.current = Date.now(), n = setTimeout(() => s(false), 4e3)), () => {
      clearTimeout(require), s(false)
    }
  }, [module]), {
    showSilentLagWarning: exports,
    showLagTooltip: r
  }
}