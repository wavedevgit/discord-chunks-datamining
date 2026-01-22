/** Chunk was on web.js **/
/** chunk id: 814550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => s,
  u: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk860923 = require("./860923.js"),
  s = function(e) {
    return e.IDLE = "idle", e.HEAD_TURN = "headTurn", e.HEAD_TURN_BACK = "headTurnBack", e.TALKING = "talking", e
  }({});
let o = {
    idle: ["headTurnBack", "talking"],
    headTurn: ["idle", "talking"],
    headTurnBack: ["headTurn"],
    talking: ["idle", "headTurnBack"]
  },
  l = e => {
    let [t, n] = r.useState("idle"), [s, l] = r.useState(), c = (0, a.A)(), u = r.useMemo(() => null == c ? true : c.characters[e], [c, e]), d = r.useCallback(() => {
      if (null == u) return s;
      let e = u[t];
      return (0, i.sample)(e)
    }, [s, u, t]);
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
      p = e => e === t ? t : o[e].includes(t) ? (n(e), e) : t;
    return {
      animationState: t,
      updateAnimationState: p,
      asset: s,
      setAsset: l,
      sampleAsset: d,
      findAnimationTree: f,
      characterAssets: u
    }
  }