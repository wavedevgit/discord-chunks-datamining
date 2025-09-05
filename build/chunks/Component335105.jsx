/** Chunk was on 84992 **/
/** chunk id: 335105, original params: t,e,n (module,exports,require) **/
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
  Chunk958318 = require("./958318.js");
let d = t => {
  let {
    type: e,
    theme: n
  } = t;
  return (0, l.jsx)("div", {
    className: c.gradientOuterBorder,
    children: (0, l.jsx)("div", {
      className: c.gradientInnerBorder,
      children: ((t, e) => {
        let n = (0, i.wj)(e) ? "white" : "black";
        switch (t) {
          case s.Yk.PREMIUM_UPDATED:
            return (0, l.jsx)(C.Z, {
              color: n,
              className: c.svgCopy
            });
          case s.Yk.PREMIUM_ACTIVATED:
            return (0, l.jsx)(a.Z, {
              color: n,
              className: c.svgCopy
            });
          case s.Yk.PREMIUM_PAYMENT_STARTED:
            return (0, l.jsx)(r.Z, {
              color: n,
              className: c.svgCopy
            });
          default:
            return null
        }
      })(e, n)
    })
  })
}