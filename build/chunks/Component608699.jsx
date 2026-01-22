/** Chunk was on web.js **/
/** chunk id: 608699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk607399 = require("./607399.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk9113 = require("./9113.js"),
  Chunk599941 = require("./599941.js"),
  Chunk590632 = require("./590632.js"),
  Chunk146528 = require("./146528.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk183183 = require("./183183.js");
let p = e => {
  let {
    onGoBack: t
  } = e, n = (0, c.A)(), {
    loading: p
  } = (0, l.eb)(n);
  return ((0, o.A)(i.Fr ? "role-subscriptions-user-setting" : true), p) ? (0, r.jsx)(s.y$y, {}) : 0 === n.length ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a.$nd, {
      text: d.intl.string(d.t.hqyhKQ),
      icon: s.z$m,
      variant: "secondary",
      onClick: t
    }), (0, r.jsx)(s.hKd, {
      size: 10
    }), (0, r.jsx)(s.nVY, {
      label: d.intl.string(d.t["KzCF/6"]),
      description: d.intl.string(d.t["Y+ucR7"]),
      children: (0, r.jsx)("div", {
        className: f.A,
        children: n.map(e => (0, r.jsx)(u.A, {
          subscription: e
        }, e.id))
      })
    })]
  })
}