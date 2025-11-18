/** Chunk was on 65778 **/
/** chunk id: 606876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk790359 = require("./790359.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk501669 = require("./501669.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk469551 = require("./469551.js");

function u() {
  let [e, t] = Chunk473749.useState("");
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk469551.container,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk469551.demo,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk469551.previewCard,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk469551.avatar,
          children: (0, Chunk54381.jsx)(Chunk481060.gw7, {
            size: "custom",
            width: 24,
            height: 24
          })
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk469551.previewCardMessage,
          children: [(0, Chunk54381.jsxs)("div", {
            className: Chunk469551.messageHeaderSkeleton,
            children: [(0, Chunk54381.jsx)("div", {
              className: Chunk469551.usernameSkeleton
            }), (0, Chunk54381.jsx)("div", {
              className: Chunk469551.timestampSkeleton
            })]
          }), (0, Chunk54381.jsxs)("div", {
            className: Chunk469551.previewCardUrl,
            children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-sm/medium",
              color: "text-tertiary",
              className: Chunk469551.baseUrl,
              children: "".concat(Chunk203377.mf, "/")
            }), (0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-sm/medium",
              color: "text-link",
              className: Chunk469551.vanityCode,
              children: module
            })]
          }), (0, Chunk54381.jsxs)("div", {
            className: Chunk469551.messageEmbed,
            children: [(0, Chunk54381.jsx)("div", {
              className: Chunk469551.messageEmbedHeaderSkeleton
            }), (0, Chunk54381.jsxs)("div", {
              className: Chunk469551.messageEmbedContent,
              children: [(0, Chunk54381.jsx)("div", {
                className: Chunk469551.messageEmbedContentIconSkeleton
              }), (0, Chunk54381.jsxs)("div", {
                className: Chunk469551.messageEmbedContentLines,
                children: [(0, Chunk54381.jsx)("div", {
                  className: Chunk469551.messageEmbedContenPrimaryLineSkeleton
                }), (0, Chunk54381.jsx)("div", {
                  className: Chunk469551.messageEmbedContentSecondaryLineSkeleton
                })]
              }), (0, Chunk54381.jsx)("div", {
                className: Chunk469551.messageEmbedContentActionSkeleton
              })]
            })]
          })]
        })]
      }), (0, Chunk54381.jsx)(Chunk790359.Z, {
        autoFocus: true,
        value: module,
        onChange: exports
      })]
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "text-tertiary",
      className: Chunk469551.disclaimer,
      children: Chunk388032.intl.string(Chunk501669.default.u5iNbz)
    })]
  })
}