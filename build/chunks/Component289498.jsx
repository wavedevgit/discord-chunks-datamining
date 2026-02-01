/** Chunk was on 9207 **/
/** chunk id: 289498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk681819 = require("./681819.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk277816 = require("./277816.js");
let A = e => {
  let {
    disabled: t = false,
    type: n,
    className: i,
    innerClassName: A,
    onConnect: f
  } = e, b = (0, c.Ay)(), h = d.A.get((0, u.ML)(n));
  return (0, r.jsx)(s.m, {
    text: h.name,
    children: (0, r.jsx)("div", {
      className: l()(g.iE, i),
      children: (0, r.jsx)(o.vN3, {
        children: (0, r.jsx)("button", {
          className: l()(g.vW, A),
          type: "button",
          disabled: t,
          style: {
            backgroundImage: "url('".concat((0, a.Mw)(b) ? h.icon.darkSVG : h.icon.lightSVG, "')")
          },
          onClick: null != f ? f : () => {
            let e;
            return e = d.A.get(n), void((0, _.A)({
              platformType: e.type,
              location: "Friends List"
            }), p.default.track(m.HAw.ACCOUNT_LINK_STEP, {
              previous_step: "desktop connections",
              current_step: "desktop oauth",
              platform_type: e.type
            }))
          },
          "aria-label": h.name
        })
      })
    })
  })
}