/** Chunk was on web.js **/
/** chunk id: 216074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk265299 = require("./265299.jsx"),
  Chunk401666 = require("./401666.js");
let c = function(e) {
  let {
    questId: t
  } = e;
  return (0, r.jsxs)(o.Zbd, {
    className: l.embedCard,
    children: [(0, r.jsx)(o.X6q, {
      className: l.embedHeading,
      variant: "heading-lg/semibold",
      children: "Embed Previews"
    }), (0, r.jsxs)("div", {
      className: l.embedSection,
      children: [(0, r.jsxs)(o.X6q, {
        className: l.sectionHeading,
        variant: "heading-md/semibold",
        children: ["Desktop Embed", (0, r.jsx)("span", {
          className: l.sizeLabel,
          children: "(687px)"
        })]
      }), (0, r.jsx)("div", {
        className: l.fixedEmbedWrapper,
        children: (0, r.jsx)("div", {
          className: a()(l.fixedEmbed, l.desktopEmbed),
          children: (0, r.jsx)(s.Z, {
            questId: t
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: l.embedSection,
      children: [(0, r.jsxs)(o.X6q, {
        className: l.sectionHeading,
        variant: "heading-md/semibold",
        children: ["Tablet Embed", (0, r.jsx)("span", {
          className: l.sizeLabel,
          children: "(450px)"
        })]
      }), (0, r.jsx)("div", {
        className: l.fixedEmbedWrapper,
        children: (0, r.jsx)("div", {
          className: a()(l.fixedEmbed, l.tabletEmbed),
          children: (0, r.jsx)(s.Z, {
            questId: t
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: l.embedSection,
      children: [(0, r.jsxs)(o.X6q, {
        className: l.sectionHeading,
        variant: "heading-md/semibold",
        children: ["Mobile Embed", (0, r.jsx)("span", {
          className: l.sizeLabel,
          children: "(300px)"
        })]
      }), (0, r.jsx)("div", {
        className: l.fixedEmbedWrapper,
        children: (0, r.jsx)("div", {
          className: a()(l.fixedEmbed, l.mobileEmbed),
          children: (0, r.jsx)(s.Z, {
            questId: t
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: l.embedSection,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-md/semibold",
        children: "Resizable Embed"
      }), (0, r.jsx)("div", {
        className: l.embedHelper,
        children: (0, r.jsx)("span", {
          className: l.helperText,
          children: "Drag the corner to resize (300px - 687px)"
        })
      }), (0, r.jsx)("div", {
        className: l.embedWrapper,
        children: (0, r.jsx)("div", {
          className: l.questsEmbed,
          children: (0, r.jsx)(s.Z, {
            questId: t
          })
        })
      })]
    })]
  })
}