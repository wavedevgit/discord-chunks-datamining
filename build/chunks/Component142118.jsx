/** Chunk was on 88657 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk598612 = require("./598612.jsx"),
  Chunk175993 = require("./175993.jsx"),
  Chunk966401 = require("./966401.js");
let u = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: u,
    init: d,
    useBadge: f,
    useNotice: b
  } = t, p = null == n ? true : n(), y = null == f ? true : f(), j = null == b ? true : b();
  return l.useEffect(() => {
    null == d || d()
  }, [d]), (0, r.jsxs)(i.Kqy, {
    gap: 16,
    children: [(0, r.jsx)(a.Y, {
      title: p,
      badge: y
    }), null != j && (0, r.jsx)("div", {
      className: s.notice,
      children: (0, r.jsx)(c.Z, {
        notice: j
      })
    }), u.map(e => (0, r.jsx)(o.Z, {
      node: e
    }, e.key))]
  })
})