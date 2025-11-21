/** Chunk was on web.js **/
/** chunk id: 461318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  De: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk186318 = require("./186318.jsx"),
  Chunk427730 = require("./427730.jsx"),
  Chunk938151 = require("./938151.jsx"),
  Chunk10326 = require("./10326.jsx"),
  Chunk388032 = require("./388032.jsx");
let c = {
    name: "Cancellation Flow",
    component: () => (0, Chunk54381.jsx)(Chunk186318.k, {}),
    id: "cancellation-flow",
    controls: {}
  },
  u = {
    name: "Expressive Progress",
    component: Chunk427730.Z,
    id: "expressive-progress",
    controls: {}
  },
  d = {
    title: "Nitro Components",
    stories: [c, u, {
      name: "Interactive H Scroll",
      component: Chunk938151.Z,
      id: "interactive-h-scroll",
      controls: {}
    }, {
      name: "Premium Tooltip",
      component: Chunk10326.Z,
      id: "premium-tooltip",
      controls: {
        title: {
          label: "Title",
          type: "text",
          defaultValue: Chunk388032.intl.string(Chunk388032.t.lG6a5x).toUpperCase()
        },
        body: {
          label: "Body",
          type: "text",
          defaultValue: "This is an example of a premium tooltip (poptip?) with customizable content."
        },
        showGraphic: {
          label: "Show Graphic",
          type: "boolean",
          defaultValue: true
        },
        showActions: {
          label: "Show Actions",
          type: "boolean",
          defaultValue: false
        },
        badgeId: {
          label: "Badge",
          type: "select",
          defaultValue: "gold",
          options: [{
            label: "Bronze (1 Month)",
            value: "bronze"
          }, {
            label: "Silver (3 Month)",
            value: "silver"
          }, {
            label: "Gold (6 Month)",
            value: "gold"
          }, {
            label: "Platinum (12 Month)",
            value: "platinum"
          }, {
            label: "Diamond (24 Month)",
            value: "diamond"
          }, {
            label: "Emerald (36 Month)",
            value: "emerald"
          }, {
            label: "Ruby (60 Month)",
            value: "ruby"
          }, {
            label: "Opal (72 Month)",
            value: "opal"
          }]
        },
        gradientColor: {
          label: "Gradient Color",
          type: "select",
          defaultValue: "gold",
          options: [{
            label: "Nitro Pink",
            value: "nitro-pink"
          }, {
            label: "Nitro Green",
            value: "nitro-green"
          }, {
            label: "Green",
            value: "green"
          }, {
            label: "Purple",
            value: "purple"
          }, {
            label: "Bronze (1 Month)",
            value: "bronze"
          }, {
            label: "Silver (3 Month)",
            value: "silver"
          }, {
            label: "Gold (6 Month)",
            value: "gold"
          }, {
            label: "Platinum (12 Month)",
            value: "platinum"
          }, {
            label: "Diamond (24 Month)",
            value: "diamond"
          }, {
            label: "Emerald (36 Month)",
            value: "emerald"
          }, {
            label: "Ruby (60 Month)",
            value: "ruby"
          }, {
            label: "Opal (72 Month)",
            value: "opal"
          }]
        },
        size: {
          label: "Size",
          type: "select",
          defaultValue: "lg",
          options: [{
            label: "Small",
            value: "sm"
          }, {
            label: "Medium",
            value: "md"
          }, {
            label: "Large",
            value: "lg"
          }, {
            label: "Video",
            value: "video"
          }]
        },
        showProgress: {
          label: "Show Progress",
          type: "boolean",
          defaultValue: true
        },
        progressCircleText: {
          label: "Progress Text",
          type: "text",
          defaultValue: "15"
        },
        progressCirclePercent: {
          label: "Progress Percent",
          type: "number",
          defaultValue: 50
        },
        progressCircleUrgency: {
          label: "Progress Urgency",
          type: "select",
          defaultValue: "warning",
          options: [{
            label: "Warning",
            value: "warning"
          }, {
            label: "Critical",
            value: "critical"
          }]
        },
        delay: {
          label: "Delay (ms)",
          type: "number",
          defaultValue: 300
        },
        estimatedTooltipHeight: {
          label: "Estimated Tooltip Height (px)",
          type: "number",
          defaultValue: 300
        }
      }
    }]
  }