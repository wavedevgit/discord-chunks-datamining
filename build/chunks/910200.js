/** Chunk was on 84335 **/
n.d(t, {
  Z: () => g
}), n(266796);
var r = n(200651);
n(192379);
var l = n(120356),
  i = n.n(l),
  a = n(692547),
  o = n(481060),
  c = n(220082),
  s = n(114487),
  u = n(686546),
  d = n(813197),
  m = n(768581),
  v = n(15210),
  f = n(464647),
  j = n(43542),
  x = n(723776),
  b = n(686369),
  h = n(22858);

function I(e) {
  let {
    profile: t
  } = e, n = function(e, t) {
    let n = m.ZP.getGuildIconURL({
        id: e.id,
        icon: e.icon,
        size: 64
      }),
      r = (0, c.ZP)(n, t);
    return null != e.brandColorPrimary ? e.brandColorPrimary : r
  }(t, (0, o.dQu)(a.Z.colors.BG_BASE_TERTIARY).hex()), l = (0, b.d)(n, t);
  return (0, r.jsx)("div", {
    className: h.banner,
    style: {
      background: l
    }
  })
}

function p(e) {
  let {
    profile: t,
    onIconChange: n
  } = e;
  return null == n ? (0, r.jsx)("div", {
    className: h.avatarContainer,
    children: (0, r.jsx)(u.ZP, {
      mask: u.QS.CLAN_ICON,
      width: 70,
      height: 70,
      children: (0, r.jsx)("div", {
        className: h.avatarWrapper,
        children: (0, r.jsx)(s.b, {
          guildId: t.id,
          guildName: t.name,
          guildIcon: t.icon,
          iconSize: 64
        })
      })
    })
  }) : (0, r.jsx)("div", {
    className: h.avatarContainer,
    children: (0, r.jsx)(o.tEY, {
      within: !0,
      children: (0, r.jsx)(u.ZP, {
        mask: u.QS.CLAN_ICON,
        width: 70,
        height: 70,
        children: (0, r.jsxs)("div", {
          className: i()(h.avatarWrapper, h.clickable),
          children: [(0, r.jsx)(s.b, {
            guildId: t.id,
            guildName: t.name,
            guildIcon: t.icon,
            iconSize: 64
          }), (0, r.jsx)("div", {
            className: h.overlay
          }), (0, r.jsx)(o.vdY, {
            size: "custom",
            className: h.overlayIcon,
            width: 20,
            height: 20,
            color: "white"
          }), (0, r.jsx)(d.ZP, {
            tabIndex: 0,
            onChange: n
          })]
        })
      })
    })
  })
}

function g(e) {
  let {
    profile: t,
    onIconChange: n,
    className: l,
    disableCTA: a,
    CTAOverride: c
  } = e, s = null;
  return null != c ? s = c : a || (s = (0, r.jsx)(v.Z, {
    profile: t
  })), (0, r.jsxs)("div", {
    className: i()(h.container, l),
    children: [(0, r.jsx)(I, {
      profile: t
    }), (0, r.jsx)(p, {
      onIconChange: n,
      profile: t
    }), (0, r.jsx)(j.Z, {
      profile: t
    }), (0, r.jsxs)("div", {
      className: h.body,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: t.description
      }), (0, r.jsx)(f.Z, {
        profile: t
      }), (0, r.jsx)(x.F, {
        profile: t
      })]
    }), null != s && (0, r.jsx)("div", {
      className: h.buttonContainer,
      children: s
    })]
  })
}