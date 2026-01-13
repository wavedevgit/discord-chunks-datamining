/** Chunk was on 1272 **/
/** chunk id: 491575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk358091 = require("./358091.js");
let y = Chunk473749.memo(function() {
  let e = (0, c.Z)(),
    t = i.useRef(null),
    n = i.useCallback(e => {
      let {
        duration: n,
        intensity: r
      } = e;
      if (p.Z.useReducedMotion || !b.Z.isFocused()) return;
      let {
        current: i
      } = t;
      a()(null != i, "Shakeable is shaken when not mounted"), i.shake(n, r)
    }, []);
  return i.useEffect(() => (d.Z.setLayout(u.ZP), d.Z.enable(), () => d.Z.disable()), []), i.useEffect(() => (_.S.subscribe(v.CkL.SHAKE_APP, n), () => {
    _.S.unsubscribe(v.CkL.SHAKE_APP, n)
  }), [n]), (0, f.Z)(), (0, r.jsxs)(o.F0h, {
    ref: t,
    className: I.app,
    children: [(0, r.jsx)(O.Z, {
      className: I.layers,
      children: (0, r.jsx)(h.Z, {})
    }), (0, r.jsx)(g.Z, {}), (0, r.jsx)(s.Z, {}), (0, r.jsx)(E.Z, {}), (0, r.jsx)(m.Z, {}), !e && (0, r.jsx)(o.c43, {})]
  })
})