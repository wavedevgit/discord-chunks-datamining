/** Chunk was on 40184 **/
/** chunk id: 544975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => o,
  o: () => c
}), require("./388685.js");
var i, Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk195045 = require("./195045.js"),
  o = ((i = {}).IDLE = "idle", i.HEAD_TURN = "headTurn", i.HEAD_TURN_BACK = "headTurnBack", i.TALKING = "talking", i);
let s = {
    idle: ["headTurnBack", "talking"],
    headTurn: ["idle", "talking"],
    headTurnBack: ["headTurn"],
    talking: ["idle", "headTurnBack"]
  },
  c = e => {
    let [t, n] = r.useState("idle"), [i, o] = r.useState(), c = (0, a.Z)(), u = r.useMemo(() => null == c ? true : c.characters[e], [c, e]), d = r.useCallback(() => {
      if (null == u) return i;
      let e = u[t];
      return (0, l.sample)(e)
    }, [i, u, t]);
    return r.useEffect(() => {
      o(d())
    }, [c, e, d]), r.useEffect(() => {
      o(() => d())
    }, [t]), {
      animationState: t,
      updateAnimationState: e => e === t ? t : s[e].includes(t) ? (n(e), e) : t,
      asset: i,
      setAsset: o,
      sampleAsset: d,
      findAnimationTree: () => {
        let e = 0,
          n = new Set([t]);
        for (; e < 10;) e += 1;
        return n
      },
      characterAssets: u
    }
  }