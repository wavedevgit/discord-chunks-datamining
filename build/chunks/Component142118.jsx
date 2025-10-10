/** Chunk was on 75685 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk598612 = require("./598612.jsx");
let s = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: s,
    init: c
  } = t, u = null == n ? true : n();
  return l.useEffect(() => {
    null == c || c()
  }, [c]), (0, r.jsxs)(o.Kqy, {
    gap: 16,
    children: [(0, r.jsx)(a.Y, {
      title: u
    }), s.map(e => (0, r.jsx)(i.Z, {
      node: e
    }, e.key))]
  })
})