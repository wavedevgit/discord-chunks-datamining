/** Chunk was on 87557 **/
/** chunk id: 772244, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  OY: () => o,
  Ry: () => s,
  qV: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk890687 = require("./890687.js");

function s() {
  let [{
    spring: e
  }, t] = (0, l.zhh)(() => ({
    spring: 0
  }), "animate-always");
  return {
    completionSpring: e,
    startCompletionAnimation: a.useCallback(() => {
      t({
        spring: 1
      }), t({
        spring: 0,
        delay: 2e3
      })
    }, [t])
  }
}

function o(e, t) {
  var n;
  let a = (0, i.Vn)(e),
    l = null != (n = (0, r.xv)()) ? n : 0,
    s = "var(--green-330)",
    o = ["var(--background-base-lowest)", "var(--interactive-text-default)"];
  return {
    backgroundTop: t ? o[l] : ["#828288", "#CBCDD4"][l],
    backgroundBottom: t ? o[l] : ["#535356", "#8B8C95"][l],
    foreground: s,
    glow: t && a ? s : "#C4C1D66E"
  }
}
let c = () => {
  let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, false);
  return parseInt("" !== e ? e : "375")
};

function d() {
  return {
    label: ! function() {
      let [e, t] = a.useState(() => 270 > c());
      return a.useEffect(() => {
        let e = new MutationObserver(() => {
          t(270 > c())
        });
        return e.observe(document.body, {
          attributes: true,
          attributeFilter: ["style"]
        }), () => e.disconnect()
      }, [270]), e
    }()
  }
}