/** Chunk was on 98806 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var a = n(481060),
  i = n(114487),
  l = n(686546),
  o = n(686369),
  c = n(388032),
  s = n(22858);

function d(e) {
  let {
    guildId: t,
    name: n
  } = e, d = (0, a.dQu)(a.TVs.colors.BG_BASE_TERTIARY), u = (0, o.d)(d.hex());
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)("div", {
      className: s.banner,
      style: {
        background: u
      }
    }), (0, r.jsx)("div", {
      className: s.avatarContainer,
      children: (0, r.jsx)(l.ZP, {
        mask: l.QS.CLAN_ICON,
        width: 70,
        height: 70,
        children: (0, r.jsx)("div", {
          className: s.avatarWrapper,
          children: (0, r.jsx)(i.b, {
            guildId: t,
            guildName: null != n ? n : c.NW.string(c.t.DmIUGB),
            guildIcon: null,
            iconSize: 64
          })
        })
      })
    }), (0, r.jsx)("div", {
      className: s.header,
      children: (0, r.jsx)(a.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        children: null != n ? n : c.NW.string(c.t.DmIUGB)
      })
    }), (0, r.jsx)("div", {
      className: s.body,
      children: (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: c.NW.string(c.t["8mfCqa"])
      })
    })]
  })
}