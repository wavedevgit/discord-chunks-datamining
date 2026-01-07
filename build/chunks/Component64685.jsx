/** Chunk was on 78431 **/
/** chunk id: 64685, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk847033 = require("./847033.jsx"),
  Chunk544978 = require("./544978.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk250210 = require("./250210.js");

function d() {
  let {
    selectedTab: e,
    isPhantomPreview: t,
    handlePreviewDismiss: r
  } = (0, l.m)();
  return t ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: a.previewNotice,
      children: [(0, n.jsx)(o.kZF, {
        size: "xs",
        color: "currentColor"
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: a.previewNoticeText,
        children: e === c.y.GUILD_PRODUCTS_PREVIEW ? s.intl.string(s.t.F4Z0nV) : s.intl.string(s.t.pzTFpM)
      })]
    }), (0, n.jsx)(i.zxk, {
      text: e === c.y.GUILD_PRODUCTS_PREVIEW ? s.intl.string(s.t.YF35pV) : s.intl.string(s.t.r30bky),
      size: "sm",
      variant: "secondary",
      onClick: r
    })]
  }) : null
}