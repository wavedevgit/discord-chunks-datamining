/** Chunk was on web.js **/
/** chunk id: 261439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk67098 = require("./67098.js");
let o = {
  title: "HelpMessage",
  stories: [{
    name: "HelpMessage",
    id: "help-message",
    component: function(e) {
      let {
        text: t
      } = e;
      return (0, r.jsx)(i.BJc, {
        gap: 16,
        children: Object.values(a.Y).map(e => (0, r.jsx)(i.D0$, {
          label: e,
          children: (0, r.jsx)(a.p, {
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