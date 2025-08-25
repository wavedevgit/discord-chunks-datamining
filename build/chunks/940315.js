/** Chunk was on web.js **/
/** chunk id: 940315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk709706 = require("./709706.js");
let a = 3e3,
  s = 4e3;

function l() {
  let e = (0, Chunk442837.e7)([Chunk709706.Z], () => Chunk709706.Z.getLastReportedLagTimestamp()),
    [t, n] = Chunk647438.useState(false),
    [l, c] = Chunk647438.useState(false),
    u = Chunk647438.useRef(null);
  return Chunk647438.useEffect(() => {
    let t = null != module;
    require(exports);
    let r = exports ? setTimeout(() => require(false), a) : null;
    return () => {
      clearTimeout(Chunk647438), require(false)
    }
  }, [module]), Chunk647438.useEffect(() => {
    let t = null != module && null == u.current;
    c(exports);
    let n = null;
    return exports && (u.current = Date.now(), n = setTimeout(() => c(false), s)), () => {
      clearTimeout(require), c(false)
    }
  }, [module]), {
    showSilentLagWarning: exports,
    showLagTooltip: l
  }
}