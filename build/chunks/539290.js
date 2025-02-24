/** Chunk was on 40580 **/
"use strict";
r.d(t, {
  E: () => p,
  Z: () => f
});
var n = r(200651);
r(192379);
var s = r(120356),
  i = r.n(s),
  o = r(780384),
  l = r(481060),
  a = r(410030),
  c = r(696936),
  u = r(903773),
  d = r(7742);
let p = {
  RIGHT: d.horizontalStatusWarningBlock,
  BOTTOM: d.verticalStatusWarningBlock
};

function f(e) {
  let {
    className: t,
    color: r = c.W.YELLOW,
    buttonPosition: s = p.BOTTOM,
    notice: f,
    ctaLabel: b,
    ctaLoading: g,
    ctaDisabled: O,
    ctaClassName: h,
    onClick: m
  } = e, x = (0, a.ZP)();
  return (0, n.jsx)(u.Z, {
    className: i()(d.statusWarningBlock, {
      [d.statusWarningBlockWithCta]: null != b
    }, t),
    color: (0, o.wj)(x) ? r : c.W.BROWN,
    children: (0, n.jsxs)("div", {
      className: s,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: f
      }), null != b && null != m && (0, n.jsx)("div", {
        className: d.ctaButtonContainer,
        children: (0, n.jsx)(l.zxk, {
          className: i()(d.ctaButton, (0, o.wj)(x) ? void 0 : d.ctaBlackButton, h),
          color: (0, o.wj)(x) ? l.zxk.Colors.WHITE : l.zxk.Colors.CUSTOM,
          size: l.PhG.MEDIUM,
          onClick: m,
          disabled: O,
          submitting: g,
          children: (0, n.jsx)(l.Text, {
            className: d.ctaButtonText,
            variant: "text-sm/medium",
            children: b
          })
        })
      })]
    })
  })
}