/** Chunk was on 24875 **/
/** chunk id: 569379, original params: e,o,t (module,exports,require) **/
require.d(exports, {
  E: () => s,
  G: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk113434 = require("./113434.js");

function i() {
  let [{
    spring: e
  }, o] = (0, Chunk481060.q_F)(() => ({
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

function s(e, o) {
  var t;
  let r = (0, d.z)(e),
    a = null != (t = (0, n.i6)()) ? t : 0,
    i = "var(--green-330)",
    s = ["var(--background-base-lowest)", "var(--interactive-normal)"];
  return {
    backgroundTop: o ? s[a] : ["#828288", "#CBCDD4"][a],
    backgroundBottom: o ? s[a] : ["#535356", "#8B8C95"][a],
    foreground: i,
    glow: o && r ? i : "#C4C1D66E"
  }
}