/** Chunk was on web.js **/
/** chunk id: 654684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => c,
  h: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk724684 = require("./724684.js");

function l() {
  let [e, t] = Chunk473749.useState("lg"), [n, i] = Chunk473749.useState(true), l = (0, Chunk448986.Z)(e => {
    let n = e.target,
      r = e.contentRect.width;
    return (i(n.scrollHeight), null == r || r > s.j2) ? t("lg") : r > s.Z0 ? t("sm") : t("xs")
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
  } = e, [n, a] = r.useState(t), [o, s] = r.useState(false), l = r.useCallback(() => {
    a(e => !e), s(true)
  }, []), {
    expansionSpring: c
  } = (0, i.q_F)({
    expansionSpring: +!!n,
    config: {
      tension: 450,
      friction: 45
    },
    onRest: () => s(false)
  });
  return {
    expansionSpring: c,
    isAnimating: o,
    isExpanded: n,
    toggleExpanded: l
  }
}