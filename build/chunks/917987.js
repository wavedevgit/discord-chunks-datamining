/** Chunk was on 59275 **/
/** chunk id: 917987, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  J: () => s,
  s: () => a
}), require("./896048.js");
var n, Chunk64700 = require("./64700.js"),
  s = ((n = {}).MOUNTED = "mounted", n.SORT_OUT = "sort-out", n.SORT_IN = "sort-in", n.SHUFFLE_OUT = "shuffle-out", n.SHUFFLE_IN = "shuffle-in", n.FINISHED = "finished", n);
let a = () => {
  let [e, t] = r.useState("mounted"), [l, n] = r.useState(false), s = r.useRef(null);
  return r.useEffect(() => {
    l && "finished" === e && (null !== s.current && s.current.focus(), n(false))
  }, [e, l]), {
    animationPhase: e,
    startAnimation: r.useCallback(e => {
      let {
        isShuffling: l,
        onOutroComplete: r,
        returnRef: a
      } = e;
      (null == a ? true : a.current) != null && (s.current = a.current, n(true)), t(l ? "shuffle-out" : "sort-out"), setTimeout(() => {
        r(), t(l ? "shuffle-in" : "sort-in"), setTimeout(() => {
          t("finished")
        }, l ? 200 : 300)
      }, l ? 250 : 300)
    }, [])
  }
}