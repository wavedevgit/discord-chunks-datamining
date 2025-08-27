/** Chunk was on web.js **/
/** chunk id: 539290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => _,
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk696936 = require("./696936.jsx"),
  Chunk903773 = require("./903773.jsx"),
  Chunk672628 = require("./672628.js");
let _ = {
  RIGHT: Chunk672628.horizontalStatusWarningBlock,
  BOTTOM: Chunk672628.verticalStatusWarningBlock
};

function p(e) {
  let {
    className: t,
    color: n = u.W.YELLOW,
    buttonPosition: i = _.BOTTOM,
    notice: p,
    ctaLabel: h,
    ctaLoading: m,
    ctaDisabled: g,
    ctaClassName: E,
    onClick: b
  } = e, y = (0, c.ZP)();
  return (0, r.jsx)(d.Z, {
    className: a()(f.statusWarningBlock, {
      [f.statusWarningBlockWithCta]: null != h
    }, t),
    color: (0, o.wj)(y) ? n : u.W.BROWN,
    children: (0, r.jsxs)("div", {
      className: i,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: p
      }), null != h && null != b && (0, r.jsx)("div", {
        className: f.ctaButtonContainer,
        children: (0, r.jsx)(s.zx, {
          className: a()(f.ctaButton, (0, o.wj)(y) ? true : f.ctaBlackButton, E),
          color: (0, o.wj)(y) ? s.zx.Colors.WHITE : s.zx.Colors.CUSTOM,
          size: s.Ph.MEDIUM,
          onClick: b,
          disabled: g,
          submitting: m,
          children: (0, r.jsx)(l.Text, {
            className: f.ctaButtonText,
            variant: "text-sm/medium",
            children: h
          })
        })
      })]
    })
  })
}