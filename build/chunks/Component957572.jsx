/** Chunk was on 78431 **/
/** chunk id: 957572, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk847033 = require("./847033.jsx"),
  Chunk544978 = require("./544978.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356874 = require("./356874.js");

function d() {
  let {
    selectedTab: e,
    isPhantomPreview: t,
    handlePreviewDismiss: r
  } = (0, Chunk847033.m)();
  return exports ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk356874.previewNotice,
      children: [(0, Chunk255367.jsx)(Chunk481060.kZF, {
        size: "xs",
        color: "currentColor"
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        className: Chunk356874.previewNoticeText,
        children: module === Chunk544978.y.GUILD_PRODUCTS_PREVIEW ? Chunk388032.intl.string(Chunk388032.t.F4Z0nZ) : Chunk388032.intl.string(Chunk388032.t.pzTFpK)
      })]
    }), (0, Chunk255367.jsx)(Chunk755721.zx, {
      size: Chunk755721.zx.Sizes.MIN,
      color: Chunk755721.zx.Colors.PRIMARY,
      className: Chunk356874.removePreviewButton,
      onClick: require,
      children: module === Chunk544978.y.GUILD_PRODUCTS_PREVIEW ? Chunk388032.intl.string(Chunk388032.t.YF35pa) : Chunk388032.intl.string(Chunk388032.t.r30bk5)
    })]
  }) : null
}