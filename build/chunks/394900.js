/** Chunk was on 92917 **/
/** chunk id: 394900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => o,
  s: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk433745 = require("./433745.js");

function o() {
  let [e, t] = r.useState("lg"), [n, i] = r.useState(true), o = (0, a.A)(e => {
    let n = e.target,
      r = e.contentRect.width;
    return (i(n.scrollHeight), null == r || r > s.Cf) ? t("lg") : r > s.tN ? t("sm") : t("xs")
  });
  return {
    containerRef: (0, l.w)(o),
    size: e,
    height: n
  }
}

function c(e) {
  let {
    initiallyExpanded: t
  } = e, [n, l] = r.useState(t), [a, s] = r.useState(false), o = r.useCallback(() => {
    l(e => !e), s(true)
  }, []), {
    expansionSpring: c
  } = (0, i.zhh)({
    expansionSpring: +!!n,
    config: {
      tension: 450,
      friction: 45
    },
    onRest: () => s(false)
  });
  return {
    expansionSpring: c,
    isAnimating: a,
    isExpanded: n,
    toggleExpanded: o
  }
}