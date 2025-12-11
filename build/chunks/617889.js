/** Chunk was on 11941 **/
/** chunk id: 617889, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  EK: () => i,
  GX: () => c,
  qe: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk968843 = require("./968843.js");

function c() {
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

function i(e, t) {
  var o;
  let r = (0, d.z)(e),
    n = null != (o = (0, a.i6)()) ? o : 0,
    c = "var(--green-330)",
    i = ["var(--background-base-lowest)", "var(--interactive-text-default)"];
  return {
    backgroundTop: t ? i[n] : ["#828288", "#CBCDD4"][n],
    backgroundBottom: t ? i[n] : ["#535356", "#8B8C95"][n],
    foreground: c,
    glow: t && r ? c : "#C4C1D66E"
  }
}
let b = () => {
  let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, false);
  return parseInt("" !== module ? module : "375")
};

function s() {
  return {
    label: ! function() {
      let [e, t] = Chunk473749.useState(() => 270 > b());
      return Chunk473749.useEffect(() => {
        let e = new MutationObserver(() => {
          exports(270 > b())
        });
        return module.observe(document.body, {
          attributes: true,
          attributeFilter: ["style"]
        }), () => module.disconnect()
      }, [270]), module
    }()
  }
}