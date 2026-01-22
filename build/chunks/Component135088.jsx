/** Chunk was on 14704 **/
/** chunk id: 135088, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk582754 = require("./582754.js"),
  Chunk659746 = require("./659746.jsx"),
  Chunk896361 = require("./896361.jsx"),
  Chunk513497 = require("./513497.jsx"),
  Chunk40809 = require("./40809.jsx"),
  Chunk693346 = require("./693346.js");
let d = e => {
  let {
    type: t,
    theme: s
  } = e;
  return (0, l.jsx)("div", {
    className: c.Eq,
    children: (0, l.jsx)("div", {
      className: c.v9,
      children: ((e, t) => {
        let s = (0, n.Mw)(t) ? "white" : "black";
        switch (e) {
          case i.Or.PREMIUM_UPDATED:
            return (0, l.jsx)(C.A, {
              color: s,
              className: c.gd
            });
          case i.Or.PREMIUM_ACTIVATED:
            return (0, l.jsx)(a.A, {
              color: s,
              className: c.gd
            });
          case i.Or.PREMIUM_PAYMENT_STARTED:
            return (0, l.jsx)(r.A, {
              color: s,
              className: c.gd
            });
          default:
            return null
        }
      })(t, s)
    })
  })
}