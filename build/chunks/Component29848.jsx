/** Chunk was on web.js **/
/** chunk id: 29848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk582306 = require("./582306.jsx"),
  Chunk292666 = require("./292666.jsx"),
  Chunk335310 = require("./335310.jsx"),
  Chunk444550 = require("./444550.jsx"),
  Chunk843282 = require("./843282.jsx"),
  Chunk397927 = require("./397927.js");
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
        } = e, [f, p] = i.useState(true), [_, h] = i.useState(true), [m, g] = i.useState(true);
        return (0, r.jsxs)(u.BJc, {
          gap: 8,
          children: [(0, r.jsx)(c.Te, {
            value: f,
            onChange: p,
            options: d,
            placeholder: n,
            isDisabled: t
          }), (0, r.jsx)(s.k, {
            placeholder: n,
            disabled: t
          }), (0, r.jsx)(l.p, {
            value: f,
            onChange: p,
            options: d,
            placeholder: n,
            isDisabled: t
          }), (0, r.jsx)(a.J, {
            onSelect: h,
            value: _,
            disabled: t
          }), (0, r.jsx)(o.c, {
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