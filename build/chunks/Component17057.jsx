/** Chunk was on web.js **/
/** chunk id: 17057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk265299 = require("./265299.jsx"),
  Chunk818923 = require("./818923.js"),
  Chunk142441 = require("./142441.js");
let u = function(e) {
  let {
    questId: t
  } = e;
  return (0, r.jsx)("div", {
    className: l.previewBackground,
    children: (0, r.jsxs)("div", {
      className: l.previewCard,
      style: {
        width: "100%"
      },
      children: [(0, r.jsx)(o.X6q, {
        className: c.sectionHeading,
        variant: "heading-md/semibold",
        children: "Embed Previews"
      }), (0, r.jsxs)("div", {
        className: c.embedSections,
        children: [(0, r.jsxs)("div", {
          className: c.embedSection,
          children: [(0, r.jsxs)(o.X6q, {
            className: c.sectionHeading,
            variant: "heading-sm/semibold",
            children: ["Desktop Embed", (0, r.jsx)("span", {
              className: c.sizeLabel,
              children: "(687px)"
            })]
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)("div", {
              className: a()(c.fixedEmbed, c.desktopEmbed),
              children: (0, r.jsx)(s.Z, {
                questId: t
              })
            })
          })]
        }), (0, r.jsxs)("div", {
          className: c.embedSection,
          children: [(0, r.jsxs)(o.X6q, {
            className: c.sectionHeading,
            variant: "heading-sm/semibold",
            children: ["Tablet Embed", (0, r.jsx)("span", {
              className: c.sizeLabel,
              children: "(450px)"
            })]
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)("div", {
              className: a()(c.fixedEmbed, c.tabletEmbed),
              children: (0, r.jsx)(s.Z, {
                questId: t
              })
            })
          })]
        }), (0, r.jsxs)("div", {
          className: c.embedSection,
          children: [(0, r.jsxs)(o.X6q, {
            className: c.sectionHeading,
            variant: "heading-sm/semibold",
            children: ["Mobile Embed", (0, r.jsx)("span", {
              className: c.sizeLabel,
              children: "(300px)"
            })]
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)("div", {
              className: a()(c.fixedEmbed, c.mobileEmbed),
              children: (0, r.jsx)(s.Z, {
                questId: t
              })
            })
          })]
        }), (0, r.jsxs)("div", {
          className: c.embedSection,
          children: [(0, r.jsx)(o.X6q, {
            variant: "heading-sm/semibold",
            children: "Resizable Embed"
          }), (0, r.jsx)("div", {
            className: c.embedHelper,
            children: (0, r.jsx)("span", {
              className: c.helperText,
              children: "Drag the corner to resize (300px - 687px)"
            })
          }), (0, r.jsx)("div", {
            className: c.embedWrapper,
            children: (0, r.jsx)("div", {
              className: c.questsEmbed,
              children: (0, r.jsx)(s.Z, {
                questId: t
              })
            })
          })]
        })]
      })]
    })
  })
}