/** Chunk was on web.js **/
/** chunk id: 539290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => f,
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk696936 = require("./696936.jsx"),
  Chunk903773 = require("./903773.jsx"),
  Chunk672628 = require("./672628.js");
let f = {
  RIGHT: Chunk672628.horizontalStatusWarningBlock,
  BOTTOM: Chunk672628.verticalStatusWarningBlock
};

function _(e) {
  let {
    className: t,
    color: n = c.W.YELLOW,
    buttonPosition: i = f.BOTTOM,
    notice: _,
    ctaLabel: p,
    ctaLoading: h,
    ctaDisabled: m,
    onClick: g
  } = e, E = (0, l.ZP)();
  return (0, r.jsx)(u.Z, {
    className: a()(d.statusWarningBlock, {
      [d.statusWarningBlockWithCta]: null != p
    }, t),
    color: (0, o.wj)(E) ? n : c.W.BROWN,
    children: (0, r.jsxs)("div", {
      className: i,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: _
      }), null != p && null != g && (0, r.jsx)("div", {
        className: d.ctaButtonContainer,
        children: (0, r.jsx)(s.zxk, {
          text: p,
          variant: "overlay-secondary",
          onClick: g,
          disabled: m,
          loading: h
        })
      })]
    })
  })
}