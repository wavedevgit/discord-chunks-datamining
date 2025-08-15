/** Chunk was on 30202 **/
/** chunk id: 810762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
let p = e => {
  let {
    onGoBack: t
  } = e, n = (0, c.Z)(), {
    loading: p
  } = (0, o.sp)(n);
  return ((0, l.Z)(r.tq ? "role-subscriptions-user-setting" : true), p) ? (0, i.jsx)(a.$jN, {}) : 0 === n.length ? null : (0, i.jsxs)("div", {
    className: m.__invalid_container,
    children: [(0, i.jsxs)(s.zx, {
      look: s.zx.Looks.BLANK,
      innerClassName: m.backButtonContents,
      onClick: t,
      children: [(0, i.jsx)(a.ZSh, {
        size: "md",
        color: "currentColor",
        className: m.arrowIcon
      }), u.intl.string(u.t.hqyhKS)]
    }), (0, i.jsx)(a.LZC, {
      size: 10
    }), (0, i.jsx)(a.vwX, {
      tag: "h1",
      children: u.intl.string(u.t["KzCF//"])
    }), (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      className: m.pageDescription,
      children: u.intl.string(u.t["Y+ucR0"])
    }), (0, i.jsx)("div", {
      className: m.subscriptionsContainer,
      children: n.map(e => (0, i.jsx)(d.Z, {
        subscription: e
      }, e.id))
    })]
  })
}