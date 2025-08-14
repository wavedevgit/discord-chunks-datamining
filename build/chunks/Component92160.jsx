/** Chunk was on 40725 **/
/** chunk id: 92160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk289086 = require("./289086.js");

function d(e) {
  let {
    className: t,
    enabled: n,
    previewCTA: i,
    onPreview: d,
    onToggle: u,
    animateStatus: m,
    firstLine: g,
    secondLine: p,
    disabled: h
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(t, c.enableContainer),
    children: [n ? (0, r.jsx)(s.dz2, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(c.activeCircle, {
        [c.animate]: m
      })
    }) : (0, r.jsx)(s.vdY, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(c.editCircle, {
        [c.animate]: m
      })
    }), (0, r.jsxs)("div", {
      className: c.enableDescription,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: g
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: p
      })]
    }), (0, r.jsxs)("div", {
      className: c.buttonContainer,
      children: [null == d ? null : (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: c.previewButton,
        children: (0, r.jsx)(s.zxk, {
          variant: "secondary",
          size: "sm",
          text: null != i ? i : o.intl.string(o.t["5U0kLy"]),
          onClick: d,
          disabled: h
        })
      }), (0, r.jsx)(a.zx, {
        disabled: null == u || h,
        size: a.zx.Sizes.SMALL,
        color: n ? a.zx.Colors.RED : a.zx.Colors.BRAND,
        onClick: u,
        children: n ? o.intl.string(o.t.R9GHyc) : o.intl.string(o.t.JFfinp)
      })]
    })]
  })
}