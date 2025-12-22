/** Chunk was on 15718 **/
/** chunk id: 727381, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
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

function g() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk280533.header,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk280533.headerTitle,
      children: [(0, Chunk54381.jsx)(Chunk777288.Z, {
        width: 16,
        height: 16
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk388032.t.cf5lgh)
      })]
    }), (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)(Chunk481060.M2$, {
        shortcut: "esc",
        keyClassName: Chunk280533.keyComboInner,
        className: Chunk280533.keyComboContainer
      })
    })]
  })
}

function N(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: c,
    onNavigate: m
  } = e, N = (0, a.e7)([u.default], () => u.default.getUser(t), [t]), h = (0, a.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
  return null == N || null == h ? null : (0, r.jsxs)("div", {
    className: i()(f.container, c),
    children: [(0, r.jsx)(g, {}), (0, r.jsxs)(s.Ttm, {
      className: f.innerContainer,
      children: [(0, r.jsx)(T.Z, {
        member: h
      }), (0, r.jsx)(I.Z, {
        userId: t,
        guildId: n
      }), (0, r.jsx)(A.Z, {
        member: h,
        onNavigate: m
      }), (0, r.jsx)(d.Z, {
        member: h
      }), (0, r.jsx)(E.Z, {
        member: h
      }), (0, r.jsx)(_.Z, {
        member: h
      })]
    })]
  })
}