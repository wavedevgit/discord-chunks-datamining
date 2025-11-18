/** Chunk was on 78431 **/
/** chunk id: 957572, original params: e,t,r (module,exports,require) **/
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
  Chunk75675 = require("./75675.js");

function d() {
  let {
    selectedTab: e,
    isPhantomPreview: t,
    handlePreviewDismiss: r
  } = (0, Chunk847033.m)();
  return exports ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk75675.previewNotice,
      children: [(0, Chunk54381.jsx)(Chunk481060.kZF, {
        size: "xs",
        color: "currentColor"
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        className: Chunk75675.previewNoticeText,
        children: module === Chunk544978.y.GUILD_PRODUCTS_PREVIEW ? Chunk388032.intl.string(Chunk388032.t.F4Z0nV) : Chunk388032.intl.string(Chunk388032.t.pzTFpM)
      })]
    }), (0, Chunk54381.jsx)(Chunk159691.zxk, {
      text: module === Chunk544978.y.GUILD_PRODUCTS_PREVIEW ? Chunk388032.intl.string(Chunk388032.t.YF35pV) : Chunk388032.intl.string(Chunk388032.t.r30bky),
      size: "sm",
      variant: "secondary",
      onClick: require
    })]
  }) : null
}