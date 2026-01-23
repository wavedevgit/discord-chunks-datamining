/** Chunk was on 59275 **/
/** chunk id: 917987, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  J: () => s,
  s: () => a
}), require("./896048.js");
var r, Chunk64700 = require("./64700.js"),
  s = ((r = {}).MOUNTED = "mounted", r.SORT_OUT = "sort-out", r.SORT_IN = "sort-in", r.SHUFFLE_OUT = "shuffle-out", r.SHUFFLE_IN = "shuffle-in", r.FINISHED = "finished", r);
let a = () => {
  let [e, t] = l.useState("mounted"), [n, r] = l.useState(false), s = l.useRef(null);
  return l.useEffect(() => {
    n && "finished" === e && (null !== s.current && s.current.focus(), r(false))
  }, [e, n]), {
    animationPhase: e,
    startAnimation: l.useCallback(e => {
      let {
        isShuffling: n,
        onOutroComplete: l,
        returnRef: a
      } = e;
      (null == a ? true : a.current) != null && (s.current = a.current, r(true)), t(n ? "shuffle-out" : "sort-out"), setTimeout(() => {
        l(), t(n ? "shuffle-in" : "sort-in"), setTimeout(() => {
          t("finished")
        }, n ? 200 : 300)
      }, n ? 250 : 300)
    }, [])
  }
}