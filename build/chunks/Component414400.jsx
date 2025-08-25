/** Chunk was on web.js **/
/** chunk id: 414400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk993365 = require("./993365.js"),
  Chunk178940 = require("./178940.jsx");
let s = {
  title: "Checkbox",
  stories: [{
    id: "checkbox",
    name: "Checkbox",
    component: function(e) {
      let {
        disabled: t,
        readOnly: n,
        type: s,
        label: l,
        size: c,
        align: u
      } = e, [d, f] = i.useState(false);
      return (0, r.jsx)(a.X, {
        value: d,
        onChange: (e, t) => f(t),
        disabled: t,
        readOnly: n,
        type: s,
        size: c,
        align: u,
        children: (0, r.jsx)(o.x, {
          variant: "text-md/medium",
          children: l
        })
      })
    },
    controls: {
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      readOnly: {
        type: "boolean",
        label: "Read Only",
        defaultValue: false
      },
      type: {
        type: "select",
        label: "Type",
        defaultValue: Chunk178940.X.Types.DEFAULT,
        options: [{
          label: "Default",
          value: Chunk178940.X.Types.DEFAULT
        }, {
          label: "Row",
          value: Chunk178940.X.Types.ROW
        }]
      },
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Accept terms and conditions"
      }
    }
  }]
}