/** Chunk was on 2155 **/
/** chunk id: 290294, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk881548 = require("./881548.jsx"),
  Chunk666813 = require("./666813.jsx"),
  Chunk686378 = require("./686378.jsx"),
  Chunk908627 = require("./908627.jsx"),
  Chunk769786 = require("./769786.jsx"),
  Chunk95173 = require("./95173.jsx"),
  Chunk316076 = require("./316076.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438536 = require("./438536.js");

function h() {
  return (0, l.jsxs)("div", {
    className: O.wx,
    children: [(0, l.jsxs)("div", {
      className: O.qd,
      children: [(0, l.jsx)(c.A, {
        width: 16,
        height: 16
      }), (0, l.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        children: I.intl.string(I.t.cf5lgh)
      })]
    }), (0, l.jsx)("div", {
      children: (0, l.jsx)(s.e7I, {
        shortcut: "esc",
        keyClassName: O.Wb,
        className: O.ti
      })
    })]
  })
}

function N(e) {
  let {
    userId: t,
    guildId: n,
    location: r,
    className: c,
    onNavigate: I
  } = e, N = (0, i.bG)([u.default], () => u.default.getUser(t), [t]), m = (0, i.bG)([o.Ay], () => o.Ay.getMember(n, t), [n, t]);
  return null == N || null == m ? null : (0, l.jsxs)("div", {
    className: a()(O.kL, c),
    children: [(0, l.jsx)(h, {}), (0, l.jsxs)(s.HOs, {
      className: O.WH,
      children: [(0, l.jsx)(A.A, {
        member: m
      }), (0, l.jsx)(T.A, {
        userId: t,
        guildId: n
      }), (0, l.jsx)(g.A, {
        member: m,
        onNavigate: I
      }), (0, l.jsx)(_.A, {
        member: m
      }), (0, l.jsx)(E.A, {
        member: m
      }), (0, l.jsx)(d.A, {
        member: m
      })]
    })]
  })
}