/** Chunk was on 84992 **/
/** chunk id: 335105, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk780384 = require("./780384.js"),
  Chunk741245 = require("./741245.jsx"),
  Chunk176332 = require("./176332.jsx"),
  Chunk210642 = require("./210642.jsx"),
  Chunk859218 = require("./859218.jsx"),
  Chunk298522 = require("./298522.js");
let d = e => {
  let {
    type: t,
    theme: n
  } = e;
  return (0, s.jsx)("div", {
    className: c.gradientOuterBorder,
    children: (0, s.jsx)("div", {
      className: c.gradientInnerBorder,
      children: ((e, t) => {
        let n = (0, l.wj)(t) ? "white" : "black";
        switch (e) {
          case i.Yk.PREMIUM_UPDATED:
            return (0, s.jsx)(C.Z, {
              color: n,
              className: c.svgCopy
            });
          case i.Yk.PREMIUM_ACTIVATED:
            return (0, s.jsx)(a.Z, {
              color: n,
              className: c.svgCopy
            });
          case i.Yk.PREMIUM_PAYMENT_STARTED:
            return (0, s.jsx)(r.Z, {
              color: n,
              className: c.svgCopy
            });
          default:
            return null
        }
      })(t, n)
    })
  })
}