/** Chunk was on 66548 **/
/** chunk id: 465240, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js");
let i = {
  title: "TabBar",
  stories: [{
    id: "tabbar",
    name: "TabBar",
    component: function(e) {
      let {
        look: l,
        type: t,
        tabCount: i
      } = e, [r, s] = n.useState("tab1"), u = Array.from({
        length: i
      }, (e, l) => ({
        id: "tab".concat(l + 1),
        name: "Tab ".concat(l + 1)
      }));
      return (0, a.jsx)(o.njP, {
        type: t,
        look: l,
        selectedItem: r,
        onItemSelect: s,
        children: u.map(e => (0, a.jsx)(o.njP.Item, {
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