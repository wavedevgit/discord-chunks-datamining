/** Chunk was on 72762 **/
/** chunk id: 539290, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => p,
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk696936 = require("./696936.jsx"),
  Chunk903773 = require("./903773.jsx"),
  Chunk734344 = require("./734344.js");
let p = {
  RIGHT: Chunk734344.horizontalStatusWarningBlock,
  BOTTOM: Chunk734344.verticalStatusWarningBlock
};

function b(e) {
  let {
    className: t,
    color: n = u.W.YELLOW,
    buttonPosition: i = p.BOTTOM,
    notice: b,
    ctaLabel: O,
    ctaLoading: h,
    ctaDisabled: m,
    ctaClassName: g,
    onClick: j
  } = e, y = (0, c.ZP)();
  return (0, r.jsx)(d.Z, {
    className: l()(f.statusWarningBlock, {
      [f.statusWarningBlockWithCta]: null != O
    }, t),
    color: (0, s.wj)(y) ? n : u.W.BROWN,
    children: (0, r.jsxs)("div", {
      className: i,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: b
      }), null != O && null != j && (0, r.jsx)("div", {
        className: f.ctaButtonContainer,
        children: (0, r.jsx)(o.zx, {
          className: l()(f.ctaButton, (0, s.wj)(y) ? true : f.ctaBlackButton, g),
          color: (0, s.wj)(y) ? o.zx.Colors.WHITE : o.zx.Colors.CUSTOM,
          size: o.Ph.MEDIUM,
          onClick: j,
          disabled: m,
          submitting: h,
          children: (0, r.jsx)(a.Text, {
            className: f.ctaButtonText,
            variant: "text-sm/medium",
            children: O
          })
        })
      })]
    })
  })
}