/** Chunk was on 92504 **/
/** chunk id: 949507, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk135587 = require("./135587.js"),
  Chunk129512 = require("./129512.js"),
  Chunk330065 = require("./330065.js");

function v(e) {
  let {
    guild: t,
    className: n,
    onClick: r
  } = e, v = (0, s.ZP)(), C = (0, m.dangerouslyConstructGuildRecordFromUntypedObject)({
    name: t.name,
    icon: t.icon
  }), j = p.ZP.getGuildDiscoverySplashURL({
    id: t.id,
    splash: t.discovery_splash,
    size: 192 * (0, u.x_)()
  }), _ = null != j ? j : function(e) {
    switch (e) {
      case h.BRd.DARK:
        return g;
      case h.BRd.LIGHT:
        return x
    }
  }(v), y = p.ZP.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 50
  });
  return (0, a.jsxs)(l.P3F, {
    className: i()(b.card, n),
    onClick: r,
    "aria-label": f.intl.string(f.t.RB4L2x),
    children: [(0, a.jsxs)("div", {
      className: b.cardHeader,
      children: [(0, a.jsx)("img", {
        src: _,
        alt: "",
        className: b.splashImage
      }), (0, a.jsx)("div", {
        className: b.guildIcon,
        children: (0, a.jsx)(o.ZP, {
          mask: o.ZP.Masks.AVATAR_DEFAULT,
          width: 58,
          height: 58,
          children: (0, a.jsx)("div", {
            className: b.iconMask,
            children: (0, a.jsx)(c.Z, {
              className: b.__invalid_icon,
              iconSrc: y,
              guild: C,
              size: c.Z.Sizes.LARGE
            })
          })
        })
      })]
    }), (0, a.jsxs)("div", {
      className: b.cardDetails,
      children: [(0, a.jsxs)("div", {
        className: b.guildNameWrapper,
        children: [(0, a.jsx)(d.Z, {
          className: b.guildBadge,
          guild: t,
          tooltipColor: l.aML.Colors.PRIMARY
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          className: b.guildName,
          children: t.name
        })]
      }), (0, a.jsx)(l.Text, {
        className: b.guildDescription,
        variant: "text-sm/normal",
        color: "text-default",
        lineClamp: 2,
        children: t.description
      }), (0, a.jsx)("div", {
        className: b.memberInfo,
        children: (0, a.jsxs)("div", {
          className: b.memberCountWrapper,
          children: [(0, a.jsx)(l.tBG, {
            color: "currentColor",
            className: b.memberCountIcon,
            size: "xs"
          }), (0, a.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: f.intl.format(f.t.zRl6XR, {
              count: t.approximate_member_count
            })
          })]
        })
      })]
    })]
  })
}