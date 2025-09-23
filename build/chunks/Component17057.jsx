/** Chunk was on web.js **/
/** chunk id: 17057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk265299 = require("./265299.jsx"),
  Chunk674455 = require("./674455.js"),
  Chunk985227 = require("./985227.js");
let l = function(e) {
  let {
    questId: t
  } = e;
  return (0, r.jsx)("div", {
    className: o.previewBackground,
    children: (0, r.jsxs)("div", {
      className: o.previewCard,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-md/semibold",
        children: "Resizable Embed Preview"
      }), (0, r.jsx)("div", {
        className: s.embedHelper,
        children: (0, r.jsx)("span", {
          className: s.helperText,
          children: "Drag the corner to resize (300px - 687px)"
        })
      }), (0, r.jsx)("div", {
        className: s.embedSections,
        children: (0, r.jsx)("div", {
          className: s.embedSection,
          children: (0, r.jsx)("div", {
            className: s.embedWrapper,
            children: (0, r.jsx)("div", {
              className: s.questsEmbed,
              children: (0, r.jsx)(a.Z, {
                questId: t
              })
            })
          })
        })
      })]
    })
  })
}