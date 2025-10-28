/** Chunk was on 66548 **/
/** chunk id: 277995, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  u: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk67979 = require("./67979.jsx"),
  Chunk921349 = require("./921349.jsx"),
  Chunk619307 = require("./619307.jsx"),
  Chunk463208 = require("./463208.jsx"),
  Chunk397943 = require("./397943.jsx"),
  Chunk481060 = require("./481060.js");
let c = [{
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
  b = {
    title: "VoidInputs",
    stories: [{
      name: "VoidInputs",
      id: "void-inputs",
      component: function(e) {
        let {
          disabled: l,
          placeholder: t
        } = e, [b, p] = n.useState(true), [y, m] = n.useState(true), [f, v] = n.useState(true);
        return (0, a.jsxs)(d.Kqy, {
          gap: 8,
          children: [(0, a.jsx)(r.q4, {
            value: b,
            onChange: p,
            options: c,
            placeholder: t,
            isDisabled: l
          }), (0, a.jsx)(s.o, {
            placeholder: t,
            disabled: l
          }), (0, a.jsx)(i.V, {
            value: b,
            onChange: p,
            options: c,
            placeholder: t,
            isDisabled: l
          }), (0, a.jsx)(o.W, {
            onSelect: m,
            value: y,
            disabled: l
          }), (0, a.jsx)(u.M, {
            onChange: v,
            value: f,
            disabled: l
          })]
        })
      },
      controls: {
        disabled: {
          type: "boolean",
          label: "Disabled",
          defaultValue: false
        },
        placeholder: {
          type: "text",
          label: "Placeholder",
          defaultValue: "Placeholder"
        }
      }
    }]
  }