/** Chunk was on web.js **/
/** chunk id: 414400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk993365 = require("./993365.js"),
  Chunk755721 = require("./755721.js");
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
      return (0, r.jsx)(o.$q, {
        value: d,
        onChange: (e, t) => f(t),
        disabled: t,
        readOnly: n,
        type: s,
        size: c,
        align: u,
        children: (0, r.jsx)(a.x, {
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
        defaultValue: Chunk755721.M0.DEFAULT,
        options: [{
          label: "Default",
          value: Chunk755721.M0.DEFAULT
        }, {
          label: "Row",
          value: Chunk755721.M0.ROW
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