/** Chunk was on 69844 **/
/** chunk id: 949507, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    onClick: i
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
        return _;
      case h.BRd.LIGHT:
        return b
    }
  }(x), y = p.ZP.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 50
  });
  return (0, r.jsxs)(l.P3F, {
    className: a()(f.card, n),
    onClick: i,
    "aria-label": g.intl.string(g.t.RB4L2x),
    children: [(0, r.jsxs)("div", {
      className: f.cardHeader,
      children: [(0, r.jsx)("img", {
        src: j,
        alt: "",
        className: f.splashImage
      }), (0, r.jsx)("div", {
        className: f.guildIcon,
        children: (0, r.jsx)(o.ZP, {
          mask: o.ZP.Masks.AVATAR_DEFAULT,
          width: 58,
          height: 58,
          children: (0, r.jsx)("div", {
            className: f.iconMask,
            children: (0, r.jsx)(c.Z, {
              className: f.__invalid_icon,
              iconSrc: y,
              guild: v,
              size: c.Z.Sizes.LARGE
            })
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: f.cardDetails,
      children: [(0, r.jsxs)("div", {
        className: f.guildNameWrapper,
        children: [(0, r.jsx)(d.Z, {
          className: f.guildBadge,
          guild: t,
          tooltipColor: l.aML.Colors.PRIMARY
        }), (0, r.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          className: f.guildName,
          children: t.name
        })]
      }), (0, r.jsx)(l.Text, {
        className: f.guildDescription,
        variant: "text-sm/normal",
        color: "text-default",
        lineClamp: 2,
        children: t.description
      }), (0, r.jsx)("div", {
        className: f.memberInfo,
        children: (0, r.jsxs)("div", {
          className: f.memberCountWrapper,
          children: [(0, r.jsx)(l.tBG, {
            color: "currentColor",
            className: f.memberCountIcon,
            size: "xs"
          }), (0, r.jsx)(l.Text, {
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