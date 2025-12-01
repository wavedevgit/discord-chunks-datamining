/** Chunk was on web.js **/
/** chunk id: 810762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk873546 = require("./873546.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk270237 = require("./270237.js"),
  Chunk584825 = require("./584825.js"),
  Chunk892729 = require("./892729.js"),
  Chunk949914 = require("./949914.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk343447 = require("./343447.js");
let p = e => {
  let {
    onGoBack: t
  } = e, n = (0, c.Z)(), {
    loading: p
  } = (0, l.sp)(n);
  return ((0, s.Z)(i.tq ? "role-subscriptions-user-setting" : true), p) ? (0, r.jsx)(o.$jN, {}) : 0 === n.length ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a.zxk, {
      text: d.intl.string(d.t.hqyhKQ),
      icon: o.wj7,
      variant: "secondary",
      onClick: t
    }), (0, r.jsx)(o.LZC, {
      size: 10
    }), (0, r.jsx)(o.C3N, {
      label: d.intl.string(d.t["KzCF/6"]),
      description: d.intl.string(d.t["Y+ucR7"]),
      children: (0, r.jsx)("div", {
        className: f.subscriptionsContainer,
        children: n.map(e => (0, r.jsx)(u.Z, {
          subscription: e
        }, e.id))
      })
    })]
  })
}