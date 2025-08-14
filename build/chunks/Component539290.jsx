/** Chunk was on 77512 **/
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
  Chunk672628 = require("./672628.js");
let p = {
  RIGHT: Chunk672628.horizontalStatusWarningBlock,
  BOTTOM: Chunk672628.verticalStatusWarningBlock
};

function b(e) {
  let {
    className: t,
    color: n = u.W.YELLOW,
    buttonPosition: i = p.BOTTOM,
    notice: b,
    ctaLabel: O,
    ctaLoading: m,
    ctaDisabled: h,
    ctaClassName: g,
    onClick: j
  } = e, y = (0, a.ZP)();
  return (0, r.jsx)(d.Z, {
    className: l()(f.statusWarningBlock, {
      [f.statusWarningBlockWithCta]: null != O
    }, t),
    color: (0, o.wj)(y) ? n : u.W.BROWN,
    children: (0, r.jsxs)("div", {
      className: i,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: b
      }), null != O && null != j && (0, r.jsx)("div", {
        className: f.ctaButtonContainer,
        children: (0, r.jsx)(s.zx, {
          className: l()(f.ctaButton, (0, o.wj)(y) ? true : f.ctaBlackButton, g),
          color: (0, o.wj)(y) ? s.zx.Colors.WHITE : s.zx.Colors.CUSTOM,
          size: s.Ph.MEDIUM,
          onClick: j,
          disabled: h,
          submitting: m,
          children: (0, r.jsx)(c.Text, {
            className: f.ctaButtonText,
            variant: "text-sm/medium",
            children: O
          })
        })
      })]
    })
  })
}