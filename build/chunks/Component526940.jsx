/** Chunk was on web.js **/
/** chunk id: 526940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921349 = require("./921349.jsx"),
  Chunk619307 = require("./619307.jsx");
let l = [{
    value: "red",
    label: "Red"
  }, {
    value: "green",
    label: "Green"
  }, {
    value: "blue",
    label: "Blue"
  }, {
    value: "yellow",
    label: "Yellow"
  }, {
    value: "purple",
    label: "Purple"
  }, {
    value: "orange",
    label: "Orange"
  }, {
    value: "pink",
    label: "Pink"
  }, {
    value: "brown",
    label: "Brown"
  }],
  c = {
    title: "Select",
    stories: [{
      id: "select",
      name: "Select",
      component: function(e) {
        let {
          isDisabled: t,
          isProcessing: n,
          placeholder: a,
          maxVisibleItems: o,
          clearable: c,
          closeOnSelect: u,
          popoutPosition: d,
          variant: f
        } = e, [_, p] = i.useState("blue");
        return (0, r.jsx)(s.q4, {
          variant: f,
          value: _,
          onChange: p,
          options: l,
          placeholder: a,
          isDisabled: t,
          isProcessing: n,
          maxVisibleItems: o,
          clearable: c,
          closeOnSelect: u,
          popoutPosition: d
        })
      },
      controls: {
        placeholder: {
          type: "text",
          label: "Placeholder",
          defaultValue: "Choose a color"
        },
        variant: {
          type: "select",
          label: "Variant",
          defaultValue: "filled",
          options: [{
            label: "Filled",
            value: "filled"
          }, {
            label: "Text Only",
            value: "text-only"
          }]
        },
        isDisabled: {
          type: "boolean",
          label: "Disabled",
          defaultValue: false
        },
        isProcessing: {
          type: "boolean",
          label: "Processing",
          defaultValue: false
        },
        clearable: {
          type: "boolean",
          label: "Clearable",
          defaultValue: true
        },
        closeOnSelect: {
          type: "boolean",
          label: "Close On Select",
          defaultValue: true
        },
        maxVisibleItems: {
          type: "number",
          label: "Max Visible Items",
          defaultValue: 5
        },
        popoutPosition: {
          type: "select",
          label: "Popout Position",
          defaultValue: "bottom",
          options: [{
            label: "Bottom",
            value: "bottom"
          }, {
            label: "Top",
            value: "top"
          }, {
            label: "Center",
            value: "center"
          }, {
            label: "Left",
            value: "left"
          }, {
            label: "Right",
            value: "right"
          }, {
            label: "Window Center",
            value: "window_center"
          }]
        }
      }
    }, {
      id: "searchable-select",
      name: "Searchable Select",
      component: function(e) {
        let {
          placeholder: t,
          isDisabled: n,
          isProcessing: s,
          clearable: c,
          closeOnSelect: u,
          clearQueryOnSelect: d,
          filter: f
        } = e, [_, p] = i.useState("blue"), [h, m] = i.useState(["blue"]);
        return (0, r.jsxs)(a.Kqy, {
          gap: 24,
          children: [(0, r.jsx)(o.V, {
            value: _,
            onChange: p,
            options: l,
            placeholder: t,
            isDisabled: n,
            isProcessing: s,
            clearable: c,
            clearQueryOnSelect: d,
            filter: f
          }), (0, r.jsx)(o.V, {
            multi: true,
            value: h,
            onChange: m,
            options: l,
            placeholder: t,
            isDisabled: n,
            isProcessing: s,
            clearable: c,
            closeOnSelect: u,
            clearQueryOnSelect: d,
            filter: f
          })]
        })
      },
      controls: {
        placeholder: {
          type: "text",
          label: "Placeholder",
          defaultValue: "Search for a color"
        },
        isDisabled: {
          type: "boolean",
          label: "Disabled",
          defaultValue: false
        },
        isProcessing: {
          type: "boolean",
          label: "Processing",
          defaultValue: false
        },
        clearable: {
          type: "boolean",
          label: "Clearable",
          defaultValue: true
        },
        closeOnSelect: {
          type: "boolean",
          label: "Close On Select",
          defaultValue: true
        },
        clearQueryOnSelect: {
          type: "boolean",
          label: "Clear Query On Select",
          defaultValue: false
        },
        filter: {
          type: "boolean",
          label: "Filter",
          defaultValue: true
        }
      }
    }]
  }