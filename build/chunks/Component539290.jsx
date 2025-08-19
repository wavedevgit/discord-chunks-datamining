/** Chunk was on 31930 **/
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
    color: n = u.W.YELLOW,
    buttonPosition: r = p.BOTTOM,
    notice: g,
    ctaLabel: f,
    ctaLoading: m,
    ctaDisabled: b,
    ctaClassName: v,
    onClick: C
  } = e, _ = (0, c.ZP)();
  return (0, i.jsx)(d.Z, {
    className: s()(h.statusWarningBlock, {
      [h.statusWarningBlockWithCta]: null != f
    }, t),
    color: (0, l.wj)(_) ? n : u.W.BROWN,
    children: (0, i.jsxs)("div", {
      className: r,
      children: [(0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: g
      }), null != f && null != C && (0, i.jsx)("div", {
        className: h.ctaButtonContainer,
        children: (0, i.jsx)(o.zx, {
          className: s()(h.ctaButton, (0, l.wj)(_) ? true : h.ctaBlackButton, v),
          color: (0, l.wj)(_) ? o.zx.Colors.WHITE : o.zx.Colors.CUSTOM,
          size: o.Ph.MEDIUM,
          onClick: C,
          disabled: b,
          submitting: m,
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