/** Chunk was on 37447 **/
/** chunk id: 266843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => c,
  h: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk87894 = require("./87894.js");

function l() {
  let [e, t] = Chunk647438.useState("lg"), [n, s] = Chunk647438.useState(true), l = (0, Chunk448986.Z)(e => {
    let n = e.target,
      r = e.contentRect.width;
    return (s(n.scrollHeight), null == r || r > a.j2) ? t("lg") : r > a.Z0 ? t("sm") : t("xs")
  });
  return {
    containerRef: (0, Chunk393903.y)(l),
    size: module,
    height: require
  }
}

function c(e) {
  let {
    initiallyExpanded: t
  } = e, [n, o] = r.useState(t), [i, a] = r.useState(false), l = r.useCallback(() => {
    o(e => !e), a(true)
  }, []), {
    expansionSpring: c
  } = (0, s.q_F)({
    expansionSpring: +!!n,
    config: {
      tension: 450,
      friction: 45
    },
    onRest: () => a(false)
  });
  return {
    expansionSpring: c,
    isAnimating: i,
    isExpanded: n,
    toggleExpanded: l
  }
}