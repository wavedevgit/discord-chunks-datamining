/** Chunk was on 28532 **/
/** chunk id: 940315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk709706 = require("./709706.js");

function l() {
  let e = (0, Chunk442837.e7)([Chunk709706.Z], () => Chunk709706.Z.getLastReportedLagTimestamp()),
    [t, n] = Chunk647438.useState(false),
    [l, s] = Chunk647438.useState(false),
    o = Chunk647438.useRef(null);
  return Chunk647438.useEffect(() => {
    let t = null != module;
    require(exports);
    let a = exports ? setTimeout(() => require(false), 3e3) : null;
    return () => {
      clearTimeout(Chunk647438), require(false)
    }
  }, [module]), Chunk647438.useEffect(() => {
    let t = null != module && null == o.current;
    s(exports);
    let n = null;
    return exports && (o.current = Date.now(), n = setTimeout(() => s(false), 4e3)), () => {
      clearTimeout(require), s(false)
    }
  }, [module]), {
    showSilentLagWarning: exports,
    showLagTooltip: l
  }
}