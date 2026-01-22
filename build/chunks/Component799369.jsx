/** Chunk was on web.js **/
/** chunk id: 799369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => l
}), require("./388685.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk627542 = require("./627542.jsx");
let s = {
    id: "playground",
    children: [{
      block: "ContainedHero",
      bannerSrc: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
      backgroundColor: "red",
      children: [{
        block: "InteractiveHScroll",
        children: [{
          block: "Text",
          variant: "text-md/normal",
          content: "We've been trying to reach you about your car's extended warranty."
        }, {
          block: "Text",
          variant: "text-md/normal",
          content: "We've been trying to reach you about your car's extended warranty."
        }, {
          block: "Text",
          variant: "text-md/normal",
          content: "We've been trying to reach you about your car's extended warranty."
        }, {
          block: "Text",
          variant: "text-md/normal",
          content: "We've been trying to reach you about your car's extended warranty."
        }, {
          block: "Text",
          variant: "text-md/normal",
          content: "We've been trying to reach you about your car's extended warranty."
        }]
      }]
    }]
  },
  l = {
    title: "Template Builder",
    stories: [{
      name: "Template Builder",
      id: "template-builder",
      component: () => {
        let [e, t] = i.useState(JSON.stringify(s));
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(o.Z, {
            template: JSON.parse(e)
          }), (0, r.jsx)("hr", {}), (0, r.jsx)(a.Kx8, {
            value: e,
            onChange: e => t(e)
          })]
        })
      },
      controls: {}
    }]
  }