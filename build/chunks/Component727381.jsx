/** Chunk was on 1355 **/
/** chunk id: 727381, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk87819 = require("./87819.js");

function N() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk87819.header,
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk87819.headerTitle,
      children: [(0, Chunk255367.jsx)(Chunk777288.Z, {
        width: 16,
        height: 16
      }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk388032.t.cf5lgo)
      })]
    }), (0, Chunk255367.jsx)("div", {
      children: (0, Chunk255367.jsx)(Chunk481060.M2$, {
        shortcut: "esc",
        keyClassName: Chunk87819.keyComboInner,
        className: Chunk87819.keyComboContainer
      })
    })]
  })
}

function h(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: c,
    onNavigate: I
  } = e, h = (0, s.e7)([u.default], () => u.default.getUser(t), [t]), f = (0, s.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
  return null == h || null == f ? null : (0, r.jsxs)("div", {
    className: i()(g.container, c),
    children: [(0, r.jsx)(N, {}), (0, r.jsxs)(a.Ttm, {
      className: g.innerContainer,
      children: [(0, r.jsx)(T.Z, {
        member: f
      }), (0, r.jsx)(m.Z, {
        userId: t,
        guildId: n
      }), (0, r.jsx)(A.Z, {
        member: f,
        onNavigate: I
      }), (0, r.jsx)(d.Z, {
        member: f
      }), (0, r.jsx)(E.Z, {
        member: f
      }), (0, r.jsx)(_.Z, {
        member: f
      })]
    })]
  })
}