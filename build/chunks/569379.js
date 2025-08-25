/** Chunk was on web.js **/
/** chunk id: 569379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => l,
  G: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk113434 = require("./113434.js");

function s() {
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

function l(e, t) {
  var n;
  let r = (0, a.z)(e),
    i = null != (n = (0, o.i6)()) ? n : 0,
    s = "var(--green-330)",
    l = ["var(--background-base-lowest)", "var(--interactive-normal)"],
    c = ["#828288", "#CBCDD4"],
    u = ["#535356", "#8B8C95"];
  return {
    backgroundTop: t ? l[i] : c[i],
    backgroundBottom: t ? l[i] : u[i],
    foreground: s,
    glow: t && r ? s : "#C4C1D66E"
  }
}