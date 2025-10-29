/** Chunk was on web.js **/
/** chunk id: 413872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk225779 = require("./225779.jsx");
let a = {
  title: "Notice",
  stories: [{
    id: "notice",
    name: "Notice",
    component: function(e) {
      let {
        color: t,
        message: n
      } = e, a = {
        BRAND: i.DM.BRAND,
        INFO: i.DM.INFO,
        WARNING: i.DM.WARNING,
        DANGER: i.DM.DANGER,
        DEFAULT: i.DM.DEFAULT,
        NEUTRAL: i.DM.NEUTRAL
      };
      return (0, r.jsx)(i.qX, {
        color: a[t],
        children: n
      })
    },
    controls: {
      color: {
        type: "select",
        label: "Color",
        defaultValue: "BRAND",
        options: [{
          label: "Brand",
          value: "BRAND"
        }, {
          label: "Info",
          value: "INFO"
        }, {
          label: "Warning",
          value: "WARNING"
        }, {
          label: "Danger",
          value: "DANGER"
        }, {
          label: "Default",
          value: "DEFAULT"
        }, {
          label: "Neutral",
          value: "NEUTRAL"
        }]
      },
      message: {
        type: "text",
        label: "Message",
        defaultValue: "This is a notice message with important information."
      }
    }
  }]
}