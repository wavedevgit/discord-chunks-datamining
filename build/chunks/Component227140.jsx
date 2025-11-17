/** Chunk was on 1272 **/
/** chunk id: 227140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk679768 = require("./679768.jsx"),
  Chunk387016 = require("./387016.js");

function c(e) {
  let {
    copy: t,
    showStars: n = true,
    className: i
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(o.badgeContainer, i),
    children: [n && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("span", {
        className: l()(o.star, o.starLeft),
        children: (0, r.jsx)(s.Z, {
          width: "10",
          height: "10"
        })
      }), (0, r.jsx)("span", {
        className: l()(o.star, o.starRight),
        children: (0, r.jsx)(s.Z, {
          width: "14",
          height: "14"
        })
      })]
    }), (0, r.jsx)(a.Text, {
      variant: "eyebrow",
      className: o.newBadge,
      children: t
    })]
  })
}