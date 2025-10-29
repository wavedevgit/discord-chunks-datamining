/** Chunk was on 1272 **/
/** chunk id: 491575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk512847 = require("./512847.jsx"),
  Chunk350810 = require("./350810.js"),
  Chunk612226 = require("./612226.js"),
  Chunk714338 = require("./714338.js"),
  Chunk607070 = require("./607070.js"),
  Chunk317858 = require("./317858.js"),
  Chunk635395 = require("./635395.js"),
  Chunk533934 = require("./533934.jsx"),
  Chunk5560 = require("./5560.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk585483 = require("./585483.js"),
  Chunk145604 = require("./145604.jsx"),
  Chunk718813 = require("./718813.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk3484 = require("./3484.js");
let y = Chunk647438.memo(function() {
  let e = (0, Chunk350810.Z)(),
    t = Chunk647438.useRef(null),
    n = Chunk647438.useCallback(e => {
      let {
        duration: n,
        intensity: r
      } = e;
      if (p.Z.useReducedMotion || !_.Z.isFocused()) return;
      let {
        current: i
      } = t;
      a()(null != i, "Shakeable is shaken when not mounted"), i.shake(n, r)
    }, []);
  return Chunk647438.useEffect(() => (Chunk714338.Z.setLayout(Chunk612226.ZP), Chunk714338.Z.enable(), () => Chunk714338.Z.disable()), []), Chunk647438.useEffect(() => (Chunk585483.S.subscribe(Chunk981631.CkL.SHAKE_APP, require), () => {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.SHAKE_APP, require)
  }), [require]), (0, Chunk317858.Z)(), (0, Chunk951288.jsxs)(Chunk481060.F0h, {
    ref: exports,
    className: Chunk3484.app,
    children: [(0, Chunk951288.jsx)(Chunk718813.Z, {
      className: Chunk3484.layers,
      children: (0, Chunk951288.jsx)(Chunk533934.Z, {})
    }), (0, Chunk951288.jsx)(Chunk635395.Z, {}), (0, Chunk951288.jsx)(Chunk512847.Z, {}), (0, Chunk951288.jsx)(Chunk145604.Z, {}), (0, Chunk951288.jsx)(Chunk5560.Z, {}), !module && (0, Chunk951288.jsx)(Chunk481060.c43, {})]
  })
})