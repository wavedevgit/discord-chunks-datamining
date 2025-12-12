/** Chunk was on 9536 **/
/** chunk id: 620436, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var r, Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk402241 = require("./402241.js");

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