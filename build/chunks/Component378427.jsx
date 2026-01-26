/** Chunk was on 39048 **/
/** chunk id: 378427, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var r, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk51719 = require("./51719.js");

function a(e) {
  let {
    type: t
  } = e;
  return (0, i.jsx)("div", {
    className: s.fF,
    children: (0, i.jsx)("div", {
      className: s.Cf,
      children: function(e) {
        switch (e) {
          case "arrow_down":
            return (0, i.jsx)(l.MFz, {
              size: "md",
              color: "currentColor",
              className: s.Gr
            });
          case "cross":
            return (0, i.jsx)(l.PGe, {
              size: "md",
              color: "currentColor",
              className: s.Gr
            });
          default:
            return null
        }
      }(t)
    })
  })
}
a.Type = ((r = {}).ARROW_DOWN = "arrow_down", r.CROSS = "cross", r)