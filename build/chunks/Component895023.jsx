/** Chunk was on web.js **/
/** chunk id: 895023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417098 = require("./417098.jsx");
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
        BRAND: i.Hv.BRAND,
        INFO: i.Hv.INFO,
        WARNING: i.Hv.WARNING,
        DANGER: i.Hv.DANGER,
        DEFAULT: i.Hv.DEFAULT,
        NEUTRAL: i.Hv.NEUTRAL
      };
      return (0, r.jsx)(i.$T, {
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