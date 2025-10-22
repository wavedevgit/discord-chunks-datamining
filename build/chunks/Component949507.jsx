/** Chunk was on 69844 **/
/** chunk id: 949507, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk134432 = require("./134432.js"),
  Chunk768581 = require("./768581.js"),
  Chunk411198 = require("./411198.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70019 = require("./70019.js"),
  Chunk129512 = require("./129512.js"),
  Chunk330065 = require("./330065.js");

function x(e) {
  let {
    guild: t,
    className: n,
    onClick: a
  } = e, x = (0, s.ZP)(), v = (0, m.dangerouslyConstructGuildRecordFromUntypedObject)({
    name: t.name,
    icon: t.icon
  }), C = p.ZP.getGuildDiscoverySplashURL({
    id: t.id,
    splash: t.discovery_splash,
    size: 192 * (0, u.x_)()
  }), j = null != C ? C : function(e) {
    switch (e) {
      case h.BRd.DARK:
        return f;
      case h.BRd.LIGHT:
        return b
    }
  }(x), y = p.ZP.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 50
  });
  return (0, r.jsxs)(l.P3F, {
    className: i()(_.card, n),
    onClick: a,
    "aria-label": g.intl.string(g.t.RB4L2x),
    children: [(0, r.jsxs)("div", {
      className: _.cardHeader,
      children: [(0, r.jsx)("img", {
        src: j,
        alt: "",
        className: _.splashImage
      }), (0, r.jsx)("div", {
        className: _.guildIcon,
        children: (0, r.jsx)(o.ZP, {
          mask: o.ZP.Masks.AVATAR_DEFAULT,
          width: 58,
          height: 58,
          children: (0, r.jsx)("div", {
            className: _.iconMask,
            children: (0, r.jsx)(c.Z, {
              className: _.__invalid_icon,
              iconSrc: y,
              guild: v,
              size: c.Z.Sizes.LARGE
            })
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: _.cardDetails,
      children: [(0, r.jsxs)("div", {
        className: _.guildNameWrapper,
        children: [(0, r.jsx)(d.Z, {
          className: _.guildBadge,
          guild: t,
          tooltipColor: l.aML.Colors.PRIMARY
        }), (0, r.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          className: _.guildName,
          children: t.name
        })]
      }), (0, r.jsx)(l.Text, {
        className: _.guildDescription,
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 2,
        children: t.description
      }), (0, r.jsx)("div", {
        className: _.memberInfo,
        children: (0, r.jsxs)("div", {
          className: _.memberCountWrapper,
          children: [(0, r.jsx)(l.tBG, {
            color: "currentColor",
            className: _.memberCountIcon,
            size: "xs"
          }), (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: g.intl.format(g.t.zRl6XR, {
              count: t.approximate_member_count
            })
          })]
        })
      })]
    })]
  })
}