/** Chunk was on 12630 **/
/** chunk id: 727381, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function B() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk87819.header,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk87819.headerTitle,
      children: [(0, Chunk951288.jsx)(Chunk777288.Z, {
        width: 16,
        height: 16
      }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: Chunk388032.intl.string(Chunk388032.t.cf5lgo)
      })]
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)(Chunk481060.M2$, {
        shortcut: "esc",
        keyClassName: Chunk87819.keyComboInner,
        className: Chunk87819.keyComboContainer
      })
    })]
  })
}

function w(A) {
  let {
    userId: e,
    guildId: t,
    location: r,
    className: g,
    onNavigate: E
  } = A, w = (0, i.e7)([o.default], () => o.default.getUser(e), [e]), D = (0, i.e7)([a.ZP], () => a.ZP.getMember(t, e), [t, e]);
  return null == w || null == D ? null : (0, n.jsxs)("div", {
    className: l()(C.container, g),
    children: [(0, n.jsx)(B, {}), (0, n.jsxs)(s.Ttm, {
      className: C.innerContainer,
      children: [(0, n.jsx)(h.Z, {
        member: D
      }), (0, n.jsx)(d.Z, {
        userId: e,
        guildId: t
      }), (0, n.jsx)(u.Z, {
        member: D,
        onNavigate: E
      }), (0, n.jsx)(f.Z, {
        member: D
      }), (0, n.jsx)(c.Z, {
        member: D
      }), (0, n.jsx)(v.Z, {
        member: D
      })]
    })]
  })
}