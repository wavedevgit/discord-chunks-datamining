/** Chunk was on 84992 **/
/** chunk id: 335105, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk780384 = require("./780384.js"),
  Chunk741245 = require("./741245.jsx"),
  Chunk176332 = require("./176332.jsx"),
  Chunk210642 = require("./210642.jsx"),
  Chunk859218 = require("./859218.jsx"),
  Chunk298522 = require("./298522.js");
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
        let n = (0, s.wj)(e) ? "white" : "black";
        switch (t) {
          case i.Yk.PREMIUM_UPDATED:
            return (0, l.jsx)(C.Z, {
              color: n,
              className: c.svgCopy
            });
          case i.Yk.PREMIUM_ACTIVATED:
            return (0, l.jsx)(a.Z, {
              color: n,
              className: c.svgCopy
            });
          case i.Yk.PREMIUM_PAYMENT_STARTED:
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