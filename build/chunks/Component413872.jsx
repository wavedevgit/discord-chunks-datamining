/** Chunk was on 66548 **/
/** chunk id: 413872, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  t: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk225779 = require("./225779.jsx");
let o = {
  title: "Notice",
  stories: [{
    id: "notice",
    name: "Notice",
    component: function(e) {
      let {
        color: l,
        message: t
      } = e, o = {
        BRAND: n.DM.BRAND,
        INFO: n.DM.INFO,
        WARNING: n.DM.WARNING,
        DANGER: n.DM.DANGER,
        DEFAULT: n.DM.DEFAULT,
        NEUTRAL: n.DM.NEUTRAL
      };
      return (0, a.jsx)(n.qX, {
        color: o[l],
        children: t
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