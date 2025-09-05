/** Chunk was on web.js **/
/** chunk id: 810762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk873546 = require("./873546.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk270237 = require("./270237.js"),
  Chunk584825 = require("./584825.js"),
  Chunk892729 = require("./892729.js"),
  Chunk949914 = require("./949914.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk343447 = require("./343447.js");
let _ = e => {
  let {
    onGoBack: t
  } = e, n = (0, c.Z)(), {
    loading: _
  } = (0, l.sp)(n);
  return ((0, s.Z)(i.tq ? "role-subscriptions-user-setting" : true), _) ? (0, r.jsx)(o.$jN, {}) : 0 === n.length ? null : (0, r.jsxs)("div", {
    className: f.__invalid_container,
    children: [(0, r.jsxs)(a.zx, {
      look: a.zx.Looks.BLANK,
      innerClassName: f.backButtonContents,
      onClick: t,
      children: [(0, r.jsx)(o.ZSh, {
        size: "md",
        color: "currentColor",
        className: f.arrowIcon
      }), d.intl.string(d.t.hqyhKS)]
    }), (0, r.jsx)(o.LZC, {
      size: 10
    }), (0, r.jsx)(o.vwX, {
      tag: "h1",
      children: d.intl.string(d.t["KzCF//"])
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      className: f.pageDescription,
      children: d.intl.string(d.t["Y+ucR0"])
    }), (0, r.jsx)("div", {
      className: f.subscriptionsContainer,
      children: n.map(e => (0, r.jsx)(u.Z, {
        subscription: e
      }, e.id))
    })]
  })
}