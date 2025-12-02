/** Chunk was on web.js **/
/** chunk id: 142118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk598612 = require("./598612.jsx"),
  Chunk175993 = require("./175993.jsx");

function c(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useNavigationTitle: c,
    layout: u,
    init: d,
    useBadge: f,
    useNotice: p
  } = t, _ = null == n ? true : n(), m = null == f ? true : f(), h = null == p ? true : p(), g = null != n || null != c;
  return i.useEffect(() => {
    null == d || d()
  }, [d]), (0, r.jsxs)(r.Fragment, {
    children: [null != _ && (0, r.jsx)(s.Y, {
      title: _,
      badge: m
    }), (0, r.jsx)("div", {
      "data-settings-category-key": g ? t.key : true,
      "aria-hidden": true,
      style: {
        height: 1
      }
    }), (0, r.jsxs)(a.Kqy, {
      gap: 16,
      children: [null != h && (0, r.jsx)(l.Z, {
        notice: h
      }), u.map(e => (0, r.jsx)(o.Z, {
        node: e
      }, e.key))]
    })]
  })
}
let u = Chunk473749.memo(c)