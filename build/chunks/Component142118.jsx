/** Chunk was on 62191 **/
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
  Chunk476804 = require("./476804.js");
let u = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useNavigationTitle: u,
    layout: d,
    init: f,
    useBadge: b,
    useNotice: y
  } = t, p = null == n ? true : n(), v = null == b ? true : b(), j = null == y ? true : y();
  return l.useEffect(() => {
    null == f || f()
  }, [f]), (0, r.jsxs)(i.Kqy, {
    gap: 16,
    children: [(0, r.jsx)(a.Y, {
      title: p,
      badge: v
    }), (0, r.jsx)("div", {
      "data-settings-category-key": null != n || null != u ? t.key : true,
      "aria-hidden": true,
      style: {
        height: 1
      }
    }), null != j && (0, r.jsx)("div", {
      className: s.notice,
      children: (0, r.jsx)(c.Z, {
        notice: j
      })
    }), d.map(e => (0, r.jsx)(o.Z, {
      node: e
    }, e.key))]
  })
})