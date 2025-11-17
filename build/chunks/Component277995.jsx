/** Chunk was on web.js **/
/** chunk id: 277995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk67979 = require("./67979.jsx"),
  Chunk921349 = require("./921349.jsx"),
  Chunk619307 = require("./619307.jsx"),
  Chunk463208 = require("./463208.jsx"),
  Chunk397943 = require("./397943.jsx"),
  Chunk481060 = require("./481060.js");
let d = [{
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
  f = {
    title: "VoidInputs",
    stories: [{
      name: "VoidInputs",
      id: "void-inputs",
      component: function(e) {
        let {
          disabled: t,
          placeholder: n
        } = e, [f, _] = i.useState(true), [p, h] = i.useState(true), [m, g] = i.useState(true);
        return (0, r.jsxs)(u.Kqy, {
          gap: 8,
          children: [(0, r.jsx)(s.q4, {
            value: f,
            onChange: _,
            options: d,
            placeholder: n,
            isDisabled: t
          }), (0, r.jsx)(l.o, {
            placeholder: n,
            disabled: t
          }), (0, r.jsx)(o.V, {
            value: f,
            onChange: _,
            options: d,
            placeholder: n,
            isDisabled: t
          }), (0, r.jsx)(a.W, {
            onSelect: h,
            value: p,
            disabled: t
          }), (0, r.jsx)(c.M, {
            onChange: g,
            value: m,
            disabled: t
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