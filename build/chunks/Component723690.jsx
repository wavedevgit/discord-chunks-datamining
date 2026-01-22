/** Chunk was on 71853 **/
/** chunk id: 723690, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk966327 = require("./966327.jsx"),
  Chunk994500 = require("./994500.js");
require("./427262.js");
var Chunk156528 = require("./156528.js");
let h = function(e) {
  let {
    user: t,
    hovered: i,
    subText: s,
    showAccountIdentifier: h,
    status: p,
    isMobile: d,
    className: m
  } = e, A = (0, a.bG)([u.A], () => u.A.getNickname(t.id));
  return (0, n.jsxs)("div", {
    className: r()(c.eF, m, {
      [c.yo]: i
    }),
    children: [(0, n.jsx)(l.A, {
      user: t,
      className: c.my,
      animate: i,
      status: p,
      isMobile: d
    }), (0, n.jsxs)("div", {
      className: c.Qq,
      children: [(0, n.jsx)(o.A, {
        user: t,
        nick: A,
        botClass: c.AO,
        className: r()(c.xK, {
          [c.ID]: t.hasUniqueUsername()
        }),
        usernameClass: c.Xh,
        discriminatorClass: c.D2,
        showAccountIdentifier: h
      }), (0, n.jsx)("div", {
        className: c.W$,
        children: s
      })]
    })]
  })
}