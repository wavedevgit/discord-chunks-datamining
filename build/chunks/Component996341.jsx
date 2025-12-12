/** Chunk was on web.js **/
/** chunk id: 996341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk525605 = require("./525605.js");
let a = {
  title: "HelpMessage",
  stories: [{
    name: "HelpMessage",
    id: "help-message",
    component: function(e) {
      let {
        text: t
      } = e;
      return (0, r.jsx)(i.Kqy, {
        gap: 16,
        children: Object.values(o.Q).map(e => (0, r.jsx)(i.gNt, {
          label: e,
          children: (0, r.jsx)(o.W, {
            messageType: e,
            children: t
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