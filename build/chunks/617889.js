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
  }, t] = (0, n.q_F)(() => ({
    spring: 0
  }), "animate-always");
  return {
    completionSpring: e,
    startCompletionAnimation: r.useCallback(() => {
      t({
        spring: 1
      }), t({
        spring: 0,
        delay: 2e3
      })
    }, [t])
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
  return parseInt("" !== e ? e : "375")
};

function s() {
  return {
    label: ! function() {
      let [e, t] = r.useState(() => 270 > b());
      return r.useEffect(() => {
        let e = new MutationObserver(() => {
          t(270 > b())
        });
        return e.observe(document.body, {
          attributes: true,
          attributeFilter: ["style"]
        }), () => e.disconnect()
      }, [270]), e
    }()
  }
}