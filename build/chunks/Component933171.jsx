/** Chunk was on 28636 **/
/** chunk id: 933171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk714991 = require("./714991.jsx"),
  Chunk776231 = require("./776231.js"),
  Chunk486020 = require("./486020.js"),
  Chunk860689 = require("./860689.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk906987 = require("./906987.js"),
  Chunk937495 = require("./937495.js"),
  Chunk517061 = require("./517061.js");

function v(e) {
  let {
    guild: t,
    className: n,
    onClick: a
  } = e, v = (0, s.Ay)(), j = (0, h.dangerouslyConstructGuildRecordFromUntypedObject)({
    name: t.name,
    icon: t.icon
  }), A = p.Ay.getGuildDiscoverySplashURL({
    id: t.id,
    splash: t.discovery_splash,
    size: 192 * (0, u.mZ)()
  }), _ = null != A ? A : function(e) {
    switch (e) {
      case m.NJ8.DARK:
        return g;
      case m.NJ8.LIGHT:
        return x
    }
  }(v), y = p.Ay.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 50
  });
  return (0, l.jsxs)(i.DUT, {
    className: r()(f.Nr, n),
    onClick: a,
    "aria-label": b.intl.string(b.t.RB4L2x),
    children: [(0, l.jsxs)("div", {
      className: f.MY,
      children: [(0, l.jsx)("img", {
        src: _,
        alt: "",
        className: f.j0
      }), (0, l.jsx)("div", {
        className: f.$f,
        children: (0, l.jsx)(c.Ay, {
          mask: c.Ay.Masks.AVATAR_DEFAULT,
          width: 58,
          height: 58,
          children: (0, l.jsx)("div", {
            className: f.SA,
            children: (0, l.jsx)(o.A, {
              className: f.__invalid_icon,
              iconSrc: y,
              guild: j,
              size: o.A.Sizes.LARGE
            })
          })
        })
      })]
    }), (0, l.jsxs)("div", {
      className: f.RN,
      children: [(0, l.jsxs)("div", {
        className: f.Y_,
        children: [(0, l.jsx)(d.A, {
          className: f.n2,
          guild: t,
          tooltipColor: i.STz.Colors.PRIMARY
        }), (0, l.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          className: f.J5,
          children: t.name
        })]
      }), (0, l.jsx)(i.Text, {
        className: f.eF,
        variant: "text-sm/normal",
        color: "text-default",
        lineClamp: 2,
        children: t.description
      }), (0, l.jsx)("div", {
        className: f.Fj,
        children: (0, l.jsxs)("div", {
          className: f.FG,
          children: [(0, l.jsx)(i.nys, {
            color: "currentColor",
            className: f.NP,
            size: "xs"
          }), (0, l.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: b.intl.format(b.t.zRl6XR, {
              count: t.approximate_member_count
            })
          })]
        })
      })]
    })]
  })
}