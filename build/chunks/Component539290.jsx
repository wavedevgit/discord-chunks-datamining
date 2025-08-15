/** Chunk was on 81498 **/
/** chunk id: 539290, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => p,
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk696936 = require("./696936.jsx"),
  Chunk903773 = require("./903773.jsx"),
  Chunk672628 = require("./672628.js");
let p = {
  RIGHT: Chunk672628.horizontalStatusWarningBlock,
  BOTTOM: Chunk672628.verticalStatusWarningBlock
};

function g(e) {
  let {
    className: t,
    color: n = c.W.YELLOW,
    buttonPosition: r = p.BOTTOM,
    notice: g,
    ctaLabel: f,
    ctaLoading: v,
    ctaDisabled: m,
    ctaClassName: C,
    onClick: b
  } = e, y = (0, u.ZP)();
  return (0, i.jsx)(d.Z, {
    className: s()(h.statusWarningBlock, {
      [h.statusWarningBlockWithCta]: null != f
    }, t),
    color: (0, l.wj)(y) ? n : c.W.BROWN,
    children: (0, i.jsxs)("div", {
      className: r,
      children: [(0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: g
      }), null != f && null != b && (0, i.jsx)("div", {
        className: h.ctaButtonContainer,
        children: (0, i.jsx)(o.zx, {
          className: s()(h.ctaButton, (0, l.wj)(y) ? true : h.ctaBlackButton, C),
          color: (0, l.wj)(y) ? o.zx.Colors.WHITE : o.zx.Colors.CUSTOM,
          size: o.Ph.MEDIUM,
          onClick: b,
          disabled: m,
          submitting: v,
          children: (0, i.jsx)(a.Text, {
            className: h.ctaButtonText,
            variant: "text-sm/medium",
            children: f
          })
        })
      })]
    })
  })
}