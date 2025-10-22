/** Chunk was on 29679 **/
/** chunk id: 620436, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var r, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk878784 = require("./878784.js");

function s(e) {
  let {
    type: t
  } = e;
  return (0, i.jsx)("div", {
    className: a.dividerContainer,
    children: (0, i.jsx)("div", {
      className: a.dividerIconContainer,
      children: function(e) {
        switch (e) {
          case "arrow_down":
            return (0, i.jsx)(l.cQm, {
              size: "md",
              color: "currentColor",
              className: a.dividierIcon
            });
          case "cross":
            return (0, i.jsx)(l.Dio, {
              size: "md",
              color: "currentColor",
              className: a.dividierIcon
            });
          default:
            return null
        }
      }(t)
    })
  })
}
s.Type = ((r = {}).ARROW_DOWN = "arrow_down", r.CROSS = "cross", r)