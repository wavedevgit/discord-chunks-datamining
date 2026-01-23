/** Chunk was on web.js **/
/** chunk id: 289498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
let m = e => {
  let {
    disabled: t = false,
    type: n,
    className: i,
    innerClassName: m,
    onConnect: g
  } = e, E = (0, c.Ay)();

  function y(e) {
    let t = u.A.get(e);
    (0, f.A)({
      platformType: t.type,
      location: "Friends List"
    }), p.default.track(_.HAw.ACCOUNT_LINK_STEP, {
      previous_step: "desktop connections",
      current_step: "desktop oauth",
      platform_type: t.type
    })
  }
  let b = u.A.get((0, d.ML)(n));
  return (0, r.jsx)(s.m, {
    text: b.name,
    children: (0, r.jsx)("div", {
      className: a()(h.iE, i),
      children: (0, r.jsx)(l.vN3, {
        children: (0, r.jsx)("button", {
          className: a()(h.vW, m),
          type: "button",
          disabled: t,
          style: {
            backgroundImage: "url('".concat((0, o.Mw)(E) ? b.icon.darkSVG : b.icon.lightSVG, "')")
          },
          onClick: null != g ? g : () => y(n),
          "aria-label": b.name
        })
      })
    })
  })
}