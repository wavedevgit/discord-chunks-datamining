/** Chunk was on 7384 **/
/** chunk id: 940315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => a
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk709706 = require("./709706.js");

function a() {
  let e = (0, Chunk442837.e7)([Chunk709706.Z], () => Chunk709706.Z.getLastReportedLagTimestamp()),
    [t, n] = Chunk73800.useState(false),
    [a, l] = Chunk73800.useState(false),
    o = Chunk73800.useRef(null);
  return Chunk73800.useEffect(() => {
    let t = null != module;
    require(exports);
    let i = exports ? setTimeout(() => require(false), 3e3) : null;
    return () => {
      clearTimeout(Chunk73800), require(false)
    }
  }, [module]), Chunk73800.useEffect(() => {
    let t = null != module && null == o.current;
    l(exports);
    let n = null;
    return exports && (o.current = Date.now(), n = setTimeout(() => l(false), 4e3)), () => {
      clearTimeout(require), l(false)
    }
  }, [module]), {
    showSilentLagWarning: exports,
    showLagTooltip: a
  }
}