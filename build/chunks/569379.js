/** Chunk was on 27458 **/
/** chunk id: 569379, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  E: () => i,
  G: () => c
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk113434 = require("./113434.js");

function c() {
  let [{
    spring: e
  }, t] = (0, Chunk481060.q_F)(() => ({
    spring: 0
  }), "animate-always");
  return {
    completionSpring: module,
    startCompletionAnimation: Chunk73800.useCallback(() => {
      exports({
        spring: 1
      }), exports({
        spring: 0,
        delay: 2e3
      })
    }, [exports])
  }
}

function i(e, t) {
  var r;
  let n = (0, l.z)(e),
    s = null != (r = (0, o.i6)()) ? r : 0,
    c = "var(--green-330)",
    i = ["var(--background-base-lowest)", "var(--interactive-normal)"];
  return {
    backgroundTop: t ? i[s] : ["#828288", "#CBCDD4"][s],
    backgroundBottom: t ? i[s] : ["#535356", "#8B8C95"][s],
    foreground: c,
    glow: t && n ? c : "#C4C1D66E"
  }
}