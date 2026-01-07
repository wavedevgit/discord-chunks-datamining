/** Chunk was on 17185 **/
/** chunk id: 606876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk790359 = require("./790359.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617186 = require("./617186.js");

function u() {
  let [e, t] = a.useState("");
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsxs)("div", {
      className: d.demo,
      children: [(0, r.jsxs)("div", {
        className: d.previewCard,
        children: [(0, r.jsx)("div", {
          className: d.avatar,
          children: (0, r.jsx)(s.gw7, {
            size: "custom",
            width: 24,
            height: 24
          })
        }), (0, r.jsxs)("div", {
          className: d.previewCardMessage,
          children: [(0, r.jsxs)("div", {
            className: d.messageHeaderSkeleton,
            children: [(0, r.jsx)("div", {
              className: d.usernameSkeleton
            }), (0, r.jsx)("div", {
              className: d.timestampSkeleton
            })]
          }), (0, r.jsxs)("div", {
            className: d.previewCardUrl,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              className: d.baseUrl,
              children: "".concat(l.mf, "/")
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "text-link",
              className: d.vanityCode,
              children: e
            })]
          }), (0, r.jsxs)("div", {
            className: d.messageEmbed,
            children: [(0, r.jsx)("div", {
              className: d.messageEmbedHeaderSkeleton
            }), (0, r.jsxs)("div", {
              className: d.messageEmbedContent,
              children: [(0, r.jsx)("div", {
                className: d.messageEmbedContentIconSkeleton
              }), (0, r.jsxs)("div", {
                className: d.messageEmbedContentLines,
                children: [(0, r.jsx)("div", {
                  className: d.messageEmbedContenPrimaryLineSkeleton
                }), (0, r.jsx)("div", {
                  className: d.messageEmbedContentSecondaryLineSkeleton
                })]
              }), (0, r.jsx)("div", {
                className: d.messageEmbedContentActionSkeleton
              })]
            })]
          })]
        })]
      }), (0, r.jsx)(o.Z, {
        autoFocus: true,
        value: e,
        onChange: t
      })]
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: d.disclaimer,
      children: c.intl.string(i.default.u5iNbz)
    })]
  })
}