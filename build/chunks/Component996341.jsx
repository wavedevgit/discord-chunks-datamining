/** Chunk was on 66548 **/
/** chunk id: 996341, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  n: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk525605 = require("./525605.js");
let i = {
  title: "HelpMessage",
  stories: [{
    name: "HelpMessage",
    id: "help-message",
    component: function(e) {
      let {
        text: l
      } = e;
      return (0, a.jsx)(n.Kqy, {
        gap: 16,
        children: Object.values(o.Q).map(e => (0, a.jsx)(n.gNt, {
          label: e,
          children: (0, a.jsx)(o.W, {
            messageType: e,
            children: l
          }, e)
        }, e))
      })
    },
    controls: {
      text: {
        label: "Text",
        type: "text",
        defaultValue: "This is a help message"
      }
    }
  }]
}