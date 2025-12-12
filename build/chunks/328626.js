/** Chunk was on 45620 **/
/** chunk id: 328626, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => o,
  y: () => i
}), require("./388685.js");
var r, Chunk473749 = require("./473749.js"),
  o = ((r = {}).MOUNTED = "mounted", r.SORT_OUT = "sort-out", r.SORT_IN = "sort-in", r.SHUFFLE_OUT = "shuffle-out", r.SHUFFLE_IN = "shuffle-in", r.FINISHED = "finished", r);
let i = () => {
  let [e, t] = Chunk473749.useState("mounted"), [n, r] = Chunk473749.useState(false), o = Chunk473749.useRef(null);
  return Chunk473749.useEffect(() => {
    require && "finished" === module && (null !== o.current && o.current.focus(), r(false))
  }, [module, require]), {
    animationPhase: module,
    startAnimation: Chunk473749.useCallback(e => {
      let {
        isShuffling: n,
        onOutroComplete: l,
        returnRef: i
      } = e;
      (null == i ? true : i.current) != null && (o.current = i.current, r(true)), t(n ? "shuffle-out" : "sort-out"), setTimeout(() => {
        l(), t(n ? "shuffle-in" : "sort-in"), setTimeout(() => {
          t("finished")
        }, n ? 200 : 300)
      }, n ? 250 : 300)
    }, [])
  }
}