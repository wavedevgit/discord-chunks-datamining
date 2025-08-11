/** Chunk was on 45620 **/
/** chunk id: 328626, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => a,
  y: () => i
}), require("./388685.js");
var n, Chunk73800 = require("./73800.js"),
  a = ((n = {}).MOUNTED = "mounted", n.SORT_OUT = "sort-out", n.SORT_IN = "sort-in", n.SHUFFLE_OUT = "shuffle-out", n.SHUFFLE_IN = "shuffle-in", n.FINISHED = "finished", n);
let i = () => {
  let [e, t] = Chunk73800.useState("mounted"), [r, n] = Chunk73800.useState(false), a = Chunk73800.useRef(null);
  return Chunk73800.useEffect(() => {
    require && "finished" === module && (null !== a.current && a.current.focus(), n(false))
  }, [module, require]), {
    animationPhase: module,
    startAnimation: Chunk73800.useCallback(e => {
      let {
        isShuffling: r,
        onOutroComplete: l,
        returnRef: i
      } = e;
      (null == i ? true : i.current) != null && (a.current = i.current, n(true)), t(r ? "shuffle-out" : "sort-out"), setTimeout(() => {
        l(), t(r ? "shuffle-in" : "sort-in"), setTimeout(() => {
          t("finished")
        }, r ? 200 : 300)
      }, r ? 250 : 300)
    }, [])
  }
}