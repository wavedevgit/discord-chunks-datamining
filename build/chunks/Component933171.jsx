/** Chunk was on 28636 **/
/** chunk id: 933171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function x(e) {
  let {
    guild: t,
    className: n,
    onClick: l
  } = e, x = (0, s.Ay)(), v = (0, h.dangerouslyConstructGuildRecordFromUntypedObject)({
    name: t.name,
    icon: t.icon
  }), j = p.Ay.getGuildDiscoverySplashURL({
    id: t.id,
    splash: t.discovery_splash,
    size: 192 * (0, u.mZ)()
  }), A = null != j ? j : function(e) {
    switch (e) {
      case m.NJ8.DARK:
        return b;
      case m.NJ8.LIGHT:
        return f
    }
  }(x), y = p.Ay.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 50
  });
  return (0, r.jsxs)(a.DUT, {
    className: i()(_.Nr, n),
    onClick: l,
    "aria-label": g.intl.string(g.t.RB4L2x),
    children: [(0, r.jsxs)("div", {
      className: _.MY,
      children: [(0, r.jsx)("img", {
        src: A,
        alt: "",
        className: _.j0
      }), (0, r.jsx)("div", {
        className: _.$f,
        children: (0, r.jsx)(o.Ay, {
          mask: o.Ay.Masks.AVATAR_DEFAULT,
          width: 58,
          height: 58,
          children: (0, r.jsx)("div", {
            className: _.SA,
            children: (0, r.jsx)(c.A, {
              className: _.__invalid_icon,
              iconSrc: y,
              guild: v,
              size: c.A.Sizes.LARGE
            })
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: _.RN,
      children: [(0, r.jsxs)("div", {
        className: _.Y_,
        children: [(0, r.jsx)(d.A, {
          className: _.n2,
          guild: t,
          tooltipColor: a.STz.Colors.PRIMARY
        }), (0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          className: _.J5,
          children: t.name
        })]
      }), (0, r.jsx)(a.Text, {
        className: _.eF,
        variant: "text-sm/normal",
        color: "text-default",
        lineClamp: 2,
        children: t.description
      }), (0, r.jsx)("div", {
        className: _.Fj,
        children: (0, r.jsxs)("div", {
          className: _.FG,
          children: [(0, r.jsx)(a.nys, {
            color: "currentColor",
            className: _.NP,
            size: "xs"
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: g.intl.format(g.t.zRl6XR, {
              count: t.approximate_member_count
            })
          })]
        })
      })]
    })]
  })
}