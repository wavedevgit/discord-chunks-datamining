/** Chunk was on 37447 **/
/** chunk id: 266843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => u,
  h: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk87894 = require("./87894.js");

function l() {
  let [e, t] = Chunk647438.useState("lg"), [n, o] = Chunk647438.useState(true), l = (0, Chunk448986.Z)(e => {
    let n = e.target,
      s = e.contentRect.width;
    return (o(n.scrollHeight), null == s || s > a.j2) ? t("lg") : s > a.Z0 ? t("sm") : t("xs")
  });
  return {
    containerRef: (0, Chunk393903.y)(l),
    size: module,
    height: require
  }
}

function u(e) {
  let {
    initiallyExpanded: t
  } = e, [n, r] = s.useState(t), [i, a] = s.useState(false), l = s.useCallback(() => {
    r(e => !e), a(true)
  }, []), {
    expansionSpring: u
  } = (0, o.q_F)({
    expansionSpring: +!!n,
    config: {
      tension: 450,
      friction: 45
    },
    onRest: () => a(false)
  });
  return {
    expansionSpring: u,
    isAnimating: i,
    isExpanded: n,
    toggleExpanded: l
  }
}