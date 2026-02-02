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
    subText: n,
    showAccountIdentifier: h,
    status: p,
    isMobile: d,
    isVR: m,
    className: A
  } = e, y = (0, o.bG)([u.A], () => u.A.getNickname(t.id));
  return (0, s.jsxs)("div", {
    className: r()(c.eF, A, {
      [c.yo]: i
    }),
    children: [(0, s.jsx)(l.A, {
      user: t,
      className: c.my,
      animate: i,
      status: p,
      isMobile: d,
      isVR: m
    }), (0, s.jsxs)("div", {
      className: c.Qq,
      children: [(0, s.jsx)(a.A, {
        user: t,
        nick: y,
        botClass: c.AO,
        className: r()(c.xK, {
          [c.ID]: t.hasUniqueUsername()
        }),
        usernameClass: c.Xh,
        discriminatorClass: c.D2,
        showAccountIdentifier: h
      }), (0, s.jsx)("div", {
        className: c.W$,
        children: n
      })]
    })]
  })
}