/** Chunk was on 96914 **/
/** chunk id: 193157, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk309326 = require("./309326.js"),
  Chunk337322 = require("./337322.js"),
  Chunk260905 = require("./260905.js");

function d(e) {
  let {
    powerup: t
  } = e, r = (0, i.A)(t);
  return (0, n.jsx)("div", {
    className: l.I1,
    children: r.map(e => {
      let {
        Icon: t,
        className: r
      } = (0, c.a)(e.perkIcon, false);
      return (0, n.jsxs)("div", {
        className: l.Ab,
        children: [(0, n.jsx)(t, {
          color: "currentColor",
          className: a()(l.kf, r)
        }), (0, n.jsx)(s.EYj, {
          className: l.uL,
          color: "text-default",
          variant: "text-sm/medium",
          children: e.description
        })]
      }, "perk-".concat(e.perkIcon))
    })
  })
}