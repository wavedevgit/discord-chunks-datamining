/** Chunk was on 29725 **/
/** chunk id: 617889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EK: () => o,
  GX: () => s,
  qe: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk968843 = require("./968843.js");

function s() {
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

function o(e, t) {
  var n;
  let a = (0, i.z)(e),
    r = null != (n = (0, l.i6)()) ? n : 0,
    s = "var(--green-330)",
    o = ["var(--background-base-lowest)", "var(--interactive-text-default)"];
  return {
    backgroundTop: t ? o[r] : ["#828288", "#CBCDD4"][r],
    backgroundBottom: t ? o[r] : ["#535356", "#8B8C95"][r],
    foreground: s,
    glow: t && a ? s : "#C4C1D66E"
  }
}
let c = () => {
  let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, false);
  return parseInt("" !== module ? module : "375")
};

function d() {
  return {
    label: ! function() {
      let [e, t] = Chunk473749.useState(() => 270 > c());
      return Chunk473749.useEffect(() => {
        let e = new MutationObserver(() => {
          exports(270 > c())
        });
        return module.observe(document.body, {
          attributes: true,
          attributeFilter: ["style"]
        }), () => module.disconnect()
      }, [270]), module
    }()
  }
}