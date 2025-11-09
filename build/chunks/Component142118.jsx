/** Chunk was on 36415 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk598612 = require("./598612.jsx");
let c = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: c,
    init: s,
    useBadge: u
  } = t, d = null == n ? true : n(), f = null == u ? true : u();
  return l.useEffect(() => {
    null == s || s()
  }, [s]), (0, r.jsxs)(o.Kqy, {
    gap: 16,
    children: [(0, r.jsx)(a.Y, {
      title: d,
      badge: f
    }), c.map(e => (0, r.jsx)(i.Z, {
      node: e
    }, e.key))]
  })
})