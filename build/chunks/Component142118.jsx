/** Chunk was on 75685 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx");
let a = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: a,
    init: s
  } = t, c = null == n ? true : n();
  return l.useEffect(() => {
    null == s || s()
  }, [s]), (0, r.jsxs)(o.Kqy, {
    gap: 24,
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: c
    }), a.map(e => (0, r.jsx)(i.Z, {
      node: e
    }, e.key))]
  })
})