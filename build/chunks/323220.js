/** Chunk was on 30806 **/
n.d(t, {
  Z: () => d
});
var i = n(200651);
n(192379);
var r = n(481060),
  l = n(114487),
  o = n(686546),
  s = n(686369),
  a = n(388032),
  u = n(545495);

function d(e) {
  let {
    guildId: t,
    name: n
  } = e, d = (0, r.dQu)(r.TVs.colors.BG_BASE_TERTIARY), c = (0, s.d)(d.hex());
  return (0, i.jsxs)("div", {
    className: u.container,
    children: [(0, i.jsx)("div", {
      className: u.banner,
      style: {
        background: c
      }
    }), (0, i.jsx)("div", {
      className: u.avatarContainer,
      children: (0, i.jsx)(o.ZP, {
        mask: o.QS.CLAN_ICON,
        width: 70,
        height: 70,
        children: (0, i.jsx)("div", {
          className: u.avatarWrapper,
          children: (0, i.jsx)(l.b, {
            guildId: t,
            guildName: null != n ? n : a.NW.string(a.t.DmIUGB),
            guildIcon: null,
            iconSize: 64
          })
        })
      })
    }), (0, i.jsx)("div", {
      className: u.header,
      children: (0, i.jsx)(r.X6q, {
        variant: "heading-lg/medium",
        color: "header-primary",
        children: null != n ? n : a.NW.string(a.t.DmIUGB)
      })
    }), (0, i.jsx)("div", {
      className: u.body,
      children: (0, i.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: a.NW.string(a.t["8mfCqa"])
      })
    })]
  })
}