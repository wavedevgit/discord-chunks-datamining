/** Chunk was on 59256 **/
/** chunk id: 606876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk927160 = require("./927160.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk727565 = require("./727565.js");

function d() {
  let [e, t] = Chunk73800.useState("");
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk727565.container,
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk727565.demo,
      children: [(0, Chunk255367.jsxs)("div", {
        className: Chunk727565.previewCard,
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk727565.avatar,
          children: (0, Chunk255367.jsx)(Chunk481060.gw7, {
            size: "custom",
            width: 24,
            height: 24
          })
        }), (0, Chunk255367.jsxs)("div", {
          className: Chunk727565.previewCardMessage,
          children: [(0, Chunk255367.jsxs)("div", {
            className: Chunk727565.messageHeaderSkeleton,
            children: [(0, Chunk255367.jsx)("div", {
              className: Chunk727565.usernameSkeleton
            }), (0, Chunk255367.jsx)("div", {
              className: Chunk727565.timestampSkeleton
            })]
          }), (0, Chunk255367.jsxs)("div", {
            className: Chunk727565.previewCardUrl,
            children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
              variant: "text-sm/medium",
              color: "text-tertiary",
              className: Chunk727565.baseUrl,
              children: "".concat(Chunk203377.mf, "/")
            }), (0, Chunk255367.jsx)(Chunk481060.Text, {
              variant: "text-sm/medium",
              color: "text-link",
              className: Chunk727565.vanityCode,
              children: module
            })]
          }), (0, Chunk255367.jsxs)("div", {
            className: Chunk727565.messageEmbed,
            children: [(0, Chunk255367.jsx)("div", {
              className: Chunk727565.messageEmbedHeaderSkeleton
            }), (0, Chunk255367.jsxs)("div", {
              className: Chunk727565.messageEmbedContent,
              children: [(0, Chunk255367.jsx)("div", {
                className: Chunk727565.messageEmbedContentIconSkeleton
              }), (0, Chunk255367.jsxs)("div", {
                className: Chunk727565.messageEmbedContentLines,
                children: [(0, Chunk255367.jsx)("div", {
                  className: Chunk727565.messageEmbedContenPrimaryLineSkeleton
                }), (0, Chunk255367.jsx)("div", {
                  className: Chunk727565.messageEmbedContentSecondaryLineSkeleton
                })]
              }), (0, Chunk255367.jsx)("div", {
                className: Chunk727565.messageEmbedContentActionSkeleton
              })]
            })]
          })]
        })]
      }), (0, Chunk255367.jsx)(Chunk927160.Z, {
        autoFocus: true,
        value: module,
        onChange: exports,
        className: Chunk727565.vanityUrlInput
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "text-tertiary",
      className: Chunk727565.disclaimer,
      children: Chunk388032.intl.string(Chunk93841.default.u5iNb2)
    })]
  })
}