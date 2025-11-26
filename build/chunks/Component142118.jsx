/** Chunk was on 88569 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk598612 = require("./598612.jsx"),
  Chunk175993 = require("./175993.jsx");
let c = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useNavigationTitle: c,
    layout: u,
    init: d,
    useBadge: f,
    useNotice: p
  } = t, b = null == n ? true : n(), y = null == f ? true : f(), g = null == p ? true : p();
  return l.useEffect(() => {
    null == d || d()
  }, [d]), (0, r.jsxs)(r.Fragment, {
    children: [null != b && (0, r.jsx)(a.Y, {
      title: b,
      badge: y
    }), (0, r.jsx)("div", {
      "data-settings-category-key": null != n || null != c ? t.key : true,
      "aria-hidden": true,
      style: {
        height: 1
      }
    }), (0, r.jsxs)(i.Kqy, {
      gap: 16,
      children: [null != g && (0, r.jsx)(s.Z, {
        notice: g
      }), u.map(e => (0, r.jsx)(o.Z, {
        node: e
      }, e.key))]
    })]
  })
})