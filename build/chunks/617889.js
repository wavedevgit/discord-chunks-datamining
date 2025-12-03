/** Chunk was on 90499 **/
/** chunk id: 617889, original params: e,o,t (module,exports,require) **/
require.d(exports, {
  E: () => _,
  G: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk968843 = require("./968843.js");

function s() {
  let [{
    spring: e
  }, o] = (0, Chunk481060.q_F)(() => ({
    spring: 0
  }), "animate-always");
  return {
    completionSpring: module,
    startCompletionAnimation: Chunk473749.useCallback(() => {
      exports({
        spring: 1
      }), exports({
        spring: 0,
        delay: 2e3
      })
    }, [exports])
  }
}

function _(e, o) {
  var t;
  let r = (0, i.z)(e),
    n = null != (t = (0, a.i6)()) ? t : 0,
    s = "var(--green-330)",
    _ = ["var(--background-base-lowest)", "var(--interactive-normal)"];
  return {
    backgroundTop: o ? _[n] : ["#828288", "#CBCDD4"][n],
    backgroundBottom: o ? _[n] : ["#535356", "#8B8C95"][n],
    foreground: s,
    glow: o && r ? s : "#C4C1D66E"
  }
}