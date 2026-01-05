/** Chunk was on web.js **/
/** chunk id: 544975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => o,
  o: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk195045 = require("./195045.js"),
  o = function(e) {
    return e.IDLE = "idle", e.HEAD_TURN = "headTurn", e.HEAD_TURN_BACK = "headTurnBack", e.TALKING = "talking", e
  }({});
let s = {
    idle: ["headTurnBack", "talking"],
    headTurn: ["idle", "talking"],
    headTurnBack: ["headTurn"],
    talking: ["idle", "headTurnBack"]
  },
  l = e => {
    let [t, n] = r.useState("idle"), [o, l] = r.useState(), c = (0, a.Z)(), u = r.useMemo(() => null == c ? true : c.characters[e], [c, e]), d = r.useCallback(() => {
      if (null == u) return o;
      let e = u[t];
      return (0, i.sample)(e)
    }, [o, u, t]);
    r.useEffect(() => {
      l(d())
    }, [c, e, d]), r.useEffect(() => {
      l(() => d())
    }, [t]);
    let f = () => {
        let e = 10,
          n = false,
          r = 0,
          i = new Set([t]);
        for (; !n && r < e;) r += 1;
        return i
      },
      p = e => e === t ? t : s[e].includes(t) ? (n(e), e) : t;
    return {
      animationState: t,
      updateAnimationState: p,
      asset: o,
      setAsset: l,
      sampleAsset: d,
      findAnimationTree: f,
      characterAssets: u
    }
  }