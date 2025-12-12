/** Chunk was on web.js **/
/** chunk id: 142118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk662097 = require("./662097.js"),
  Chunk598612 = require("./598612.jsx"),
  Chunk175993 = require("./175993.jsx");

function u(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useSubnavLabel: i,
    useSubtitle: u,
    layout: d,
    initialize: f,
    useNotice: p
  } = t, _ = null == n ? true : n(), m = null == u ? true : u(), h = null == p ? true : p(), g = null != n || null != i;
  return (0, s.D)(f), (0, r.jsxs)(r.Fragment, {
    children: [null != _ && (0, r.jsx)(l.Y, {
      title: _,
      subtitle: m
    }), (0, r.jsx)("div", {
      "data-settings-category-key": g ? t.key : true,
      "aria-hidden": true,
      style: {
        height: 1
      }
    }), (0, r.jsxs)(a.Kqy, {
      gap: 16,
      children: [null != h && (0, r.jsx)(c.Z, {
        notice: h
      }), d.map(e => (0, r.jsx)(o.Z, {
        node: e
      }, e.key))]
    })]
  })
}
let d = Chunk473749.memo(u)