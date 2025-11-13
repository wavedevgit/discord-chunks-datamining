/** Chunk was on 18729 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk598612 = require("./598612.jsx"),
  Chunk175993 = require("./175993.jsx"),
  Chunk476804 = require("./476804.js");
let u = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: u,
    init: d,
    useBadge: f,
    notice: b
  } = t, p = null == n ? true : n(), y = null == f ? true : f();
  return l.useEffect(() => {
    null == d || d()
  }, [d]), (0, r.jsxs)(o.Kqy, {
    gap: 16,
    children: [(0, r.jsx)(a.Y, {
      title: p,
      badge: y
    }), null != b && (0, r.jsx)("div", {
      className: s.notice,
      children: (0, r.jsx)(c.Z, {
        notice: b
      })
    }), u.map(e => (0, r.jsx)(i.Z, {
      node: e
    }, e.key))]
  })
})