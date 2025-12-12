/** Chunk was on web.js **/
/** chunk id: 465240, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js");
let a = {
  title: "TabBar",
  stories: [{
    id: "tabbar",
    name: "TabBar",
    component: function(e) {
      let {
        look: t,
        type: n,
        tabCount: a
      } = e, [s, l] = i.useState("tab1"), c = Array.from({
        length: a
      }, (e, t) => ({
        id: "tab".concat(t + 1),
        name: "Tab ".concat(t + 1)
      }));
      return (0, r.jsx)(o.njP, {
        type: n,
        look: t,
        selectedItem: s,
        onItemSelect: l,
        children: c.map(e => (0, r.jsx)(o.njP.Item, {
          id: e.id,
          children: e.name
        }, e.id))
      })
    },
    controls: {
      look: {
        type: "select",
        label: "Look",
        defaultValue: "brand",
        options: [{
          label: "Brand",
          value: "brand"
        }, {
          label: "Grey",
          value: "grey"
        }, {
          label: "Custom",
          value: "custom"
        }]
      },
      type: {
        type: "select",
        label: "Type",
        defaultValue: "top",
        options: [{
          label: "Top",
          value: "top"
        }, {
          label: "Side",
          value: "side"
        }, {
          label: "Top Pill",
          value: "top-pill"
        }]
      },
      tabCount: {
        type: "number",
        label: "Number of Tabs",
        defaultValue: 3
      }
    }
  }]
}