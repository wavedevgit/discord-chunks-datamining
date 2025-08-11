/** Chunk was on 75708 **/
/** chunk id: 931547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk427894 = require("./427894.js");

function c(e) {
  let {
    message: t,
    error: n,
    onClick: r,
    submitting: c,
    className: d,
    ctaMessage: u
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(o.container, d),
    children: [(0, i.jsxs)("div", {
      className: o.textContainer,
      children: [(0, i.jsx)(l.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: o.warningIcon
      }), (0, i.jsx)(l.LZC, {
        size: 10,
        horizontal: true
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(l.LZC, {
          size: 1
        }), (0, i.jsx)(l.Text, {
          className: o.info,
          variant: "text-sm/normal",
          children: t
        }), null != n && (0, i.jsx)(l.Text, {
          className: s()(o.info, o.error),
          variant: "text-sm/normal",
          children: n
        })]
      })]
    }), (0, i.jsx)(l.LZC, {
      size: 16,
      horizontal: true
    }), (0, i.jsx)(a.zx, {
      className: o.undoButton,
      color: a.zx.Colors.LINK,
      look: a.zx.Looks.LINK,
      size: a.zx.Sizes.ICON,
      onClick: r,
      submitting: c,
      children: u
    })]
  })
}