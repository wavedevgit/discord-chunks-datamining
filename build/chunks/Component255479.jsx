/** Chunk was on web.js **/
/** chunk id: 255479, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js");
let s = {
  title: "TabBar",
  stories: [{
    id: "tabbar",
    name: "TabBar",
    component: function(e) {
      let {
        look: t,
        type: n,
        tabCount: s
      } = e, [o, l] = i.useState("tab1"), c = Array.from({
        length: s
      }, (e, t) => ({
        id: "tab".concat(t + 1),
        name: "Tab ".concat(t + 1)
      }));
      return (0, r.jsx)(a.VQ0, {
        type: n,
        look: t,
        selectedItem: o,
        onItemSelect: l,
        children: c.map(e => (0, r.jsx)(a.VQ0.Item, {
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