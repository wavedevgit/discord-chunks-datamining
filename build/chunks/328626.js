/** Chunk was on 45620 **/
/** chunk id: 328626, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => a,
  y: () => s
}), require("./388685.js");
var r, Chunk473749 = require("./473749.js"),
  a = ((r = {}).MOUNTED = "mounted", r.SORT_OUT = "sort-out", r.SORT_IN = "sort-in", r.SHUFFLE_OUT = "shuffle-out", r.SHUFFLE_IN = "shuffle-in", r.FINISHED = "finished", r);
let s = () => {
  let [e, t] = l.useState("mounted"), [n, r] = l.useState(false), a = l.useRef(null);
  return l.useEffect(() => {
    n && "finished" === e && (null !== a.current && a.current.focus(), r(false))
  }, [e, n]), {
    animationPhase: e,
    startAnimation: l.useCallback(e => {
      let {
        isShuffling: n,
        onOutroComplete: l,
        returnRef: s
      } = e;
      (null == s ? true : s.current) != null && (a.current = s.current, r(true)), t(n ? "shuffle-out" : "sort-out"), setTimeout(() => {
        l(), t(n ? "shuffle-in" : "sort-in"), setTimeout(() => {
          t("finished")
        }, n ? 200 : 300)
      }, n ? 250 : 300)
    }, [])
  }
}