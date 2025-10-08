/** Chunk was on 64982 **/
/** chunk id: 620436, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var r, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk211870 = require("./211870.js");

function a(e) {
  let {
    type: t
  } = e;
  return (0, i.jsx)("div", {
    className: s.dividerContainer,
    children: (0, i.jsx)("div", {
      className: s.dividerIconContainer,
      children: function(e) {
        switch (e) {
          case "arrow_down":
            return (0, i.jsx)(l.cQm, {
              size: "md",
              color: "currentColor",
              className: s.dividierIcon
            });
          case "cross":
            return (0, i.jsx)(l.Dio, {
              size: "md",
              color: "currentColor",
              className: s.dividierIcon
            });
          default:
            return null
        }
      }(t)
    })
  })
}
a.Type = ((r = {}).ARROW_DOWN = "arrow_down", r.CROSS = "cross", r)