/** Chunk was on 384 **/
/** chunk id: 620436, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var r, Chunk54381 = require("./54381.js");
require("./473749.js");
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