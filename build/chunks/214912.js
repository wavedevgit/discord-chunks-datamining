/** Chunk was on 37697 **/
n.d(t, {
  Z: () => b
}), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
  a = n.n(i),
  l = n(481060),
  o = n(410030),
  s = n(686546),
  c = n(565138),
  d = n(372769),
  u = n(134432),
  p = n(601964),
  m = n(768581),
  h = n(981631),
  g = n(388032),
  f = n(387680),
  _ = n(129512),
  v = n(330065);

function b(e) {
  let {
    guild: t,
    className: n,
    onClick: i
  } = e, b = (0, o.ZP)(), x = new p.ZP({
    name: t.name,
    icon: t.icon
  }), C = m.ZP.getGuildDiscoverySplashURL({
    id: t.id,
    splash: t.discovery_splash,
    size: 192 * (0, u.x_)()
  }), j = null != C ? C : function(e) {
    switch (e) {
      case h.BRd.DARK:
        return _;
      case h.BRd.LIGHT:
        return v
    }
  }(b), y = m.ZP.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 50
  });
  return (0, r.jsxs)(l.P3F, {
    className: a()(f.card, n),
    onClick: i,
    "aria-label": g.NW.string(g.t.RB4L29),
    children: [(0, r.jsxs)("div", {
      className: f.cardHeader,
      children: [(0, r.jsx)("img", {
        src: j,
        alt: "",
        className: f.splashImage
      }), (0, r.jsx)("div", {
        className: f.guildIcon,
        children: (0, r.jsx)(s.ZP, {
          mask: s.ZP.Masks.AVATAR_DEFAULT,
          width: 58,
          height: 58,
          children: (0, r.jsx)("div", {
            className: f.iconMask,
            children: (0, r.jsx)(c.Z, {
              className: f.__invalid_icon,
              iconSrc: y,
              guild: x,
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
          tooltipColor: l.ua7.Colors.PRIMARY
        }), (0, r.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          className: f.guildName,
          children: t.name
        })]
      }), (0, r.jsx)(l.Text, {
        className: f.guildDescription,
        variant: "text-sm/normal",
        color: "header-secondary",
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
            color: "header-secondary",
            children: g.NW.format(g.t.zRl6XV, {
              count: t.approximate_member_count
            })
          })]
        })
      })]
    })]
  })
}