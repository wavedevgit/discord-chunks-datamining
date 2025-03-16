/** Chunk was on 37697 **/
n.d(t, {
  Z: () => m
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  a = n(622535),
  l = n(481060),
  o = n(783097),
  s = n(66637),
  c = n(768581),
  d = n(956965),
  u = n(388032),
  p = n(168867);
let m = function(e) {
  var t, n, m;
  let {
    application: h,
    onSelectApplication: g,
    showCategory: _ = !1
  } = e, f = null === (t = h.categories) || void 0 === t ? void 0 : t[0], [b, v] = i.useState(!1), x = i.useCallback(e => {
    e && v(!0)
  }, []), C = (0, o.lf)(h), j = i.useCallback(() => {
    g(h.id)
  }, [g, h.id]), y = i.useMemo(() => b ? c.ZP.getApplicationIconURL({
    id: h.id,
    icon: h.icon,
    size: 48
  }) : void 0, [b, h]), I = _ && null != f;
  return (0, r.jsx)(a.$, {
    onChange: x,
    active: !b,
    children: (0, r.jsx)("div", {
      className: p.container,
      children: (0, r.jsxs)(s.Z, {
        className: p.card,
        onClick: j,
        onContextMenu: () => {},
        children: [(0, r.jsxs)("div", {
          className: p.header,
          children: [(0, r.jsx)("div", {
            style: {
              width: "100%",
              display: "block",
              aspectRatio: 16 / 9
            },
            children: b ? (0, r.jsx)(d.Z, {
              application: h,
              bannerType: "card",
              iconURL: y
            }) : null
          }), (0, r.jsx)("div", {
            className: p.avatarContainer,
            style: {
              height: 28
            },
            children: b ? (0, r.jsx)("img", {
              src: y,
              alt: "",
              className: p.avatar,
              height: 48,
              width: 48,
              style: {
                borderWidth: 4,
                marginLeft: 12
              }
            }) : null
          })]
        }), (0, r.jsxs)("div", {
          className: p.appDetails,
          children: [(0, r.jsx)("div", {
            className: p.titleContainer,
            children: (0, r.jsx)("div", {
              className: p.title,
              children: (0, r.jsx)(l.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                className: p.appName,
                children: h.name
              })
            })
          }), I || C ? (0, r.jsxs)("div", {
            className: p.infoContainer,
            children: [I ? (0, r.jsx)(l.Text, {
              className: p.appCategory,
              variant: "text-xs/medium",
              color: "text-normal",
              children: f.name
            }) : null, I && C ? (0, r.jsx)(l.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: "•"
            }) : null, C ? (0, r.jsx)(l.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: u.NW.string(u.t["/eVltr"])
            }) : null]
          }) : null, (0, r.jsx)(l.Text, {
            className: p.description,
            variant: "text-sm/medium",
            color: "header-secondary",
            lineClamp: I || C ? 2 : 3,
            children: null !== (m = null === (n = h.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== m ? m : h.description
          })]
        })]
      })
    })
  })
}