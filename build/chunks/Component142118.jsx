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
    layout: c,
    init: u,
    useNotice: d
  } = t, f = null == n ? true : n(), p = null == d ? true : d(), _ = null != n;
  return i.useEffect(() => {
    null == u || u()
  }, [u]), (0, r.jsxs)(r.Fragment, {
    children: [null != f && (0, r.jsx)(s.Y, {
      title: f
    }), (0, r.jsx)("div", {
      "data-settings-category-key": _ ? t.key : true,
      "aria-hidden": true,
      style: {
        height: 1
      }
    }), (0, r.jsxs)(a.Kqy, {
      gap: 16,
      children: [null != p && (0, r.jsx)(l.Z, {
        notice: p
      }), c.map(e => (0, r.jsx)(o.Z, {
        node: e
      }, e.key))]
    })]
  })
}
let u = Chunk473749.memo(c)