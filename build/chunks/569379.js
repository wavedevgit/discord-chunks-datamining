/** Chunk was on 83615 **/
/** chunk id: 569379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => l,
  G: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk313481 = require("./313481.js");

function i() {
  let [{
    spring: e
  }, t] = (0, Chunk481060.q_F)(() => ({
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

function l(e, t) {
  var n;
  let r = (0, a.z)(e),
    s = null != (n = (0, o.i6)()) ? n : 0,
    i = "var(--green-330)",
    l = ["var(--background-base-lowest)", "var(--interactive-normal)"];
  return {
    backgroundTop: t ? l[s] : ["#828288", "#CBCDD4"][s],
    backgroundBottom: t ? l[s] : ["#535356", "#8B8C95"][s],
    foreground: i,
    glow: t && r ? i : "#C4C1D66E"
  }
}