/** Chunk was on 45620 **/
/** chunk id: 328626, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => a,
  y: () => o
}), require("./388685.js");
var r, Chunk647438 = require("./647438.js"),
  a = ((r = {}).MOUNTED = "mounted", r.SORT_OUT = "sort-out", r.SORT_IN = "sort-in", r.SHUFFLE_OUT = "shuffle-out", r.SHUFFLE_IN = "shuffle-in", r.FINISHED = "finished", r);
let o = () => {
  let [e, t] = Chunk647438.useState("mounted"), [n, r] = Chunk647438.useState(false), a = Chunk647438.useRef(null);
  return Chunk647438.useEffect(() => {
    require && "finished" === module && (null !== a.current && a.current.focus(), r(false))
  }, [module, require]), {
    animationPhase: module,
    startAnimation: Chunk647438.useCallback(e => {
      let {
        isShuffling: n,
        onOutroComplete: l,
        returnRef: o
      } = e;
      (null == o ? true : o.current) != null && (a.current = o.current, r(true)), t(n ? "shuffle-out" : "sort-out"), setTimeout(() => {
        l(), t(n ? "shuffle-in" : "sort-in"), setTimeout(() => {
          t("finished")
        }, n ? 200 : 300)
      }, n ? 250 : 300)
    }, [])
  }
}