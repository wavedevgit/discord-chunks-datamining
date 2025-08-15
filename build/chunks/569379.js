/** Chunk was on 27458 **/
/** chunk id: 569379, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  E: () => c,
  G: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk113434 = require("./113434.js");

function a() {
  let [{
    spring: e
  }, t] = (0, Chunk481060.q_F)(() => ({
    spring: 0
  }), "animate-always");
  return {
    completionSpring: module,
    startCompletionAnimation: Chunk647438.useCallback(() => {
      exports({
        spring: 1
      }), exports({
        spring: 0,
        delay: 2e3
      })
    }, [exports])
  }
}

function c(e, t) {
  var r;
  let n = (0, l.z)(e),
    s = null != (r = (0, o.i6)()) ? r : 0,
    a = "var(--green-330)",
    c = ["var(--background-base-lowest)", "var(--interactive-normal)"];
  return {
    backgroundTop: t ? c[s] : ["#828288", "#CBCDD4"][s],
    backgroundBottom: t ? c[s] : ["#535356", "#8B8C95"][s],
    foreground: a,
    glow: t && n ? a : "#C4C1D66E"
  }
}