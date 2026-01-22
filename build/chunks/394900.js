/** Chunk was on web.js **/
/** chunk id: 394900, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => l,
  s: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk433745 = require("./433745.js");

function l() {
  let [e, t] = r.useState("lg"), [n, i] = r.useState(true), l = (0, s.A)(e => {
    let n = e.target,
      r = e.contentRect.width;
    return (i(n.scrollHeight), null == r || r > o.Cf) ? t("lg") : r > o.tN ? t("sm") : t("xs")
  });
  return {
    containerRef: (0, a.w)(l),
    size: e,
    height: n
  }
}

function c(e) {
  let {
    initiallyExpanded: t
  } = e, [n, a] = r.useState(t), [s, o] = r.useState(false), l = r.useCallback(() => {
    a(e => !e), o(true)
  }, []), {
    expansionSpring: c
  } = (0, i.zhh)({
    expansionSpring: +!!n,
    config: {
      tension: 450,
      friction: 45
    },
    onRest: () => o(false)
  });
  return {
    expansionSpring: c,
    isAnimating: s,
    isExpanded: n,
    toggleExpanded: l
  }
}