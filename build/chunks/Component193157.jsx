/** Chunk was on 96914 **/
/** chunk id: 193157, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk309326 = require("./309326.js"),
  Chunk337322 = require("./337322.js"),
  Chunk260905 = require("./260905.js");

function d(e) {
  let {
    powerup: t
  } = e, r = (0, l.A)(t);
  return (0, a.jsx)("div", {
    className: i.I1,
    children: r.map(e => {
      let {
        Icon: t,
        className: r
      } = (0, o.a)(e.perkIcon, false);
      return (0, a.jsxs)("div", {
        className: i.Ab,
        children: [(0, a.jsx)(t, {
          color: "currentColor",
          className: s()(i.kf, r)
        }), (0, a.jsx)(c.EYj, {
          className: i.uL,
          color: "text-default",
          variant: "text-sm/medium",
          children: e.description
        })]
      }, "perk-".concat(e.perkIcon))
    })
  })
}