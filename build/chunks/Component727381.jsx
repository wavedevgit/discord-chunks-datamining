/** Chunk was on 69937 **/
/** chunk id: 727381, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk777288 = require("./777288.jsx"),
  Chunk753042 = require("./753042.jsx"),
  Chunk787469 = require("./787469.jsx"),
  Chunk477718 = require("./477718.jsx"),
  Chunk791176 = require("./791176.jsx"),
  Chunk908474 = require("./908474.jsx"),
  Chunk467014 = require("./467014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk280533 = require("./280533.js");

function m() {
  return (0, r.jsxs)("div", {
    className: I.header,
    children: [(0, r.jsxs)("div", {
      className: I.headerTitle,
      children: [(0, r.jsx)(u.Z, {
        width: 16,
        height: 16
      }), (0, r.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        children: g.intl.string(g.t.cf5lgh)
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(s.M2$, {
        shortcut: "esc",
        keyClassName: I.keyComboInner,
        className: I.keyComboContainer
      })
    })]
  })
}

function h(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: u,
    onNavigate: g
  } = e, h = (0, a.e7)([c.default], () => c.default.getUser(t), [t]), N = (0, a.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
  return null == h || null == N ? null : (0, r.jsxs)("div", {
    className: i()(I.container, u),
    children: [(0, r.jsx)(m, {}), (0, r.jsxs)(s.Ttm, {
      className: I.innerContainer,
      children: [(0, r.jsx)(f.Z, {
        member: N
      }), (0, r.jsx)(T.Z, {
        userId: t,
        guildId: n
      }), (0, r.jsx)(A.Z, {
        member: N,
        onNavigate: g
      }), (0, r.jsx)(E.Z, {
        member: N
      }), (0, r.jsx)(d.Z, {
        member: N
      }), (0, r.jsx)(_.Z, {
        member: N
      })]
    })]
  })
}