/** Chunk was on 90499 **/
/** chunk id: 617889, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  EK: () => d,
  GX: () => s,
  qe: () => l
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

function d(e, t) {
  var o;
  let r = (0, i.z)(e),
    n = null != (o = (0, a.i6)()) ? o : 0,
    s = "var(--green-330)",
    d = ["var(--background-base-lowest)", "var(--interactive-text-default)"];
  return {
    backgroundTop: t ? d[n] : ["#828288", "#CBCDD4"][n],
    backgroundBottom: t ? d[n] : ["#535356", "#8B8C95"][n],
    foreground: s,
    glow: t && r ? s : "#C4C1D66E"
  }
}
let _ = () => {
  let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, false);
  return parseInt("" !== module ? module : "375")
};

function l() {
  return {
    label: ! function() {
      let [e, t] = Chunk473749.useState(() => 270 > _());
      return Chunk473749.useEffect(() => {
        let e = new MutationObserver(() => {
          exports(270 > _())
        });
        return module.observe(document.body, {
          attributes: true,
          attributeFilter: ["style"]
        }), () => module.disconnect()
      }, [270]), module
    }()
  }
}